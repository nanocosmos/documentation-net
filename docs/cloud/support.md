---
id: support
title: Support
sidebar_label: Support
description: Support options, diagnostics, and guidelines for reporting issues with nanoStream Cloud.
---

If you encounter issues with nanoStream Cloud during ingest, live streaming, playback, or analytics, there are several self-service tools and diagnostic steps you can perform before contacting support. If the issue persists, please create a **[support ticket](https://www.nanocosmos.net/support)**.


## Self-Service Diagnostics

Before opening a ticket, we recommend running basic diagnostics. These steps help identify common issues early and significantly speed up support response times.

Typical checks include:

- Latency and packet loss to ingest and playback servers
- Firewall or proxy interference
- Upload bandwidth availability
- DNS resolution and routing consistency
- Encoder and player configuration issues

### Network Diagnostics

We provide a dedicated guide that explains recommended diagnostic steps, common symptoms, and how to interpret results.  
It also includes an *Essential Tools Overview* listing common network tools and how to use them:

| Tool | Purpose | Notes |
|------|---------|-------|
| `ping` | Tests reachability and latency | Available on all systems |
| `traceroute` / `tracert` | Shows routing path and network hops | Windows uses `tracert` |
| `mtr` | Combines ping + traceroute with live statistics | Best all-in-one tool |
| `dig` | Tests DNS resolution | Useful for geo-loadbalanced hosts |

See: **[Network Diagnostics](/docs/cloud/network-diagnostics)**

## Support

Providing complete and structured information greatly improves troubleshooting efficiency.
Use the following sections as guidance. Each section includes a **copy-ready template**.


<article>
    <Card className="col--12" href="https://www.nanocosmos.net/support">
      <Card.Header title="Support Center" />
      <Card.Body>Get the help you need with our comprehensive support resources and dedicated team.</Card.Body>
    </Card>
</article>

### General Information

Add essential context about your stream, workflow, and the issue itself.

#### What to include
- **Stream Name + Bintu Stream ID**
- **Issue summary** (short and clear)
- **Timestamp (UTC)**
- **Reproducibility** (one-time, frequent, intermittent)
- **Geo locations** (encoding + playback)

```md title="Support Template: General Information"
General Information
- Stream Name:
- Bintu Stream ID:
- Issue Summary:
- Issue Time (UTC):
- Reproducibility:
- Encoding Location:
- Playback Location(s):
```

### Technical Setup

Details about your encoder and ingest configuration help identify misconfiguration or network limits.

#### What to include
- Encoder software/hardware (OBS, vMix, Wirecast, hardware encoder, etc.)
- Protocol (RTMP, SRT, WebRTC)
- Video settings:
    - Bitrate
    - Resolution
    - FPS
    - Keyframe interval (**2 seconds recommended**)
    - Codec (**H.264 required**)
- Audio settings
- Ingest URL used
- Network environment (LAN/Wi-Fi/LTE/VPN)

```md title="Support Template: Technical Setup"
- Encoder software/hardware (OBS, vMix, Wirecast, hardware encoder, etc.):
- Protocol (RTMP, SRT, WebRTC):
- Video settings:
    - Bitrate:
    - Resolution:
    - FPS:
    - Keyframe interval:
    - Codec:
- Audio settings:
- Ingest URL used:
- Network environment:
```

### Playback Information

Playback issues may originate from device/browser limitations, integration errors, or network conditions.

#### What to include
- Playback URL or page
- Demo player test result
- Player version (NanoPlayer)
- Browser + OS
- Affected scope:
    - All streams
    - Only specific stream
    - Only certain devices
    - Only certain regions

```md title="Support Template: Playback Information"
- Playback URL/page:
- Demo player Test Result:
- Player version:
- Device/OS: 
- Browser:
- Affected scope:
```

### Network Diagnostics Results

Please attach the results of your diagnostic tools:  
- `ping`  
- `mtr` (recommended)  
- `traceroute` / `tracert`  
- `dig` (especially for DNS or geo-routing concerns)

If possible, include results for both:

- Playback host (e.g., `bintu-play.nanocosmos.de`)  
- Ingest host (e.g., `bintu-stream.nanocosmos.de`)

### Logs, Screenshots and Further Evidence

Additional context helps us pinpoint the source faster. Please include if available:

- Screenshots or screen recordings
- Encoder logs
- Player console logs
- Error messages
- Guardian alerts (if present in your analytics dashboard)

## Playback Verification Tools

### Test Player

Use our sample player to verify playback independently from your own application:

Example URL: [https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?group.id=XXXXX-YYYYY](https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?group.id=XXXXX-YYYYY)

Replace `XXXXX-YYYYY` with your Bintu stream name.

### Geo-specific Playback Testing

You can force playback from a specific region by changing `h5live.server`.

:::tip Example: Playback from US East
`bintu-play-use.nanocosmos.de`

Full test URL:  
[https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?group.id=XXXXX-YYYYY&general.serverDomain=bintu-play-use.nanocosmos.de]([https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?group.id=XXXXX-YYYYY&general.serverDomain=bintu-play-use.nanocosmos.de)
:::

## Geo Locations and Host Overview

By default, nanoStream Cloud routes ingest and playback requests to the closest available region. Overrides are available for testing, debugging, and comparison.

:::warning Geo overrides
Geo overrides are not required for standard operation and should only be used when necessary.
:::

### Default Load-Balanced Hosts

| Purpose   | Host                          |
|-----------|-------------------------------|
| Playback  | `bintu-play.nanocosmos.de`    |
| Ingest    | `bintu-stream.nanocosmos.de`  |


### Geo Region Overrides

| Region         | Playback URL                        | Ingest URL                           |
|----------------|--------------------------------------|--------------------------------------|
| EU             | `bintu-play-eu.nanocosmos.de`        | `bintu-stream-eu.nanocosmos.de`      |
| US East        | `bintu-play-use.nanocosmos.de`       | `bintu-stream-use.nanocosmos.de`     |
| US West        | `bintu-play-usw.nanocosmos.de`       | `bintu-stream-usw.nanocosmos.de`     |
| Asia South     | `bintu-play-ass.nanocosmos.de`       | `bintu-stream-ass.nanocosmos.de`     |
| Australia      | `bintu-play-au.nanocosmos.de`        | `bintu-stream-au.nanocosmos.de`      |

Additional regions (South America, Turkey, Japan, Hong Kong) are available on request.

:::info Primary Host URLs
Primary host URLs are provided only when required for debugging. Please contact support via [our support form]((https://www.nanocosmos.net/support)).
:::

## Additional Help

If you need help with additional geo regions, custom configurations, or deeper debugging, please open a ticket via **[nanocosmos.net/support](https://www.nanocosmos.net/support)** for additional help.



:::tip nanoStream Support Toolkit

In the tutorial below, we are walking through:
- Best practices for encoder and ingest setup
- When and how to contact support
- Self-service tools like analytics dashboards and sample players
- How the Guardian system protects your streams in real-time

<div class="video-wrap">
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/8XThnYENLXs" frameborder="0" allowfullscreen></iframe>
    </div>
</div>
*Tutorial: Getting Started with Support, Tools & Best Practices*
:::
