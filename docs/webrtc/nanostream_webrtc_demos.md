---
id: nanostream_webrtc_demos
title: Browser demos
sidebar_label: Browser Demos
---

## Webcaster Demos Overview

Below you can find links to our Webcaster demo applications.
These samples are designed to showcase the broad capabilities of our Webcaster technology, providing you with practical experience and insight into its features. Explore our sample code to see how nanoStream Webcaster can enhance your webcasting projects.

To fully utilize these samples, please ensure you have a bintu account. Create a stream in the bintu frontend, and then append the stream name to the sample pages' URLs using the `streamName` URL parameter.

## Before You Start

:::info Before starting
To begin testing our samples, please sign in to your nanoStream Cloud/Bintu account and create a new stream here [here](https://dashboard.nanostream.cloud/stream/create). <br/>
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email  [sales@nanocosmos.net](mailto:sales@nanocosmos.net)
:::

## Webcaster Samples

Append your stream name to one of the following samples:

- Main Sample: https://nanocosmos.github.io/webcaster/samples/index.html?streamName=[stream-name]
- Minimal Sample: https://nanocosmos.github.io/webcaster/samples/minimal/index.html?streamName=[stream-name]
- Screen Share: https://nanocosmos.github.io/webcaster/samples/screenshare/index.html?streamName=[stream-name]

### Usage

The main sample showcases the lifecyle of the Webcaster, you can perform the following actions there:

- append your bintu stream name to one of the URLs
- configure stream properties in the editor `WebcasterApiV6.Config`
- click `Create New Instance` to create a new Webcaster instance with your configuration
- click `startPreview` to preview the MediaStream that will be streamed to our CDN 
- click `startBroadcast` to start the ingest
- click `stopBroadcast` to stop the ingest
- click `recover` to restart the webcast with the same configuration
- click `dispose` to destroy the Webcaster instance
- click `setMuted` to mute the ingest

## Playback

You can play back your Webcaster ingests with our H5LivePlayer.

The main sample from above includes a side-by-side player for your convencience when testing.
To create a shareable player link, append the stream name to our player demo URL:
- player url: https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?entry.rtmp.streamname=[stream-name]


:::info
Click [here](../nanoplayer/nanoplayer_getting_started) for more information on  how to embed the H5LivePlayer on your own webpage.
:::