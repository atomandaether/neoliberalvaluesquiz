(() => {
  const container = document.getElementById("results");
  const community = document.getElementById("community-section");
  const referenceSection = document.getElementById("reference-section");
  const params = new URLSearchParams(window.location.search);
  const scores = {};

  NVQ.axes.forEach((axis) => {
    const aScore = Math.max(0, Math.min(100, Number(params.get(axis.id) ?? 50)));
    const bScore = 100 - aScore;
    scores[axis.id] = aScore;

    const section = document.createElement("section");
    section.className = "result-axis";
    section.innerHTML = `
      <div class="axis-heading">
        <h2>${axis.name}</h2>
        <p>${axis.description}</p>
      </div>
      <div class="result-row">
        <div class="pole-badge" style="background:${axis.colorA}">${axis.a}</div>
        <div class="axis" aria-label="${axis.a} ${aScore} percent; ${axis.b} ${bScore} percent">
          <div class="bar left" style="width:${aScore}%;background:${axis.colorA}">
            <div class="text-wrapper">${aScore}%</div>
          </div>
          <div class="bar right" style="width:${bScore}%;background:${axis.colorB}">
            <div class="text-wrapper">${bScore}%</div>
          </div>
        </div>
        <div class="pole-badge" style="background:${axis.colorB}">${axis.b}</div>
      </div>
    `;
    container.appendChild(section);
  });

  function vectorDistance(centroid) {
    const values = NVQ.axes
      .filter(axis => Number.isFinite(centroid?.[axis.id]))
      .map(axis => scores[axis.id] - centroid[axis.id]);

    if (!values.length) return Infinity;
    return Math.sqrt(values.reduce((sum, d) => sum + d * d, 0) / values.length);
  }

  function rankByDistance(items) {
    return (items || [])
      .filter(item => item && item.centroid)
      .map(item => ({ ...item, distance: vectorDistance(item.centroid) }))
      .filter(item => Number.isFinite(item.distance))
      .sort((a, b) => a.distance - b.distance);
  }

  function renderCommunityDistribution() {
    const data = window.NVQ_DISTRIBUTION;

    if (!data?.enabled) {
      community.innerHTML = `
        <div class="distribution-panel calibration-placeholder">
          <h2>r/neoliberal distribution</h2>
          <p>The collection survey has not been calibrated yet. Once enabled, this section will show the subreddit median and middle range on each axis, observed respondent-group shares, and your nearest empirical group.</p>
        </div>
      `;
      return;
    }

    const validGroups = (data.groups || []).filter(group =>
      group && group.centroid && Number.isFinite(group.share)
    );

    const ranked = rankByDistance(validGroups);
    const closest = ranked[0];

    let html = `
      <div class="distribution-panel">
        <h2>r/neoliberal distribution</h2>
        <p>Calibration sample: <b>${data.sampleSize.toLocaleString()}</b> usable respondents${data.updatedAt ? ` · updated ${data.updatedAt}` : ""}.</p>
    `;

    if (closest) {
      const similarity = Math.max(0, Math.round(100 - closest.distance));
      html += `
        <div class="closest-group">
          <div class="group-kicker">Closest observed subreddit group</div>
          <div class="group-name">${closest.name}</div>
          <p>${closest.description || ""}</p>
          <p><b>${similarity}% centroid similarity</b> · group share ${Math.round(closest.share * 100)}%</p>
        </div>
      `;
    }

    const stats = data.axisStats || {};
    const statRows = NVQ.axes.filter(axis => stats[axis.id]);
    if (statRows.length) {
      html += '<h3>Your position versus the subreddit</h3><div class="axis-stat-list">';
      statRows.forEach(axis => {
        const s = stats[axis.id];
        html += `
          <div class="axis-stat-row">
            <div><b>${axis.name}</b><br><span>Your score: ${scores[axis.id]} · median: ${s.median} · middle 50%: ${s.p25}–${s.p75}</span></div>
            <div class="mini-range">
              <div class="mini-iqr" style="left:${s.p25}%;width:${Math.max(0, s.p75 - s.p25)}%"></div>
              <div class="mini-median" style="left:${s.median}%"></div>
              <div class="mini-you" style="left:${scores[axis.id]}%"></div>
            </div>
          </div>
        `;
      });
      html += '</div>';
    }

    if (validGroups.length) {
      html += '<h3>Observed respondent groups</h3><div class="group-share-list">';
      [...validGroups]
        .sort((a, b) => b.share - a.share)
        .forEach(group => {
          html += `
            <div class="group-share-row">
              <div class="group-share-label"><b>${group.name}</b><span>${Math.round(group.share * 100)}%${group.n ? ` · n=${group.n}` : ""}</span></div>
              <div class="group-share-track"><div class="group-share-fill" style="width:${Math.max(1, group.share * 100)}%"></div></div>
            </div>
          `;
        });
      html += '</div>';
    }

    html += '</div>';
    community.innerHTML = html;

    if (closest) {
      updateStoredResult({
        subredditGroup: {
          id: closest.id,
          name: closest.name,
          centroidDistance: Number(closest.distance.toFixed(2)),
          observedShare: closest.share
        },
        distributionVersion: data.version
      });
    }
  }

  function renderExternalReferences() {
    const data = window.NVQ_REFERENCES;

    if (!data?.enabled) {
      referenceSection.innerHTML = `
        <div class="distribution-panel calibration-placeholder">
          <h2>Political reference matches</h2>
          <p>Party and modern-country matching is not calibrated yet. This section will eventually show the closest coded political party across time and geography and the closest present-day country policy/institutional profile.</p>
        </div>
      `;
      return;
    }

    const parties = rankByDistance(data.parties);
    const countries = rankByDistance(data.countries);
    const party = parties[0];
    const country = countries[0];

    let html = '<div class="distribution-panel"><h2>Political reference matches</h2><div class="reference-grid">';

    if (party) {
      const years = party.startYear
        ? `${party.startYear}–${party.endYear ?? "present"}`
        : "";
      html += `
        <div class="reference-card">
          <div class="group-kicker">Closest party profile</div>
          <div class="group-name">${party.name}</div>
          <p><b>${party.country || ""}</b>${years ? ` · ${years}` : ""}</p>
          <p>${party.description || ""}</p>
        </div>
      `;
    }

    if (country) {
      html += `
        <div class="reference-card">
          <div class="group-kicker">Closest modern-country profile</div>
          <div class="group-name">${country.name}</div>
          <p>${country.year ? `Reference year: ${country.year}` : ""}</p>
          <p>${country.description || ""}</p>
        </div>
      `;
    }

    html += '</div></div>';
    referenceSection.innerHTML = html;

    updateStoredResult({
      referenceVersion: data.version,
      partyMatch: party ? {
        id: party.id,
        name: party.name,
        country: party.country,
        startYear: party.startYear,
        endYear: party.endYear,
        centroidDistance: Number(party.distance.toFixed(2))
      } : null,
      countryMatch: country ? {
        id: country.id,
        name: country.name,
        year: country.year,
        centroidDistance: Number(country.distance.toFixed(2))
      } : null
    });
  }

  function updateStoredResult(fields) {
    const stored = sessionStorage.getItem("nvq_result");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      Object.assign(parsed, fields);
      sessionStorage.setItem("nvq_result", JSON.stringify(parsed));
    } catch (_) {}
  }

  function responseText() {
    const stored = sessionStorage.getItem("nvq_result");
    if (stored) {
      try {
        return JSON.stringify(JSON.parse(stored), null, 2);
      } catch (_) {
        return stored;
      }
    }

    return JSON.stringify({
      version: NVQ.version,
      scores
    }, null, 2);
  }

  async function copyResponseData() {
    const text = responseText();
    const button = document.getElementById("copy-json");
    const status = document.getElementById("copy-status");

    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }

    button.textContent = "Copied";
    status.textContent = "Response data copied to your clipboard.";
    setTimeout(() => {
      button.textContent = "Copy response data";
      status.textContent = "";
    }, 2500);
  }

  renderCommunityDistribution();
  renderExternalReferences();

  const copyButton = document.getElementById("copy-json");
  copyButton.addEventListener("click", copyResponseData);

  const feedbackLink = document.getElementById("feedback-form");
  if (NVQ.feedbackFormUrl) {
    feedbackLink.href = NVQ.feedbackFormUrl;
    feedbackLink.hidden = false;
  }
})();
