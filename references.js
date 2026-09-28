window.NVQ_REFERENCES = {
  // External reference points are deliberately separate from r/neoliberal
  // respondent clustering. Enable only after the axes and reference coding
  // are stable enough to support descriptive similarity matching.
  enabled: false,
  version: "pre-calibration",

  // Historical and international political parties.
  // Example schema:
  // {
  //   id: "party-id",
  //   name: "Party name",
  //   country: "Country",
  //   startYear: 1990,
  //   endYear: 2000, // null if current
  //   description: "Neutral description of the coded party profile.",
  //   centroid: {
  //     market: 50,
  //     universal: 50,
  //     cosmopolitan: 50,
  //     institution: 50,
  //     tradeoff: 50,
  //     engagement: 50,
  //     social: 50
  //   }
  // }
  parties: [],

  // Modern-country policy/institutional profiles. This is meant to answer
  // "which present-day country profile is most similar to your answers?"
  // rather than imply that a country has one ideology.
  // Example schema:
  // {
  //   id: "country-id",
  //   name: "Country",
  //   year: 2026,
  //   description: "Neutral description of what the profile represents.",
  //   centroid: { ...same axis ids... }
  // }
  countries: []
};
