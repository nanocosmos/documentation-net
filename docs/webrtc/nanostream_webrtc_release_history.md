---
id: nanostream_webrtc_release_history
title: Release History
sidebar_label: History
toc_max_heading_level: 4
---


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


## v6.0.2

First public release!

## v6.0.1

Minor improvements in documentation and samples.

## v6.0.0

Official release, see MIGRATION_GUIDE.md for details.

## v6.0.0-beta1

Our first version with the new API!
