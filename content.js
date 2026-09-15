/*
  EDIT THIS FILE TO UPDATE THE WEBSITE.

  Quick guide:
  - Replace the CV link with "files/siyu-chen-cv.pdf" after adding the PDF.
  - For each paper, add a PDF path, an abstract, and an image path.
  - Image example: image: "assets/paper-1-figure.png"
  - Leave any optional field empty ("") to keep its polished placeholder.
*/

window.SITE_CONTENT = {
  profile: {
    name: "Siyu Chen",
    role: "PhD · Behavioral & Experimental Economics",
    email: "siyu013@e.ntu.edu.sg",
    institution: "Nanyang Technological University, Singapore",
    institutionShort: "Nanyang Technological University",
    cv: "files/SiyuChen_CV.pdf",
    intro:
      "Welcome to my homepage. I'm currently a PhD student at Nanyang Technological University in Singapore.",
    bio:
      "My research uses experiments to study social interaction under different contexts, with a focus on network structures, social norms, and group identity.",
  },

  researchIntro:
    "I use laboratory and online experiments to understand coordination, networks, leadership, and the behavioral foundations of institutions.",

  papers: [
    {
      title: "Social Networks and the Emergence of Convention: An Experiment",
      authors: "with Fang Liu and Yohanes Eko Riyanto",
      status: "Working paper",
      pdf: "", // Example: "files/social-networks.pdf"
      abstract: "We study how a behavior spreads through social networks and emerges as a society-wide convention. In a laboratory experiment, subjects with opposing induced preferences are incentivized to coordinate with neighbors in Random, Segmented, Centralized, or Core-Periphery networks. They also benefit from aligning with the broader population but must infer aggregate behavior from local observations. We find Segmented networks foster coordination within small communities, but this local agreement does not translate into population-wide convergence. By contrast, Centralized networks approach near-complete convergence. Participants in these networks take local behavior as a credible signal of aggregate behavior and infer population-wide behavior more accurately. Yet weaker convergence in Core-Periphery networks indicates that a center alone is insufficient; its coordinating role depends on how it is embedded in the surrounding network. Taken together, our findings show that network structure does more than channel information: it shapes how individuals interpret local observations and, ultimately, whether local coordination develops into a society-wide convention.",
      image: "", // Example: "assets/social-networks-figure.png"
      imageAlt: "Representative figure from the social networks paper",
      imageCaption: "",
    },
    {
      title: "Efficiency and Equity through Intertemporal Coordination in Groups",
      authors:
        "with Fang Liu, Yohanes Eko Riyanto, Jonathan Yeo, and Jonathan Tan (Under review)",
      status: "Under review",
      pdf: "files/Turn_Taking.pdf",
      abstract: "This paper experimentally examines how group size and composition affect efficiency and equity in intertemporal coordination. In a modified market entry game, players repeatedly choose between two capacity-constrained markets, one yielding a higher payoff than the other. Efficiency and equity can be achieved through intertemporal coordination, with players taking turns to enter the high-payoff market. We find that smaller groups readily establish turn-taking, whereas larger groups often fail, exhibiting less alternation and less stable coordination. Effects of group identity composition depend on group size. In smaller groups, heterogeneous identity is associated with less efficient coordination early on, but performance converges quickly. In larger groups, homogeneous identity is associated with increasingly unequal outcomes, alongside emergent patterns of exploitation and accommodation. Overall, shared identity does not uniformly improve outcomes, highlighting how coordination complexity and identity composition jointly shape the emergence and persistence of behavioral patterns in intertemporal cooperation.",
      image: "assets/turntaking_figure.png",
      imageAlt: "Figure from the intertemporal coordination paper",
      imageCaption: "",
    },
    {
      title: "The Bases of Legitimacy: How Leaders Are Chosen Shapes How They Should Persuade",
      authors: "with Yohanes Eko Riyanto and Jonathan Yeo (Under review)",
      status: "Under review",
      pdf: "files/Leadership.pdf",
      abstract: "We study how the legitimacy of leadership shapes cooperation in a repeated public-goods game in which leaders can influence behavior only through nonbinding recommendations and fixed-form messages. Our experiment varies two sources of legitimacy: how leaders are selected and how they persuade followers. Each source has a less and a more collective form. Leaders are selected by random assignment, by designation from a previous leader, or by election by group members. These procedures give group members an increasing role in choosing the leader. Leaders then justify their guidance either through personal appeals to their own judgment or through communal appeals to shared social norms. We find that the effectiveness of communal persuasion relative to personal persuasion declines as leader selection becomes more collective. Communal appeals produce higher cooperation than personal appeals under random selection, a smaller advantage under designated selection, and lower cooperation when leaders are elected. This interaction arises mainly from how followers respond to the leader's guidance. It does not arise from differences in who becomes leader or in how leaders carry out their role. The results suggest that collective bases of legitimacy can substitute for one another rather than reinforce each other. Leadership therefore depends on the fit between how leaders acquire authority and how they justify it.",
      image: "assets/leadership_figure.png",
      imageAlt: "Figure from the leadership legitimacy paper",
      imageCaption: "",
    },
  ],
};
