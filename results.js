(() => {
  const container = document.getElementById("results");
  const community = document.getElementById("community-section");
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

  function groupDistance(group) {
    const values = NVQ.axes
      .filter(axis => Number.isFinite(group.centroid?.[axis.id]))
      .map(axis => scores[axis.id] - group.centroid[axis.id]);

    if (!values.length) return Infinity;
    return Math.sqrt(values.reduce((sum, d) => sum + d * d, 0) / values.length);
  }

  function renderCommunityDistribution() {
    const data = window.NVQ_DISTRIBUTION;

    if (!data?.enabled) {
      community.innerHTML = `
        <div class="distribution-panel calibration-placeholder">
          <h2>Community distribution</h2>
          <p>The collection survey has not been calibrated yet. Once enabled, this section will show the subreddit median and middle range on each axis, observed respondent-group shares, and your nearest empirical group.</p>
        </div>
      `;
      return;
    }

    const validGroups = (data.groups || []).filter(group =>
      group && group.centroid && Number.isFinite(group.share)
    );

    const ranked = validGroups
      .map(group => ({ ...group, distance: groupDistance(group) }))
      .sort((a, b) => a.distance - b.distance);

    const closest = ranked[0];
    let html = `
      <div class="distribution-panel">
        <h2>Community distribution</h2>
        <p>Calibration sample: <b>${data.sampleSize.toLocaleString()}</b> usable respondents${data.updatedAt ? ` · updated ${data.updatedAt}` : ""}.</p>
    `;

    if (closest) {
      const similarity = Math.max(0, Math.round(100 - closest.distance));
      html += `
        <div class="closest-group">
          <div class="group-kicker">Closest observed group</div>
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
      const stored = sessionStorage.getItem("nvq_result");
      if (stored) {
        const parsed = JSON.parse(stored);
        parsed.groupMatch = {
          id: closest.id,
          name: closest.name,
          centroidDistance: Number(closest.distance.toFixed(2)),
          observedShare: closest.share
        };
        parsed.distributionVersion = data.version;
        sessionStorage.setItem("nvq_result", JSON.stringify(parsed));
      }
    }
  }

  renderCommunityDistribution();

  const downloadButton = document.getElementById("download-json");
  downloadButton.addEventListener("click", () => {
    const stored = sessionStorage.getItem("nvq_result");
    if (!stored) return;
    const blob = new Blob([stored], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `neoliberal-values-response-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });
})();
