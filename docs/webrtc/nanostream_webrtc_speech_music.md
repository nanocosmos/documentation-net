---
id: nanostream_webrtc_speech_music
title: Speech / Music Streaming
sidebar_label: Speech / Music Streaming
---

In addition to configuring bitrates ([Features > Quality Settings](./nanostream_webrtc_quality/)),
it is possible to explicitly disable or enable the following audio filters:

- **autoGainControl** - Attempts to automatically maintain a steady overall volume level.
- **echoCancellation** - Attempts to prevent echo effects.
- **noiseSuppression** - Automatically filters the audio to remove background noise.

Depending on the use case, it can be beneficial to enable or disable all of these filters at once. <br/>
In general, there are two primary types of audio content:

- **Speech:** Typically includes spoken content
- **Music:** Comprises musical audio content

:::tip Recommendation
For optimal results, we recommend setting all of the above filters to `true` for speech/voice streams and all of them to `false` for music streaming. In most systems, these filters are enabled by default.
:::

## Speech audio

For speech audio streaming, enable the recommended filters

```js
const webcaster = new window.WebcasterApiV6.Webcaster({
  inputCfg: {
    mediaStreamCfg: {
      audioConstraints: {
        autoGainControl: true,
        echoCancellation: true,
        noiseSuppression: true,
      }
    },
  },
  streamName: '<STREAM-NAME-1>'
});

await webcaster.setup()
await webcaster.startBroadcast()
```

## Music audio

For music audio streaming, disable the filters:

```js
const webcaster = new window.WebcasterApiV6.Webcaster({
  inputCfg: {
    mediaStreamCfg: {
      audioConstraints: {
        autoGainControl: false,
        echoCancellation: false,
        noiseSuppression: false,
      }
    },
  },
  streamName: '<STREAM-NAME-1>'
});

await webcaster.setup()
await webcaster.startBroadcast()
```