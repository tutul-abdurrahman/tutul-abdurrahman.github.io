export const rebelslab = {
  name: "Rebelslab",
  place: "Netherlands",
  role: "Web Designer, remote",
  period: "Nov 2022 to Mar 2026",
  count: "6 projects",
  lede: "Introduced through SR Web Studio. Course platforms, publishing tools and portfolios for Dutch clients, four of them still live.",
  cards: [
    {
      name: "Centrum Hecht Opleidingen",
      client: "Rebelslab · live",
      role: "Course platform for a psychotherapy school: the public site, the admin view, and the CMS a non-technical team uses to publish courses.",
      img: "/assets/clients/centrum.webp",
      href: "https://centrumhechtopleidingen.nl/",
      live: true,
    },
    {
      name: "Jilster",
      client: "Rebelslab · live",
      role: "Home page and several in-app features for a platform where groups design and print their own magazine.",
      img: "/assets/clients/jilster.webp",
      href: "https://jilster.app/",
      live: true,
    },
    {
      name: "Tim Juffermans",
      client: "Rebelslab · live",
      role: "Illustrator portfolio built in Lindo. Big art, little chrome, and a page order that survives a phone.",
      img: "/assets/clients/timjuffermans.webp",
      href: "https://www.timjuffermans.com/",
      live: true,
    },
    {
      name: "The Musical Connection",
      client: "Rebelslab · live",
      role: "Arts-education site for an inclusive-education charity, with resource requests handled through Tally form flows.",
      img: "/assets/clients/musicalconnection.webp",
      href: "https://www.themusicalconnection.eu/",
      live: true,
    },
  ],
  rows: [
    {
      name: "De Echte Kieswijzer",
      role: "Dutch election guide. Question flow, scoring model and result explanation, designed end to end in Figma and Miro.",
      state: "Between elections",
    },
    {
      name: "Ze-Scan",
      role: "Scanning product for the Dutch market. App and marketing site designed end to end, with the site now offline.",
      state: "Site down",
    },
  ],
};

export const zephyr = {
  name: "Zephyr Events",
  place: "Spain",
  role: "Web Designer & Interface Specialist, remote",
  period: "Dec 2023 to May 2026",
  count: "6 projects",
  lede: "Event platforms and the integration layer underneath, plus Uniloop, their white-label product for Australian universities. The engagement came through SR Web Studio.",
  cards: [
    {
      name: "ZappContact",
      client: "Zephyr · live",
      role: "Lead-scanning PWA for trade shows. Mobile capture, contact dashboard, offline states and a Swoogo sync, designed end to end.",
      img: "/assets/clients/zappcontact.webp",
      href: "https://zappcontact.com/",
      live: true,
    },
    {
      name: "Zephyr Dashboard",
      client: "Zephyr · client platform",
      role: "The bridge between Swoogo and everything else. Integration setup, client onboarding and the screens the delivery team runs live events from.",
      state: "Behind a login",
      flow: [
        ["Swoogo", "Dashboard", "CRM"],
        ["CRM", "Dashboard", "Swoogo"],
      ],
      flowNote:
        "Both directions, and a record can make several passes before it settles.",
      facts: ["Integration flows", "Prototypes and demos", "Developer handoff"],
    },
    {
      name: "Uniloop",
      client: "Zephyr · Australia",
      role: "Zephyr's white-label event platform for Australian universities. Multi-tenant dashboard for ACU, UOW and Sydney, plus the event pages and themes their students land on.",
      state: "Behind a login",
      facts: ["Multi-tenant UX", "Event themes", "Client support"],
    },
  ],
  rows: [
    {
      name: "Zephyr Events site",
      role: "Marketing site kept current through the CMS. A normal day on the engagement, not the headline.",
      state: "Live",
      live: true,
    },
    {
      name: "Your Invite By Us",
      role: "Client-side event management and the public event pages guests use to register and attend.",
      state: "Offline now",
    },
    {
      name: "Zephyr integration layer",
      role: "The connectors under the dashboard: CRM sync, membership lookups, ticketing and webhooks, each mapped field by field and tested against the live API.",
      state: "Client platform",
    },
  ],
  note: "The white-label platform Zephyr runs for Australian universities. Your Invite By Us and the integration layer came through the same engagement.",
};

export const ownProducts = [
  {
    name: "RentFlow",
    tags: ["Live", "Own product"],
    lede: "Bangla-first rent and bill admin for one property in Mirpur, Dhaka. Prototyped fast, then tested screen by screen against the real month.",
    body: "Meter readings split electricity and water across five rooms, previous dues carry forward, loan instalments sit beside rent, and every bill prints as an A4 slip with a receipt to match. React 19, TypeScript, Supabase.",
    facts: ["React 19", "TypeScript", "Supabase"],
    images: {
      alt: "RentFlow",
      slides: [
        {
          src: "/assets/clients/rentflow-summary.webp",
          label: "Monthly summary",
        },
        { src: "/assets/clients/rentflow-bill.webp", label: "Bill and receipt" },
        { src: "/assets/clients/rentflow-tenants.webp", label: "Tenants" },
      ],
    },
  },
  {
    name: "Prompt kits",
    href: "/prompt-kit/",
    tags: ["On sale", "Own product"],
    lede: "Two prompt kits on Gumroad: 30+ landing page prompts at $49, and 13 one-page portfolio prompts at $19. Paste one prompt, get a finished page instead of a mood board.",
    body: "Swiss, Luxury, Bauhaus, NeoBrutalism, Editorial Serif and 25 more on the landing side. BentoBox, TerminalCLI, GalleryDark and 10 more for portfolios. Type, colour, spacing, components and motion are set before a single section gets written.",
    facts: ["30+ landing prompts", "13 portfolio prompts", "Instant download"],
    images: {
      alt: "Prompt kit covers",
      slides: [
        {
          src: "/assets/products/landing-prompts-cover.png",
          label: "Landing page kit, $49",
        },
        {
          src: "/assets/products/portfolio-prompts-cover.png",
          label: "Portfolio kit, $19",
        },
      ],
    },
  },
];

export const featured = [
  {
    name: "Centrum Hecht Opleidingen",
    client: "Rebelslab · Netherlands",
    role: "Course platform, admin view and the CMS the school runs itself.",
    img: "/assets/clients/centrum.webp",
    href: "https://centrumhechtopleidingen.nl/",
    size: "wide",
  },
  {
    name: "ZappContact",
    client: "Zephyr · Spain",
    role: "Lead-scanning PWA for trade shows, with a live Swoogo sync.",
    img: "/assets/clients/zappcontact.webp",
    href: "https://zappcontact.com/",
    size: "half",
  },
  {
    name: "Jilster",
    client: "Rebelslab · Netherlands",
    role: "Publishing platform home and in-app features for group magazines.",
    img: "/assets/clients/jilster.webp",
    href: "https://jilster.app/",
    size: "even",
  },
  {
    name: "Zephyr Dashboard",
    client: "Zephyr · client platform",
    role: "The bridge between Swoogo and everything else. Integration setup, client onboarding and the screens the delivery team runs live events from.",
    size: "text",
    flow: [
      ["Swoogo", "Dashboard", "CRM"],
      ["CRM", "Dashboard", "Swoogo"],
    ],
    flowNote:
      "Both directions, and a record can make several passes before it settles.",
    facts: ["Integration flows", "Prototypes and demos", "Developer handoff"],
  },
  {
    name: "12 projects. One ground.",
    client: "The full ledger",
    size: "all",
  },
];
