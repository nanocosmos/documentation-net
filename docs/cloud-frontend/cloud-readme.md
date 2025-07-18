---
id: cloud-readme
title: Cloud Dashboard Overview - (V2)
sidebar_label: Cloud Dashboard Overview
---

:::caution We upgraded to V3
With the release of nanoStream Cloud 2022, it is now even easier to create and manage live streams, especially for Adaptive Bitrate and secure streams! <br/>

**Find the documentation of V3 [here](../dashboard/overview).**
:::

## What is the nanoStream Cloud/Bintu Dashboard?

The nanoStream Cloud/Bintu Dashboard is a Stream Management Dashboard that helps you improve your streaming workflow. It helps you to create, customize and manage streams in an intuitive way and mirrors all features and functions of the [bintu API](../cloud/bintu_api). 

Every stream has at least:

- one ingest stream which is used by your live encoder connected to a live source (camera)

- one playout stream which can be played with nanoPlayer on all browsers

- "Stream Group" for Adaptive Bitrate: a single passthrough stream with the same quality as the incoming encoder stream, plus additional streams for adaptive bitrate


### Key features

- Compact overview of your organization
- Intuitive way of creating and customizing a new stream
- Create transcoded streams for adaptive bitrate
- Create secured streams (token security playback)
- New Stream Overview
- Watch playback immediately
- Easy steps to playout (from Ingest to Playout)
- Code snippets to embed on your own web page


## Dashboard URL

:::info Before starting
To begin, please sign in using your nanoStream Cloud/Bintu account credentials. <br/>
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::

The nanoStream Dashboard can be found at 

