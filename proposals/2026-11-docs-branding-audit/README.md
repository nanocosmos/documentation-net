# Docs branding, naming and structure audit — proposal

**Scope:** every page under `docs/` (≈ 200 files, ≈ 205k words), `sidebars.js`, `docusaurus.config.js`, `src/pages`, `src/components`, checked against the nanocosmos brand guidelines, marketing-context (§1b two cores, §5 competitors, §11 style guide), and the sales and copywriting skills. Competitor docs and positioning for Dolby OptiView, Vindral and Red5 were read on 2026-11-15.
**Status:** proposal for discussion — nothing in the docs has been changed on this branch.
**Date:** 2026-11-15
**Per-page findings:** [findings-by-section.md](findings-by-section.md) (file:line references for every issue summarised here).

---

## 1. Executive summary

1. **The docs still tell the old brand story.** Marketing, sales and the brand guide say *nanocosmos* is the platform, with two cores — **nanoStream → nanoStudio**. The docs say **"nanoStream Cloud"** 357 times in 92 files, open with a "nanoStream Cloud" navbar tab and sidebar, and title the footer column "nanoStream Cloud". The correct platform phrase ("the nanocosmos platform") appears 5 times. nanoStudio is missing from the landing page entirely.
2. **The player has five names; the right one is used 6 times.** "H5Live Player" (147), "nanoPlayer" (119 incl. code), "nanoStream H5Live Player", "H5LivePlayer" vs. **nanoStream Player** (6). "H5Live" should survive only as the name of the technology/fallback protocol.
3. **MOQ — our clearest technical differentiator — is invisible in the core docs.** It appears in zero platform pages (overview, getting started, ingest, security, Guardian, captions, support) and the player landing page. Where it does appear, it's spelled **"MoQ" 89 times** (brand: **MOQ**). Red5 shipped MOQ only as beta in 2026; Dolby's docs don't mention it at all. We are underselling a lead we actually have.
4. **The Builder Hub is our strongest docs/onboarding asset and it's buried** — tab 8 of 10, absent from the landing page, not linked from any getting-started page, and its free-account promise (*every feature, 50 GB/month, no card*) contradicts three other sections ("trial with limitations / Upgrade to Premium", "business upgrade required", "contact sales"). None of the three competitors has an equivalent signed-in sandbox covering every tool.
5. **Three generations of the same docs ship side by side.** Dashboard v2 (`cloud-frontend/`, 13 pages), v3/v4 (`cloud-frontend-v3/`, 12 pages, linked from sales emails) and v5 (`dashboard/`); Webcaster v5 and v6 with identical page titles; Player v4 and v5 lines. Legacy pages have no sidebar and no legacy banner, so search and sales links land readers on outdated UIs that contradict current behaviour.
6. **Quality problems that a customer would notice today** — German sentences in two English pages; the word "for" replaced by `htmlFor` **202 times** in the player release history; a Docusaurus template blog ("Welcome", "First Blog Post") live at `docs.nanocosmos.net/blog`; `/docs/user_roles` (linked from sales material) returns 404; ≈ 40 broken links/anchors hidden by `onBrokenLinks: 'log'`; syntax errors in copy-paste code samples; a demo JWT in the captions docs that expires **2026-12-08**; and one page that appears to be copied from a third-party guide without attribution.

**Recommendation in one line:** make the docs tell the same story as marketing — *nanocosmos, produce and stream: nanoStream → nanoStudio, MOQ-first, try everything in the Builder Hub* — by (a) fixing the customer-visible defects now, (b) a mechanical naming sweep, (c) restructuring navigation around the two cores with the Builder Hub as the front door, and (d) retiring legacy generations behind redirects.

---

## 2. Naming: what the docs say vs. what the brand says

Counts are occurrences / files across `docs/` + `src/` (case-sensitive `grep`, 2026-11-15). Code identifiers (`NanoPlayer` class, `h5live.*` config keys, `bintu-*` hostnames, `X-BINTU-*` headers) are **not** violations and must not be touched.

