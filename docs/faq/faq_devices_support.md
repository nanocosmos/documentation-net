---
id: faq_devices_support
title: Capture Devices & Camera Support Questions
sidebar_label: Capture Devices & Camera Support
---

## Questions Overview

- [Which cameras and capture cards are compatible with nanoStream?](#which-cameras-and-capture-cards-are-compatible-with-nanostream)
- [Can I stream from an IP camera?](#can-i-stream-from-an-ip-camera)
- [Devices and cameras supported for Android and iOS?](#devices-and-cameras-supported-for-android-and-ios)

## Which cameras and capture cards are compatible with nanoStream?

Basically every camera connected to a live encoder hardware or software can be used.

The connection to nanoStream Cloud is the RTMP protocol, with the H264/AAC video audio codecs.

Most live encoder hard- and software support this protocol.

nanoStream Webcaster uses the browser-builtin architecture to connect a camera and encoder,
based on HTML technologies and WebRTC. If your camera works with the browser, it should also work with nanoStream Cloud.

There is a range of cameras which are tested in our lab and verified.

#### Our recommendations:
- Web cams: `Logitech` or `Microsoft`
- Studio based encoding `Blackmagic Decklink`, Videon, Teradek 

## Can I stream from an IP camera?

It depends. You may need to connect the IP cam to a PC as a live source and stream with RTMP,
We can also provide custom support for specific IP cameras.

## Devices and cameras supported for Android and iOS?

#### Web Applications / nanoStream H5Live

##### nanoStream H5Live Player

nanoStream H5Live player is compatible to most HTML5 browsers, either based on - `ULL HLS` (Safari/iOS) - `MSE` (other browsers)

Known to work for H5Live plugin-free are `Chrome`, `Firefox`, `Safari`, `Edge` and `IE` 

For Windows 7 / IE there is a Flash player fallback

:::tip note
Some builtin browsers, especially on Android, do not fully support HTML5. This might affect builtin Samsung browsers. <br/>
**We recommend using Chrome.**
:::


##### nanoStream Webcaster Broadcaster

Most browsers supporting the latest HTML5 WebRTC standards should work. 
Apple introduced WebRTC support end 2017 for iOS/Safari, and the WebRTC standard is not fully finalized yet, so there might be specific issues on specific devices. Please contact us for details.

#### Native Applications / nanoStream SDKs

##### nanoStream native SDK iOS

All iOS devices running `iOS8 and higher` should be compatible with nanoStream Live Encoder for iOS. It is recommended to use at least `iPhone 5s or higher` with the latest updates available.

**nanoStream native SDK for Android**

Recommended Android version is `5.x or higher`

**Compatible devices for Android:**

There is a wide range of Android devices known to work with nanoStream, e.g. Samsung Galaxy S and Tab, Google/HTC/LG Nexus/Pixel, Sony XPeria 
