# Findings by section

Companion to [README.md](README.md). Paths are relative to `docs/` unless noted. Line numbers refer to `main` at commit `5023efb` (2026-11-15). "→" = suggested replacement. Code identifiers (`NanoPlayer`, `h5live.*`, `bintu-*` hosts, `X-BINTU-*` headers) are excluded from naming findings.

Contents
1. [Platform — `cloud/` (incl. analytics pages)](#1-platform--cloud)
2. [nanoStream Player — `nanoplayer/`](#2-nanostream-player--nanoplayer)
3. [nanoStream Dashboard — `dashboard/`, `cloud-frontend/`, `cloud-frontend-v3/`](#3-nanostream-dashboard)
4. [nanoStream Webcaster — `webrtc/`, `webrtc-v5/`, Webcaster FAQ](#4-nanostream-webcaster)
5. [Builder Hub, nanoStudio, Real-Time API, FAQ, Samples, landing page](#5-builder-hub-nanostudio-real-time-api-faq-samples-landing-page)
6. [Site-wide (config, footer, build)](#6-site-wide)
7. [Broken links and anchors — consolidated list](#7-broken-links-and-anchors)
8. [Cross-section contradictions — consolidated list](#8-cross-section-contradictions)

---

## 1. Platform — `cloud/`

**Section counts:** "nanoStream Cloud" 132 / 25 files (32× "nanoStream Cloud Dashboard", 11× "nanoStream Cloud/Bintu account"); "nanoStream Guardian" 28 / 8; player names (H5Live Player variants, nanoPlayer) ≈ 45; **"MoQ" 74 / 7** (all analytics pages, incl. sidebar label); `sales(at)nanocosmos.de` 11 vs `.net` 9; `www.nanocosmos.de/contact` 13; marketing fluff ("unique", "powerful", "seamless", "effortlessly") ≈ 30. **MOQ appears in zero core platform pages** (overview, getting started, ingest, security, Guardian, captions, support).

### Wiring
- Orphan: `cloud/network-diagnostics-mtr.md` (only linked from `network-diagnostics.md:203`).
- 4 video-only pages live in `cloud/` but appear only in FAQ → Video Tutorials: `analytics_for_low_latency_streams`, `how_to_setup_streamgroups`, `how_to_setup_ingest_security`, `defend_against_misuse_with_nanostream_guardian`.
- 17 analytics pages live in `cloud/` but appear only in the Analytics sidebar; mixed slugs (`/analytics/...` vs the landing page `analytics-introduction.md` at **`/cloud/analytics`**).
- Guardian spread over 4 sidebar places (Cloud → Security → Monitoring & Detection; Cloud → Security → Blocking & Response; Analytics → Guardian; FAQ video). Both Security sub-categories hold one page each.
- Missing from the platform sidebar: ABR/transcoding concept, WHIP ingest, MOQ; `nanoplayer/nanoplayer_security_jwt` is linked ≈ 10× from cloud pages but is in no sidebar.
- Deprecated `live-recording-vod` still in the sidebar and promoted by `cloud_introduction` and `cloud_getting_started`.

### Per page
- **cloud_overview.md** — 16× "nanoStream Cloud" incl. H2 "## nanoStream Cloud" (:8), "## Why nanoStream Cloud?" (:110); :49 "nanoStream H5Live Player", :53 "H5Live Player" under heading "nanoStream Player"; :59 "nanoStream H5Live known as nanoPlayer"; :73 "nanoStream Guardian"; :49 "ultra-low latency (\<500ms)" marketing ms claim; :14 "100% uptime"; :12 "an unique platform"; :12 `.de` blog link; :17-18 infographic caption typo "Worklow", old branded graphic; no MOQ, no nanoStudio, no produce-and-stream; :101 bintu API card → `doc.pages.nanocosmos.de`. Card block duplicated in `cloud_introduction.md:25-40`.
- **cloud_introduction.md** — 8× nanoStream Cloud; :14 "nanoStream Dashboard" vs :30 "nanoStream Cloud Dashboard"; :102 "nanoStream Guardian"; **:90 "Live Processing" paragraph describes recording/VOD (copy-paste)**; :82-86 promotes deprecated live-recording-vod; :67 WebRTC listed next to WHIP; :68 playback "H5Live, HLS, RTMP" — no MOQ. Merge with cloud_overview.
- **cloud_getting_started.md** — 9× nanoStream Cloud; :33 "nanoStream platform", :194 "nanoStream Platform"; :13 "H5Live player"; :168, :184 "nanoPlayer"; :35 "nanoStream API"; :36 "API Key / Bintu Token" conflates two credentials; **:200 broken `./organization_overview#enabled-packages`**; **:129 "token can only be created … by an nanoAdmin" contradicts `user_roles.md` and `security_token_best_practices.md:19-21` (nanoUser can)**; :121 `http://` demo URL; :228 "WebRTC" as a security layer; :253-267 promotes deprecated `/rec/` path plus an overlapping second section.
- **_encoder_setup_tabs.mdx** — 16× nanoStream Cloud, 7× "nanoStream Cloud Dashboard"; :21 OBS's own label "nanoStream Cloud/bintu" is legitimate (add a note that OBS still shows the old name); :130 Osprey WHIP tip says "direct WebRTC playback" — wrong (WHIP is ingest; playback is MOQ/H5Live); :54 ingest host `bintu-stream` vs `bintu-vtrans` elsewhere; :93 publishes device default credentials.
- **live_encoding.md** — 9× nanoStream Cloud; **:25 lists "On Request | H.265, SRT, RTSP" in a codec table — SRT is GA with its own page and SRT/RTSP aren't codecs**; :16 "VMix" → vMix; :130 "our live transcoding service" with no transcoding page; no WHIP section; :142-146 stale external links (Adobe Media Server EOL, old http). Should become the ingest overview.
- **srt_ingest.md** — 11× nanoStream Cloud; 7× "Bintu stream"; :14 "H5Live Player", :187 "H5live Player", :201 "nanoPlayer"; **:21 broken `#authentication`**; :82 "postfix" vs :85 "suffix"; :66 Asia host without example; :90 `:record` suffix vs live-recording deprecation; :10, :187 playback "H5Live or RTMP" only; :134 German OBS KB link; :133 "Ressources".
- **live-recording-vod.md** — deprecated but in sidebar; 6× nanoStream Cloud; :17 `.de` contact. Move to legacy + redirect.
- **live_processing.md** — **:11 broken `./organization_overview#enabled-packages`**; 9× nanoStream Cloud, 6× "nanoStream Cloud Dashboard"; :291, :295 card titles "Installation"/"Configuration" template leftovers; :248 example replay URL on `.de`; JSON samples with `//` comments; duplicates `dashboard/live_processing.md`.
- **live_captions.md** — :35 "nanoPlayer IFRAME", :40 "H5Live Player", :141 "nanoStream Cloud Dashboard" vs :161 "nanoStream Dashboard", :210 "nanoStream Cloud/Bintu account"; never "AI Live Captions"; :35 unlinked lowercase "builder hub"; **:9 broken URL `dashboard.nanostream.cloud/organisation/organization_overview#enabled-packages` (docs path inside a dashboard URL)**; **:9 "enabled for all organizations" vs `live_captions_api_guide.md:98` (403 `LiveCaptioningNotEnabled`) and `analytics-dashboard-live-captions.md:13`**; **:215 `targetLanguage` vs api_guide :117 `targetLanguages`**; engines: Deepgram only vs Whisper + Deepgram in analytics :18; :46 heading typo "Langauges" (anchor linked from retrieve page :13 and `dashboard/start_streaming.md:99` — fix together); no transcripts/translation; :217 curl labelled `html`.
- **live_captions_api_guide.md** — :139 "Bintu also supports…", :142 "nanoStream web player"; **:183, :190 send customers to internal `web.pages.gitlab.nanocosmos.cloud/captions-workflow/` → Builder Hub "Add AI Live Captions"**; :8, :190 internal jargon ("customer journey", "five-station journey"); :69 `bintu-vtrans`; :153 EU-only VOD host hardcoded. Duplicates Builder Hub captions flow; no link either way.
- **live_captions_nmessenger_connect_for_clients.md** (id `live_captions_retrieve`) — filename ≠ id; :304 "nanoStream H5Live Player (nanoPlayer)"; "nanoStream Messenger" (3) vs "NanoMessenger" (14); **messenger host :229 `bintu-nmessenger.nanostream.cloud` vs :259, :362 `bintu-nmessenger.autodevops-prod.nanostream.cloud` (internal infra name)**; library link :158 `…/nmessenger.js` vs :161 `…/client/nmessenger.js`; :72 row label "STREAMNAME-SOURCE"; **:110-115 demo JWT expires 2026-12-08**; no MOQ statement.
- **security.md** — **:8 "nanoStream Control — … of the nanoStream Platform"** (two violations); title "nanoStream Security"; :56, :61 "H5Live Player"; :115 "## nanoStream Guardian"; **:83 broken `./organization_overview`**; **:176 "Guardian View" links `/docs/cloud/guardian` (the blocking page) instead of the analytics Guardian view**; :143 "expect for"; :92 "all H5Live playbacks require a valid token" — MOQ?; :10 "New Security Features in 2026" ages; **:196 "up to 24 hours maximum" vs 365 days non-revocable (revocation :20)**; :140-144 RBAC table copied from user_roles.
- **security_token_best_practices.md** — 4× nanoStream Cloud; :42 "H5Live Player"; :24 "nanoStream Cloud/bintu account"; **:48 "default expiration is 2 weeks for non-revocable tokens" vs `security_token_revocation.md:21` (24 h default)**; :77 hardcoded `demo.nanocosmos.de` player; :7 duplicate H1; :15 H3 before first H2.
- **security_token_revocation.md** — :142 "nanoStream Cloud Security Overview"; 6× "Bintu token"; :7 duplicate H1. Otherwise current.
- **security_token_guardian_view.md** — :12, :79, :85 "nanoStream Guardian"; misuse indicators duplicated in `analytics-dashboard-guardian` and `security.md`.
- **guardian.md** — title/sidebar/H2s "nanoStream Guardian" (10×) → Guardian; 4× nanoStream Cloud; **endpoint `…/referrer` (:119) vs `…/referer` (:140, :149)**; :53 CIDR example `255.255.255.0/24` (nonsense range); :65 `http://metrics…`; :10 "react within seconds" vs :40/:160 "≤ 6 minutes"; :19 `.de` contact; :17 signup URL `/auth?signup` vs `/signup` elsewhere; :88 "blocks … H5Live playback" — MOQ?; shell commands labelled `js`.
- **analytics-dashboard-guardian.md** — **:13 `./guardian` self-link (resolves to itself, not `/docs/cloud/guardian`)**; :13 "nanoStream Guardian"; :21 "nanoStream Cloud/Bintu account"; :22 `.de` contact; `streamguard` vs `streamGuard`; typos "inditifier", "appearences", "accesed".
- **defend_against_misuse_with_nanostream_guardian.md**, **how_to_setup_ingest_security.md**, **how_to_setup_streamgroups.md**, **analytics_for_low_latency_streams.md** — video-only stubs (≈ 65–75 words); "nanoStream Guardian", "our nanoStream Cloud", "even easier than before!". Embed in the relevant topic pages or move to a videos folder.
- **bintu_api.md** — **German text :50 "…oder per mail…", :53 "Wir haben einen Docs Eintrag nur für die drei Wege, das nanoStream Cloud Dashboard zu accessen:"**; 8× nanoStream Cloud; title "Bintu API" vs body "bintu REST API"; :71 "H5Live Player"; :70 "any RTMP/RTSP encoder" (RTSP on request); :101-103 heading/default mismatch; :142 `YOUR_STREAM_ID` listed for Create Stream; transcoding profile strings unexplained.
- **bintu_custom_webhooks.md** — 12× Bintu; :24 "nanoStream Cloud/Bintu account"; :48 "nanoPlayer Token Security"; :32 `.de` contact; :166 broken markdown "**n* parameters**"; SRT webhooks not mentioned. Only cloud page linking the WHIP guide (:185).
- **bintu_stream_tags.md** — "Bintu will suggest…" as actor; :31 "include tags in during"; overlaps `dashboard/start_streaming#tags`.
- **user_roles.md** — 5× nanoStream Cloud (:53 heading); :8-12 stale "Bintu API v1.23.0.0 … Q3/2024" banner; :64 "expect for"; :80 "endpoint valids"; no permissions for Guardian, revocation, captions, live processing. **Not reachable at `/docs/user_roles` (sales link → 404).**
- **network-diagnostics.md** — :208 "nanoStream Cloud uses geo-loadbalanced DNS"; **:253 broken `[https://gist.github.com](gist.github.com)`**; :229-233 internal edge hostnames and IP.
- **network-diagnostics-mtr.md** (orphan) — **appears near-verbatim from the Linode/Akamai MTR guide, no attribution; check licence / rewrite or remove**; no nanocosmos hosts; :28 advises full `apt upgrade`.
- **support.md** — 3× nanoStream Cloud; :110 "NanoPlayer"; **:168 malformed link `[url]([https://…)`, :200 double parentheses**; :162 text says `h5live.server`, example uses `general.serverDomain`; :148 "Guardian alerts" (Guardian has none); :78 protocols "RTMP, SRT, WebRTC" — no WHIP/MOQ.

### Analytics pages (in `cloud/`, Analytics sidebar)
- **All 13 dashboard sub-pages share `title: Analytics Dashboard`** → identical browser tabs and search results.
- "Before starting" sign-in box on 7 pages with `.de` contact and "nanoStream Cloud/Bintu account".
- **analytics-introduction.md** — slug `/cloud/analytics`; :19 "nanoStream Cloud and the unique nanoStream H5Live Player"; no MOQ; 2019-style copy.
- **analytics-dashboard.md** — :26 2019 `.de` blog; :15 "premium" unexplained.
- **analytics-dashboard-home.md** — :53 "MoQ", :52 "nanoStream cloud"; :23 "max concurrent H5Live viewers" — MOQ counted?; :57-60 ingest list RTMP + Webcaster only.
- **analytics-dashboard-h5live.md** — 3× MoQ; :10 circular self-anchor.
- **analytics-dashboard-moq.md** — **31× "MoQ"**, sidebar label and H1 "MoQ"; :73, :87 "H5Live player" for MOQ playback; :12 confusing dependency on "H5Live metrics".
- **analytics-dashboard-adaptive-bitrate.mdx** — unused `TOCInline` import; typos "resoultion", "successed".
- **analytics-dashboard-webcaster.md** — self-anchor; "using the our webcaster"; no WHIP/SRT.
- **analytics-dashboard-live-captions.md** — :18 Whisper + Deepgram; :13 "must be enabled".
- **analytics-dashboard-worldmap.md** — **:26, :30, :31 `./analytics#h5live` and :83 `./analytics-zoom#…` broken**.
- **analytics-dashboard-troubleshooting.mdx** — **:69, :90, :92, :93 `../nanoplayer/…` resolve to `/docs/analytics/nanoplayer/…` (broken); :245 `./analytics#webcaster` broken**; :24 "every nanoStream Cloud customer"; no SRT/WHIP/MOQ.
- **stream-alerting.md** (id `alerting`) — 7× nanoStream Cloud; :28 900-char deep link; :49 old `cloud-frontend` screenshot; "version 3.7.1.0" undated; :113 "Continous". Duplicates `dashboard/alerts_and_advices`.
- **email-notification.md** — commented-out duplicate table (:24-38); no setup instructions.
- **analytics-api-documentation.md** — 7× MoQ; :32 "H5Live player that use MoQ".
- **analytics-api-error-codes.md** — 4× `.de` contact.
- **Release pages (API + dashboard, latest + history)** — 31× MoQ; **no release dates**; **`analytics-dashboard-releases-history.md:98` link `/analytics/api-releases/history` missing `/docs`**.

### Boilerplate repeated across the section
"Before starting / sign up" (≈ 12 pages, 3 variants: `/signup` vs `/auth?signup`, `.de` vs `.net`); "Enabled Packages" warning (4 pages, 3 broken); "Advanced developer bintu API docs" note (4); "Find your API key" tip (5); RBAC table (2). → MDX partials.

---

## 2. nanoStream Player — `nanoplayer/`

### Naming counts (37 files)

| Variant | Count | Verdict |
|---|---|---|
| `NanoPlayer` | 768 (688 in the two API refs) | Class name — keep in code; prose/titles ("NanoPlayer v5", "NanoPlayer - Release Overview") → nanoStream Player |
| `nanoPlayer` | 57 (38 in API refs as code) | ≈ 19 prose uses → nanoStream Player |
| `H5Live Player` | 51 (customization 13, stream_switching 5, getting_started 4, ≈ 20 pages 1–3) | → nanoStream Player |
| `nanoStream H5Live Player` | 32 (mostly "Introduced in … Version 4.x") | → "Since nanoStream Player 4.x" |
| `H5Live player` / `H5live Player` / `h5Live Player` / `H5LivePlayer` | 14 / 2 / 1 / 2 | → nanoStream Player |
| `nanoStream Player` ✓ | 5 | only pages written in the last months |
| `MoQ` | 13 (release_latest, history ×5, migration guide ×4, customization:258, live_plus_replay:43 "Live-MoQ", api.mdx:2328) | → MOQ (UI string "Live-MoQ" needs a code change) |
| `nanoStream Cloud` | 39 | → nanocosmos |
| `nanoStream Cloud Analytics` | 2 (player_metrics :9, :44) | → nanoStream Analytics |
| `bintu.live` | 2 (intro :38, :45) | remove |

**Legitimate "H5Live":** mode names H5Live-HLS / H5Live MSE (release history), "H5Live server", config keys `h5live.*`, URL paths, analytics routes `/v2/h5live/*`, runtime error 5002 string, token-service operation names.

### Wiring
- Sidebar key `"H5Live Player"`, label "nanoStream H5Live Player" (`sidebars.js:153,156`).
- **7 pages missing from the sidebar:** `nanoplayer_embed_detailed` (hosted embed player v2.0.0), `nanoplayer_feature_live_plus_replay` (new, 1,235 words), `nanoplayer_security_jwt` (main security page), `nanoplayer_feature_security_sts`, `nanoplayer_update_source`, and the two tutorial pages (only in FAQ sidebar).
- "Features" is a flat list of 15; MOQ is one item among many. "Releases" puts v5 and v4 side by side with no explanation. "Other" holds two one-line stubs.

### Per page
- **nanoplayer_introduction.md** (landing) — weakest page in the section. :6 old `.de` H5Live-only schema image; :10 "nanoStream H5Live is a client-server technology based on nanoStream Cloud and nanoStream H5Live Player (aka nanoPlayer)"; :10 "Ultra-Low latency … around 1 second"; **no MOQ at all**; :81-89 operating modes list fMP4/WS/MSE, HLS, MP4 for set-top boxes — no MOQ/WebTransport; :12-43 nanoStream Cloud / bintu.live; :28 "see Getting Started" without link; :48, :62 `http://demo.nanocosmos.de`; :55-79 legacy RTMP pull mode with malformed JSON; :95 unlinked "h5live secure playback documentation"; :15, :99, :104-105 `.de` company links. Rewrite MOQ-first.
- **nanoplayer_getting_started.md** — :7, :9 "H5Live player", :20, :76 "nanoStream H5Live Player Version", :218 "H5LivePlayer", :327 `<title>H5Live Player</title>` in a copyable sample, :406; **:49-50 missing comma in a `live` code block → live editor throws**; **Option 2 and Vue/React/WordPress samples use `source.defaults.service: 'bintu'` which `feature_source_defaults:9` calls obsolete in v5**; MOQ only in a code comment (:144); :451-457 `.de` links/emails.
- **nanoplayer_supported_browsers.md** — title typo "Support Browsers"; 5 name variants; **content is v4: Safari 10, Chrome 54, Firefox 48, IE11, Flash fallback** (migration guide: Chrome 60+, Firefox 55+, Safari 11+, no IE11, no Flash); no MOQ matrix; Samsung Internet 6.4/7. Merge into one current matrix.
- **nanoplayer_player_metrics.md** — :9, :44 "nanoStream Cloud Analytics"; :12 "nanoStream Cloud/Bintu account"; :36 default `glog1.nanocosmos.de`; :44 2019 blog + double-dot anchor; no mention of separate `/v2/moq/*` routes.
- **nanoplayer_iframe.md** — **:31 "hosted in the nanoStream Cloud please reach out to support" contradicts `nanoplayer_embed_detailed.md` (documented hosted embed v2.0.0)**; thin stub; `.de` email. Merge.
- **nanoplayer_embed_detailed.md** (not in sidebar) — unclear title "Embed detailed"; 3× "nanoStream H5Live Player Version"; :25 "Nanocosmos"; :14-28 template says `streamname` but uses `group.id` with a stream-name-shaped value; :8 "ready more"; :77, :105, :133 `docs.nanocosmos.de` links; **:77 default latency mode "classic" (v5 default is `balancedadaptive`)**; 15 `demo.nanocosmos.de` URLs; no MOQ/iframe `allow` note.
- **nanoplayer_webview.md** — :8 "H5Live Player"; no MOQ/WebTransport in WKWebView/Android WebView (the key v5 question); :13 duplicated word.
- **nanoplayer_v5_migration_guide.md** — no frontmatter; :7, :18-19 "nanoPlayer v5/v4"; :34, :40, :88, :92 MoQ; **:88 `##other-customizations` double hash (broken)**; overview never says what v5 is; :34 is the only clear "MOQ with fallback" statement in the section — promote it.
- **nanoplayer_feature_moq.md** — title "Media Over QUIC" → "Media over QUIC"; :7 "with nanoStream Cloud"; :9 "nanoStream H5Live Player Version 5.0"; framed as optional feature although default; :64 fallback "WebSocket/MSE" — omits H5Live-HLS on iOS < 26.4 and never says "H5Live".
- **nanoplayer_autoplay.md** — :23, :28 old names; :20 dated "Spoiler alert: users are going to love it!" quote; no mention that v5 `automute` defaults to true.
- **nanoplayer_feature_fast_start.md** — :11 "disabled by default" — **v5 enables it by default**.
- **nanoplayer_feature_latency_control_modes.md** — **:17, :86 "classic remains the default" — v5 default is `balancedadaptive`**; MOQ applicability unstated; :109 `.de` support.
- **nanoplayer_feature_stream_group_configuration.md** — :7, :9 "nanoStream Cloud 2022"; :17 "Cloud Dashboard", "Bintu API".
- **nanoplayer_feature_domain_configuration.md** — mixes new :19 "nanoStream Player 5.1.0" with old :67, :87 names.
- **nanoplayer_token_security.md** — label "Secure playback with H5Live" (MOQ too?); 6 old-name variants; :22 "separate account and business agreement" — check vs cloud security; the only security entry in the sidebar while its two child pages are not in it; token content now exists in ≈ 4–5 places.
- **nanoplayer_security_jwt.md** (not in sidebar) — old names; "Cloud Dashboard" variants ×4; :26, :185, :217 `doc.pages.nanocosmos.de/cloudtokenservice-api-docs`; **:299-304 example entries have no `webtransport` URL (secure playback without MOQ?)**; revocation/expiry/CIDR sections duplicate cloud/security pages.
- **nanoplayer_feature_security_sts.md** (deprecated, not in sidebar) — 16× "Bintu"; 2020 timestamps; :252 almost certainly broken JSDoc anchor; move to Legacy v4 or remove.
- **nanoplayer_feature_stream_switching.md** — 5× old name; 55 `.de` hosts; MOQ ABR behaviour unexplained; v4.3-era deprecated sections.
- **nanoplayer_update_source.md** (not in sidebar) — old names; typos "exisiting", "errror"; merge into stream switching.
- **nanoplayer_feature_fullscreen_api.md** — old names; MOQ canvas fullscreen behaviour (iOS 26.4 bug in history) not covered.
- **nanoplayer_feature_customization.md** — 13× "H5Live Player"; 2021 screenshots; removed v5 scaling modes possibly still offered; :258 MoQ.
- **nanoplayer_feature_reconnect_timeouts.md**, **…_media_error_recovery.md** — old names; MOQ applicability unstated.
- **nanoplayer_feature_source_defaults.md** — **:9 "obsolete in Version 5" contradicts getting_started, feature_moq:67, migration :51 and api.mdx:2256** — decide and fix everywhere.
- **nanoplayer_feature_video_access_and_processing.md** — **assumes `<video>`; with MOQ (v5 default) the player renders to `<canvas>`** — needs a MOQ section; :20 "(by August 2022)".
- **nanoplayer_feature_audio_session_handling.md** — correct name at :15; heading "AudioSession handling in NanoPlayer".
- **nanoplayer_feature_live_plus_replay.md** (new, not in sidebar) — 8× "nanoPlayer" as product; :43 UI label "Live-MoQ"; `.de` demo/VOD hosts. Add to sidebar if released.
- **nanoplayer_release_latest.md** — "NanoPlayer - Release Overview"; MoQ; absolute `docs.nanocosmos.net` links; `files.nanocosmos.de` Nextcloud shares; no dates.
- **nanoplayer_release_latest_v4.md** — no "maintenance line, use v5" statement.
- **nanoplayer_release_history.md** (17k words) — **`htmlFor` instead of "for" 202×** (e.g. :302, :475, :639, :980); "nanoStream Cloud" ×8, MoQ ×5; 151 releases, no dates. Split v5 / v4 / archive.
- **nanoplayer_api.mdx / _api_v4.mdx** (generated) — titles "NanoPlayer v5/v4"; :9 "NanoPlayer (H5Live) Public API Class"; "nanoStream Cloud", "Bintu", MoQ in generated prose; `source.defaults.service` not marked obsolete; error 5002 lists IE11/Chrome 54. **Fix in the player repo's JSDoc.**
- **nanoplayer_api_errors.md** — title "NanoPlayer Error Codes & Handling"; link text "Secure playback with H5Live"; typo "Unsuccesful".
- **nanoplayer_faq.md**, **nanoplayer_blogposts.md** — one-line stubs (`.de` blog search). Remove.
- **Tutorial pages (latency modes, player security)** — video-only; listed under FAQ, not Player; H1 duplicates title.

---

## 3. nanoStream Dashboard

`dashboard/` = **v5 (current)**. `cloud-frontend-v3/` = v3/v4 UI (despite the name). `cloud-frontend/` = v2 UI (`bintu-cloud-frontend.nanocosmos.de`). Legacy folders: no sidebar (except one video page), no legacy banner, indexed by search, linked from sales emails.

### Wiring
- Sidebar key `"nanoStream Cloud Dashboard"` (`sidebars.js:105`); navbar `sidebarid` typo (Docusaurus key is `sidebarId`) has no effect anywhere.
- `dashboard/changes_v4_v5` is orphaned.
- `cloud-frontend-v3/*` — no sidebar and no inbound links from outside the folder; reachable only by URL/search. v2 banners say "Find the documentation of V3 here" and link to the v5 docs.
- Only one redirect exists site-wide (`/docs/cloud/alerting`).
- Current pages still use images from `assets/cloud-frontend/` (`dashboard/abr_transcoding.md:17`, `dashboard/changes_v4_v5.md:34,67,80`, `cloud/stream-alerting.md:49`).

### `dashboard/` (keep, canonical)
- **overview.md** — :9 "nanoPlayer"; :46 "nanoStream Webcaster v5" (docs are v6); :42 "Live Captions & Accessibility" → AI Live Captions; cards link only 4 of 14 pages; fluff.
- **getting_started.md** — :7 "nanoStream H5Live Player (nanoPlayer)", :9 "to the nanoStream Cloud"; **:49 `dashboard.nanocosmos.cloud/signup` vs `dashboard.nanostream.cloud/signup` everywhere else**; **:59-71 "Trial Flag … Upgrade to Premium … contact our team" contradicts the Builder Hub free account**; "Before starting" box repeated on 8 pages; keep anchors `#sign-in`, `#invite`, `#sign-up`, `#authentication` (linked from cloud pages).
- **start_streaming.md** — :100 "nanoStream Cloud Dashboard"; :148 "nanoStream Cloud Security … Secure Playback (H5Live)"; :150 "nanoStream H5Live Player"; :209 "to nanoStream Cloud"; :150 "two types" then lists three; **:80 links `./start_streaming#live-processing` (itself) instead of `./live_processing`**; **:207 broken `#easy-instructions-to-your-live-stream`**; :207 "Overivew"; :167 "(f.l.t.r.)"; :99 anchor works only because the target heading has the same typo.
- **stream_overview.md** — :321-322 "nanoPlayer"; **:22-26 `deleted` defined as "was live and is not outputting footage anymore" (= ended); `ended` missing** (copied from v3); **:131 broken `#streamgroup-details-streamgroup-n-playouts`**; :160-161 duplicated Tags row; :185 "H5Live Playout" label (MOQ?); :299-300 wrong alt text; :7 "pesence".
- **live_processing.md** — **:30, :49 link to start_streaming instead of stream_overview**; :49 "incdicating"; :7 "With the Bintu API v1.24.1, we introduced…" release note in a how-to; **"Recording" here (session recording) ≠ Builder Hub "Record on demand" (Real-Time API) — neither page disambiguates**; :29 video title says Replay twice.
- **live_captions.md** — :9 "nanoStream Cloud Dashboard"; "Live Captions" vs hub "AI Live Captions"; **:17 broken `#asr-engines-and-languages` (target heading typo "Langauges")**; **:30 says check Enabled Packages for Live Captions — not in the package list on `organization_overview.md:31-38`**.
- **visual_enhancements.md** — **:31-40, :53 "nanoStream Studio" at `studio.nanostream.cloud` — collides with nanoStudio**; :89 "an delay".
- **code_snippets.md** — title "Embed nanoPlayer Code…"; :27, :31 "Media over QUIC (MoQ)"; :61, :99, :129 nanoPlayer variants; :9 "two types" lists three; :17-20 indented list renders as code block; :119, :148 `.de` endpoints — check vs what the Dashboard generates; :69-70 v4 player version notes; MOQ section 2 sentences, no link to feature_moq.
- **abr_transcoding.md** — :22 "nanoPlayer"; **:98 "three output streams incl. passthrough + two" vs example :102-106 passthrough + three** (also in v3); ≈ 80 % copied from v3; :17 old asset; :122 broken italics. Canonical ABR page (5 inbound links).
- **secure_playback.md** — :30, :89 Cloud Dashboard variants; typos :38 "selectiong", :86 "Secure Toke"; :32/:73 same screenshot for two steps; token options maintained in ≥ 3 places.
- **organization_overview.md** — :33 package "H5Live Player"; :49 "Bintu Token"; :51 "nanoPlayer"; Enabled Packages list lacks Live Captions, Visual Enhancements, Timecode; :32 "more to follow ..." placeholder.
- **user_management.md** — **:12-14 link `/docs/user_roles#…` → 404 (real page `/docs/cloud/user_roles`)**; **:26 "custom roles you have defined" vs `cloud/user_roles.md:59` "three predefined roles"**; :104 "deletation".
- **analytics.md** — in-Dashboard usage view at `dashboard.nanostream.cloud/analytics` vs nanoStream Analytics app (`metrics.nanostream.cloud`) — names collide, no cross-link → retitle "Usage & viewers"; **:116 "View concurrent viewer data" under Byte Usage (copy-paste, also v3)**; :83-85 "Max concurrent H5Live viewers" — MOQ?
- **alerts_and_advices.md** — **:71 German: "Je nach Alert Code, werden in diesem Accordion Actionen vorgeschlagen, die dabei helfen sollen, den Alert zu beheben."**; **:147 `https://nanostream.cloud/alerts` (missing `dashboard.`)**; **:46, :77 broken `#alert-codes` (heading is "Alert Types and Codes")**; :83 `.de` support; duplicates `cloud/stream-alerting.md`.
- **changes_v4_v5.md** (orphan) — "nanoStream Cloud Dashboard"; lists 3 Stream Overview tabs (now 5); :23 old video reused from v2; :82 "Mange".

### `cloud-frontend-v3/` (retire)

| File | Key findings | Current equivalent |
|---|---|---|
| Dashboard_ABR_Transcoding (**sales link**) | ≈ 80 % same as v5; same 2-vs-3 contradiction; old badge names; nanoPlayer, nanoStream Cloud | dashboard/abr_transcoding |
| Dashboard_Alerting | "version 3.7.1.0"; broken `#alert-codes`, `#advice-codes`, `../analytics/troubleshooting` | dashboard/alerts_and_advices |
| Dashboard_Getting_Started | "in 2022 we transitioned from v2 to v3"; `docs.nanocosmos.de` | dashboard/getting_started |
| Dashboard_Live_Processing / Dashboard_Thumbnail (deprecated) | v4 UI; `rtmp://bintu-vtrans.nanocosmos.de` | dashboard/live_processing |
| Dashboard_Metrics | "nanoStream Cloud Customer Dashboard"; same copy-paste bug | dashboard/analytics |
| Dashboard_nanoPlayer | stub | dashboard/code_snippets |
| Dashboard_Overview | 250-line catch-all; typos "Screenhot", "Stream Overvie**w"; numbering bugs | dashboard/overview |
| Dashboard_Secure | **broken `./organization_overview`**; mixes v5 image; no revocation → contradicts v5 | dashboard/secure_playback |
| Dashboard_Start_Streaming (**sales link**) | no Live Captions step; old Webcaster UI; "H5Live Player"; 2019/2020 `.de` blog links | dashboard/start_streaming |
| Dashboard_Stream_Overview | wrong `deleted` definition; "Last Udpated"; duplicated text | dashboard/stream_overview |
| Dashboard_User_Roles | v4 user UI, three fixed roles | dashboard/user_management |

### `cloud-frontend/` (v2, retire)
All pages: "nanoStream Cloud/Bintu Dashboard", nanoPlayer, H5Live Player, `bintu-cloud-frontend.nanocosmos.de`, `.de` support. Notables: `How_to_Find_Metrics` "NanoStream Cloud"; `How_to_Log_in_to_the_nanoStream_Cloud` first-person "I hope that this tutorial was helpful"; `How_to_Use_Playback_Tokens` "max 365 days", "Referer must be demo.nanocosmos.de"; `How_to_Use_the_nanoStream_Webcaster` unfinished link "[To learn more…, click here.]" and duplicated paragraph; `How_to_Setup_Low_Latency_Stream` is the **only v2 page in a sidebar** (FAQ → Video Tutorials) and its video is reused in `dashboard/changes_v4_v5`.

### Redirect map (create after deleting the source pages)

| From | To |
|---|---|
| `/docs/user_roles` | `/docs/cloud/user_roles` (**add now**) |
| `/docs/cloud-frontend-v3/Dashboard_ABR_Transcoding` | `/docs/dashboard/abr_transcoding` |
| `/docs/cloud-frontend-v3/Dashboard_Start_Streaming` | `/docs/dashboard/start_streaming` |
| `/docs/cloud-frontend-v3/Dashboard_Overview` | `/docs/dashboard/overview` |
| `/docs/cloud-frontend-v3/Dashboard_Getting_Started` | `/docs/dashboard/getting_started` |
| `/docs/cloud-frontend-v3/Dashboard_Stream_Overview` | `/docs/dashboard/stream_overview` |
| `/docs/cloud-frontend-v3/Dashboard_Live_Processing`, `…/Dashboard_Thumbnail` | `/docs/dashboard/live_processing` |
| `/docs/cloud-frontend-v3/Dashboard_Secure` | `/docs/dashboard/secure_playback` |
| `/docs/cloud-frontend-v3/Dashboard_nanoPlayer` | `/docs/dashboard/code_snippets` |
| `/docs/cloud-frontend-v3/Dashboard_Metrics` | `/docs/dashboard/analytics` |
| `/docs/cloud-frontend-v3/Dashboard_Alerting` | `/docs/dashboard/alerts_and_advices` |
| `/docs/cloud-frontend-v3/Dashboard_User_Roles` | `/docs/dashboard/user_management` |
| `/docs/cloud-frontend/cloud-readme` | `/docs/dashboard/overview` |
| `/docs/cloud-frontend/getting_started`, `…/How_to_Log_in_to_the_nanoStream_Cloud` | `/docs/dashboard/getting_started` |
| `/docs/cloud-frontend/How_to_Start_a_Stream`, `…/How_to_Use_the_nanoStream_Webcaster` | `/docs/dashboard/start_streaming` |
| `/docs/cloud-frontend/stream-list`, `…/How_to_Delete_a_Stream` | `/docs/dashboard/stream_overview` |
| `/docs/cloud-frontend/cloud-tags` | `/docs/cloud/bintu_stream_tags` |
| `/docs/cloud-frontend/transcoding-abr` | `/docs/dashboard/abr_transcoding` |
| `/docs/cloud-frontend/cloud-playback-tokens` | `/docs/dashboard/secure_playback` |
| `/docs/cloud-frontend/nanoplayer-snippet` | `/docs/dashboard/code_snippets` |
| `/docs/cloud-frontend/How_to_Find_Metrics` | `/docs/dashboard/analytics` |
| `/docs/cloud-frontend/How_to_Setup_Low_Latency_Stream` | new home of the video (update `sidebars.js:487`) |

(v2 URLs follow frontmatter `id`; three files without frontmatter use their filenames.)

### Overlap with the Builder Hub
| Task | Dashboard | Builder Hub | Issue |
|---|---|---|---|
| Create stream / go live | start_streaming | builder_hub_create_stream | No mutual link; hub always makes a test stream |
| ABR | abr_transcoding | builder_hub_adaptive_bitrate | 1080p 3 Mbit/s vs 4,500 kbps; hub doesn't link |
| Recording | live_processing#recording | builder_hub_recording | Two different features, same name |
| Tokens | secure_playback | builder_hub_tokens | OK (hub links); hub says "H5Live Player" |
| Captions | live_captions | builder_hub_live_captions | Naming; hub has transcripts download not in Dashboard docs |
| Analytics | analytics | builder_hub_analytics(+_boards) | Three analytics UIs, no overview |

---

## 4. nanoStream Webcaster

**Current:** v6 in `webrtc/` (latest 6.2.4, 2026-08-26). **v5** in `webrtc-v5/` still has a full sidebar (`sidebars.js:285-316`) with titles identical to v6 → duplicate search hits; every v5 page carries a garbled banner ("Follow this link If are ready to migrate"); no EOL date. **The current Webcaster FAQ describes only the v5 API.**

Naming: "nanoStream Cloud" 20× in v6, 31× in v5; "WebRTC.live" used as the current name (v6 intro :33); the library is called "Webcaster API", "Webcaster Client API", "Webcaster SDK", "Webcaster Browser API", "NanoWebcaster library", "WebRTC Docs"; "nanoStream WebRTC Server"; v5 support page "webrtc" lowercase as product.

### Wiring
- WHIP Ingest guide under "Other" next to an FAQ stub; Migration Guide under "API"; "API" holds only an external-link stub.
- FAQ category "Webcaster" contains `faq_WebRTC_general` / `faq_WebRTC_devices` (v5 content).
- Navbar `sidebarid: "Webcaster"` invalid prop, doesn't match sidebar key.

### `webrtc/` (v6)
- **introduction** — 11× nanoStream Cloud; "nanoStream H5Live Player" :29, :40; **:33 "WebRTC.live can be used…"**; :35-36 "nanoStream Cloud as a low-latency CDN" → nanoStream CDN; **verbatim copy of the 2018 v5 marketing intro** — no WHIP, MOQ, Dashboard Webcaster or v6 features; :8-11 caution box sends v6 readers to v5; old infographic.
- **getting_started** — three names for the SDK (:7, :32, :64); :30 "bintu stream name"; **:46 repo-internal import path `../../dist/nanostream.webcaster`**; required params unclear; calls not awaited; download source differs from release page; :33 publish-parameter note belongs elsewhere.
- **demos** — :28 "nanoStream Cloud Dashboard" (and **card body copy-pasted from Dashboard card**); :125, :133 "H5Live Player"; **:37-39 "Webcaster does not support live transcoding" vs `dashboard/abr_transcoding.md:47`**; `.de` hosts; :20 links getting_started instead of start_streaming; :51 "lifecyle".
- **support** — :15 "bintu.live, and H5live player"; :24 `nanocosmos.de/v6/support`; :41 `support@nanocosmos.de`; "Visit out our".
- **input_sources** — browser list without versions; **:168 `setTimeout(loop…)` → ReferenceError (should be `renderLoop`)**; `.de` endpoint block ×4; screen sharing hidden here (no sidebar entry).
- **multiple_webcasts** — **:31, :42 `new window.WebcasterApiV6({…})` missing `.Webcaster`**; :57 stray comma; "run in parallel" but awaited sequentially.
- **quality** — :13 "the nanoStream Cloud" vs :53 "the nanoStream cloud"; :81 stray quote.
- **device_selection** — **:136-138 "On Using MediaStream injection vs Device selection — TBC" (unfinished)**; grammar.
- **audio_video_only** — OK; add pre-6.2.4 permission note.
- **stats_and_metrics** — :40/:42 duplicated sentence; :16 links stub API page; **:116 broken `../cloud/analytics#webcaster`** (linked from `dashboard/start_streaming.md:137,190`); "2Mb" → "2 Mbps".
- **speech_music** — OK (trailing-slash link).
- **reconnect** — **:49 missing comma (syntax error)**.
- **release_latest / release_history** — gap 6.2.0 (2024-07-15) → 6.2.4 (2026-08-26) unexplained; `files.nanocosmos.de` share link; H1 vs H2 inconsistency.
- **api** — stub with one external link; FAQ anchor `#rtcuserchecksupport--int` exists only in v5 → broken.
- **migration_guide_v6** — :19 "into the nanoStream Cloud"; :121 "NanoWebcaster library"; **:160, :273 `}` should be `});`; :260 missing comma**; :357 wrong error message; "four previewing"; :29 only page explaining v6 = WHIP; :31 "will roll out progressively" stale; filed under API.
- **whip_ingest** — "nanoStream Cloud" ×4, "nanoStream Cloud dashboard"; "Bintu service" vs "bintu API"; "Leverages"; **:40 links the IETF draft — WHIP is RFC 9725**; **:42 "Bearer token authorization isn't required" — security-relevant, no v6 secure-ingest story**; :36 exposes RTMP upstream architecture (`stream_url` required) vs Dashboard/Osprey instructions; `:1935` inconsistent; no OBS native WHIP; :86-139 code inside `:::tip` likely renders badly; **canonical WHIP page hidden under Webcaster → Other, not linked from cloud ingest pages**.
- **faq** — redirect stub to v5-only FAQ.

### `webrtc-v5/` (deprecated)
Garbled banner on all 15 pages. Intro and getting started duplicate v6 with "nanoStream Cloud" ×9–11, "WebRTC.live", "bintu.live", "nanostream Webcaster", "nanoStream h5live player"; **demo URLs carry `bintu.apikey` in the query string** (bad practice to document); 2018 browser claims; screenshots hot-linked from the 2018 WordPress blog via `i0.wp.com`; `secure_ingest` is the **only** Webcaster secure-ingest doc ("Nanocosmos Token Creator", "nanocosmos Cloud Token Service", endpoints possibly retired); code syntax errors in getting_started :113, multiple_webcasts :135-148, set_mediastream :95-103; v5 API reference (1,639 lines, `turn.nanocosmos.de`, German MDN links) — keep frozen as archive.

### FAQ
- **faq_WebRTC_general** — product called "WebRTC"; :37 a NanoPlayer/Flash question in the Webcaster FAQ; :7 "Overivew"; :23 "WebRTC is an in-development technology"; 2018 browser table; :39 dead `test.webrtc.org`; **:43-46 v5-only `RtcUser.checkSupport()` with broken link**; :52 WebView claim outdated (WKWebView getUserMedia since iOS 14.3).
- **faq_WebRTC_devices** — entirely v5 API; **:30, :37 unbalanced parentheses and `evt`/`event` mismatch**; "no example for device toggling" — v6 has DeviceUtils.

### Cross-page WHIP inconsistency
| Page | Says |
|---|---|
| `cloud/cloud_overview.md:25`, `cloud/cloud_getting_started.md:102`, `cloud/cloud_introduction.md:67`, `builder-hub/builder_hub_pricing.md:107` | "WHIP **and** WebRTC" as separate ingest protocols |
| `cloud/live_encoding.md:23` | Webcaster protocol = "WebRTC" |
| `webrtc/migration_guide_v6.md:29` | Webcaster v6 uses WHIP |
| `webrtc/nanostream_webrtc_whip_ingest.md` | needs `stream_name` + RTMP `stream_url`, no auth |
| `cloud/_encoder_setup_tabs.mdx:123-130` | Osprey: "select nanocosmos WHIP, enter stream key"; "direct WebRTC playback" (wrong) |

→ State once: WebRTC ingest = WHIP; Webcaster v6 is a WHIP client; playback is via nanoStream Player (MOQ/H5Live).

---

## 5. Builder Hub, nanoStudio, Real-Time API, FAQ, Samples, landing page

### Builder Hub (16 pages, all wired)
"Builder Hub" capitalised consistently; "Builders Hub" 0; one lowercase unlinked mention in `cloud/live_captions.md:35`; "50 GB free every month" consistent across 7 hub pages and absent everywhere else.

- **overview** — no positioning vs cores/Dashboard; :71-79 "Detailed product documentation" table covers only chroma, multi-camera, recording.
- **getting_started** (2,329 words) — :20 browsers incl. Edge vs `create_stream.md:22` without; **:115 "Create your first stream" opens a test-stream tool (circular with `create_stream.md:117`)**; :213-222 duplicated "bar above the page" text; industry experiences (:157-192) could be its own page.
- **accounts** — **:18, :78 "every feature" vs Real-Time API "business upgrade" and `nanostudio_overview.md:49` "contact sales"**; :103-104 "Recording"/"Replay" vs "Live Processing: replay"; :131 `sales@nanocosmos.net` vs `.de` elsewhere; "Secure playback" casing.
- **pricing** — :41-42 Basic "up to 2,500" listed before Starter "up to 500"; Medium limits unstated; :61-62 limits vs "every feature"; **:110 "Token security" included vs :118 "Secure playback" add-on**; :106 MOQ unexpanded; :105 "nanoStream ultra-low latency CDN, Player and Webcaster" → full component names. Recommend linking nanocosmos.net/pricing instead of restating caps.
- **create_stream** — MOQ badge unexplained; browser list; test vs own stream logic; "→" vs "›" in menu paths; no links to ingest/Webcaster/Player docs.
- **adaptive_bitrate** — **:22, :91 "1080p at 4,500 kbps" vs `dashboard/abr_transcoding.md:102` "3 Mbit/s"**; :75 "at most three extra qualities" — hub or platform rule?; no link to Dashboard ABR.
- **multicamera** — tool "Multi-Camera Switch" vs "Multi-Camera Switching" vs "Multi-Camera Preview"; :33 free account works vs "business upgrade"; should be the canonical UI walkthrough.
- **recording** — "On Demand Recording" ×4 → On-Demand; 30-second cap not in accounts table.
- **live_captions** — four names (title, sidebar, body, tool); :61 "Live Replay"; :46 "Login" → Sign in; :104 "support team is standing by" without link; **no link to cloud/dashboard captions docs**.
- **analytics** — :10 hub boards called "nanoStream Analytics"; :87-91 all panels "H5Live ·…" — MOQ included?; add link to Analytics Dashboard docs.
- **analytics_boards** — **:40 "Sub-second latency (under 500 ms), Ultra-low latency (up to 1 s)" — contradictory bands, marketing wording**.
- **tokens** — :99 "H5Live Player"; :72 sends to Dashboard for stream groups/API key; :101 links only secure_playback (add revocation, best practices).
- **chroma_key** — **:20 "free account includes nanoStudio" vs nanoStudio "contact sales"**; :26 "five setup steps" vs four; tool names "Chroma Key Setup" / "Chroma Setup Tuner" / "workbench"; "Branded outputs player" vs "Multiplayer"; :47 `bintu-studio.nanocosmos.de`.
- **demos** — **:98, :199 Live & Replay Player → "Record on demand" (wrong: it's the Live Processing replay switch)**; "Multi-Brand" vs "Multi-Branding for …".
- **ai_helper** — :84 "nanoPlayer 5", :88 "nanoStream player"; "AI Helper"/"AI helper"; :86 a skill named "nanoStream Analytics" collides with the product; :60 hub rewrites Dashboard sign-up links → evidence for front-door decision.
- **developer_mode** — :35 `bintu.nanocosmos.de/stream`; :66 "for nanoStream Cloud calls"; :49 "Cloud Token Service"; :88 replay/recording conflation; no link to `cloud/user_roles`; "Developer mode" vs "Developer Mode".
- Sidebar: consider moving **Demos** right after Accounts (guests start there).

### Tool naming table (one name each — decision needed)
| Hub menu item | Names in use | Proposal |
|---|---|---|
| Create a stream | browser path unnamed; "Live Player" | name nanoStream Webcaster + nanoStream Player |
| Set up multi-camera | Multi-Camera Switch / Switching / Preview; Stream Switching demo; Switch Player | Multi-Camera Switching |
| Record on demand | On Demand Recording / On-Demand Recording | On-Demand Recording |
| Add AI Live Captions | Live Captions Setup / Live Captions / AI Live Captions / nanoStream Live Captions | AI Live Captions |
| Replay | Live Processing: replay / Replay / Live Replay | Live Replay |
| View analytics | nanoStream Analytics (hub boards) / Analytics Dashboard | "Builder Hub analytics boards (nanoStream Analytics API)" |
| Manage tokens | Secure playback / Secure Playback / Cloud Token Service | one casing; one service name |
| Set up chroma key | Chroma Key Setup / Chroma Setup Tuner / workbench / Live composite | nanoStudio Chroma + one tool name |
| Watch branded outputs | Branded outputs player / Multiplayer | one name |
| AI helper | AI helper / AI Helper / AI Skills / Build with AI / Agent Skills | one casing |

### nanoStudio (5 pages — best-wired section)
- **nanostudio_overview** — :5, :12, :17 "nanoStream Cloud"; :31 heading "Chroma Key" → nanoStudio Chroma; :28 "free account in the nanoStream Cloud Dashboard" → Builder Hub; **:49 "contact sales… sales(at)nanocosmos.de" contradicts hub**.
- **chroma_key_getting_started** — "nanoStream Cloud" ×4; :57, :241 "H5Live Player"; :57 "the same low latency" → ultra-low latency; :5 "five steps" vs four (:71); `bintu-studio.nanocosmos.de`.
- **chroma_key_outputs / _tuning / _troubleshooting** — clean; H1 vs title mismatch; `.de` ingest host. Consider Tuning before Outputs.

### Real-Time API (4 pages, own navbar tab)
- **realtime_api_introduction** — "nanoStream Cloud" ×5, "nanoStream Cloud Dashboard"; "nanoStream Real-Time API" not on the approved component list; Cloud Token Service link on `doc.pages.nanocosmos.de`; **:75 "requires a business upgrade" + `.de` sales**.
- **realtime_api_recording** — "nanoStream Cloud account/Dashboard"; :149 business upgrade; add link to `dashboard/live_processing` recording/replay.
- **realtime_api_switching** — "nanoStream Cloud"; "Switch Player" (unverified name); **:26, :58, :237 link a customer-facing demo on `web.pages.gitlab.nanocosmos.cloud` and :56-88 walk through its UI — same tool as hub "Set up multi-camera"**; :93 "up to 10" angles vs demo 2–6.
- **realtime_api_switching_reference** — "nanoStream Cloud APIs", "nanoStream Cloud Dashboard".

### FAQ
- **faq.md** — not a FAQ: four product cards with wrong `title` attributes ("Installation", "Configuration", "Playground"); no Builder Hub/nanoStudio/Real-Time API; "nanoStream H5Live Player (aka nanoPlayer)", "nanoStream Cloud Analytics".
- **faq_h5live_player_general** — old names; **IE11, Flash, Chrome 54, Firefox 48, Samsung 6.4**; no MOQ; title duplicates faq_streaming.
- **faq_h5live_player_adjust_style** — old names; 4.x version notes; belongs in Player docs.
- **faq_streaming** (orphan) — "nanoStream Cloud" ×12; "nanoMeet" (dead product); "ultra-low-latencyy"; SRT "upon request"; `rtmp:/`; "3820×2048"; Flash; dead links. Rewrite as platform FAQ.
- **faq_devices_support**, **faq_purchase_and_license**, **faq_adv_codec_config** (orphans, commented out) — SDK era (IE/Flash, ActiveX, DirectShow, iOS 8, `nanocosmos.de/v4` pricing). Delete/archive.
- FAQ → Video Tutorials pulls pages from three other folders incl. deprecated v2.

### Samples / Tutorial
- **samples.md** — navbar tab but sidebar commented out; "nanoStream Cloud Samples"; "bintu/nanostream Cloud"; `webcaster.nanocosmos.de` (v5 app); `github.com/nanostream` (should be nanocosmos?); "(Work in progress)". → replace with hub Demos.
- **tutorial/getting_started.md** — empty (frontmatter only), unlinked. Delete.

### Landing page and components
- **`src/pages/index.js`** — hero "Official Documentation", no CTA (button commented out :27-33); sections Cloud, Player, Analytics, Webcaster only — **no Builder Hub, nanoStudio or Real-Time API**.
- **`components/cloud/index.js`** — :10 Products card text copied from the Player card; :15 "nanoStream Cloud Security"; :22-25 bintu API → `doc.pages.nanocosmos.de`; :55-56 "nanoStream Cloud", "ultra low latency".
- **`components/player/index.js`** — "nanoPlayer API", "nanoPlayer", heading "H5Live Player".
- **`components/webcaster/index.js:49`** — subtitle copied from Player.
- **`components/global/FooterExtension.js`** — :9 "Sub-Second Latency", :16 "100% GDPR compliant", **:47 "100% SLA"** (needs legal/marketing sign-off), :26 "Multi protocol" (no WHIP/MOQ), :94 "Dive into nanoStream Cloud →".
- **`components/HomepageFeatures/`** — unused template. **`src/pages/empty-markdown-page.md`** — template page, live.

---

## 6. Site-wide

- **Template blog is live:** classic preset `blog` not disabled → `docs.nanocosmos.net/blog` serves Docusaurus sample posts ("Welcome", "MDX Blog Post", "Long Blog Post", "First Blog Post"). Disable in preset, delete `blog/`.
- **`onBrokenLinks: 'log'`, `onBrokenMarkdownLinks: 'log'`** (`docusaurus.config.js:38,56`) — broken links never fail the build.
- **Navbar:** first tab "nanoStream Cloud"; 10 items; `sidebarid` (lowercase, invalid) on every item.
- **Footer** (`docusaurus.config.js:180-267`): column title "nanoStream Cloud"; logo → `www.nanocosmos.de`; Overview/Use cases → `info.nanocosmos.de`; Pricing → `nanocosmos.de/buy`; Free Trial → `info.nanocosmos.de/free-trial`; Blog/Career/Contact/Support/Imprint → `nanocosmos.de`; GitHub → `github.com/nanocosmos/docs`. No Builder Hub. No page version stamp (brand standard for web pages).
- **Redirects:** one (`/docs/cloud/alerting`).
- **No `llms.txt`** (`docs.nanocosmos.net/llms.txt` → 404).
- **Domains:** 763 `.nanocosmos.de` refs / 106 files — service hosts (bintu-h5live 167, bintu-play 58, bintu-stream 43, bintu 35, bintu-webrtc 24, …), company site `www.nanocosmos.de` 97, `demo.nanocosmos.de` 65, `doc.pages.nanocosmos.de` 66, `docs.nanocosmos.de` 23.
- **Site title/tagline** "nanocosmos Docs" / "nanocosmos Official Documentation" — fine; meta keywords generic.

---

## 7. Broken links and anchors

| File:line | Link | Fix |
|---|---|---|
| `dashboard/user_management.md:12-14` | `/docs/user_roles#…` | `/docs/cloud/user_roles#…` + redirect |
| `cloud/cloud_getting_started.md:200`, `cloud/live_processing.md:11`, `cloud/security.md:83` | `./organization_overview#enabled-packages` | `../dashboard/organization_overview#enabled-packages` |
| `cloud/live_captions.md:9` | `dashboard.nanostream.cloud/organisation/organization_overview#…` | docs link |
| `cloud/srt_ingest.md:21` | `#authentication` | `../dashboard/getting_started#authentication` |
| `cloud/analytics-dashboard-guardian.md:13` | `./guardian` (self) | `/docs/cloud/guardian` |
| `cloud/analytics-dashboard-worldmap.md:26,30,31,83` | `./analytics#h5live`, `./analytics-zoom#…` | correct analytics pages |
| `cloud/analytics-dashboard-troubleshooting.mdx:69,90,92,93,245` | `../nanoplayer/…`, `./analytics#webcaster` | `/docs/nanoplayer/…`, webcaster page |
| `cloud/analytics-dashboard-releases-history.md:98` | `/analytics/api-releases/history` | add `/docs` |
| `cloud/support.md:168,200` | malformed markdown | fix syntax |
| `cloud/network-diagnostics.md:253` | `(gist.github.com)` relative | absolute URL |
| `dashboard/start_streaming.md:80` | `./start_streaming#live-processing` (self) | `./live_processing` |
| `dashboard/start_streaming.md:207` | `#easy-instructions-to-your-live-stream` | `#start-streaming` |
| `dashboard/stream_overview.md:131` | `#streamgroup-details-streamgroup-n-playouts` | real anchor |
| `dashboard/live_processing.md:30,49` | → start_streaming | → stream_overview |
| `dashboard/live_captions.md:17` | `#asr-engines-and-languages` | fix target heading typo in `cloud/live_captions.md:46` (and update `dashboard/start_streaming.md:99`, `live_captions_retrieve:13`) |
| `dashboard/alerts_and_advices.md:46,77` | `#alert-codes` | `#alert-types-and-codes` |
| `dashboard/alerts_and_advices.md:147` | `https://nanostream.cloud/alerts` | `https://dashboard.nanostream.cloud/alerts` |
| `dashboard/getting_started.md:49` | `dashboard.nanocosmos.cloud/signup` | `dashboard.nanostream.cloud/signup` (or Builder Hub) |
| `webrtc/nanostream_webrtc_stats_and_metrics.md:116`, `webrtc-v5/…:119` | `../cloud/analytics#webcaster` | `../cloud/analytics-dashboard-webcaster` |
| `faq/faq_WebRTC_general.md:46` | `../webrtc/nanostream_webrtc_api#rtcuserchecksupport--int` | v5 path or remove |
| `nanoplayer/nanoplayer_v5_migration_guide.md:88` | `##other-customizations` | single `#` |
| `nanoplayer/nanoplayer_feature_security_sts.md:252` | JSDoc anchor with `⇒` | verify |
| `nanoplayer/nanoplayer_player_metrics.md:44` | `#NanoPlayer..config` | verify |
| `cloud-frontend-v3/Dashboard_Secure.md:13`, `…/Dashboard_Alerting.md:62,76,83,97` | various | moot after retirement |

---

## 8. Cross-section contradictions

| Topic | Version A | Version B | Owner |
|---|---|---|---|
| Free tier | Hub: every feature, 50 GB, no card | Dashboard: trial + Upgrade to Premium; Real-Time API: business upgrade; nanoStudio: contact sales | product/sales |
| Token default expiry | 2 weeks (`security_token_best_practices.md:48`) | 24 h default, 365 d max (`security_token_revocation.md:20-21`); "24 h maximum" (`security.md:196`) | product |
| Who creates playback tokens | nanoAdmin only (`cloud_getting_started.md:129`) | nanoUser too (`user_roles`, best practices) | product |
| Roles | three predefined (`cloud/user_roles.md:59`) | custom roles (`dashboard/user_management.md:26`) | product |
| Live Captions availability | enabled for all orgs (`cloud/live_captions.md:9`) | must be enabled / 403 (api guide :98, analytics :13) | product |
| Captions API field | `targetLanguage` | `targetLanguages` | engineering |
| ASR engines | Deepgram (+ on request) | Whisper + Deepgram | product |
| Guardian endpoint | `/referrer` | `/referer` | engineering |
| `source.defaults.service` | obsolete in v5 | used in v5 samples, documented in API | engineering |
| v5 player defaults | latency `classic`, fast start off (feature pages) | `balancedadaptive`, fast start on, automute on (migration guide) | engineering |
| Webcaster + transcoding | not supported (`webrtc/…demos.md:38`) | works (`dashboard/abr_transcoding.md:47`) | product |
| WHIP auth | not required (`whip_ingest.md:42`) | v5 had JWT secure ingest; nothing for v6 | product |
| SRT | "on request" (`live_encoding.md:25`, `faq_streaming.md:57`) | GA with its own page | — |
| ABR example | passthrough + 2 (text) | passthrough + 3 (example); 1080p 3 Mbit/s vs 4,500 kbps (hub) | product |
| Stream states | `deleted` = "was live, no longer outputting" | that's `ended` | — |
| Hosted embed | "contact support" (`nanoplayer_iframe.md:31`) | documented embed v2.0.0 | — |
| Recording | Live Processing session recording | Real-Time API On-Demand Recording (hub maps Replay demo here) | product |
| Video access | `<video>` element | MOQ renders to `<canvas>` | engineering |