| Brand rule (correct) | Found in docs | Count | Action |
|---|---|---|---|
| **nanocosmos** / the nanocosmos platform | "nanoStream Cloud" | **357 / 92** | Replace in prose; once per landing page "formerly known as nanoStream Cloud" |
| | "nanoStream Platform" / "nanoStream platform" | 3 | Replace |
| | "nanoStream Control" used as product name | 1 (`cloud/security.md:8`) | Control is a narrative cluster — drop |
| | "Nanocosmos", "NanoStream", "Nanostream" | 4 | Lowercase n |
| **nanoStream Player** | "H5Live Player" / "H5Live player" / "H5live Player" / "h5Live Player" / "H5LivePlayer" | ≈ 150 / ≈ 80 | Replace |
| | "nanoStream H5Live Player" (mostly "Introduced in … Version 4.x") | ≈ 35 | → "Since nanoStream Player 4.x" |
| | "nanoPlayer" as product name in prose | ≈ 40 (excl. API ref) | Replace; keep `NanoPlayer` / `nanoPlayer.setup()` in code |
| **H5Live** = technology / fallback protocol only | used as product name in headings ("H5Live Overview", "Secure playback with H5Live") | many | Rename headings; add one "Playback technologies: MOQ, H5Live, H5Live-HLS" page as the single definition |
| **MOQ** (Media over QUIC) | "MoQ" | **89 / 14** (74 in analytics pages, sidebar label "MoQ") | Replace; expand on first use |
| **nanoStream Dashboard** | "nanoStream Cloud Dashboard" (68 / 31), "Cloud Dashboard", "nanoStream Cloud/Bintu Dashboard", "nanoStream Cloud Customer Dashboard", "cloud frontend" | ≈ 100 | Replace; sidebar key too |
| **Guardian** | "nanoStream Guardian" | 28 / 8 (incl. page title) | Replace |
| **nanoStream Analytics** | "nanoStream Cloud Analytics" | 4 | Replace |
| **nanoStream Webcaster** | "WebRTC.live" as current name; library called "Webcaster API / Client API / SDK / Browser API / NanoWebcaster / WebRTC Docs" | 4 + many | One product name; one library name ("nanoStream Webcaster SDK") |
| **nanoStudio Chroma** | heading "Chroma Key"; tool called "Chroma Key Setup", "Chroma Setup Tuner", "workbench" | — | Product name in headings; one tool name |
| (not a sanctioned name) | **"nanoStream Studio"** at `studio.nanostream.cloud` (`dashboard/visual_enhancements.md:31-53`) | 1 page | **Collides with nanoStudio.** Needs a product decision |
| (outdated product) | "bintu.live" (11), "nanoMeet" (1), "WebRTC.live" (4) | 16 | Remove / "formerly" |
| "ultra-low latency" | "ultra low latency" (2), "Ultra-Low latency", "ultra-low-latencyy" | 5 | Fix |
| Latency language | "\<500ms" as marketing claim (`cloud/cloud_overview.md:49`), "Sub-second latency (under 500 ms)" band (`builder_hub_analytics_boards.md:40`), footer tile "Sub-Second Latency", "100% SLA", "100% uptime" | — | Marketing claims need sign-off; technical specs belong on one latency page (see §4.4) |
| bintu API casing | "bintu" 837 / "Bintu" 140; "bintu API", "Bintu API", "bintu REST API", "nanoStream API" | — | **Decide** (see §7). Sales uses "Bintu API" |
| AI Live Captions | "Live Captions" (cloud, dashboard) vs "AI Live Captions" (Builder Hub) | — | Align on "AI Live Captions" |
| Builder Hub | consistent ("Builders Hub" 0); one unlinked lowercase "builder hub" (`cloud/live_captions.md:35`) | — | Fix the one; rule: "nanocosmos Builder Hub" on first mention |

**Domains.** 763 `.nanocosmos.de` references in 106 files. Most are real service hostnames (`bintu-*.nanocosmos.de`, 400+) and are fine until engineering decides on `.net` aliases. But customer-facing *company* links are mixed: `www.nanocosmos.de` (97) vs `www.nanocosmos.net` (67), `sales(at)nanocosmos.de` vs `.net`, `docs.nanocosmos.de` (23) vs `docs.nanocosmos.net`, plus internal hosts exposed to customers (`doc.pages.nanocosmos.de` — 66 links incl. the bintu API reference; `web.pages.gitlab.nanocosmos.cloud/captions-workflow`; `bintu-nmessenger.autodevops-prod.nanostream.cloud`). The footer is entirely `.de`.

---

