// Single source of content for the site: the log on the homepage and the background page.
import { swiftHarnessVersion } from './releases';

export type ThreadId = 'real' | 'systems' | 'culture';

export interface Thread {
  id: ThreadId;
  name: string;
  gloss: string;
}

export type Status = 'published' | 'active' | 'workshop' | 'archive';

export interface Work {
  id: string;
  title: string;
  /** Short label for dense views (nodes, margins). */
  short: string;
  kind: 'Research' | 'Software' | 'Music tool' | 'Writing' | 'Journey';
  year: number;
  threads: ThreadId[];
  status: Status;
  featured?: boolean;
  /** Draft entries are placeholders to confirm before anything is published. */
  draft?: boolean;
  credit?: string;
  summary: string;
  /** Notebook framing: shown when the entry is opened. */
  question?: string;
  method?: string;
  outcome?: string;
  /** Margin note: a short personal annotation beside the work, like pencil in a book. Draft copy. */
  note?: string;
  /** Full reference, for published work. */
  citation?: string;
  doi?: string;
  href?: string;
}

export const person = {
  name: 'Davide La Rocca',
  domain: 'davidelarocca.com',
  statement: ['I care about what feels real.', 'I build what comes next.'] as const,
  // Factual, not a slogan: what he actually does.
  bio:
    'I lead onboard marketing and communication at Costa Cruises, research how brands earn authenticity, and build open-source tools for AI-assisted software.',
  /** The line that joins the two threads: brand research and Swift Harness. */
  thesis: 'Trust has to be earned with evidence. By brands, and now by AI.',
  now: [
    'Leading onboard communication for Costa Cruises',
    'Measuring what Swift Harness’s checks actually catch',
    'Writing about underdog brands',
  ],
  /** One line under the masthead: where things stand now. */
  noon: 'At sea with Costa Cruises · measuring what Swift Harness’s checks catch · writing on underdog brands',
  updated: '2026-11-07',
};

/**
 * The statement as an edited draft: what was cut, what replaced it, and why.
 * keep = stays · cut = struck through and numbered · add = the word that replaced it.
 * Voice: feel is set in the serif, build in the mono. Cut notes are draft copy, to rewrite in my own words.
 */
export interface StatementToken {
  text: string;
  kind: 'keep' | 'cut' | 'add';
  voice: 'feel' | 'build';
  /** Number of the edit note, for cuts. */
  no?: number;
}

export const editedStatement: StatementToken[][] = [
  [
    { text: 'I', kind: 'keep', voice: 'feel' },
    { text: 'am passionate about', kind: 'cut', voice: 'feel', no: 1 },
    { text: 'care about', kind: 'add', voice: 'feel' },
    { text: 'what', kind: 'keep', voice: 'feel' },
    { text: 'is authentic.', kind: 'cut', voice: 'feel', no: 2 },
    { text: 'feels real.', kind: 'add', voice: 'feel' },
  ],
  [
    { text: 'I', kind: 'keep', voice: 'feel' },
    { text: 'shape the future.', kind: 'cut', voice: 'feel', no: 3 },
    { text: 'build what comes next.', kind: 'add', voice: 'build' },
  ],
];

export const editNotes = [
  '“Passionate” is a claim nobody can check. Care shows in the work.',
  '“Authentic” is the claim. “Feels real” is the test.',
  '“Shape the future” is a slogan. Building is a verb with evidence.',
];

export const threads: Thread[] = [
  { id: 'real', name: 'Authenticity', gloss: 'Human authenticity, brand strategy, research' },
  { id: 'systems', name: 'Systems', gloss: 'AI, software, systems thinking, product building' },
  { id: 'culture', name: 'Culture', gloss: 'Design, aesthetics, experimentation' },
];

