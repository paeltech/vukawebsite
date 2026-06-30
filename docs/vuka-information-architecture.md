# Vuka Ventures — Information Architecture & Page Mapping
### Website Structure · Content Hierarchy · Audience Routing
*Based on positioning, messaging and sales direction · June 2026*

---

## How to Read This Document

This IA document serves two functions simultaneously. First, it defines the full structural map of the Vuka website — every page, every section, every content block, and how they connect. Second, it maps each structural element to its positioning purpose, its target audience(s), and its place in the sales narrative.

Every page has a **primary job** — the one thing it must accomplish for a visitor to move forward. Every section has an **audience load** — which of the five audiences it is directly addressing. Every CTA has a **destination rationale** — why it sends the visitor where it does.

The website is not a brochure. It is a five-lane sales funnel operating simultaneously, with each lane beginning at the homepage and ending at a specific audience-appropriate entry point into the `work-with-us` conversation.

---

## Site-Level Architecture

```
vukaventures.co
│
├── / (Home)
│
├── /what-we-do
│   ├── /what-we-do/studio-origination
│   ├── /what-we-do/founder-in-residence
│   ├── /what-we-do/corporate-spinout
│   └── /what-we-do/government-innovation
│
├── /who-we-work-with
│   ├── /founders
│   ├── /corporates
│   ├── /government
│   ├── /investors
│   └── /partners
│
├── /our-thesis
│   └── /our-thesis/[article-slug]   (individual essay pages)
│
├── /studio-journal
│   └── /studio-journal/[article-slug]
│
├── /portfolio                        (hidden at launch; activated on first venture)
│   └── /portfolio/[venture-slug]
│
├── /work-with-us
│
└── /about                            (optional Phase 2 addition — see note)
```

---

## Navigation Map

### Primary Navigation

| Label | Destination | Dropdown | Notes |
|---|---|---|---|
| `vuka.` (logo) | `/` | — | Always returns to home |
| `what we do` | `/what-we-do` | No | Overview page with four pathway cards linking to sub-pages |
| `who we work with` | `/who-we-work-with` | Yes — five audience pages | Dropdown is the primary self-sorting mechanism for all five audiences |
| `our thesis` | `/our-thesis` | No | Houses all published arguments; the intellectual credibility anchor |
| `portfolio` | `/portfolio` | No | **Hidden at launch.** Activates once first venture is live. |
| `studio journal` | `/studio-journal` | No | Build-in-public content; supports SEO and thought leadership |
| `work with us` | `/work-with-us` | No | **Primary CTA across all pages.** Styled as button, not text link. |

### "Who We Work With" Dropdown

| Label | Destination | Primary audience |
|---|---|---|
| `Founders` | `/founders` | Individual founder applicants (co-founder and FiR candidates) |
| `Corporates` | `/corporates` | Corporate innovation leads exploring spinout engagement |
| `Government agencies` | `/government` | Public sector agencies with digital transformation mandate |
| `Investors & DFIs` | `/investors` | DFIs, development investors, impact funds |
| `Technology partners` | `/partners` | Big tech startup programs and ecosystem partners |

### Footer Navigation

Two-column structure reflecting the primary navigation groupings.

**Studio column:** What we do · Who we work with · Our thesis · Studio journal

**Work with us column:** Founders · Corporates · Government · Investors & DFIs · Technology partners