## 3. Builder Hub — how to position it

### 3.1 What it is today (according to the docs)

The hub pages present it as **two things at once**: an onboarding layer/sandbox (guest mode on a shared demo account, sample content, test streams, 30-second recordings, simulated viewer counts, "Start For Free") *and* a light primary UI for customers (production accounts with no limits, streams list, live wall, analytics boards, token management). It shares the nanoStream Dashboard login, and the AI helper already rewrites docs links for Dashboard sign-up/sign-in to the hub.

What no page says:
- where it sits relative to the two cores (its menu groups — Stream / Analytics / Security / Multi-Brand — cut across nanoStream and nanoStudio; "Multi-Brand" is nanoStudio under another name);
- what still requires the nanoStream Dashboard (organisation & users, API keys, Live Processing config, push targets, Guardian, webhooks);
- whether a free hub account is the same thing as a Dashboard "trial".

### 3.2 Recommended positioning

> **The nanocosmos Builder Hub is the hands-on entry point to the nanocosmos platform.** Try, set up and run nanoStream and nanoStudio features in one place — as a guest, on a free account, or on your production account. The **nanoStream Dashboard** remains the full console for organisation, users, API keys and advanced stream settings; the **APIs** are for automation.

Three surfaces, three jobs — say this the same way everywhere:

| Surface | Job | Audience |
|---|---|---|
| **Builder Hub** (builder.nanocosmos.net) | Try → set up → go live, guided, every tool | Evaluators, free accounts, customers who want a guided path |
| **nanoStream Dashboard** (dashboard.nanostream.cloud) | Full console: org, users, keys, every stream option | Customers' operators/admins |
| **APIs** (bintu REST API, Real-Time API, Player/Webcaster SDKs, Analytics API) | Automate and integrate | Developers |

The Builder Hub is **not** a third core and carries no nano prefix — correct as it is. It is the door to both cores.

### 3.3 Docs placement — recommendation

**Make the Builder Hub the docs' front door, keep its navbar tab, and move it to position 1.** Don't fold it into per-feature sections: its account model (guest / free / production), menu, Developer mode, Packages and AI helper cut across every feature and would be scattered over seven sections. Concretely:

1. Navbar: Builder Hub first (see §5.1 for the full navbar).
2. Landing page (`src/pages/index.js`): hero CTA **"Start in the Builder Hub"** → builder.nanocosmos.net, secondary "Read the docs" / "Watch the demos". Today the hero has no CTA (a "Product & Services" button is commented out).
3. Every getting-started page (`cloud/cloud_getting_started`, `dashboard/getting_started`, `nanostudio/chroma_key_getting_started`) step 1 = "Create a free account in the Builder Hub (50 GB/month)"; Dashboard/API as the "prefer the console or the API?" path.
4. **Thin hub pages, canonical facts once.** Hub tool pages describe the UI and per-account behaviour only; bitrate guidance, ABR limits, token lifetimes, caption formats, recording limits and feature gating live on one canonical page each and are linked. (Drift already exists: 1080p ABR example is 4,500 kbps in the hub, 3 Mbit/s in the Dashboard docs.)
5. **Two-way link pattern** on every feature: "📘 Detailed documentation →" box on each hub tool page (missing today on ABR, AI Live Captions, Tokens, Analytics, Create a stream, Developer mode), and "▶ Try it in the Builder Hub →" box on each feature page (missing on ≈ 13 pages, listed in the findings file).
6. Replace the stale **Samples** tab with the hub's **Demos** page (the Samples page has no sidebar, links `webcaster.nanocosmos.de` v5 and says "(Work in progress)").

### 3.4 Contradictions to resolve before the hub can be the front door (product decisions)

| Topic | Builder Hub says | Elsewhere says |
|---|---|---|
| Free tier | Free account: every feature, 50 GB/month, no card; includes nanoStudio and multi-camera | Dashboard: "trial mode with certain limitations… Upgrade to Premium"; Real-Time API: "requires a business upgrade"; nanoStudio: "enabled per organisation… contact sales" |
| Test vs real streams | "Create a stream" always makes a test stream; ABR, Recording, Captions tools create real streams | Home's "Create your first stream" opens Create a stream; Create a stream says go to Home for your own stream (circular) |
| Recording vs Replay | Live & Replay Player demo → "Record on demand" | Replay is a Live Processing switch; On-Demand Recording is a Real-Time API feature (two different things) |
| Analytics | Hub boards are "nanoStream Analytics" | nanoStream Analytics = the Analytics Dashboard app at metrics.nanostream.cloud; Dashboard has its own usage view → three analytics UIs, no page relating them |
| Packages | Basic "up to 2,500 viewers" before Starter "up to 500"; "Secure playback" add-on vs "Token security" included | — (prices should not be restated in docs at all; link nanocosmos.net/pricing) |

