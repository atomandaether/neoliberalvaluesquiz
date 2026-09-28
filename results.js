(() => {
  const container = document.getElementById("results");
  const params = new URLSearchParams(window.location.search);

  NVQ.axes.forEach((axis) => {
    const aScore = Math.max(0, Math.min(100, Number(params.get(axis.id) ?? 50)));
    const bScore = 100 - aScore;

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
