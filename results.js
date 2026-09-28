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
      <div class="axis-labels">
        <strong>${axis.a} ${aScore}%</strong>
        <strong>${bScore}% ${axis.b}</strong>
      </div>
      <div class="axis-bar" aria-label="${axis.a} ${aScore} percent; ${axis.b} ${bScore} percent">
        <div class="axis-bar-a" style="width:${aScore}%"></div>
        <div class="axis-bar-b" style="width:${bScore}%"></div>
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