---

## 4. Competitive positioning — what Dolby OptiView, Vindral and Red5 do, and what it means for us

### 4.1 Snapshot (read 2026-11-15)

| | **Dolby OptiView** | **Vindral** | **Red5** | **nanocosmos today (docs)** |
|---|---|---|---|---|
| Brand architecture | Umbrella "Dolby OptiView": Player (ex-THEOplayer), Live (ex-THEOlive), Real-time Streaming (ex-Dolby.io/Millicast), Ads, Ad Engine | Vindral Live (LiveCloud managed / LiveEngine self-managed), Vindral Composer | Red5 Cloud (managed), Red5 Pro (self-hosted), SDKs, Open Source, "TrueTime" solutions | Docs: "nanoStream Cloud" + many component names; marketing: nanocosmos → nanoStream + nanoStudio |
| Homepage headline | "Immerse fans. Monetize the moment. Personalize every experience." (sports, betting, esports) | "Live Video Ahead of the Curve." + Emmy 2026 credential | "Live Streaming Solutions and Infrastructure for Developers" | Docs hero: "Official Documentation" (no positioning, no CTA) |
| Latency claim | "under half a second" / "under 1 second" (inconsistent); no ms on homepage | "sub-second glass-to-glass"; 600 ms buffer in a named 4G test vs. anonymous "leading WebRTC vendor" | **"sub-250 ms"** in the headline | Mixed: "around 1 second", "\<500ms", "Sub-Second" |
| MOQ | **Not mentioned** (WebRTC/WHIP/WHEP/SRT) | Central; spelled **MoQ**; "the only MoQ implementation that's both production-ready and infrastructure-ready" | **MOQ (beta)**, Pro since v15.4.0 (Apr 2026), Cloud limited beta; explains pronunciation | Production MOQ is the player-v5 default — but absent from core pages; spelled MoQ 89× |
| Free entry | None found ("Talk to our team") | "Try for free" test account, 24/7 demo channels | 30-day Pro trial, free Cloud sign-up; MOQ by beta request | **Free account, every feature, 50 GB/month, no card** — only stated inside Builder Hub docs |
| Sandbox | Dashboard + "Test Center" | demo.vindral.com, demo channels | /demo | **Builder Hub: guest + free + production, every tool, AI helper** — unmatched, but buried |
| Docs IA | Product tabs (Player · Ads · Streaming); Real-time sidebar by **workflow stage**: Capture → Broadcast → Distribution → Playback; getting-started *ladder* (Dashboard → web app → REST API → mobile) | One landing page: Getting started (task-based: OBS, browser, embed, demo channels) · Deployment · Build · Monitor & debug · API reference | Two competing entry points (/developer-zone and /docs); SDK downloads behind login | 10 navbar tabs by product/component, three dashboard generations, two Webcaster generations |
| AI-readiness | **llms.txt + llms-full.txt per product, CLAUDE.md/AGENTS.md rules file** | Markdown-served docs | Not seen | Builder Hub has an AI helper and Agent Skills — but **`docs.nanocosmos.net/llms.txt` is 404** |
| Rename handling | "X is the new name for Dolby.io (Millicast)" banner on every page — but legacy names linger in nav/login/API names and hostnames sprawl (3 docs hosts, 2 dashboard hosts) | Naming drift (LivePackager vs Packager, three MoQ spellings, two Composer docs hosts) | Product-name sprawl, duplicate FAQ entry | Same problems, larger scale |

### 4.2 Where we genuinely lead — and the docs hide it

