export const EMAIL = 'tutul.abdurrahman@gmail.com'
export const MAIL_PROJECT = `mailto:${EMAIL}?subject=Project%20enquiry`
export const MAIL_INTEGRATION = `mailto:${EMAIL}?subject=Integration%20enquiry`

export const LINKEDIN = 'https://www.linkedin.com/in/tutul-abdurrahman'
export const SR_STUDIO = 'https://www.srwebstudio.com/'
export const GITHUB = 'https://github.com/tutul-abdurrahman'

/* The two prompt kits, both live on Gumroad. */
export const KIT_LANDING_URL =
  'https://tutulabdurrahman.gumroad.com/l/landing-page-prompts'
export const KIT_PORTFOLIO_URL =
  'https://tutulabdurrahman.gumroad.com/l/portfolio-prompt-kit'

export const nav = [
  { label: 'Work', href: '/work/', key: 'work' },
  { label: 'Prompt kits', href: '/prompt-kit/', key: 'prompt-kit' },
  { label: 'Services', href: '/#services', key: 'services' },
  { label: 'About', href: '/#about', key: 'about' },
]

export const stats = [
  { value: '100+', label: 'Client projects' },
  { value: '3', label: 'Studio teams' },
  { value: '2', label: 'Own products' },
  { value: '4+', label: 'Years in product' },
]

/* Long-term collaborations. SR Web Studio is the current one;
   Rebelslab and Zephyr both came through it and closed in 2026. */
export const studios = [
  {
    name: 'SR Web Studio',
    logo: '/assets/logos/srwebstudio.svg',
    place: 'Bangladesh',
    role: 'Web Designer & UI/UX Designer, Onsite',
    period: 'Ongoing',
    href: SR_STUDIO,
    current: true,
  },
  {
    name: 'Rebelslab',
    logo: '/assets/logos/rebelslab.svg',
    place: 'Netherlands',
    role: 'Web Designer, remote',
    period: 'Nov 2022 to Mar 2026',
  },
  {
    name: 'Zephyr Events',
    logo: '/assets/logos/zephyr.svg',
    place: 'Spain',
    role: 'Web Designer & Interface Specialist, remote',
    period: 'Dec 2023 to May 2026',
  },
]

export const services = [
  {
    name: 'Landing page',
    desc: 'One page that sells one thing. Message, layout, responsive build, live on your domain.',
    facts: ['Up to 5 sections', 'Copy structure', 'Deploy included'],
    price: '$180',
    time: '5 days',
  },
  {
    name: 'Site or CMS build',
    desc: 'Multi-page marketing site, or a CMS your team can run without calling me.',
    facts: ['Up to 6 pages', 'Content entry', 'SEO basics'],
    price: 'from $650',
    time: '2 to 3 weeks',
  },
  {
    name: 'Dashboard and product UI',
    desc: 'The screens software lives in: flows, admin views, empty and error states, a component library.',
    facts: ['Flows and wireframes', 'Dev-ready files', 'Design system'],
    price: 'from $1,200',
    time: '3 to 4 weeks',
  },
  {
    name: 'Event and CRM wiring',
    desc: 'Two systems that should already talk to each other. I map the fields, build the connector and test it against the live API.',
    facts: ['Field mapping', 'Webhooks', 'Retries and errors'],
    price: 'from $450',
    time: 'per connector',
  },
]

export const integrations = [
  {
    group: 'Event platforms',
    items: ['Swoogo', 'Cvent', 'Eventbrite', 'ZappContact'],
  },
  {
    group: 'CRM and marketing',
    items: ['Salesforce', 'HubSpot', 'ActiveCampaign', 'Mailchimp'],
  },
  {
    group: 'Membership',
    items: ['iMIS', 'Aptify', 'YourMembership', 'WildApricot'],
  },
  {
    group: 'Finance and operations',
    items: ['Workday', 'Stripe', 'Xero', 'Zapier'],
  },
]

export const tools = [
  { label: 'Design', value: 'Figma, Miro, design systems' },
  { label: 'Build', value: 'HTML, CSS, Tailwind, React' },
  { label: 'CMS and forms', value: 'Content modelling, Tally, Lindo' },
  { label: 'Integrations', value: 'Swoogo, CRM, webhooks' },
  { label: '3D and motion', value: 'Blender, motion basics' },
  { label: 'Around it', value: 'Copy structure, QA, handoff' },
]

export const steps = [
  {
    when: 'Day 1',
    title: 'One call, then a written scope',
    body: 'Pages, states, what is out, price and dates on one page. You approve it before I open Figma. No kickoff deck.',
  },
  {
    when: 'Days 2 to 4',
    title: 'Flows first, then a real screen',
    body: 'Sitemap and flows, then a clickable screen on your phone. I design the empty, loading, error and admin states too.',
  },
  {
    when: 'Days 5 to 12',
    title: 'Built in the browser',
    body: 'Responsive HTML and CSS or your CMS, on a staging URL that updates while I work. You comment on the site, not a ZIP.',
  },
  {
    when: 'After launch',
    title: 'Repo, guide, 30 days',
    body: 'Source and CMS access, a one-page handover, and a month of small fixes. Then hourly or a retainer, your call.',
  },
]
