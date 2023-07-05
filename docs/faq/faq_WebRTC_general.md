---
id: faq_WebRTC_general
title: General Questions
sidebar_label: General
---

## Questions Overivew

- [Do we support all types of cameras?](#do-we-support-all-types-of-cameras)
- [Which browsers do we support?](#which-browsers-do-we-support)
- [How can I check browser support?](#how-can-i-check-browser-support)
- [How to check browser support during runtime?](#how-to-check-browser-support-during-runtime)
- [Is WebRTC supported in a Webview on iOS and Android?](#is-webrtc-supported-in-a-webview-on-ios-and-android)

## Do we support all types of cameras?

Camera support is dependent on your browser, which will do the live capture in WebRTC.
You can try the WebRTC Camera Test Page for "getusermedia" [here](https://webrtc.github.io/samples/src/content/devices/input-output/).


## Which browsers do we support?

Generally we support the two major desktop platforms Windows and MacOS and Android and iOS as mobile platforms. Because WebRTC is an “in development” technology there are minor restrictions regarding browser support. 

#### Please see the below list for platform/browser combinations that we support officially.

|         | Chrome | Firefox |      MS Edge     | Safari |
|---------|--------|---------|------------------|--------|
| Windows |    x   |    x    | with limitations |    -   |
|  MacOS  |    x   |    x    |         -        | => v11 |
|   iOS   |    -   |    -    |         -        | => v11 |
| Android |    x   |    -    |         -        |    -   |


## How can I check browser support?

You can check the static capabilities array of the NanoPlayers class `NanoPlayer.capabilities`. If the array has values, the player is supported. Values can be `h5live`, `flash` and `native`.

You might also try the webrtc sample pages at https://webrtc.github.io/samples/ and https://test.webrtc.org/

## How to check browser support during runtime?

You can call the function `RtcUser.checkSupport()`. It will give you information about support regarding the currently used browser. 

:::note
You can find more information [here](../webrtc/nanostream_webrtc_api#rtcuserchecksupport--int) in the WebRTC Docs.
:::

## Is WebRTC supported in a Webview on iOS and Android?

WebRTC works both on the native browsers Safari on iOS and Chrome on Android.
For in-app usage for developers, the Android Webview works, but on iOS, camera support is not enabled by Apple yet.
Playback with H5Live player works fine on both systems.
There is one restriction about codec support, the systems need to support both H264 video for encoding and playback, and Opus audio for encoding, and AAC audio for playback.