1. **Production MOQ.** We ship MOQ as the default transport with automatic H5Live fallback. Dolby doesn't talk about MOQ; Red5 is in beta. Only Vindral is at parity (and they spend a whole page on it). Our docs bury it in a v5 migration-guide config option and call it a "feature".
2. **The Builder Hub.** No competitor offers a guest → free → production sandbox covering ingest, playback, ABR, recording, captions, tokens, analytics, multi-camera and chroma key in one signed-in place.
3. **A real free tier** (50 GB/month, every feature, no card) vs. Dolby (none), Red5 (30-day trial), Vindral (test account).
4. **Cloud-side production (nanoStudio Chroma)** — one ingest, many branded outputs, no on-site server — directly against Vindral Composer's on-site model. The docs landing page doesn't mention nanoStudio at all.
5. **Fully managed, own CDN, one support relationship** — the clean counter to Red5 Pro / Vindral LiveEngine self-hosting complexity. Not stated anywhere in the platform overview.

### 4.3 Recommendations for brand and marketing repositioning (docs as the proof layer)

Developers meet the brand in the docs, not on the homepage. Competitors' docs are where their positioning is most visibly *inconsistent* (Dolby's legacy names, Vindral's MoQ spellings, Red5's two doc roots). Being the vendor whose docs are clean and consistent is itself a positioning statement for "Real-Time Video That Simply Works."

