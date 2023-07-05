---
id: faq_WebRTC_devices
title: Device Questions
sidebar_label: Devices
---

## Questions Overview

- [I do not see a preview of my camera. What can this be?](#i-do-not-see-a-preview-of-my-camera-what-can-this-be)
- [I am trying to preview my camera but I get an error message. What can this be?](#i-am-trying-to-preview-my-camera-but-i-get-an-error-message-what-can-this-be)
- [I want to toggle my video device. How can I achieve this?](#i-want-to-toggle-my-video-device-how-can-i-achieve-this)

## I do not see a preview of my camera. What can this be?

This can have multiple reasons. First be sure to listen to the proper events for device handling - please listen to the event `StartPreviewError` to see why the camera/preview is not working correctly.


## I am trying to preview my camera but I get an error message. What can this be?

1. There is no camera connected.
2. Camera is being used by another browser.

## I want to toggle my video device. How can I achieve this?

You can not switch cameras/devices while a broadcast is active. Please stop the broadcast, switch camera/device and then start the broadcast again. Unfortunately we do not have an example for device toggling, you receive a list of available devices in the `ReceivedDeviceList` event. Please also add at least logs to the error handlers so you can see if something goes wrong:

```js
user.on("StartPreviewError", function(evt) {
  // handle error
console.log((event.data.text);
});
```

```js
user.on("StartBroadcastError", function(evt){
// handle error
console.log((event.data.text);
});
```