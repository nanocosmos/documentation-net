---
id: realtime_api_switching
title: Multi-Camera Switching
sidebar_label: Multi-Camera Switching
description: Switch between multiple camera angles in real time. Viewers see one continuous video stream while your application controls which camera is active.
---

## Overview

Multi-Camera Switching lets you switch between multiple camera angles during a live broadcast. The viewer sees one continuous video stream — they never know that multiple cameras are behind it.

Your application controls which camera is active. When you trigger a switch, all connected viewers move to the new camera angle within seconds.

## Use Cases

- **Live casino / iGaming** — A game table has 3–4 cameras (wide shot, wheel, dealer, table layout). The game software switches cameras based on game events.
- **Sports** — Cut between different camera positions during a match.
- **Live events** — Switch between stage, audience, and backstage cameras.
- **Surveillance / monitoring** — Rotate between camera feeds on demand.

## How It Works

The switching flow has three parts: **setup**, **switching**, and **viewing**.

### 1. Setup — Define the room

A **room** represents a set of camera angles. Each angle is a separate live stream with a label you choose (e.g. "wide", "wheel", "dealer").

You send a setup request with your camera angles. The API validates the streams and returns a **player URL** that you give to your viewers.

### 2. Switch — Change the active camera

When your application needs to switch cameras, it sends a switch request with the label of the new active angle. All connected viewers receive the update.

### 3. View — Viewers watch a single player

Viewers open the player URL from step 1. They see whichever camera angle is currently active. When a switch happens, the player moves to the new angle automatically. The viewer does not need to do anything.

```
Your Application                    Viewers
      │                                │
      ├─▶ POST /rooms/setup            │
      │   (define angles, get URL) ────┼──▶ Open player URL
      │                                │
      ├─▶ PUT /rooms/:id/switch        │
      │   (activate "wheel") ──────────┼──▶ Player switches to "wheel"
      │                                │
      ├─▶ PUT /rooms/:id/switch        │
      │   (activate "dealer") ─────────┼──▶ Player switches to "dealer"
      │                                │
```

## Prerequisites

- A **nanoStream Cloud** account with a valid **bintu API key**
- Two or more live streams running (one per camera angle)
- The **Real-Time API** enabled for your organisation

## Getting Started

### Step 1: Start your camera streams

Start a separate live stream for each camera angle. You can use the [nanoStream Cloud Dashboard](/docs/dashboard/start_streaming) or any supported encoder.

For example, for a live casino table you might have:

| Label | Stream | Description |
|-------|--------|-------------|
| wide  | Stream A | Wide shot of the table |
| wheel | Stream B | Close-up of the wheel |
| dealer | Stream C | Dealer camera |

### Step 2: Set up a room

Send a setup request with your camera angles. Mark one angle as the starting view.

```bash
curl -X POST https://realtime-api.nanocosmos.de/rooms/setup \
  -H "X-BINTU-APIKEY: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "angles": {
      "wide": "STREAM_NAME_A",
      "wheel": "STREAM_NAME_B",
      "dealer": "STREAM_NAME_C"
    },
    "active": "wide",
    "roomId": "table-42"
  }'
```

The API validates your streams and returns a **player URL**. Share this URL with your viewers.

:::tip Room ID
The `roomId` is optional. If you don't provide one, the API generates one for you. Use your own room ID when you want to map it to your own system (e.g. a table number or event ID).
:::

### Step 3: Embed the player

The player URL from the setup response is a hosted page. Embed it in your website or application using an iframe:

```html
<iframe
  src="PLAYER_URL_FROM_SETUP"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen>
</iframe>
```

The player handles everything — connecting, receiving switch events, and playing the active camera angle. You do not need to manage the player yourself.

### Step 4: Switch cameras

When your application needs to change the active camera, send a switch request:

```bash
curl -X PUT https://realtime-api.nanocosmos.de/rooms/table-42/switch \
  -H "X-BINTU-APIKEY: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "active": "wheel",
    "angles": {
      "wide": "STREAM_NAME_A",
      "wheel": "STREAM_NAME_B",
      "dealer": "STREAM_NAME_C"
    }
  }'
```

All connected viewers switch to the "wheel" camera within seconds.

### Step 5: Repeat

You can switch as often as needed. Each switch updates all connected viewers. If a viewer joins mid-session, they automatically see the current active camera.

## Secure Playback

If your organisation uses [secure playback tokens](/docs/cloud/security), you can pass the security token during setup. The player handles secure playback automatically — viewers don't need to know about it.

Include the token in your setup request:

```bash
curl -X POST https://realtime-api.nanocosmos.de/rooms/setup \
  -H "X-BINTU-APIKEY: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "angles": {
      "wide": "STREAM_NAME_A",
      "wheel": "STREAM_NAME_B"
    },
    "active": "wide",
    "security": {
      "jwtoken": "YOUR_SPLAY_JWT"
    }
  }'
```

## What Happens When Things Go Wrong

The system is designed to keep video playing, even when something unexpected happens:

| Situation | What happens |
|-----------|-------------|
| A viewer joins after a switch | They see the current active camera immediately |
| A switch request fails | Viewers keep watching the previous camera — no black screen |
| The viewer's connection drops | The player reconnects and shows the current active camera |

## Authentication

All requests require your **bintu API key** in the `X-BINTU-APIKEY` header. This is the same API key you use with other nanoStream Cloud APIs.

## API Reference

For full endpoint details, request/response schemas, and error codes, see the **Real-Time API Reference**:

👉 [Real-Time API Reference (Scalar)](#)

:::info Business Feature
Multi-Camera Switching requires a business upgrade. Please reach out to our sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::