- [nanoStream Cloud Dashboard V3](https://dashboard.nanostream.cloud/)
- [nanoStream Cloud Dashboard V2](https://bintu-cloud-frontend.nanocosmos.de/)

:::caution
This documentation still partly points to the old dashboard V2. The new dashboard V3 works accordingly.
**Find the documentation of V3 [here](../dashboard/overview).**
:::

## Authentication

### Sign In or Sign-Up

Sign in or sign up at the cloud dashboard URL above!

![Sign In](../assets/cloud-frontend-v2/sign-in.png)

![Sign Up](../assets/cloud-frontend-v2/sign-up.png)


## Dashboard

The overview shows your total streams, your total live streams, all users and tags of your organisation. 
Below your 5 latest live streams are shown. To see all, click on the ["See all streams"](https://bintu-cloud-frontend.nanocosmos.de/stream) button.

![Dashboard](../assets/cloud-frontend-v2/dashboard.png)


## Create Stream

Only one click (["Create new stream"](https://bintu-cloud-frontend.nanocosmos.de/stream/create)) is required to create a new stream. If you want to customize the stream, there are two possibilities to do that (Add tags, [Add Transcoding](How_to_Use_Transcoding.md)). They are all optional.

> To learn more about creating a stream, please click [here](How_to_Start_a_Stream.md).

![Create Stream](../assets/cloud-frontend-v2/create-stream-2.png)



### Add Stream Tags

  To add `stream tags` you can either type them manually in or choose from your existing ones.

![Create Stream: Add Tags](../assets/cloud-frontend-v2/create-stream-add-tags-2.png)



### Add Transcoding Profiles
   If your organisation has been enabled our "transcoding" feature, your are able to set `transcoding profiles` to create a transcoded stream. You can choose from several profiles and add tags to the profile.

> To learn more about adaptive bitrate and live transcoding and how to use it, click [here](How_to_Use_Transcoding.md).

![Create Stream: Add Transcoding](../assets/cloud-frontend-v2/create-stream-add-transcoding-2.png)



## New stream Overview

After creating a new stream, you see an overview with all information you need to start a stream.

![New Stream](../assets/cloud-frontend-v2/new-stream.png)



### 1. Start the Ingest
   In this section the ingest informations are placed including `RTMP streamname` and `RTMP URL`. You can copy them by clicking on the copy icon on the right end of the row.

![New Stream: Start the Ingest](../assets/cloud-frontend-v2/start-ingest.png)



### 2. Access the Playout
In this section you can see the `live playout URL`.
**By clicking on it, you can also see a code snippet which is all you need to embed the H5Live Player with your stream into your web page**. 
   
> To get more informations about the H5Live Player and its implementation, see our [documentation](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started/).

![New Stream: Access Playout](../assets/cloud-frontend-v2/access-playout.png)



If your organisation has enabled our "secure" feature you will be able to click on the `live playout URL` without having to create a new token. This is going to happen in the background. The token will be valid for an hour.
If you want to create a customized token, you can do that by clicking on the "Create Secure Token" Button next to the Header. There you can set up an `expiration date` and specific options like the `IP` or `referer` and a `single tag`. 

![New Stream: Create Secure Token](../assets/cloud-frontend-v2/new-stream-secure-token.png)

After creating it, you will see a new `playout URL` you can share. 

> **Please copy the URL before refreshing or closing the window**. After doing that you can not access to this specific token again and will have to create a new one.

![New Stream: Secure Playout URL](../assets/cloud-frontend-v2/new-stream-playout-url.png)



### 3. Stream Overview
This section lists all created stream. If you created a stream without transcoding, there will be only one. If not, there will be up to three. By clicking on the URL you can see the whole stream overview including several other informations.

![New Stream: Overview](../assets/cloud-frontend-v2/new-stream-stream-overview.png)


## Stream Overview

The stream overview shows all informations the stream is providing, including the stream info (`state`, `streamid`, `created at`, `stream tags`, `timecode`, `transcoding`, `push url`), the ingest informations (`RTMP streamname`, `RTMP url`) and the playout informations (H5Live (Ultra-low latency), H5Live config object, RTMP Playout, HLS Playout). You can copy properties to the clipboard by clicking on the copy button on the right.

![Stream Info](../assets/cloud-frontend-v2/stream-info-2.png)

![Stream Overview Playout](../assets/cloud-frontend-v2/stream-overview-playouts.png)



You are able to update the stream tags, after creating a stream. To do that, you need to click on the button on the top called "Update tags". 

![Stream Overview: Interactions](../assets/cloud-frontend-v2/stream-overview-interaction.png)



After clicking on "update" the tags you added will be visibile in the overview and the tags you removed will be deleted.

![Stream Overview: Update Tags](../assets/cloud-frontend-v2/update-tags.png)



By clicking on the "Delete stream" button you will be asked if you are sure about that. After confirming, you will be redirected to the stream list.

![Stream Overview: Delete Stream](../assets/cloud-frontend-v2/delete-stream.png)



If your organisation has enabled our "secure" feature, your are able to create a customized secure token aswell.
If you want to create one, you can do that by clicking on the "Create Secure Token" button. On this way you can set up an `expiration date` and specific options like the `IP` or `referer` and a `single tag` for the stream. 

![Stream Overview: Create Token](../assets/cloud-frontend-v2/new-stream-secure-token.png)



## All Streams Overview

The stream list shows all streams of your organisation. By clicking on one stream, you will be able to see the stream overview. The pagination on the bottom gives you the oportunity to browse through your streams.

![All Streams](../assets/cloud-frontend-v2/streams.png)


Streams that are live have an "Open Playout" Button at the end of the table row. By clicking on it, the playout will be opened in a new tab. Otherwise you will be redirected to the stream overview.

![All Streams](../assets/cloud-frontend-v2/streams-open-in-new.png)



You can filter them by clicking on the "Search" Button and search for stream tags, specific states, such as `created`, `live`, `ended`, `deleted` and specific start and end dates. 

![All Streams: Filter](../assets/cloud-frontend-v2/streams-filter.png)



## Metrics

By clicking on the menu item "[Metrics](https://bintu-cloud-frontend.nanocosmos.de/metrics)" you will be able to choose between two buttons called "[Login](https://metrics.nanocosmos.de/#/login)" and "[Learn more](https://docs.nanocosmos.de/docs/cloud/analytics/)". By clicking on the first button the nanoStream Analytics tool will be opened in another tab, while clicking on second button opens the nanocosmos blog.


## Organisation

This page gives you an overview about your organisation, informations depending on that and your enabled features.

![Organisation](../assets/cloud-frontend-v2/organisation-2.png)



The features are visible on the top of this page. If they are orange, your organisation enables them. If they are grey it does not and you need to contact the [sales](mailto:sales@nanocosmos.de) team, if you would like to change that.

<!-- ![Organisation: Enabled Features](../assets/cloud-frontend-v2/enable-nanomeet.jpg) -->



Underneath that you can see your organisation name and its hash. The Organisation hash is the part of every stream name you create. 

![Organisation: Informations](../assets/cloud-frontend-v2/organisation-info-2.png)



By clicking on the dropdown item under the title "Keys" you will be able to see your API key. Please keep it private.
"All user" gives you an overview about the user your organisation has. They can be sorted (asc/desc) by the date they are created at or by emails.

Below that you can see "All tags". You have the oportunity to create a new one or scroll through existing ones.

![Organisation: All Tags](../assets/cloud-frontend-v2/organisation-all-tags-2.png)



## Create Secure Token

If your organisation enables our feature "secure" you will be able to see this menu item. You can create a custom token for a specific stream or the whole organisation.

![Create Secure Token](../assets/cloud-frontend-v2/create-secure-token.png)


## Release Notes



### [2.1]

**New features**

- **Create Stream**

  - Creating a stream lets you choose between "RTMP" and "Webcaster".
  - For the nanoStream Webcaster you can set the specific resolution and bitrate for broadcasting.

  

- **Stream Overview**

  - Now you can directly share the nanoStream H5Live playout with third parties or colleagues.

- Secure organisations: You can see a content overview of the token used for the playback URL and the code snippet.

  

- **nanoStream H5Live Player**

  - For secured streams: Displayed countdown allows you to see the remaining time the applied token is valid.

  - For transcoded streams:

    - Auto or manual mode for switching stream qualities.
    - Overview of all streams that are part of the transcode group, including bitrate, frame rate, resolution.



**Updates**

- A consolidated stream overview has been added to the dashboard.
- Updated the external playout URL for streams with transcoding profiles.
- **Once transcoded streams have been created, copy the URL for future retrieval.**
- The nanoStream H5Live code snippet, which can be directly embedded on any website, is now part of the Stream Overview/Playouts section.

- **Playback token**

  - For authorized organisations and their standard token: The previously applied single hour has been extended to 24 hours.
  - Simplified process to create custom token and customize playback URL as well as code snippet.



**Fixes**

- Firefox: Transcoded streams are now sorted correctly.
- Applied search filter now consider the total amount of matching streams.



### [2.0.2]

**New features**

- New H5Live Player Widget can be accessed from within the dashboard now. 
  More intuitive and easy-to-use.
- Faster implementation of the H5Live Player code into your webpage.
  Code snippets are available in all single stream overviews, newly created streams and all playout. (Also for transcoded and secured streams)
- Recent tags are shown when filtering through all streams.



**Updates**

- H5Live playback with the icon at the end of the row of every live stream.
- Shortening of the playback- and newly created streams URLs.



**Fixes**

- Filter are now still applied after updating the amount of "rows in a page".



### [2.0.1]

**New features**

- Show up to 150 streams per page
- Standard: every new stream created is supported  by the nanoStream Webcaster
- Filter tags by regex in "Streams", "Create new Stream"
- Create Invite Token for a new user and signing up using the invite token



**Updates**

- None



### [2.0.0]

**New features**

- Create transcoded streams (depending on business agreement)
- Create secured streams 
- See playback immediately
- Intuitive way of creating and customizing a new stream
- New Stream Overview
- Steps to playout (from Ingest to Playout)
- Dashboard with compact overview



**Changed**

- None
