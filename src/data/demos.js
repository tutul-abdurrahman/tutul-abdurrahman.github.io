/* The eighteen preview pages live as plain HTML under /work/.
   Each one is the output of a single prompt from one of the two kits. */
export const landingPages = [
  { name: "Verdure", kind: "Perfumery · Art Nouveau", slug: "art-nouveau" },
  { name: "Ma Tea House", kind: "Ceramics · Japanese Zen", slug: "japanese-zen" },
  { name: "Dar Zellij", kind: "Riad and hammam · Zellige", slug: "moroccan" },
  { name: "ZigZag Studio", kind: "Creative agency · Memphis", slug: "memphis" },
  { name: "Mimeo Press", kind: "Print shop · Risograph", slug: "risograph" },
  { name: "Nordbo", kind: "Home goods · Scandinavian", slug: "scandinavian" },
  { name: "Atelier North", kind: "Architecture practice · Blueprint", slug: "blueprint" },
  { name: "Meridian Atlas", kind: "Expeditions · Voyage", slug: "voyage" },
  { name: "Snip and Fold", kind: "Kids craft box · Paper cut", slug: "papercut" },
  { name: "Quarter Up Arcade", kind: "Retro arcade · Pixel", slug: "pixel-arcade" },
  { name: "The Lyceum", kind: "College · Academia", slug: "academia" },
  { name: "Morsel", kind: "Meal kits · Bento", slug: "bento" },
];

export const portfolioPages = [
  { name: "Academic portfolio", kind: "Professor · Swiss", slug: "swiss" },
  { name: "Developer portfolio", kind: "Full-stack · Terminal", slug: "terminal" },
  { name: "Northbridge", kind: "Advisory firm · Corporate trust", slug: "corporate-trust" },
  { name: "Photographer", kind: "Portraits · Gallery dark", slug: "gallery-dark" },
  { name: "Law practice", kind: "Attorney · Editorial serif", slug: "editorial-serif" },
  { name: "Product designer", kind: "UI and UX · Monochrome", slug: "monochrome" },
];

export const demoCount = landingPages.length + portfolioPages.length;

/* Two Gumroad kits. The pages above are the previews shipped with them,
   which is why the counts here and the counts on the cards do not match. */
export const kits = [
  {
    key: "landing",
    label: "Landing page kit",
    prompts: "30+",
    title: "One page, one job.",
    note: "Thirty-plus landing prompts. Twelve of them are shown here, one per visual language.",
    items: landingPages,
  },
  {
    key: "portfolio",
    label: "Portfolio kit",
    prompts: "13",
    title: "One page, one person.",
    note: "Thirteen portfolio prompts. Six are shown here, each written for a different kind of reader.",
    items: portfolioPages,
  },
];
