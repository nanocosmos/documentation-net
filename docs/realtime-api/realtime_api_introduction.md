---
id: realtime_api_introduction
title: nanoStream Real-Time API
sidebar_label: Introduction
description: Control your live streams in real time with simple REST calls. Start and stop recordings on demand, and switch between camera angles while you're live.
---

# nanoStream Real-Time API

The **nanoStream Real-Time API** gives you control over your live streams while they're live. You don't configure recording or camera switching ahead of time; you trigger them on demand, from your own application, with simple REST calls.

The API supports two features:

- **[On-Demand Recording](realtime_api_recording):** start and stop recording a live stream at any time. Each recording session produces its own file.
- **[Multi-Camera Switching](realtime_api_switching):** switch between camera angles in real time. Viewers watch one continuous video while you decide which camera is on air.

## How it works

The Real-Time API sits between your application and nanoStream Cloud. Your application sends REST calls, and the API carries them out on your live streams.

```
Your application  →  Real-Time API  →  nanoStream Cloud
  (REST calls)       (control layer)    (streaming infrastructure)
```

## Base URL and authentication

All requests go to the production API:

```
https://real-time-api.nanostream.cloud
```

Authenticate with your **bintu token**, the same token you use with the other nanoStream Cloud APIs. Send it as a Bearer token:

```
Authorization: Bearer <bintu token>
```

You can get a bintu token from the nanoStream Cloud Dashboard or the bintu API, or create one from your API key with the [Cloud Token Service](https://doc.pages.nanocosmos.de/cloudtokenservice-api-docs/#operation/Create%20a%20token%20for%20the%20bintu%20services).

## Use cases

- **Live casino / iGaming:** switch between table, dealer and wheel cameras during a game.
- **Sports broadcasting:** cut between camera angles in real time.
- **Live events:** record specific segments of a longer broadcast on demand.
- **Compliance:** start recording when it's needed and stop when it's done, with no unnecessary storage.

## Getting started

1. Make sure you have a nanoStream Cloud account with a valid bintu token.
2. Set up one or more live streams in the [Dashboard](https://dashboard.nanostream.cloud) or with the [bintu API](../cloud/bintu_api).
3. Follow the guide for the feature you need:
   - [On-Demand Recording](realtime_api_recording)
   - [Multi-Camera Switching](realtime_api_switching)

## API reference

For every endpoint, request and response schema and error code, see the interactive [Real-Time API Reference](https://real-time-api.nanostream.cloud/docs).

:::info Business feature
The Real-Time API requires a business upgrade. Contact our sales team through the [contact form](https://www.nanocosmos.de/contact) or by email to sales(at)nanocosmos.de.
:::
