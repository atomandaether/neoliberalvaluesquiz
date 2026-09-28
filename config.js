window.NVQ = {
  title: "Neoliberal Values Quiz",
  version: "0.1.0",
  axes: [
    {
      id: "market",
      name: "Economic Coordination",
      a: "Market Process",
      b: "Government Direction",
      description: "Confidence in prices, competition, entry, trade, and supply adjustment versus greater reliance on subsidies, mandates, controls, regulation, and administrative direction."
    },
    {
      id: "universal",
      name: "Political Loyalty",
      a: "Liberal Universalism",
      b: "Partisan Alignment",
      description: "Applying political principles symmetrically, including against one's preferred coalition, versus allowing coalition and partisan stakes to shape which principles control."
    },
    {
      id: "cosmopolitan",
      name: "Membership & Belonging",
      a: "Cosmopolitanism",
      b: "Communitarianism",
      description: "Openness to migration, cultural change, and relatively thin national membership versus stronger claims for national preference, assimilation, and community continuity."
    },
    {
      id: "institution",
      name: "Political Process",
      a: "Institutionalism",
      b: "Populism",
      description: "Preference for stable procedures, mediated institutions, expertise, and institutional autonomy versus direct political control, popular mandate, and removing institutional obstacles."
    },
    {
      id: "tradeoff",
      name: "Moral Reasoning",
      a: "Tradeoff-Oriented",
      b: "Rights-First",
      description: "Treating rights and moral claims as important inputs that can conflict with other interests versus treating certain rights or harms as presumptively decisive in policy choices."
    },
    {
      id: "engagement",
      name: "Foreign Policy",
      a: "International Engagement",
      b: "Restraint & Sovereignty",
      description: "Willingness to accept costs, commitments, and constraints to shape the international order versus a stronger presumption for national discretion and limiting foreign commitments."
    },
    {
      id: "social",
      name: "Social Progressivism",
      a: "Expansive Progressivism",
      b: "Limited Progressivism",
      description: "Support for broader accommodations, group-conscious remedies, and progressive institutional action versus a narrower social-liberal baseline centered on formal equality and limited accommodations."
    }
  ],
  answers: [
    { label: "Strongly Agree", mult: 1 },
    { label: "Agree", mult: 2 / 3 },
    { label: "Somewhat Agree", mult: 1 / 3 },
    { label: "Neutral / Unsure", mult: 0 },
    { label: "Somewhat Disagree", mult: -1 / 3 },
    { label: "Disagree", mult: -2 / 3 },
    { label: "Strongly Disagree", mult: -1 }
  ]
};
