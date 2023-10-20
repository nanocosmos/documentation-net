---
id: nanostream_webrtc_multiple_webcasts
title: Multiple Webcasts
sidebar_label: Multiple Webcasts
---

Multiple Webcasts allow you to simultaneously broadcast multiple streams from a single browser tab. This feature is particularly useful for a range of use cases, including:

- Broadcasting multiple camera and/or microphone streams at once.
- Broadcasting a camera and screen share streams.
- Broadcasting multiple audio streams.

## Setting Up Multiple Webcasts

To start multiple Webcasts, you'll need to create and setup multiple instances of the Webcaster API in your code. How you configure these instances depends on the sources you want to use for streaming.

### Example: Broadcasting Camera & Screen Share

In this example, we'll demonstrate how to:

- Create and configure two instances of the Webcaster API for camera and screen sharing.
- Set up both instances.
- Start two previews, one for the camera and one for screen sharing.
- Start the broadcast on both instances.

#### 1. Create API Instances

```js
// First, create an instance for broadcasting a camera stream
// The media stream will be created internally with default constraints
const camWebcaster = new window.WebcasterApiV6({
  serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',
  ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',
  streamName: '<STREAM-NAME-1>'
});

// For screen sharing, obtain a media stream
const screenMediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true });

// Create a second instance for broadcasting the screen share
// Pass the screenMediaStream as a part of config object
const screenWebcaster = new window.WebcasterApiV6({
  inputCfg: {
    mediaStream: screenMediaStream
  },
  serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',
  ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',
  streamName: '<STREAM-NAME-2>'
});
```

#### 2. Set up the instances

Before using the API further, make sure to set up the instances. This step includes creating a media stream if it's not passed and configuring other internal settings. Feel free to run these calls in parallel.

```js
await camWebcaster.setup(),

await screenWebcaster.setup()
```

#### 3. Optional: Start previews

To start previews, call **startPreview** on both instances and pass the corresponding video element IDs.

```js
camWebcaster.startPreview('camera-preview-id');

screenWebcaster.startPreview('screenshare-preview-id');
```

#### 4. Start broadcasts on both instances

To initiate the broadcasts one after another, call and await **startBroadcast** on both instances. You can run these calls in parallel.

```js
await camWebcaster.startBroadcast();

await screenWebcaster.startBroadcast();
```