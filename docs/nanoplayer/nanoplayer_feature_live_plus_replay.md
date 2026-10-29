---
id: nanoplayer_feature_live_plus_replay
title: Live + Replay
sidebar_label: Live + Replay
---

## Overview

The **Live + Replay** player plays a live stream **and its recording** in one frame.
Viewers can go back in time during a live event, return to the live edge, and keep watching the recording after the event has ended.
The player detects which of these is possible and switches on its own.

It combines two playback engines:

| Mode       | Engine            | Description                                                                                                                   |
| ---------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Live**   | nanoStream Player | Ultra-low latency playback of the live edge (MOQ or MSE), with ABR across the stream group's renditions.                      |
| **Replay** | hls.js            | Playback of the recording from the nanocosmos VOD storage: the growing DVR while live runs, the finished recording afterwards. |

Only one of the two is on screen at a time. Your nanoPlayer configuration (source, playback, style, events) is reused as it is; the player adds the recording and the switching.

---

## Live, Replay and Offline

At start-up the player checks the live stream and its recording, then picks what to show:

| Live stream | Recording | The player shows                                              | Status                |
| ----------- | --------- | ------------------------------------------------------------- | --------------------- |
| running     | growing   | Live, with seek bar and back 10 s                             | Live                  |
| running     | none yet  | Live only — the seek bar unlocks once the recording appears   | Live (no replay)      |
| ended       | available | The recording, paused, with a _Watch replay_ button           | Replay (past session) |
| ended       | none      | Offline screen                                                | Offline               |

### While watching

- **Scrub back** on the seek bar (or press back 10 s): the player switches from live to the recording, at that point. Status: _Replay_.
- **Return to live**: click the Live badge, or drag the seek bar to its end. Playback resumes at the live edge in the quality you were watching.
- **The live stream ends** while you watch live: the player moves to the recording, paused, with _Watch replay_. Without a recording it shows the offline screen.
- **The live stream starts again** while you watch the recording or the offline screen: the Live badge (or a _Back to Live_ button on the offline screen) appears. The player never pulls you out of a recording on its own.

:::info
On the demo page the transport is shown above the status: **Live-MoQ** or **Live-MSE** for live, **REPLAY** for the recording.
:::

---

## Controls

The control bar is nanoPlayer's (same icons, sizes and 5 s auto-hide), with additions for replay:

![The control bar at the live edge: seek bar, play/pause, mute, volume, back 10 s, Live badge, fullscreen](/img/player_controlbar.png)

