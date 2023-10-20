---
id: nanostream_webrtc_quality
title: Quality Settings
sidebar_label: Quality Settings
---

## Stream Quality Configuration

Webcaster API allows you to configure the quality settings for your broadcasts. You can control the quality of your streams through Media Stream constraints and encoding properties in two corresponding places:

1. **Media Stream (Preview) Configuration:** These settings affect the quality of the preview stream before broadcasting. Learn more about [Media Stream Quality Configuration](#media-stream-quality-configuration).

2. **Broadcast Configuration:** These settings influence the encoding and quality of the stream as it's sent to the nanoStream Cloud. Explore [Browser-side Encoding Options](#browser-side-encoding-options) and [Audio Conversion on the Server](#audio-conversion-on-the-server).


### Media Stream Quality Configuration

Adjust various quality settings for your media stream:

- Video resolution
- Maximum video frame rate
- Audio constraints

```js
const webcaster = new window.WebcasterApiV6.Webcaster({
  inputCfg: {
    mediaStreamCfg: {
      resolution: [1280, 720],
      maxFramerate: 30,
      audioConstraints: {
        autoGainControl: true,
        channelCount: 1,
        echoCancellation: true,
        noiseSuppression: true
      }
    },
  },
  serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',
  ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',
  streamName: '<STREAM-NAME-1>'
});

await webcaster.setup()
await webcaster.startBroadcast()
```

:::info
Note that the `resolution` is "ideal" value. In the end, it is up to a browser to decide what resolution is the most optimal one in a particular case. Similar applies to `maxFramerate` which only sets the upper limit of frame rate
:::

### Browser-side Encoding Options

After the webcaster has been set up and before the stream is sent to the nanoStream cloud, it is encoded in the browser.
It's possible to configure the following encoding properties:

- Maximum video bitrate
- Maximum audio bitrate
- Maximum encoding frame rate
- Audio transcoding bitrate

```js
const webcaster = new window.WebcasterApiV6.Webcaster({
  inputCfg: {
    broadcastCfg: {
      maxAudioBitrateBps: 64000,
      maxVideoBitrateBps: 2000000,
      maxEncodingFramerate: 30,
    },
  },
  serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',
  ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',
  streamName: '<STREAM-NAME-1>'
});

await webcaster.setup()
await webcaster.startBroadcast()
```
:::info
Note that these values are upper limits. The browser will only go up to the configured bitrate if the image is complex (for example, if there is a lot of motion in the image). This usually means that the average bitrate will be lower than the
configured maximum bitrate. For example, if there is no movement in front of the camera or the image is dark, the video bitrate will be lower than configured.
maxEncodingFramerate' takes into account the Media Stream frame rate setting and cannot be higher than this.
:::

### Audio Conversion on the Server

The video bitrate of the resulting RTMP stream will be similar to the bitrate encoded by browsers. Audio is converted on the server side, so it's also possible to set the transcoding bitrate for audio.<br/>

```js
const webcaster = new window.WebcasterApiV6.Webcaster({
  inputCfg: {
    broadcastCfg: {
      transcodeAudioBitrateBps: 64000,
    },
  },
  serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',
  ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',
  streamName: '<STREAM-NAME-1>'
});

await webcaster.setup()
await webcaster.startBroadcast()
```
