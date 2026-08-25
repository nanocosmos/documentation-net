---
id: nanostream_webrtc_release_history
title: Release History
sidebar_label: History
toc_max_heading_level: 4
---



## 6.2.4 (2026-08-26)


### Release Notes

This is a maintenance release focused on audio-only and video-only broadcasts, making device permissions behave the way you would expect when 
you only need one of the two.

#### Bug Fixes:

 - Audio-only and video-only permission handling: Until now, the SDK always requested both microphone and camera access before starting a session, even when you configured an audio-only or video-only broadcast. A missing or denied camera could therefore block an audio-only webcast entirely. The permission probe now matches your settings and only asks for the track kind you actually use.
 - Device enumeration in audio-only mode: For the same reason, listing available devices could fail when one device kind was unavailable. Enumerating microphones no longer depends on camera access, and vice versa.

#### Sample Improvements:

- The main sample now shows an audio-only indicator on the preview, so it is immediately clear when a session carries no video.
- The samples request device permissions in line with the selected audio/video mode.


## 6.2.0 (2024-07-15)


### Release Notes

This release contains enhancements and fixes aimed at making your live broadcasting smoother and more reliable than ever before.


#### Improvements:

  - Enhanced Error Reporting: Additional error codes have been introduced, making it easier to diagnose and resolve issues quickly.
  - Improved Metrics Reporting: We've enhanced the reporting of session lifetime metrics, offering us more detailed insights into your broadcasts.  Sending additional metrics will allow us to analyze issues faster and more accurate.

#### Bug Fixes:

 - Chrome Bug Fix: We've addressed a bug in Chrome where requested resolutions were too low in our main sample.
 - Metrics Continuity: We fixed an issue where metrics continued to be sent even after a webcast failure, now providing more accurate data.


## 6.1.0 (2024-04-10)


### Release Notes


 This latest version introduces a suite of bug fixes and new features aimed at optimizing your development process and offering your users a seamless streaming experience.

#### Features

- **Auto-Reconnection:** To ensure uninterrupted streaming, version 6 of the Webcaster now includes auto-reconnection capabilities, making your streams more resilient to network disruptions.

#### Bug Fixes:

- We've addressed an issue where calling `dispose()` could fail and leave the client in a dirty state. 
- Initially disabled/muted tracks of MediaStreams are no longer automatically re-enabled by the SDK.
- The `isMuted` method now accurately reflects the actual mute status


## 6.0.2 (2023-12-04)

First public release!

See [Migration Guide](./migration_guide_v6)  for details.