export const works: Work[] = [
  {
    id: 'underdog-authenticity',
    title: 'Authenticity as a Reputation-Building Strategy in Underdog Brands',
    short: 'Underdog authenticity',
    kind: 'Research',
    year: 2026,
    threads: ['real', 'culture'],
    status: 'published',
    featured: true,
    credit: 'With Giovanni Spatola · De Gruyter Handbook of Corporate Reputation Management',
    summary:
      'A practical framework for brands with few resources and no history: how to build a reputation on authenticity from the first day.',
    question: 'Can a brand that cannot buy attention earn trust by being demonstrably real?',
    method:
      'A framework of three strategies for underdog brands, chosen by the market they compete in: transparency, craftsmanship or activism.',
    outcome: 'Published as a chapter, pp. 55–68, October 2026.',
    citation:
      'La Rocca, D., & Spatola, G. (2026). Authenticity as a reputation-building strategy in underdog brands: Leveraging values, storytelling, and community to overcome industry-specific barriers. In T. C. Melewar, P. Foroudi & C. Dennis (Eds.), De Gruyter Handbook of Corporate Reputation Management (pp. 55–68). De Gruyter.',
    doi: '10.1515/9783111478012-004',
    note: 'authenticity is a decision before it is a message',
    href: 'https://www.degruyterbrill.com/document/doi/10.1515/9783111478012-004/html',
  },
  {
    id: 'swift-harness',
    title: 'Swift Harness',
    short: 'Swift Harness',
    kind: 'Software',
    year: 2026,
    threads: ['systems', 'real'],
    status: 'active',
    featured: true,
    credit: 'Open source · Claude Code plugin',
    summary:
      'Structure for AI-assisted native Apple development: a reuse-first SwiftUI design-system workflow and automatic quality gates for format, lint, build and test.',
    question: 'AI writes code faster than anyone can review it. What keeps it consistent and honest?',
    method: 'Design-system rules, reuse checks and quality gates that run on every change.',
    outcome: `Open-source plugin, release ${swiftHarnessVersion}. Now measuring what each check catches; iOS comes after.`,
    note: 'structure is what makes speed trustworthy',
    href: 'https://github.com/davidelarocca/swift-harness',
  },
  {
    id: 'luiss-thesis',
    title: 'Activating Brand Authenticity: Decisions & Results',
    short: 'Activating authenticity',
    kind: 'Research',
    year: 2024,
    threads: ['real'],
    status: 'archive',
    credit: 'Executive Master thesis · LUISS School of Government',
    summary: 'How authenticity is decided inside an organisation, and what it changes.',
  },
  {
    id: 'lund-thesis',
    title: 'Brand Dynamics: Activating Luxury through Heritage & Authenticity',
    short: 'Heritage & authenticity',
    kind: 'Research',
    year: 2019,
    threads: ['real', 'culture'],
    status: 'archive',
    credit: 'MSc thesis · Lund University',
    href: 'https://lup.lub.lu.se/student-papers/search/publication/8989412',
    summary: 'How luxury brands turn heritage into a living, credible story.',
  },
  {
    id: 'bologna-thesis',
    title: 'Luxury, between the ordinary and the extraordinary',
    short: 'Ordinary / extraordinary',
    kind: 'Research',
    year: 2017,
    threads: ['culture', 'real'],
    status: 'archive',
    credit: 'MA thesis · University of Bologna',
    summary: 'Where the everyday ends and the exceptional begins.',
  },
  {
    id: 'tokyo-journey',
    title: 'Tokyo, with the East Asian Student Association',
    short: 'Tokyo',
    kind: 'Journey',
    year: 2019,
    threads: ['culture'],
    status: 'archive',
    credit: 'Travel coordinator · Lund University',
    summary:
      'Organised and led an educational journey to Tokyo, sponsored by the Swedish government, with meetings across business, diplomacy and civil society.',
  },
  {
    id: 'twente-award',
    title: 'Best social-innovation project',
    short: 'Twente',
    kind: 'Journey',
    year: 2016,
    threads: ['systems', 'culture'],
    status: 'archive',
    credit: 'IT-Driven Social Entrepreneurship summer school · University of Twente',
    summary: 'Awarded among a hundred teams for a business project on social innovation.',
  },
];

export const elsewhere = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davidelarocca/' },
  { label: 'GitHub', href: 'https://github.com/davidelarocca' },
  { label: 'Substack', href: '#substack' },
  { label: 'Medium', href: '#medium' },
];

export const threadById = Object.fromEntries(threads.map((t) => [t.id, t])) as Record<ThreadId, Thread>;

export const statusLabel: Record<Status, string> = {
  published: 'Published',
  active: 'Active',
  workshop: 'In the workshop',
  archive: 'Archive',
};

export const formatDate = (iso: string) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
