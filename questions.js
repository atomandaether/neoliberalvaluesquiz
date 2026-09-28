// Starter calibration items only. These are intentionally provisional.
// Positive weights move toward pole A in config.js; negative weights move toward pole B.
window.NVQ_QUESTIONS = [
  // 1. Market Process <-> Government Direction
  {
    id: "market_01",
    text: "Where regulation and competition can plausibly address the same problem, policymakers should generally prefer competition.",
    effects: { market: 2 }
  },
  {
    id: "market_02",
    text: "When an essential good becomes unaffordable, direct controls on prices are often preferable to waiting for supply to expand.",
    effects: { market: -2 }
  },
  {
    id: "market_03",
    text: "If a foreign government heavily subsidizes an ordinary consumer good, cheaper imports can benefit my country even if domestic producers lose market share.",
    effects: { market: 2 }
  },

  // 2. Liberal Universalism <-> Partisan Alignment
  {
    id: "universal_01",
    text: "A political principle should apply even when applying it benefits a party or movement I strongly oppose.",
    effects: { universal: 2 }
  },
  {
    id: "universal_02",
    text: "Serious misconduct by political allies should be judged by the same standards as equivalent misconduct by political opponents.",
    effects: { universal: 2 }
  },
  {
    id: "universal_03",
    text: "When an opposing political movement poses an unusually serious threat, relaxing ordinary liberal standards can be justified to defeat it.",
    effects: { universal: -2 }
  },

  // 3. Cosmopolitanism <-> Communitarianism
  {
    id: "cosmopolitan_01",
    text: "Immigration should generally remain open even when it substantially changes the cultural character of particular neighborhoods.",
    effects: { cosmopolitan: 2 }
  },
  {
    id: "cosmopolitan_02",
    text: "Governments may reasonably give citizens substantial priority over noncitizens when distributing scarce opportunities.",
    effects: { cosmopolitan: -2 }
  },
  {
    id: "cosmopolitan_03",
    text: "Immigrants should face relatively little pressure to assimilate beyond obeying the law and participating in shared civic institutions.",
    effects: { cosmopolitan: 2 }
  },

  // 4. Institutionalism <-> Populism
  {
    id: "institution_01",
    text: "Independent institutions should retain meaningful autonomy even when elected majorities strongly oppose their decisions.",
    effects: { institution: 2 }
  },
  {
    id: "institution_02",
    text: "A clear electoral mandate can justify changing institutional rules that repeatedly obstruct the government's program.",
    effects: { institution: -2 }
  },
  {
    id: "institution_03",
    text: "Stable political procedures are worth preserving even when they repeatedly produce outcomes I dislike.",
    effects: { institution: 2 }
  },

  // 5. Tradeoff-Oriented <-> Rights-First
  {
    id: "tradeoff_01",
    text: "When important rights conflict, policymakers should explicitly weigh competing harms rather than treat one rights claim as automatically decisive.",
    effects: { tradeoff: 2 }
  },
  {
    id: "tradeoff_02",
    text: "Calling something a human right does not by itself determine what policy should provide or at what cost.",
    effects: { tradeoff: 2 }
  },
  {
    id: "tradeoff_03",
    text: "Once a policy is necessary to prevent a serious rights violation, concerns about incentives or administrative burden should usually be secondary.",
    effects: { tradeoff: -2 }
  },

  // 6. International Engagement <-> Restraint & Sovereignty
  {
    id: "engagement_01",
    text: "Wealthy democracies should accept meaningful costs to help preserve a stable international order beyond their borders.",
    effects: { engagement: 2 }
  },
  {
    id: "engagement_02",
    text: "Military and economic commitments abroad should usually require a clear and direct benefit to the country's own citizens.",
    effects: { engagement: -2 }
  },
  {
    id: "engagement_03",
    text: "Alliances and international institutions are worth accepting some constraints on national discretion.",
    effects: { engagement: 2 }
  },

  // 7. Expansive <-> Limited Progressivism
  {
    id: "social_01",
    text: "Institutions should sometimes use group-conscious policies to remedy persistent disadvantages caused by past discrimination.",
    effects: { social: 2 }
  },
  {
    id: "social_02",
    text: "Anti-discrimination policy should generally require equal treatment rather than group-specific remedies.",
    effects: { social: -2 }
  },
  {
    id: "social_03",
    text: "Social institutions should make substantial accommodations for minority identities even when doing so imposes moderate costs on others.",
    effects: { social: 2 }
  }
];
