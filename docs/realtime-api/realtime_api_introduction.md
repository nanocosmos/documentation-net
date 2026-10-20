---
id: realtime_api_introduction
title: nanoStream Real-Time API
sidebar_label: Introduction
description: The nanoStream Real-Time API provides on-demand control over live stream recording and multi-camera switching through a simple REST API.
---

## Overview

The nanoStream Real-Time API gives you control over your live streams in real time. Instead of configuring recording or camera switching ahead of time, you can trigger these actions on demand — while your stream is live.

The API currently supports two features:

- **[On-Demand Recording](./realtime_api_recording)** — Start and stop recording of a live stream at any time. Each recording session produces a separate file.
- **[Multi-Camera Switching](./realtime_api_switching)** — Switch between multiple camera angles in real time. Viewers see one continuous video stream while you control which camera is active.

## How It Works

The Real-Time API sits between your application and the nanoStream Cloud infrastructure. Your application sends simple REST calls to control what happens to your live streams.

```
Your Application  →  Real-Time API  →  nanoStream Cloud
   (REST calls)       (control layer)     (streaming infrastructure)
```

You authenticate using your **bintu API token** — the same token you already use with other nanoStream Cloud APIs.

## Use Cases

- **Live casino / iGaming** — Switch between table, dealer, and wheel cameras during a game.
- **Sports broadcasting** — Cut between multiple camera angles in real time.
- **Live events** — Record specific segments of a longer broadcast on demand.
- **Compliance** — Start recording when needed, stop when done. No unnecessary storage.

## Getting Started

1. Make sure you have a **nanoStream Cloud** account with a valid **bintu API key**.
2. Set up one or more live streams using the [nanoStream Cloud Dashboard](/docs/dashboard/getting_started) or the [bintu API](/docs/cloud/bintu_api).
3. Follow the guide for the feature you need:
   - [On-Demand Recording](./realtime_api_recording)
   - [Multi-Camera Switching](./realtime_api_switching)

## API Reference

For full endpoint details, request/response schemas, and error codes, see the **Real-Time API Reference**:

👉 [Real-Time API Reference (Scalar)](#)

:::info Business Feature
The Real-Time API requires a business upgrade. Please reach out to our sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::
