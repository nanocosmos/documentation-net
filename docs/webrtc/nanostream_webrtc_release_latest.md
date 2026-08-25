---
id: nanostream_webrtc_release_latest
title: Latest Release
sidebar_label: Latest
---


# 6.2.4 (2026-08-26)


## Release Notes

This is a maintenance release focused on audio-only and video-only broadcasts, making device permissions behave the way you would expect when 
you only need one of the two.

### Bug Fixes:

 - Audio-only and video-only permission handling: Until now, the SDK always requested both microphone and camera access before starting a session, even when you configured an audio-only or video-only broadcast. A missing or denied camera could therefore block an audio-only webcast entirely. The permission probe now matches your settings and only asks for the track kind you actually use.
 - Device enumeration in audio-only mode: For the same reason, listing available devices could fail when one device kind was unavailable. Enumerating microphones no longer depends on camera access, and vice versa.

### Sample Improvements:

- The main sample now shows an audio-only indicator on the preview, so it is immediately clear when a session carries no video.
- The samples request device permissions in line with the selected audio/video mode.

## Packages

 - [6.2.4](https://files.nanocosmos.de/index.php/s/r5fmJZ8soPaeRRA "nanoStream-Webcaster-6.2.4.zip")
 - Clone the git repository at https://github.com/nanocosmos/webcaster
 - or download a zipped archive from [nanocosmos/webcaster](https://github.com/nanocosmos/webcaster/archive/refs/heads/main.zip)
