// Large preliminary item bank for exploratory calibration.
// Topics are inspired by common political-quiz issue coverage, including VOTA, but wording is original.
// Positive weights move toward pole A in config.js; negative weights move toward pole B.
// Most items load primarily on one axis; a smaller number deliberately cross-load to test whether axes collapse.
window.NVQ_QUESTIONS = [
  {
    "id": "market_01",
    "text": "Where regulation and competition can plausibly address the same problem, policymakers should generally prefer competition.",
    "effects": {
      "market": 2
    }
  },
  {
    "id": "market_02",
    "text": "When an essential good becomes unaffordable, direct controls on prices are often preferable to waiting for supply to expand.",
    "effects": {
      "market": -2
    }
  },
  {
    "id": "market_03",
    "text": "If a foreign government heavily subsidizes an ordinary consumer good, cheaper imports can benefit my country even if domestic producers lose market share.",
    "effects": {
      "market": 2
    }
  },
  {
    "id": "market_04",
    "text": "Cities should generally allow substantially more high-density housing even when nearby property owners object.",
    "effects": {
      "market": 2
    }
  },
  {
    "id": "market_05",
    "text": "Subsidies for first-time homebuyers are a useful response to high housing prices.",
    "effects": {
      "market": -2
    }
  },
  {
    "id": "market_06",
    "text": "New housing developments should be required to include specified amounts of parks or green space even when this raises construction costs.",
    "effects": {
      "market": -1
    }
  },
  {
    "id": "market_07",
    "text": "Governments should subsidize developers specifically for producing below-market-rate housing.",
    "effects": {
      "market": -2
    }
  },
  {
    "id": "market_08",
    "text": "Investors should generally be allowed to buy existing homes and rent them out.",
    "effects": {
      "market": 2
    }
  },
  {
    "id": "market_09",
    "text": "Rent controls are usually a worse response to high rents than policies that expand housing supply.",
    "effects": {
      "market": 2
    }
  },
  {
    "id": "market_10",
    "text": "Foreign investors should generally be permitted to purchase residential property on the same terms as domestic investors.",
    "effects": {
      "market": 2
    }
  },
  {
    "id": "market_11",
    "text": "Consumers should receive government subsidies to encourage purchases of electric vehicles.",
    "effects": {
      "market": -2
    }
  },
  {
    "id": "market_12",
    "text": "Environmental goals are better pursued with broad prices such as carbon taxes than with detailed mandates for particular technologies.",
    "effects": {
      "market": 2
    }
  },
  {
    "id": "market_13",
    "text": "A universal basic income is preferable to a more targeted welfare system only if it can replace substantial existing programs rather than simply add another benefit.",
    "effects": {
      "market": 1
    }
  },
  {
    "id": "market_14",
    "text": "Governments should actively subsidize strategically important industries even when those industries would not otherwise be internationally competitive.",
    "effects": {
      "market": -2,
      "engagement": -1
    }
  },
  {
    "id": "market_15",
    "text": "When regulators are uncertain whether a new technology is harmful, the default should usually be to permit it until substantial evidence of harm emerges.",
    "effects": {
      "market": 2,
      "tradeoff": 1
    }
  },
  {
    "id": "universal_01",
    "text": "A political principle should apply even when applying it benefits a party or movement I strongly oppose.",
    "effects": {
      "universal": 2
    }
  },
  {
    "id": "universal_02",
    "text": "Serious misconduct by political allies should be judged by the same standards as equivalent misconduct by political opponents.",
    "effects": {
      "universal": 2
    }
  },
  {
    "id": "universal_03",
    "text": "When an opposing political movement poses an unusually serious threat, relaxing ordinary liberal standards can be justified to defeat it.",
    "effects": {
      "universal": -2
    }
  },
  {
    "id": "universal_04",
    "text": "Speech protections should extend to political movements I regard as dangerous or morally repugnant.",
    "effects": {
      "universal": 2
    }
  },
  {
    "id": "universal_05",
    "text": "If I would condemn an executive action by the opposing party, I should also condemn the same action when my preferred party uses it.",
    "effects": {
      "universal": 2
    }
  },
  {
    "id": "universal_06",
    "text": "Election rules should be evaluated by general principles rather than by which party they are expected to help.",
    "effects": {
      "universal": 2
    }
  },
  {
    "id": "universal_07",
    "text": "Politicians from my preferred coalition deserve more benefit of the doubt when allegations of misconduct are uncertain.",
    "effects": {
      "universal": -2
    }
  },
  {
    "id": "universal_08",
    "text": "Political violence should be judged by the same standard regardless of whether I sympathize with the protesters' goals.",
    "effects": {
      "universal": 2
    }
  },
  {
    "id": "universal_09",
    "text": "A policy proposal should not become more acceptable merely because it is necessary to keep my preferred coalition united.",
    "effects": {
      "universal": 2
    }
  },
  {
    "id": "universal_10",
    "text": "Foreign governments aligned with my country's interests should be held to broadly the same human-rights standards as adversarial governments.",
    "effects": {
      "universal": 2,
      "tradeoff": 1
    }
  },
  {
    "id": "universal_11",
    "text": "It can be legitimate to restrict an opponent's access to ordinary political institutions if that opponent would use those institutions to undermine liberal democracy.",
    "effects": {
      "universal": -2,
      "institution": -1
    }
  },
  {
    "id": "universal_12",
    "text": "Parties should be willing to support a good policy proposed by their opponents even when doing so gives the opponent a political victory.",
    "effects": {
      "universal": 2
    }
  },
  {
    "id": "universal_13",
    "text": "Standards for corruption, conflicts of interest, and misuse of office should not depend on whether the official's broader political program is valuable.",
    "effects": {
      "universal": 2
    }
  },
  {
    "id": "universal_14",
    "text": "Media outlets and civic organizations inevitably need to apply different standards to movements that threaten democracy than to ordinary political actors.",
    "effects": {
      "universal": -1
    }
  },
  {
    "id": "universal_15",
    "text": "A liberal political movement should sometimes accept electoral losses rather than abandon principles that constrain how it may pursue power.",
    "effects": {
      "universal": 2,
      "institution": 1
    }
  },
  {
    "id": "cosmopolitan_01",
    "text": "Immigration should generally remain open even when it substantially changes the cultural character of particular neighborhoods.",
    "effects": {
      "cosmopolitan": 2
    }
  },
  {
    "id": "cosmopolitan_02",
    "text": "Governments may reasonably give citizens substantial priority over noncitizens when distributing scarce opportunities.",
    "effects": {
      "cosmopolitan": -2
    }
  },
  {
    "id": "cosmopolitan_03",
    "text": "Immigrants should face relatively little pressure to assimilate beyond obeying the law and participating in shared civic institutions.",
    "effects": {
      "cosmopolitan": 2
    }
  },
  {
    "id": "cosmopolitan_04",
    "text": "Universities should generally remain free to recruit large numbers of international students even during local housing shortages.",
    "effects": {
      "cosmopolitan": 2,
      "market": 1
    }
  },
  {
    "id": "cosmopolitan_05",
    "text": "Universities should be allowed to teach degree programs primarily in an international language if students and faculty prefer it.",
    "effects": {
      "cosmopolitan": 2
    }
  },
  {
    "id": "cosmopolitan_06",
    "text": "Recognized refugees should normally be allowed to reunite with their immediate families even when asylum systems are under heavy pressure.",
    "effects": {
      "cosmopolitan": 2,
      "tradeoff": -1
    }
  },
  {
    "id": "cosmopolitan_07",
    "text": "Long-term lawful residents who are not citizens should be eligible to vote in local elections.",
    "effects": {
      "cosmopolitan": 2
    }
  },
  {
    "id": "cosmopolitan_08",
    "text": "Local residents should receive priority over newcomers when scarce public housing is allocated.",
    "effects": {
      "cosmopolitan": -2
    }
  },
  {
    "id": "cosmopolitan_09",
    "text": "Access to public benefits should sometimes depend on demonstrating basic proficiency in the country's dominant language.",
    "effects": {
      "cosmopolitan": -2
    }
  },
  {
    "id": "cosmopolitan_10",
    "text": "Culturally distinct immigrant neighborhoods can be a healthy part of national life even if assimilation is slow.",
    "effects": {
      "cosmopolitan": 2
    }
  },
  {
    "id": "cosmopolitan_11",
    "text": "Special tax incentives for highly skilled foreign workers can be justified when they attract talent that benefits the broader economy.",
    "effects": {
      "cosmopolitan": 2,
      "market": -1
    }
  },
  {
    "id": "cosmopolitan_12",
    "text": "Countries should preserve broad freedom of movement with neighboring countries even when migration becomes politically unpopular.",
    "effects": {
      "cosmopolitan": 2,
      "engagement": 1
    }
  },
  {
    "id": "cosmopolitan_13",
    "text": "Noncitizens convicted of serious crimes should face deportation more readily than citizens face comparable additional penalties.",
    "effects": {
      "cosmopolitan": -2
    }
  },
  {
    "id": "cosmopolitan_14",
    "text": "Citizenship should require meaningful knowledge of the country's language and civic institutions.",
    "effects": {
      "cosmopolitan": -1
    }
  },
  {
    "id": "cosmopolitan_15",
    "text": "Governments should be willing to accept substantial refugee inflows even when doing so requires rapid expansion of housing and public services.",
    "effects": {
      "cosmopolitan": 2,
      "tradeoff": -1
    }
  },
  {
    "id": "institution_01",
    "text": "Independent institutions should retain meaningful autonomy even when elected majorities strongly oppose their decisions.",
    "effects": {
      "institution": 2
    }
  },
  {
    "id": "institution_02",
    "text": "A clear electoral mandate can justify changing institutional rules that repeatedly obstruct the government's program.",
    "effects": {
      "institution": -2
    }
  },
  {
    "id": "institution_03",
    "text": "Stable political procedures are worth preserving even when they repeatedly produce outcomes I dislike.",
    "effects": {
      "institution": 2
    }
  },
  {
    "id": "institution_04",
    "text": "Central banks should usually be insulated from direct political control over day-to-day monetary policy.",
    "effects": {
      "institution": 2
    }
  },
  {
    "id": "institution_05",
    "text": "Courts should be able to invalidate laws that violate constitutional rights even when those laws are strongly supported by voters.",
    "effects": {
      "institution": 2
    }
  },
  {
    "id": "institution_06",
    "text": "National referendums are often a better way to resolve major political questions than bargaining among parties in a legislature.",
    "effects": {
      "institution": -2
    }
  },
  {
    "id": "institution_07",
    "text": "Professional civil servants should retain substantial discretion to implement laws without being replaced whenever political control changes.",
    "effects": {
      "institution": 2
    }
  },
  {
    "id": "institution_08",
    "text": "Independent prosecutors should be protected from political direction even when elected leaders believe prosecutions are obstructing their mandate.",
    "effects": {
      "institution": 2
    }
  },
  {
    "id": "institution_09",
    "text": "Upper chambers, constitutional courts, or similar veto points are useful even when they make legislation slower and harder to pass.",
    "effects": {
      "institution": 2
    }
  },
  {
    "id": "institution_10",
    "text": "If unelected agencies repeatedly frustrate popular preferences, elected officials should have broad authority to bring them under direct control.",
    "effects": {
      "institution": -2
    }
  },
  {
    "id": "institution_11",
    "text": "Local governments should retain meaningful autonomy even when national majorities strongly prefer uniform rules.",
    "effects": {
      "institution": 2
    }
  },
  {
    "id": "institution_12",
    "text": "Major constitutional changes should require broader consensus than an ordinary election victory.",
    "effects": {
      "institution": 2
    }
  },
  {
    "id": "institution_13",
    "text": "Political leaders should be able to dismiss senior administrators who publicly resist the government's elected policy program.",
    "effects": {
      "institution": -1
    }
  },
  {
    "id": "institution_14",
    "text": "A directly elected executive can legitimately claim a stronger mandate than legislators chosen through party lists or coalition bargaining.",
    "effects": {
      "institution": -1
    }
  },
  {
    "id": "institution_15",
    "text": "Institutional reforms should be judged partly by whether they remain acceptable when one's political opponents eventually control them.",
    "effects": {
      "institution": 2,
      "universal": 1
    }
  },
  {
    "id": "tradeoff_01",
    "text": "When important rights conflict, policymakers should explicitly weigh competing harms rather than treat one rights claim as automatically decisive.",
    "effects": {
      "tradeoff": 2
    }
  },
  {
    "id": "tradeoff_02",
    "text": "Calling something a human right does not by itself determine what policy should provide or at what cost.",
    "effects": {
      "tradeoff": 2
    }
  },
  {
    "id": "tradeoff_03",
    "text": "Once a policy is necessary to prevent a serious rights violation, concerns about incentives or administrative burden should usually be secondary.",
    "effects": {
      "tradeoff": -2
    }
  },
  {
    "id": "tradeoff_04",
    "text": "People who refuse available shelter should still generally be permitted to sleep in public spaces when no private alternative is available.",
    "effects": {
      "tradeoff": -1,
      "social": 1
    }
  },
  {
    "id": "tradeoff_05",
    "text": "A government may sometimes limit family reunification for refugees when housing and reception systems are genuinely overwhelmed.",
    "effects": {
      "tradeoff": 2,
      "cosmopolitan": -1
    }
  },
  {
    "id": "tradeoff_06",
    "text": "Even important anti-discrimination goals can be outweighed by competing interests such as privacy, association, or administrative feasibility.",
    "effects": {
      "tradeoff": 2,
      "social": -1
    }
  },
  {
    "id": "tradeoff_07",
    "text": "Climate policy should still be evaluated for costs and tradeoffs even when climate change creates serious risks to life and property.",
    "effects": {
      "tradeoff": 2
    }
  },
  {
    "id": "tradeoff_08",
    "text": "If a policy would substantially reduce poverty, concerns that it weakens work incentives should usually be secondary.",
    "effects": {
      "tradeoff": -2,
      "market": -1
    }
  },
  {
    "id": "tradeoff_09",
    "text": "Preventing a humanitarian catastrophe can justify military intervention even when intervention will foreseeably cause some civilian casualties.",
    "effects": {
      "tradeoff": 2,
      "engagement": 1
    }
  },
  {
    "id": "tradeoff_10",
    "text": "Healthcare should be treated as a right even when guaranteeing every beneficial treatment would require explicit rationing elsewhere.",
    "effects": {
      "tradeoff": -1
    }
  },
  {
    "id": "tradeoff_11",
    "text": "A policy that disproportionately harms a historically disadvantaged group can still be justified if the policy serves a sufficiently important general purpose.",
    "effects": {
      "tradeoff": 2,
      "social": -1
    }
  },
  {
    "id": "tradeoff_12",
    "text": "Restrictions on misinformation can be justified when false claims create a serious risk of physical harm, even if some lawful speech is chilled.",
    "effects": {
      "tradeoff": -1,
      "social": 1
    }
  },
  {
    "id": "tradeoff_13",
    "text": "Public policy should sometimes tolerate outcomes that are unfair in individual cases when clearer general rules produce better results overall.",
    "effects": {
      "tradeoff": 2,
      "institution": 1
    }
  },
  {
    "id": "tradeoff_14",
    "text": "A government should not promise a social benefit as an unconditional right unless it can plausibly sustain that promise during fiscal stress.",
    "effects": {
      "tradeoff": 2,
      "market": 1
    }
  },
  {
    "id": "tradeoff_15",
    "text": "When public safety and civil liberties conflict, neither side should be treated as categorically controlling without considering the magnitude of the risks.",
    "effects": {
      "tradeoff": 2
    }
  },
  {
    "id": "engagement_01",
    "text": "Wealthy democracies should accept meaningful costs to help preserve a stable international order beyond their borders.",
    "effects": {
      "engagement": 2
    }
  },
  {
    "id": "engagement_02",
    "text": "Military and economic commitments abroad should usually require a clear and direct benefit to the country's own citizens.",
    "effects": {
      "engagement": -2
    }
  },
  {
    "id": "engagement_03",
    "text": "Alliances and international institutions are worth accepting some constraints on national discretion.",
    "effects": {
      "engagement": 2
    }
  },
  {
    "id": "engagement_04",
    "text": "Countries should participate in collective defense alliances even when that creates obligations to defend distant allies.",
    "effects": {
      "engagement": 2
    }
  },
  {
    "id": "engagement_05",
    "text": "Foreign aid is worthwhile even when its benefits to the donor country are mostly indirect or long term.",
    "effects": {
      "engagement": 2
    }
  },
  {
    "id": "engagement_06",
    "text": "Economic sanctions are an appropriate tool against serious foreign aggression even when they also impose costs on domestic consumers.",
    "effects": {
      "engagement": 2,
      "market": -1
    }
  },
  {
    "id": "engagement_07",
    "text": "Governments should be willing to supply weapons to foreign partners resisting territorial conquest.",
    "effects": {
      "engagement": 2
    }
  },
  {
    "id": "engagement_08",
    "text": "International courts should have meaningful authority over states that voluntarily joined their treaties.",
    "effects": {
      "engagement": 2,
      "institution": 1
    }
  },
  {
    "id": "engagement_09",
    "text": "Countries should retain the right to ignore international institutions when important national interests are at stake.",
    "effects": {
      "engagement": -2
    }
  },
  {
    "id": "engagement_10",
    "text": "Humanitarian military intervention can be justified even without direct national-security stakes.",
    "effects": {
      "engagement": 2,
      "tradeoff": -1
    }
  },
  {
    "id": "engagement_11",
    "text": "A country's foreign policy should focus mainly on preventing threats at home rather than shaping political outcomes abroad.",
    "effects": {
      "engagement": -2
    }
  },
  {
    "id": "engagement_12",
    "text": "Regional unions should be able to set common rules on trade, migration, and environmental policy even when member states lose some autonomy.",
    "effects": {
      "engagement": 2
    }
  },
  {
    "id": "engagement_13",
    "text": "Governments should contribute troops or resources to international peacekeeping missions when there is a credible chance of reducing violence.",
    "effects": {
      "engagement": 2
    }
  },
  {
    "id": "engagement_14",
    "text": "International agreements are usually less trustworthy than flexible national policies because circumstances and governments change.",
    "effects": {
      "engagement": -2
    }
  },
  {
    "id": "engagement_15",
    "text": "It is sometimes worth paying more for strategically important goods in order to reduce dependence on geopolitical rivals.",
    "effects": {
      "engagement": 1,
      "market": -2
    }
  },
  {
    "id": "social_01",
    "text": "Institutions should sometimes use group-conscious policies to remedy persistent disadvantages caused by past discrimination.",
    "effects": {
      "social": 2
    }
  },
  {
    "id": "social_02",
    "text": "Anti-discrimination policy should generally require equal treatment rather than group-specific remedies.",
    "effects": {
      "social": -2
    }
  },
  {
    "id": "social_03",
    "text": "Social institutions should make substantial accommodations for minority identities even when doing so imposes moderate costs on others.",
    "effects": {
      "social": 2
    }
  },
  {
    "id": "social_04",
    "text": "Universities and employers should be permitted to consider race or ethnicity as one factor when pursuing diversity goals.",
    "effects": {
      "social": 2
    }
  },
  {
    "id": "social_05",
    "text": "Government forms should generally permit people to change their legal sex through self-identification without requiring medical treatment.",
    "effects": {
      "social": 2
    }
  },
  {
    "id": "social_06",
    "text": "Competitive sports may legitimately use sex-based eligibility rules even when those rules exclude some transgender athletes.",
    "effects": {
      "social": -1,
      "tradeoff": 1
    }
  },
  {
    "id": "social_07",
    "text": "Public institutions should normally honor a person's requested pronouns as part of ordinary anti-harassment or workplace rules.",
    "effects": {
      "social": 2
    }
  },
  {
    "id": "social_08",
    "text": "Hate-speech restrictions can be justified for especially degrading attacks on protected groups even when the speech does not directly threaten violence.",
    "effects": {
      "social": 2,
      "universal": -1
    }
  },
  {
    "id": "social_09",
    "text": "Police funding should be shifted toward social services when non-police interventions can plausibly reduce crime and disorder.",
    "effects": {
      "social": 2,
      "market": -1
    }
  },
  {
    "id": "social_10",
    "text": "Persistent racial disparities are strong evidence that institutions should consider race-conscious remedies rather than relying only on formally neutral rules.",
    "effects": {
      "social": 2
    }
  },
  {
    "id": "social_11",
    "text": "Religious organizations should receive broad exemptions from anti-discrimination rules when compliance would conflict with core religious doctrine.",
    "effects": {
      "social": -2
    }
  },
  {
    "id": "social_12",
    "text": "Schools should teach students about gender identity and sexual orientation as ordinary parts of health or social education.",
    "effects": {
      "social": 2
    }
  },
  {
    "id": "social_13",
    "text": "Governments should aim for equal opportunity rather than trying to equalize representation of demographic groups across institutions.",
    "effects": {
      "social": -2
    }
  },
  {
    "id": "social_14",
    "text": "Public institutions should remove historical symbols primarily associated with exclusion or oppression even when those symbols also have substantial traditional significance.",
    "effects": {
      "social": 2,
      "cosmopolitan": 1
    }
  },
  {
    "id": "social_15",
    "text": "Criminal justice policy should place more weight on reducing disparate impacts on disadvantaged groups, even when doing so modestly reduces enforcement intensity.",
    "effects": {
      "social": 2,
      "tradeoff": -1
    }
  }
];