**Contact column:** hello@vukaventures.co · LinkedIn · paulmandele.co (Paul's personal site — bio link only, not primary navigation)

---

## Page-by-Page Map

---

### PAGE 01 — HOME (`/`)

**Primary job:** Establish the argument. Sort all five audiences to their destination. Earn the click to `work with us`.

**Positioning role:** First and only page all five audiences are guaranteed to see. Must pass the "one sentence per audience" test — every visitor should find a line within the first scroll that speaks directly to their situation.

**Narrative arc:** Problem frame → Who Vuka is → Five audiences → How we build → Proof layer → Thesis anchor → Sector focus → Studio investment → Partnership stack → CTA

---

#### Homepage Section Map

| # | Section | Content Purpose | Primary audience(s) | Key copy element | CTA |
|---|---|---|---|---|---|
| H1 | Hero | Establish position; anchor the studio argument in one line | All five | "We're already in the room." | `See who we work with →` / `Read our thesis` |
| H2 | Why Vuka Exists | Name the three structural problems; position all five audiences as stakeholders in the same failure | All five | "It has a co-execution problem — and an infrastructure problem that makes the co-execution problem worse every quarter." | None — flows to H3 |
| H3 | Who We Work With | Explicit five-audience self-sorting section; each audience card links to its dedicated page | All five equally | Five cards, each naming the audience's specific situation | Each card CTAs to its `/who-we-work-with/[audience]` page |
| H4 | How We Build | Four pathway overview; establishes the studio model as operationally distinct | Founders, Corporates, Government | "Four pathways. One commitment: we stay in the room." | `See how this works →` → `/what-we-do` |
| H5 | Where We Come From | Proof and credentialing section; Paul's operating track record; Smart Foundry; published arguments | DFIs, Investors, Corporates | Specific, named credentialing — years, roles, institutions | `Read Paul's published work →` → `paulmandele.co/thoughts` |
| H6 | Our Thesis | Thesis summary card; surfaces the "Venture Engines" argument for institutional audiences | DFIs, Investors, Big Tech | Essay title + one-sentence argument + link | `Read the full argument →` → `/our-thesis` |
| H7 | Sector Focus | Four sectors with structural rationale; signals where Vuka builds and why | Founders, DFIs, Investors | Named sectors with EA-specific rationale, not generic categories | None — informational |
| H8 | Studio Investment | DFI/investor-specific homepage moment; thesis-driven pitch for studio-level backing | DFIs, Investors | "We are building the venture studio this ecosystem has been missing. The model is documented. The thesis is published. The case is live." | `Talk to us about studio investment →` → `/investors` |
| H9 | Partnership Stack | Big tech partner section; names programs and frames the access gap for tech partner audience | Technology partners | "The credits exist. The door is closed. We're opening it." | `Explore a partnership →` → `/partners` |
| H10 | Work With Us | Closing CTA; reiterates five-audience routing before final contact prompt | All five | Five-card audience routing above the contact form | `work with us` form or → `/work-with-us` |

---

**Homepage internal linking logic:**

Every audience should be able to navigate from homepage → audience-specific page → pathway detail page → work-with-us form without returning to the homepage. The homepage is an entry point, not a destination.

---

### PAGE 02 — WHAT WE DO (`/what-we-do`)

**Primary job:** Explain the four build pathways clearly enough that a visitor can identify which one applies to them and move to the correct sub-page.

**Positioning role:** Establishes the operational architecture of the studio. Differentiates Vuka from accelerators, consultancies, and VCs by naming the commitment level of each pathway. Reinforces the "stays in the room" argument with specific process language.

**Target audiences:** All five — but primarily founders, corporates, and government. DFIs and investors arrive here to understand the operational model, not to self-sort.

---

#### /what-we-do Section Map

| # | Section | Content purpose | Key content element | CTA |
|---|---|---|---|---|
| WD1 | Page header | Position the page; restate the central claim for this context | "Four ways to build with us. One model underneath all of them: we stay until the company can stand alone." | None |
| WD2 | Model distinction | Brief restatement of why the studio model is distinct from the alternatives | Comparison of what accelerators, VCs, and consultancies do vs. what a studio does — one paragraph, not a table | None — flows to pathway cards |
| WD3 | Pathway cards (×4) | Overview of all four pathways with enough detail to self-sort; each links to its own sub-page | Card per pathway: name, one-sentence description, who it is for, primary CTA | Each card → its pathway sub-page |
| WD4 | Sector focus strip | Reasserts sector focus in context of pathways | Four sectors as tags or short cards — B2B fintech, Applied AI, Climate/energy, Government digital | None — informational |
| WD5 | Bottom CTA | Capture visitors who have read the full page | "Not sure which pathway fits? Tell us where you're starting from." | → `/work-with-us` |

---

#### Pathway Sub-Pages

Each of the four pathway sub-pages follows the same internal structure. The template is defined once and applied consistently.

**Sub-page template structure:**

| # | Section | Content purpose |
|---|---|---|
| P1 | Pathway header | Name, one-sentence description, and which audience it is for |
| P2 | The problem this pathway solves | Audience-specific problem statement — in their language, not Vuka's language |
| P3 | How it works (3–4 steps) | Numbered process steps from first contact to standing company; concrete timelines where known |
| P4 | What you bring / What we bring | Two-column block; specific, not generic — no "founding energy" or "passion for X" |
| P5 | Commercial terms | Plain-language equity, fee, and warrant structure; honest about the stage |
| P6 | FAQ | 3–4 questions this audience always asks; answered directly |
| P7 | CTA | Audience-specific entry into `/work-with-us` form |

---

**`/what-we-do/studio-origination`**

- **For:** Founders with domain expertise and no co-founding team; Vuka originates and the founder joins as founding partner
- **Problem:** Technically skilled or domain-deep individuals who want to found a company but cannot assemble or fund the full founding infrastructure independently
- **Commercial terms:** Equity co-founding structure; terms defined per venture based on founder contribution and studio input
- **Key FAQ questions:** "Do I give up control if Vuka is a co-founder?" · "What sectors is Vuka originating in?" · "What does Vuka bring vs. what do I need to bring?"
- **CTA:** `Express interest in Studio Origination →`

---

**`/what-we-do/founder-in-residence`**

- **For:** Individual founders with a validated idea and domain expertise, seeking embedded operational co-building support
- **Problem:** The build problem — a founder who understands the market and has a clear idea but lacks the product, engineering, go-to-market, and financial infrastructure to build without a co-founding team
- **Commercial terms:** Vuka takes equity (10–20%) in exchange for embedded operational capacity; venture lab cheque ($5K–$15K); 90-day sprint to first product
- **Key FAQ questions:** "How much equity does Vuka take?" · "What does the 90-day sprint actually produce?" · "What if my idea isn't in your sector focus?" · "What happens if the build doesn't work?"
- **CTA:** `Apply to Founder-in-Residence →` (triggers application form or directed email)

---

**`/what-we-do/corporate-spinout`**

- **For:** Corporate innovation leads, CDOs, and strategy directors at mid-to-large East African companies
- **Problem:** The execution problem — the internal idea that cannot get built through internal processes at startup speed, and the external vendor market (consultancies, agencies) that delivers documents, not companies
- **Commercial terms:** Fee-for-service plus equity warrant; fee structure scoped per engagement; IP ownership preserved with the corporate parent; equity warrant terms standard and reviewable pre-engagement
- **Key FAQ questions:** "How does the fee structure work?" · "Who owns the IP?" · "What happens to the team after launch?" · "How is this different from hiring a digital agency?"
- **CTA:** `Start a spinout conversation →`

---

**`/what-we-do/government-innovation`**

- **For:** East African public sector agency leads with digital transformation mandates
- **Problem:** The delivery problem — the gap between public sector digital ambition and internal delivery capacity, combined with the structural slowness of standard IT procurement
- **Commercial terms:** Scoped engagement structure; milestone-based delivery; pricing and procurement pathway discussed per engagement (acknowledging government procurement realities explicitly)
- **Key FAQ questions:** "Is this different from hiring a consultancy?" · "How does Vuka engage with government procurement?" · "What does a scoped pilot engagement look like?" · "Can Vuka connect us to DFI funding instruments?"
- **Note on tone:** Define "startup speed" concretely every time it appears on this page. Undefined, it signals ecosystem naivety to a public sector reader. Defined — "a working prototype in 90 days, not an 18-month implementation plan" — it is a meaningful claim.
- **CTA:** `Explore a government engagement →`

---

### PAGE 03 — WHO WE WORK WITH (`/who-we-work-with`)

**Primary job:** The primary self-sorting hub. All five audience sub-pages live under this parent. The parent page itself is a lightweight index — five cards, each naming the audience's problem and linking to the dedicated page.

**Positioning role:** Signals to every visitor that Vuka is a multi-audience operation — not a founder-only studio. The five-card layout also functions as a proof point: a studio that has thought this carefully about who it serves has a more credible operating model than one with generic "apply here" copy.

---

#### Parent page (`/who-we-work-with`) — structure

| # | Section | Content |
|---|---|---|
| WWW1 | Page header | "There are five ways to work with Vuka. Here is each one." |
| WWW2 | Five audience cards | One card per audience; problem-led headline; 2–3 sentence description; CTA to sub-page |
| WWW3 | Bottom note | "Not sure which fits? Start with the contact form and tell us where you are." → `/work-with-us` |

---

#### Audience Sub-Pages

Each audience sub-page follows a consistent structure designed around the audience's perspective, not Vuka's. The page opens with the audience's problem, not Vuka's solution.

**Sub-page template:**

| # | Section | Content purpose |
|---|---|---|
| A1 | Audience-specific header | Address the audience directly; name their situation |
| A2 | Problem statement | Their problem, in their language — what they are trying to solve and why the current options fall short |
| A3 | What Vuka offers this audience | The specific value Vuka delivers to this audience; maps to their Value Theme from the positioning document |
| A4 | How it works | Pathway or process for this specific audience; concrete, not generic |
| A5 | Proof layer | Intellectual proof (published thesis, founder track record) at launch; operational proof (case studies, named outcomes) added as available |
| A6 | Addressing the key objection | One objection this audience always carries into the conversation — named and addressed directly |
| A7 | CTA | Audience-specific entry into the contact/engagement pathway |

---

**`/founders`**

- **Headline:** "Ready to build. Not ready to be coached."
- **Problem:** The co-execution gap and the infrastructure gap — named specifically, with the $100 Problem as the secondary argument for founders
- **Relevant pathways:** Studio Origination and Founder-in-Residence (both linked)
- **Key objection addressed:** "What does Vuka actually do that an accelerator doesn't?" → answered with the "Venture Engines" argument, specific to the founder's experience of being left alone after a programme ends
- **CTA:** `Apply to build with us →` (links to FiR application or Studio Origination expression of interest)
- **Proof:** Paul's decade of founder co-building; the $100 Problem essay (appropriate here — this is a founder-specific page)

---

**`/corporates`**

- **Headline:** "You have the idea. We have the execution infrastructure."
- **Problem:** Internal innovation initiatives that die in committee; the consultancy model that delivers reports not companies; the accountability gap of external vendors without equity
- **Relevant pathway:** Corporate Spinout (primary); links to `/what-we-do/corporate-spinout`
- **Key objection addressed:** "Why give equity to an external partner?" → equity = alignment; the structure that makes Vuka accountable for the outcome, not the contract
- **CTA:** `Start a spinout conversation →`
- **Proof:** Paul's corporate venture building track record via Smart Foundry; "Venture Engines" essay as the structural argument for co-building over consultancy
- **Note:** This page must not read like a consultancy sales page. It should lead from the corporate innovation failure pattern, not from Vuka's capabilities.

---

**`/government`**

- **Headline:** "We build digital services for citizens. Not transformation roadmaps for committees."
- **Problem:** The delivery gap — digital transformation ambitions without internal product execution capacity; traditional procurement timelines; consultancies that produce recommendations, not working services
- **Relevant pathway:** Government Innovation & Transformation (primary); links to `/what-we-do/government-innovation`
- **Key objection addressed:** "How is this different from the IT vendors we already work with?" → the distinction is equity-free delivery (no warrant for government clients), co-build model, and startup-speed execution methodology — defined concretely, not as a buzzword
- **CTA:** `Explore a government engagement →`
- **Proof:** Paul's ecosystem operation track record; sector focus on government digital services; Smart Foundry context
- **Tone note:** This page must treat government as a sophisticated peer, not a slow-moving bureaucracy. It should acknowledge procurement realities, not dismiss them.

---

**`/investors`**

- **Headline:** "The East African venture studio gap is real. Vuka is building into it."
- **Problem:** DFI and development investor frustration with accelerator-backed portfolio outcomes; the absence of a venture builder model in East Africa operating at this depth and with this level of documented methodology
- **Relevant pathway:** Studio-level investment (not a venture pathway — a studio investment conversation)
- **Key objection addressed:** "Why fund a studio over funding individual companies or accelerators?" → the "Venture Engines" argument applied specifically to capital efficiency: 4 companies built right vs. 17 polished and abandoned
- **CTA:** `Talk to us about studio investment →`
- **Proof:** Published thesis; Paul's decade of ecosystem operation; the documented methodology; the three-phase studio build plan; sector focus alignment with DFI mandates (climate/energy, government digital services, B2B fintech)
- **Note:** This page is the only page on the site that should include explicit references to the studio's phase of development and what the investment conversation looks like at this stage. Stage honesty is a trust signal here, not a weakness.

---

**`/partners`**

- **Headline:** "East African founders can't reach your program. We can change that."
- **Problem:** The access gap — the structural mechanism that excludes East African founders from big tech startup program credits; named specifically, with the $100 Problem as the relevant secondary argument (appropriate here — this page is directly about the access gap)
- **Relevant pathway:** Technology partnership / ecosystem partner status (not a build pathway)
- **Key objection addressed:** "We already accept African applications directly — why do we need a partner?" → the access-gated-by-partnership-structure argument; addressed head-on and without concession
- **CTA:** `Explore a partnership →`
- **Proof:** Published $100 Problem argument; active applications for ecosystem partner status; Vuka's vetted founder pipeline as the asset the partner receives

---

### PAGE 04 — OUR THESIS (`/our-thesis`)

**Primary job:** House the intellectual foundation of the studio. Establish Paul Mandele as a named thinker who argues specific positions, not a studio founder writing generic thought leadership.

**Positioning role:** The primary credibility anchor for DFI, investor, and technology partner audiences. Also the destination for visitors who arrived via the "Read our thesis" secondary CTA on the homepage. Functions as a long-form proof layer for all five audiences.

---

#### /our-thesis Section Map

| # | Section | Content purpose | Notes |
|---|---|---|---|
| T1 | Page header | State the thesis before showing the essays | "We build on published arguments, not assumptions." |
| T2 | Thesis statement block | Three-paragraph summary of Vuka's founding argument — the "Venture Engines" case | This block must appear before the essays. It is not a preview of an essay. It is Vuka's position, stated directly. |
| T3 | Featured essay | Primary essay, full prominence | **Featured essay at launch:** *"Africa Doesn't Need More Startup Accelerators, It Needs Venture Engines Instead"* — this is the universal founding thesis |
| T4 | Secondary essays | Supporting arguments as article cards | *The $100 Problem* (infrastructure/access); future essays as published |
| T5 | Essay index / archive | All published essays, filterable by tag | Tags: `Studio model` · `Infrastructure` · `AI & tools` · `East Africa` · `Government & public sector` |
| T6 | Subscribe / stay in touch | Low-friction signal of ongoing publishing intent | "We publish new arguments when we have something specific to say. No volume, no noise." — email capture or LinkedIn follow |

**Featured essay ordering note:** The "Venture Engines" essay is the primary argument that speaks to all five audiences. It must be featured first. The $100 Problem essay is a secondary asset appropriate for founder and technology partner audiences. If a third essay is published before launch, re-evaluate featured positioning based on the audience most likely to arrive at `/our-thesis` first (likely DFIs and investors from LinkedIn).

---

#### Individual essay pages (`/our-thesis/[article-slug]`)

Each essay has its own URL for sharing, SEO, and direct reference in outreach.

**Template structure:**

| # | Section | Content |
|---|---|---|
| E1 | Essay header | Title, date, author, reading time |
| E2 | Essay body | Full text; clean reading layout; single column; generous line height |
| E3 | Author card | Paul Mandele short bio + link to paulmandele.co |
| E4 | Related essays | 2–3 linked essays from the same theme area |
| E5 | CTA | "Want to build on this argument?" → `/work-with-us` |

---

### PAGE 05 — STUDIO JOURNAL (`/studio-journal`)

**Primary job:** Build-in-public content that documents how Vuka thinks, what it is building, and what it is learning. Functions simultaneously as SEO asset, thought leadership proof, and pipeline generator.

**Positioning role:** Distinguishes Vuka from studios that operate silently. A public-facing build journal signals institutional confidence and produces the "public proof-of-work" that the studio strategy identifies as a long-term moat.

---

#### /studio-journal Section Map

| # | Section | Content purpose |
|---|---|---|
| J1 | Page header | "The arguments we build on." |
| J2 | Filter bar | Tags: `All` · `Infrastructure` · `AI & tools` · `Studio model` · `East Africa` · `Founder stories` · `Government & public sector` |
| J3 | Featured article | Always the most recent or most relevant; pinned above the grid |
| J4 | Article grid | Chronological, most recent first; each card shows title, tag, date, and 1–2 sentence excerpt |
| J5 | Empty state | "Nothing here yet. We're writing this one." — honest about early stage; removes the ghost-page problem |

**Content categories and their positioning purpose:**

| Tag | Content type | Positioning function |
|---|---|---|
| `Infrastructure` | Essays on the build infrastructure gap, big tech access, AI tools | Supports the $100 Problem thesis; speaks to technology partner and founder audiences |
| `AI & tools` | Specific AI-assisted build methodology; what Vuka is using and why | Demonstrates AI-native operating claim; speaks to founders and DFIs |
| `Studio model` | Arguments for venture building over accelerators; how the co-build model works in practice | Supports the "Venture Engines" thesis; speaks to DFI, investor, and corporate audiences |
| `East Africa` | Market analysis, regulatory observations, sector-specific insights | Demonstrates EA operator depth; speaks to all five audiences |
| `Founder stories` | Named co-build stories from portfolio companies (post-launch) | Primary operational proof once available; speaks to founder audience most directly |
| `Government & public sector` | Digital transformation observations; government digital services sector analysis | Supports the government pathway credibility; speaks to government and DFI audiences |

---

### PAGE 06 — PORTFOLIO (`/portfolio`) — *Hidden at Launch*

**Primary job:** Demonstrate operational track record. The gap registry in the positioning document identifies "named portfolio companies" as the single highest-impact proof investment. This page is the destination for that proof as it is built.

**When to activate:** On completion of the first studio-built venture at a stage where it can be publicly named and described. Do not activate with a half-built venture or a venture that cannot be described with specific outcomes.

---

#### /portfolio Section Map (for when activated)

| # | Section | Content purpose |
|---|---|---|
| P1 | Page header | "What we've built." |
| P2 | Portfolio grid | One card per venture: name, sector, pathway (origination/FiR/spinout), stage, one-sentence description |
| P3 | Individual venture pages (`/portfolio/[venture-slug]`) | Full case study: the problem, the build, the outcome, what Vuka brought, what the founder brought, current stage |
| P4 | CTA | "Building something in East Africa? Start the conversation." → `/work-with-us` |

**Venture page template — key fields:**

The case study format should follow the Sales Pitch Storyboard structure from the positioning document: the problem → the alternatives considered → why they were insufficient → what Vuka built → the outcome → what made this venture possible. This is not a testimonial page. It is a documented proof of the co-build thesis.

---

### PAGE 07 — WORK WITH US (`/work-with-us`)

**Primary job:** Convert all five audiences from interested to in-conversation. This is the final destination of every CTA on the site.

**Positioning role:** The page must not feel like a form. It must feel like the beginning of a real conversation. The audience routing cards above the form serve the same function as the five-audience section on the homepage — they give every visitor a recognisable entry point before they commit to submitting a message.

---

#### /work-with-us Section Map

| # | Section | Content purpose | Notes |
|---|---|---|---|
| WU1 | Page header | "Tell us where you're starting from." | Not "Contact us" — naming the action, not the mechanism |
| WU2 | Audience routing cards (×5) | Five cards; each names the audience's situation and the specific CTA for their pathway | Cards self-sort the visitor before they reach the form; also functions as a reminder of all five pathways for visitors who arrived via a single-pathway page |
| WU3 | Contact form | Name · Organisation (optional) · Enquiry type (dropdown) · Message field | Dropdown maps to all six entry points (five audience types + "something else") |
| WU4 | Form success state | "Message received. We'll get back to you within two working days." | Redirect to `/our-thesis` on success — keeps visitor in the Vuka ecosystem |
| WU5 | Alternatively | "Prefer to reach out directly?" — email address | Removes friction for visitors who distrust forms; does not replace the form |

---

### PAGE 08 — ABOUT (`/about`) — *Phase 2 Addition*

**Note:** This page is not present at launch. The "Founded By" section on the homepage carries the founder credentialing function for the launch site. An `/about` page becomes appropriate once Vuka has a team beyond Paul — at which point the page shifts from a founder bio to a team and culture page that reinforces the studio's operating depth.

**When to add:** When a second named team member joins, or when the studio has completed its first two ventures and wants a longer-form institutional narrative.

---

## Audience Journey Maps

The following maps trace each audience from a realistic entry point to the desired conversion action.

---

### Journey 1 — Individual Founder

**Entry point:** LinkedIn post → `paulmandele.co` essay → `vukaventures.co`
**Homepage moment:** H3 (Who We Work With) → Founders card
**Next destination:** `/founders`
**Then:** `/what-we-do/founder-in-residence`
**Conversion action:** Application to Founder-in-Residence
**Secondary path:** `/our-thesis` → essay → `/work-with-us`

**Key friction points to eliminate:**
- The site must not feel like another accelerator. The hero copy and the founders page both lead with the negation ("not coaching") before the proposition.
- The FiR equity terms must be visible before the application — a founder who arrives without knowing the commercial structure will not apply.

---

### Journey 2 — Corporate Innovation Lead

**Entry point:** LinkedIn or referral via Smart Foundry network → Homepage
**Homepage moment:** H3 (Who We Work With) → Corporates card, OR H4 (How We Build) → Corporate Spinout card
**Next destination:** `/corporates`
**Then:** `/what-we-do/corporate-spinout`
**Conversion action:** "Start a spinout conversation" → `/work-with-us` form with "corporate spinout" selected
**Secondary path:** `/our-thesis` → "Venture Engines" essay → back to `/work-with-us`

**Key friction points to eliminate:**
- The equity warrant question must be addressed before it is asked — a corporate reading about fee-for-service-plus-equity-warrant without understanding what that means will not convert.
- The IP ownership question must be answered on the pathway sub-page, not left for the first meeting.

---

### Journey 3 — Government Agency

**Entry point:** Direct referral or government digital services sector network → Homepage
**Homepage moment:** H3 → Government agencies card
**Next destination:** `/government`
**Then:** `/what-we-do/government-innovation`
**Conversion action:** "Explore a government engagement" → `/work-with-us` form with "government engagement" selected
**Secondary path:** `/our-thesis` → "Venture Engines" essay → conversation on how the thesis applies to public sector

**Key friction points to eliminate:**
- The procurement question must be addressed explicitly and without condescension. Government visitors who read "startup speed" without a concrete definition will assume naivety and stop reading.
- The page must distinguish Vuka from a consultancy firmly but not dismissively — the visitor may have existing consultancy relationships they value.

---

### Journey 4 — DFI / Development Investor

**Entry point:** Paul's LinkedIn thought leadership → `paulmandele.co` → `vukaventures.co`
**Homepage moment:** H5 (Where We Come From) + H6 (Our Thesis) + H8 (Studio Investment)
**Next destination:** `/investors`
**Then:** `/our-thesis` → "Venture Engines" essay
**Conversion action:** "Talk to us about studio investment" → `/work-with-us` form with "DFI/investor" selected
**Secondary path:** `/studio-journal` → methodology and build-in-public content → `/work-with-us`

**Key friction points to eliminate:**
- Stage honesty must be explicit and visible — a DFI who cannot tell what stage the studio is at will not advance the conversation. The investors page must state clearly what Vuka has completed, what it is building toward, and what the investment conversation looks like right now.
- The portfolio page being hidden (for now) is the right call — claiming portfolio depth that doesn't exist is the fastest way to lose DFI credibility.

---

### Journey 5 — Technology Partner (Big Tech)

**Entry point:** Direct outreach from Vuka team (not inbound — this relationship is initiated by Vuka) → Homepage as supporting credential
**Homepage moment:** H9 (Partnership Stack)
**Next destination:** `/partners`
**Then:** `/our-thesis` → $100 Problem essay (appropriate here — this is the access gap argument, directly relevant)
**Conversion action:** "Explore a partnership" → `/work-with-us` or direct email to partnership contact
**Secondary path:** `/studio-journal` → `Infrastructure` tag articles → conversations about specific program mechanics

**Key note:** The technology partner journey is primarily outbound-initiated. The `/partners` page functions as a credential for the partnership conversation that is already happening, not as an inbound acquisition page. It must be able to stand alone as a leave-behind after an initial partner conversation.

---

## Content Hierarchy by Positioning Priority

The following matrix maps each page and section to the positioning document's five-section structure, confirming that all positioning elements have a home on the site and no page is orphaned from the strategic argument.

| Positioning element | Primary page home | Secondary appearances |
|---|---|---|
| Founding thesis ("Venture Engines") | `/our-thesis` (featured) | Homepage H6; `/investors`; `/corporates`; all pathway FAQs |
| Co-execution model | `/what-we-do` + all four sub-pages | Homepage H4; all five audience pages |
| Five-audience structure | Homepage H3; `/who-we-work-with` | Footer navigation; `/work-with-us` routing cards |
| Infrastructure thesis / $100 Problem | `/our-thesis` (secondary) | `/founders`; `/partners`; Homepage H9 |
| East Africa operator depth | `/investors` (primary proof layer); `/government` | Homepage H5; all pathway sub-pages |
| Big tech partnership pursuit | Homepage H9; `/partners` | `/founders`; `/our-thesis` footnote |
| AI-native build infrastructure | `/what-we-do` sub-pages | Homepage H4; `/founders`; `/studio-journal` (AI & tools tag) |
| 90-day sprint methodology | All four pathway sub-pages | `/founders`; `/corporates`; `/government` |
| Equity alignment | `/what-we-do/corporate-spinout`; `/what-we-do/founder-in-residence` | `/corporates`; `/founders`; competitive responses |
| Stage honesty | `/investors` | Homepage H5; portfolio page (when live); brag points |
| Sector focus | `/what-we-do` sector strip | Homepage H7; `/investors`; `/founders` |
| Portfolio proof | `/portfolio` (when live) | Homepage H4 (with portfolio link once active); all audience pages |
| Paul Mandele credentialing | Homepage H5; `/about` (Phase 2) | All essay bylines; `/investors`; `/founders` |
| Published intellectual proof | `/our-thesis` | Homepage H6; all audience pages proof sections |

---

## URL Structure and Naming Conventions

All URLs use lowercase, hyphenated slugs. No trailing slashes. No underscores.

```
vukaventures.co/                              → Home
vukaventures.co/what-we-do                   → Pathways overview
vukaventures.co/what-we-do/studio-origination
vukaventures.co/what-we-do/founder-in-residence
vukaventures.co/what-we-do/corporate-spinout
vukaventures.co/what-we-do/government-innovation
vukaventures.co/who-we-work-with             → Audience index
vukaventures.co/founders
vukaventures.co/corporates
vukaventures.co/government
vukaventures.co/investors
vukaventures.co/partners
vukaventures.co/our-thesis                   → Thesis index
vukaventures.co/our-thesis/venture-engines   → Individual essay (example)
vukaventures.co/our-thesis/the-100-problem   → Individual essay
vukaventures.co/studio-journal               → Journal index
vukaventures.co/studio-journal/[slug]        → Individual article
vukaventures.co/portfolio                    → (hidden at launch)
vukaventures.co/portfolio/[venture-slug]     → Individual venture (when live)
vukaventures.co/work-with-us
```

**Redirect notes:**
- `/contact` → `/work-with-us` (301 redirect — anticipate visitors typing this directly)
- `/apply` → `/what-we-do/founder-in-residence` (301 — anticipate founder shortcut)
- `/thesis` → `/our-thesis` (301 — shorthand reference used in outreach)

---

## Launch Readiness by Page

| Page | Launch status | Condition for activation |
|---|---|---|
| `/` (Home) | ✅ Launch with site | All sections except H8 (Studio Investment) can be live at launch; H8 requires investor page to be live first |
| `/what-we-do` | ✅ Launch with site | Overview page plus all four sub-pages — FAQs can be populated progressively |
| `/who-we-work-with` | ✅ Launch with site | Index page and all five audience sub-pages |
| `/our-thesis` | ✅ Launch with site | Requires at minimum the "Venture Engines" essay and the thesis statement block |
| `/studio-journal` | ✅ Launch with site | Empty state copy ("Nothing here yet. We're writing this one.") handles launch with no articles |
| `/portfolio` | ⏸ Post-launch | Activate on first completed venture; do not launch with placeholder |
| `/work-with-us` | ✅ Launch with site | Full form and all five routing cards |
| `/about` | ⏸ Phase 2 | Activate when second named team member joins, or at 2-venture completion |

---

## Open Decisions Requiring Resolution Before Build

| Decision | Options | Recommendation |
|---|---|---|
| **Domain** | `vukaventures.co` confirmed | Update all contact email addresses from `hello@vuka.studio` (referenced in existing copy files) to `hello@vukaventures.co` before site goes live |
| **`/who-we-work-with` vs. `/who-we-build-with`** | v1 used "build with"; v2 used "work with" to accommodate non-builder audiences | Use `who-we-work-with` — it is the more accurate framing for DFI, investor, and partner audiences |
| **Thesis success state redirect** | v1 referenced `paulmandele.co`; v2 referenced `vuka.studio/our-thesis` | Redirect to `vukaventures.co/our-thesis` — keeps visitor in the Vuka ecosystem |
| **Paul's personal site cross-link** | `paulmandele.co` appears in footer in some copy versions | Remove from footer; retain only as a bio link on the Homepage H5 / Founded By section and on essay bylines |
| **Portfolio page placeholder** | Some designs show a "coming soon" state | Do not use a "coming soon" placeholder. Use the redirect logic above and let the `/studio-journal` carry build-in-public proof until the first venture is complete. |
| **Email capture** | `/our-thesis` suggests a subscribe option | A simple email capture ("We publish new arguments when we have something specific to say") is appropriate here — low friction, no newsletter commitment implied |

---

*Vuka Ventures — Information Architecture & Page Mapping*
*Prepared by Paul Mandele · June 2026*
*Cross-reference: vuka-positioning-messaging-sales.md · vuka-website-ux-copy-v2.md · venture-studio-strategy-paulmandele.md*
*vukaventures.co · me@paulmandele.co*
