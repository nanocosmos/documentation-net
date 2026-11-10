---
id: nanoplayer_feature_audio_session_handling
title: AudioSession handling
sidebar_label: AudioSession handling
---

## AudioSession handling in NanoPlayer

Browsers, Safari on iOS in particular, control audio routing and silent-switch behavior through the Audio Session API (`navigator.audioSession`). The session type decides whether audio plays with the silent switch on, and whether the microphone can be used. By default, NanoPlayer manages the session type for playback so audio is audible when the iOS silent switch is active.

If your application uses WebRTC or `getUserMedia` for microphone capture, see [Setting up an application that uses WebRTC or getUserMedia](#setting-up-an-application-that-uses-webrtc-or-getusermedia).

### Player setting: `config.playback.manageAudioSessionType`

Added in **nanoStream Player Version 5.0.11**.

| Property | Type | Default | Description |
|---|---|---|---|
| `config.playback.manageAudioSessionType` | boolean | `true` | When enabled, the player sets the session type to `playback` during `setup`, unless the `AudioSession.type` is already set to `playback` or `play-and-record`, to enable audio playback while the iOS silent switch is on. |

```javascript
var config = {
    "source": {
        // ...
    },
    "playback": {
        "manageAudioSessionType": true // default
    }
};
```

Setting it to `false` disables this, so the application can manage the session type itself.

### How it behaves

- With `manageAudioSessionType` enabled (default), the player sets the session type to `playback` during playback.
- If the application has already set the session type to `play-and-record`, the player leaves it unchanged.
- `play-and-record` also allows microphone input, which `getUserMedia` and WebRTC require on iOS.
- The player applies the session type during the `setup` call.
- The application can change the session type before or after the `setup` call.

### Browser API: `navigator.audioSession.type`

The browser's default audio session is controlled through `navigator.audioSession.type`. This is not a NanoPlayer config option. See the [MDN reference for AudioSession: type](https://developer.mozilla.org/en-US/docs/Web/API/AudioSession/type) for the accepted values.

`navigator.audioSession` has limited browser availability. Check for it before use, as shown in the example below, and fall back to default behavior when it is missing.

### Setting up an application that uses WebRTC or getUserMedia

If your application captures a microphone and plays audio on the same page, set the session type at the application level, before you call `getUserMedia`:

```javascript
// Set once at app startup
if (navigator.audioSession) {
    navigator.audioSession.type = 'play-and-record';
}
```

The player leaves the session type untouched when it is already set to `play-and-record`. `manageAudioSessionType` can stay enabled.

### More about the player configuration

Please check examples on how to configure the player at the [Getting started](../nanoplayer/nanoplayer_getting_started) section.