- **Seek bar**: shown above the buttons once a recording exists. Drag or click to jump into the recording; releasing in the last 1 % goes back to live. Arrow keys move 2 %, Home / End jump to the start / live. The played part is orange at the live edge and blue on the recording (both can be changed, see [Styling](#styling)).
- **Back 10 s**: left of the Live badge, shown while a recording exists. On the recording it goes back 10 seconds from the current position, or to the start when that is closer; a recording that has finished plays again. From live it switches to the recording 10 seconds before its end (see [Recording Timing](#recording-timing)).
- **Live badge**: highlighted and not clickable while you watch live. On the recording of a running stream it is dimmed and takes you back to live. Hidden when the stream has ended.
- **Time**: the position in the recording. Hidden at the live edge.
- **Centre button**: _Play_ when paused, _Watch replay_ at the end of a recording or after an automatic switch to it.

---

## Recording Timing

The recording is written in segments. Its newest part is the last finished segment, so it **trails the live edge by about one segment**:

```text
recording start        back 10 s from live     recording end   live edge
      |========================|========================|- - - - - -|
                                                        <- ≈ 1 segment ->
```

- **From live, the closest point in the recording** is its end, about one segment behind live. Back 10 s from live lands about 15–20 s behind live.
- **On the seek bar** the smallest step is 1 % of the recording: 6 s on 10 minutes, 36 s on an hour. Back 10 s is the precise step for longer recordings.
- **Within the recording** seeking is exact: you land where you point.
- **A new stream** has no recording for its first 10–16 seconds. The player looks for it again after 12, 36 and 84 seconds and unlocks the seek bar once it is there.

---

## Getting Started

### On the demo page

Add your stream to the page URL:

```text
# bintu stream group, by group id or streamname (ABR live)
?group.id=<stream group id or streamname>

# or direct to the live server, single rendition
?entry.streamname=<streamname>

# secure live stream
?group.id=<…>&group.security.jwtoken=<jwt>
```

### In your page

Load nanoPlayer and hls.js, then create the player like a nanoPlayer and add a `replay` block:

```html
<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.5.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/hls.js@1.7.3/dist/hls.min.js"></script>
<script src="https://demo.nanocosmos.de/nanoplayer/live-plus-replay/1/live-replay.min.js"></script>

<div id="player"></div>
<script>
    new LiveReplay.LiveReplayPlayer('player').setup({
        source : { group: { id: '<stream group id>' } },   // your nanoPlayer config
        style  : { seekBarLiveColor: '#e5883c', seekBarReplayColor: '#408bc3' },
        events : { onPlay (e) { console.log('playing', e.data.mode); } },
        replay : { baseUrl: 'https://bintu-vod.nanocosmos.de/vod/replay/' }  // + this
    });
</script>
```

The player has the usual methods: `play()`, `pause()`, `goLive()`, `goReplay(fraction)`, `skipBack(seconds)`, `setVolume(v)`, `toggleMute()`, `destroy()`.

:::tip
`layout: 'fill'` makes the player fill its container, for iframes.
:::

---

## Styling

The player reads nanoPlayer's own colour options, so one `style` block colours both modes. Any CSS colour works.

| Option                      | Default               | Colours                              |
| --------------------------- | --------------------- | ------------------------------------ |
| `symbolColor`               | `rgba(244,233,233,1)` | icons, time, Live badge              |
| `controlBarColor`           | `rgba(0,0,0,0.5)`     | the control bar                      |
| `backgroundColor`           | `black`               | frame and offline screen             |
| `fullScreenBackgroundColor` | as `backgroundColor`  | the frame in fullscreen              |
| `seekBarLiveColor`          | `#e5883c`             | seek bar and handle at the live edge |
| `seekBarReplayColor`        | `#408bc3`             | seek bar and handle on the recording |

In a URL they are `style.<option>=<colour>`, with `#` written as `%23`:

```text
&style.seekBarLiveColor=%23ff0000&style.seekBarReplayColor=%2300c878
```

:::info
The `seekBarColor` still works and colours both modes.
:::

---

## Events

Events have nanoPlayer's shape, `{ name, player, data }`, from two blocks:

- **`events`**: your nanoPlayer events, in both modes. On the recording, `onPlay`, `onPause`, `onStartBuffering`, `onStopBuffering`, `onVolumeChange`, `onMute`, `onUnmute` and `onError` come from the replay video. Every `data` carries `mode: 'live' | 'replay'`.
- **`liveReplayEvents`**: what only this player knows: `onModeChange`, `onAvailabilityChange`, `onLiveAvailable`, `onReplayAvailable`, `onCurrencyChange`, `onTransition`, `onOffline`, `onReplayPrompt`, `onFault`, `onStreamName`, `onQualityChange`. Each fires only when its value changes.

---

## Good to Know

- **Autoplay**: when the browser blocks playback with sound, the player starts muted; the mute icon shows it. Automatic switches (stream ended, access denied) land paused with _Watch replay_. See also [Autoplay](./nanoplayer_autoplay).
- **Back to live is faster on MOQ**: on [MOQ](./nanoplayer_feature_moq) the live player is only paused while you watch the recording, so it resumes at once. On MSE it is restarted.
- **Errors**: a panel names the kind (player, network, security, switch) with a short hint.