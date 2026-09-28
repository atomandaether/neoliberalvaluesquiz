window.NVQ_DISTRIBUTION = {
  // Set to true only after the collection survey has enough usable responses.
  enabled: false,
  version: "pre-calibration",
  sampleSize: 0,
  updatedAt: null,

  // Populate after analysis. Example:
  // market: { p10: 28, p25: 43, median: 61, p75: 76, p90: 89 }
  axisStats: {},

  // Empirically observed respondent groups. Example schema:
  // {
  //   id: "market-liberal",
  //   name: "Market Liberal",
  //   description: "Short neutral description of the observed cluster.",
  //   n: 180,
  //   share: 0.18,
  //   centroid: {
  //     market: 82,
  //     universal: 71,
  //     cosmopolitan: 78,
  //     institution: 70,
  //     tradeoff: 74,
  //     engagement: 68,
  //     social: 55
  //   }
  // }
  groups: []
};
