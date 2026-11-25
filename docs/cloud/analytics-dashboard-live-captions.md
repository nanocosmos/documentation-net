---
slug: /analytics/dashboard/live-captions
id: analytics-dashboard-live-captions
title: Analytics Dashboard
sidebar_label: Live Captions
---

# Live Captions

The Live Captions page provides usage analytics for the Live Captions service. It gives you an overview of transcription session uptime, language distribution, and per-stream usage.

:::info
Live Captions are enabled for all organizations since November 2026. Data appears here once you have run streams with Live Captions. To learn how to set up and configure Live Captions, see the [Live Captions setup guide](/docs/dashboard/live_captions).
:::

## Uptime Usage

A stacked bar chart showing total transcription session uptime over the selected time range, broken down by ASR (Automatic Speech Recognition) service — **Whisper** and **Deepgram**. Each bar represents one time period; each colored segment corresponds to one service. The top-right corner of the widget shows individual totals for Whisper and Deepgram, as well as the combined total across both services.

:::note
Uptime is measured from the start to the end of a transcription session. Sessions that are still active are not reflected until they end.
:::

Click any bar segment to open a detailed breakdown for that time period and service.

<img src={require('../assets/analytics/analytics-live-captions-uptime-usage.png').default} width="100%" />

*Screenshot: Uptime Usage*

<img src={require('../assets/analytics/analytics-live-captions-uptime-usage-zoom.png').default} width="100%" />

*Screenshot: Uptime Usage — zoomed view*

## Source Language

A pie chart showing the distribution of transcription session uptime by **source language** — the spoken language being transcribed by the ASR (Automatic Speech Recognition) engine. Each slice displays the percentage share and total uptime (e.g., `2.26 h`), sorted by uptime descending.

Click any slice to drill down into a per-stream uptime breakdown for that language.

<img src={require('../assets/analytics/analytics-live-captions-source-language.png').default} width="100%" />

*Screenshot: Source Language*

<img src={require('../assets/analytics/analytics-live-captions-source-language-zoom.png').default} width="100%" />

*Screenshot: Source Language — zoomed view*

## Target Language

A pie chart showing the distribution of transcription session uptime by **target language** — the language into which captions are translated and displayed to viewers (e.g., `en`, `de`, `fr`). Because a single stream can output captions in multiple target languages simultaneously, each language is tracked independently. Sorted by uptime descending.

Click any slice to drill down into a per-stream uptime breakdown for that language.

<img src={require('../assets/analytics/analytics-live-captions-target-language.png').default} width="100%" />

*Screenshot: Target Language*

<img src={require('../assets/analytics/analytics-live-captions-target-language-zoom.png').default} width="100%" />

*Screenshot: Target Language — zoomed view*

## Uptime Usage by Stream

A paginated table showing total caption session uptime per stream.

| Column | Description |
|---|---|
| Stream name | The name of the stream |
| Duration (Hours) | Total uptime of live caption sessions for this stream |

You can search by stream name and sort by either column. The footer shows the total number of streams found.

<img src={require('../assets/analytics/analytics-live-captions-usage-by-stream.png').default} width="100%" />

*Screenshot: Uptime Usage by Stream*