1. **Lead with one architecture sentence on every entry page.** "nanocosmos is one platform with two cores: **nanoStream** streams it, **nanoStudio** produces it — try both in the Builder Hub." Mirrors Dolby's umbrella clarity without their sprawl. Use "formerly nanoStream Cloud / H5Live Player / WebRTC.live" exactly once, on the relevant landing page (Dolby's rename banner pattern), never in running text.
2. **Own "MOQ in production" — with proof, not superlatives.** Add a top-level *Playback technologies* page: MOQ primary, H5Live fallback (WebSocket/MSE), H5Live-HLS on older iOS; browser matrix; how fallback works; analytics per protocol. Write MOQ, expand it once, follow Red5's candid tone ("MOQ isn't a drop-in replacement for WebRTC"). Avoid Vindral's "the only…" claims — they invite scrutiny. *Note for marketing:* Vindral and parts of the industry write "MoQ"; the IETF working group is "moq". We've chosen **MOQ** — apply it consistently, including UI labels like "Live-MoQ" in the Live + Replay player.
3. **Make "try it free, with everything" the developer CTA.** Free account + Builder Hub on the docs landing page, every getting-started page and the footer (which currently links "Free Trial" to `info.nanocosmos.de/free-trial`). This is the one area where all three competitors are weaker.
4. **Latency: keep marketing language, publish engineering numbers once.** Competitors put numbers in headlines (Red5 "sub-250 ms", Vindral "600 ms" test). Our brand rule (no ms values in marketing copy) is defensible, but the docs need *one* technical latency page with measured values per protocol and latency mode, with the test conditions stated (Vindral's pattern, minus the anonymous comparator). Then remove the scattered "\<500ms", "around 1 second", "under 500 ms" claims elsewhere. Confirm with marketing that technical specs in docs are allowed (marketing-context §11 allows sub-500ms "only when explicitly requested … technical spec sheet").
5. **Say "fully managed" explicitly** — Red5 and Vindral both present a managed vs. self-hosted fork. Our answer is one fully managed platform with our own CDN; put that in the platform overview and FAQ, since it is a buying criterion in comparisons.
6. **Become the AI-ready docs in this space.** Dolby is ahead (llms.txt + rules file). We already have the Builder Hub AI helper and Agent Skills. Add `llms.txt` / `llms-full.txt` (Docusaurus plugin), an "Build with AI coding assistants" page linking our skills, and markdown-clean pages. Cheap, visible, and a differentiator against Vindral and Red5.
7. **Organise the streaming docs by workflow stage** (Dolby's strongest IA idea): Ingest → Process → Deliver & Play → Protect → Measure. It maps cleanly to our Delivery / Control / Experience narrative *without* using those cluster words as product names.
8. **Don't follow the vertical-headline route in docs.** Dolby (sports) and Vindral (casino/racing) lead with verticals; that belongs on nanocosmos.net solution pages. Docs should stay use-case-neutral but offer "recipes" (e.g. *Live casino table with branded outputs*, *Auction with AI Live Captions*) that link the iGaming/auction stories marketing already tells.
9. **One host per job.** Avoid Dolby's three-docs-hosts problem: docs.nanocosmos.net only (redirect `docs.nanocosmos.de`), API reference moved from `doc.pages.nanocosmos.de` to a public docs path, company links on `www.nanocosmos.net`.

---

## 5. Proposed information architecture

### 5.1 Navbar (10 → 7 items; also fixes the navbar width problem for good)

| # | Item | Type | Contents |
|---|---|---|---|
| 1 | **Get Started** | link → Builder Hub overview | Builder Hub docs (accounts, tools, demos, AI helper, developer mode) |
| 2 | **nanoStream** ▾ | dropdown | Platform overview & concepts · Ingest · Process · Deliver & Play (incl. Player) · Webcaster · Protect (Security & Guardian) · AI Live Captions · Analytics |
| 3 | **nanoStudio** ▾ | dropdown | nanoStudio overview · nanoStudio Chroma (getting started, outputs & branding, tuning, troubleshooting) |
| 4 | **Dashboard** | link | nanoStream Dashboard (v5 only) |
| 5 | **APIs & SDKs** ▾ | dropdown | bintu REST API · Real-Time API · nanoStream Player API · nanoStream Webcaster SDK · Analytics API · Build with AI (llms.txt, skills) |
| 6 | **Demos** | link → Builder Hub Demos | replaces "Samples" |
| 7 | **FAQ & Support** | link | real question index, support, network diagnostics |

Right side: search, theme toggle, **"Try free"** button → builder.nanocosmos.net (orange primary CTA per brand).

Order follows the brand rule nanoStream → nanoStudio. Short labels in the bar are fine (as with "Player"); full component names go in sidebars and page titles.

### 5.2 nanoStream sidebar (by workflow stage)

```
nanoStream
├─ Overview — the nanocosmos platform, two cores, fully managed, MOQ-first   (merge cloud_overview + cloud_introduction)
├─ Core concepts — streams, stream groups, organisations, tokens, roles
├─ Quick start → Builder Hub / Dashboard / API paths
├─ Ingest
│   ├─ Overview & protocol comparison (RTMP/RTMPS, SRT, WHIP, Webcaster)   (live_encoding, rewritten)
│   ├─ Encoder setup (OBS, vMix, Osprey, ffmpeg…)                          (_encoder_setup_tabs)
│   ├─ SRT ingest
│   ├─ WHIP ingest  ← moved from webrtc/, RFC 9725, auth story
│   └─ Ingest security & webhooks
├─ Process
│   ├─ ABR & live transcoding (concept)   ← new; Dashboard page stays the UI how-to
│   ├─ Live Processing: thumbnails, motion clips, Live Replay, recording
│   └─ On-Demand Recording (Real-Time API)
├─ Deliver & Play
│   ├─ Playback technologies: MOQ · H5Live · H5Live-HLS   ← new, single definition of "H5Live"
│   ├─ Latency (measured values, modes)                    ← new, single source of numbers
│   ├─ nanoStream CDN & regions (from support.md)
│   └─ nanoStream Player → (own sidebar, see 5.3)
├─ nanoStream Webcaster → (own sidebar, v6 only)
├─ Protect
│   ├─ Security overview
│   ├─ Playback tokens (best practices, revocation)  — canonical token docs
│   ├─ Guardian & misuse detection (merge guardian + security_token_guardian_view + security.md misuse section)
│   └─ Roles & permissions (user_roles)
├─ AI Live Captions (overview, API guide, retrieve captions, transcripts)
├─ Analytics (moved from docs/cloud/ to docs/analytics/; one title per page)
│   ├─ Introduction · Dashboard tour · MOQ · H5Live · Webcaster · ABR · Guardian · World map · AI Live Captions
│   ├─ Alerts (merge stream-alerting + email-notification + troubleshooting §Alerts)
│   └─ Analytics API (docs, error codes, releases)
└─ Real-Time API (switching, recording) — or under APIs & SDKs
```

### 5.3 Other sidebars

- **nanoStream Player:** Get started (intro rewritten MOQ-first, getting started, supported browsers merged into one matrix, migration v4→v5) · Playback & transport (MOQ, latency modes, fast start, reconnect, media error recovery, audio session) · Configuration (stream groups, domain config, source defaults *legacy*) · Switching & ABR (stream switching + updateSource merged) · UI & embedding (customization, fullscreen, video access, iframe + hosted embed merged, WebViews, **Live + Replay**) · Security (player-side config only → links canonical token docs) · Reference (API v5, error codes) · Releases (v5) · **Legacy v4** (API v4, releases v4, STS). Add the 7 pages currently missing from the sidebar.
- **nanoStream Webcaster:** v6 only — Overview (rewritten: Dashboard Webcaster vs SDK, WHIP, playback via nanoStream Player) · Getting started · Features (input sources, screen sharing, device selection, quality, audio/video only, multiple webcasts, reconnect, stats) · Secure ingest (v6 story — currently missing) · API reference · Releases & migration from v5 · FAQ (rewritten for v6). v5 → one "Legacy (deprecated)" category with EOL date, titles prefixed "v5 –".
- **nanoStream Dashboard:** v5 only; sidebar key "nanoStream Dashboard"; add "Dashboard or Builder Hub?" note; rename `analytics.md` to "Usage & viewers"; `changes_v4_v5` either "What's new in v5" or retired.
- **nanoStudio:** unchanged structure (it's the best-wired section); headings use "nanoStudio Chroma"; one tool name; swap Tuning before Outputs to match the setup flow.
- **FAQ & Support:** real question index (MOQ vs H5Live, free tier, browser support, WHIP vs RTMP vs SRT, latency, tokens); move the two player FAQs into the Player section; delete the four orphaned SDK-era FAQ pages; video tutorials moved next to the features they explain.

### 5.4 Retire and redirect

Delete after redirects are in place (`@docusaurus/plugin-client-redirects` only creates a redirect when the source page no longer exists):

- `docs/cloud-frontend/` (13 pages, v2) and `docs/cloud-frontend-v3/` (12 pages, v3/v4) → map each to its `docs/dashboard/` equivalent (full mapping table in findings §3). Keep `assets/cloud-frontend/` until three current pages stop using it.
- `docs/webrtc-v5/` → keep as frozen legacy category (existing customers), or retire with redirects once an EOL date is set.
- `cloud/live-recording-vod` (deprecated), `cloud/network-diagnostics-mtr` (copyright check), `tutorial/getting_started` (empty), `src/pages/empty-markdown-page.md`, the template `blog/` (disable `blog` in the preset), `faq_purchase_and_license`, `faq_devices_support`, `faq_adv_codec_config`, `faq_streaming` (rewrite instead), `nanoplayer_faq` and `nanoplayer_blogposts` stubs, `webrtc/nanostream_webrtc_faq` stub, `components/HomepageFeatures` (unused template).
- **Add now, independent of the restructure:** `/docs/user_roles` → `/docs/cloud/user_roles` (sales links 404 today).
- Every moved page (e.g. analytics into `docs/analytics/`, WHIP into ingest, FAQ renames `faq_WebRTC_*` → `faq_webcaster_*`) gets a redirect. Then update the sales skills to link the new URLs directly (`sales-follow-up` references ≈ 30 docs URLs, incl. `/docs/cloud-frontend-v3/…` and `docs.nanocosmos.de/...`).

---

## 6. Plan

### Phase 0 — customer-visible defects (≈ 1–2 days, no decisions needed)

- [ ] Translate German text: `cloud/bintu_api.md:50,53`, `dashboard/alerts_and_advices.md:71`
- [ ] `htmlFor` → `for` (202×) in `nanoplayer/nanoplayer_release_history.md`
- [ ] Disable the template blog (`blog: false` in the preset) and delete `blog/`, `src/pages/empty-markdown-page.md`
- [ ] Redirect `/docs/user_roles` → `/docs/cloud/user_roles`; fix `dashboard/user_management.md:12-14`
- [ ] Fix the ≈ 40 broken links/anchors listed in the findings file, then set `onBrokenLinks` / `onBrokenMarkdownLinks` to `'throw'` so the build catches regressions
- [ ] Fix copy-paste code bugs: `nanoplayer_getting_started.md:49-50` (live editor), `webrtc/nanostream_webrtc_multiple_webcasts.md:31,42`, `…_reconnect.md:49`, `…_input_sources.md:168`, `migration_guide_v6.md:160,260,273`, `faq_WebRTC_devices.md:30,37`
- [ ] Correct the stream-state table (`deleted` described as `ended`) in `dashboard/stream_overview.md:22-26`
- [ ] Replace the demo JWT expiring 2026-12-08 in `cloud/live_captions_nmessenger_connect_for_clients.md:110-115`; remove the internal `autodevops-prod` hostname
- [ ] Legal check / rewrite of `cloud/network-diagnostics-mtr.md` (near-verbatim third-party MTR guide, no attribution)
- [ ] Replace internal `web.pages.gitlab.nanocosmos.cloud/captions-workflow` links with the Builder Hub
- [ ] Resolve factual contradictions (need a one-line answer each from product): token default expiry (2 weeks vs 24 h), who may create playback tokens (nanoAdmin only vs nanoUser), Live Captions enabled-for-all vs 403, `targetLanguage` vs `targetLanguages`, Whisper availability, Guardian `/referrer` vs `/referer`, `source.defaults.service` obsolete in v5 or not, Webcaster + live transcoding supported or not, WHIP bearer auth

### Phase 1 — naming sweep (≈ 3–5 days incl. review)

Mechanical replacements from the table in §2, prose only, reviewed page by page (code, config keys, hostnames and API names excluded). Includes sidebar keys/labels, page titles, the 13 analytics pages all titled "Analytics Dashboard", navbar `sidebarid` typos (should be `sidebarId`), footer column title, landing page components. Fix the generated player API text in the player repo's JSDoc so the next regeneration doesn't reintroduce "(H5Live)", "nanoStream Cloud" and "MoQ".

### Phase 2 — structure (≈ 1–2 weeks)

Navbar and sidebars per §5; move analytics to `docs/analytics/`; WHIP to ingest; retire legacy generations with redirects; MDX partials for repeated boilerplate ("Before starting / sign up" box on ≈ 20 pages in 3 variants, "Enabled packages" note, "Find your API key" tip, RBAC table, ingest endpoint constants repeated in ≈ 15 Webcaster snippets); Builder Hub cross-link boxes both ways.

### Phase 3 — content rewrites (≈ 2–3 weeks, can run in parallel per section)

New/rewritten: platform overview (two cores, fully managed, MOQ-first) · Playback technologies · Latency · ABR concept · Player introduction · supported browsers (one matrix) · Webcaster v6 introduction (currently a verbatim copy of the 2018 v5 marketing intro) · Webcaster FAQ for v6 · platform FAQ · landing page in core order with Builder Hub CTA.

### Phase 4 — positioning & AI readiness (≈ 1 week)

`llms.txt` / `llms-full.txt`; "Build with AI" page (Agent Skills, AI helper); recipes for top verticals linking marketing's stories; domain consolidation (`docs.nanocosmos.de` → `.net`, public API reference host); footer rebuilt on `.net` with Builder Hub free-account CTA and page version per brand guide.

---

## 7. Decisions needed (owner in brackets)

1. **Builder Hub vs Dashboard roles** — confirm the wording in §3.2 and what stays Dashboard-only. [product]
2. **Free tier** — is "every feature, 50 GB/month" true for nanoStudio, Real-Time API, multi-camera? Retire "trial / Upgrade to Premium" wording? [product, sales]
3. **REST API public name** — "bintu API" (lowercase, as most docs), "Bintu API" (sales), or "nanoStream REST API"? Same question for the "bintu token" credential. [product, marketing]
4. **"nanoStream Studio"** (`studio.nanostream.cloud`, Visual Enhancements) — part of nanoStudio? rename? [product]
5. **"nanoStream Real-Time API"**, **"Switch Player"**, **"nanoStudio Replay"** — confirm as sanctioned names or rename. [marketing]
6. **One name per tool** — Multi-Camera Switching; On-Demand Recording vs Live Processing recording; Live Replay; AI Live Captions; nanoStudio Chroma tool name (Chroma Key Setup vs Chroma Setup Tuner). [product, marketing]
7. **Latency numbers in docs** — allow one technical latency page with measured values? Retire "\<500ms", "100% SLA", "100% uptime", "Sub-Second Latency" tiles? [marketing, legal]
8. **Customer-facing hostnames** — keep `bintu-*.nanocosmos.de` or introduce `.net` aliases? Move the bintu API reference off `doc.pages.nanocosmos.de`? [engineering]
9. **Webcaster v5 and Player v4 end-of-life dates** — needed to label or retire legacy docs. [product]
10. **Real-Time API placement** — under nanoStream, or under APIs & SDKs only? [product]
