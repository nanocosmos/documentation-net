---
id: stream_overview
title: Stream Overview
sidebar_label: Stream Overview
---

:::tip Before starting
To begin, please sign in using your nanoStream account credentials. <br/>
If you have not created an account yet, you can [dashboard.nanostream.cloud/signup](https://dashboard.nanostream.cloud/signup) or reach out to our dedicated sales team via the [nanocosmos.de/contact](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.net. <br/>
*If you are unsure how to create an account or need access to an existing organization, please refer to the [Authentication section](./getting_started.md#authentication). There, you will find instructions on signing up, logging in, or requesting an invitation from your system administrator.*
:::

## Stream List

The [dashboard.nanostream.cloud/stream](https://dashboard.nanostream.cloud/stream) page provides a comprehensive list of all your streams, displaying their state (`created`, `live`, `ended`), **stream ID**, **stream name**, whether they are part of a **streamgroup**, and their **last update timestamp (UTC)**. Additionally, the pesence of **tags** allows for easier stream identification.
If a stream is an ABR stream, it belongs to a so-called **streamgroup**. You can collapse the row and view the individual streams within this specific streamgroup, such as passthrough, *n* transcodes.

:::tip Adaptive Bitrate (ABR) and Live Transcoding
To learn more about Adaptive Bitrate (ABR) and Live Transcoding, you can have a look here:
- [What is Adaptive Bitrate Playback?](./abr_transcoding.md)
- [What is Live Transcoding?](./abr_transcoding.md)
:::

### Stream List Overview

The table below provides an overview of the key attributes in the stream list:

- **Stream State**: This column indicates the current state of each stream.
   - `created`: The stream has been created, but never been live
   - `live`: The stream is live right now
   - `deleted`: The stream was live and is not outputting footage anymore.
- **Stream ID**: The column displays the unique identifier of each stream. If the stream is an [ABR](./abr_transcoding.md) stream it is also the streamgroup id.
- **Stream name**: The streamname („XXXXX-YYYYY“) shows the organisation hash and the unique stream name assigned to each stream.
- **Streamgroup**: Indicates whether the stream is an Adaptive Bitrate (ABR) stream. It shows the number of playouts for ABR streams, e.g. <span className="badge-streamgroup">Streamgroup (*n* Playouts)</span>, and for non-ABR streams, it displays <span className="badge-noStreamgroup">Single Stream</span>.
- **Last Updated**: Timestamp of the most recent update or modification to the stream.
- **Tags**: Assigned tags or labels for categorizing and identifying streams.

Wenn du bis zum Ende der Seite scrollst, dann findest Du die Pagniation. Dort kannst Du auswählen, wie viele Streams Du aufeinmal sehen willst (25,50,100,150) und durch die Seiten scrollen.
   
### Filter & Search

At the top of the [dashboard.nanostream.cloud/stream](https://dashboard.nanostream.cloud/stream) page, you’ll find filters to help you quickly locate specific streams. The available filtering options include:

- **State**: Filter streams by their state. This includes both standard states (`live`, `created`, `ended`) and additional states (`deleted`, `locked`) that are not visible in the regular stream list. Selecting `all` will only include `live`, `created`, and `ended`.
- **Tags**: The tag filter allows you to look for streams based on specific tags. You can either manually type in the desired tag or choose from the existing tags that you have previously used. As you start typing at least 3 characters, the system will suggest tags that match the entered characters. To apply a tag, simply hit the "Enter" key after typing it.
- **Date**: Filter streams by date range: Today, Yesterday, This Week, This Month, Past Month, Last 3 Months.
- **Streamgroups**: Choose whether ABR stream groups should be displayed as a single entry or as individual streams. When this filter is enabled, all streams within a group appear separately. If disabled, they remain grouped, but each stream still shows its streamgroup id.

:::info Search Streams
If you want to search for a specific stream based on its Stream ID or streamname, you can use the search field in the top app bar that is available on every page. Please note the following:

- A valid nanoStream Stream ID or streamname is required. There are no suggestions made.
- A valid nanoStream streamname must follow this format: 'XXXXX-YYYYY'.
- The search is case-sensitive. For example, "AA" is not the same as "aa".
:::

## Single Stream Overview

The Stream Overview section provides a structured, tab-based interface that consolidates all essential details about an individual stream. It offers insights into the stream's configuration, playback status, and processing options.

This page serves as a central hub where you can:
- Access key metadata, including streaming URLs and (if enabled) security tokens.
- Monitor the stream's state, creation date, and whether it belongs to a single stream or an ABR stream group.
- Perform quick actions such as starting the nanoStream Webcaster, watching the stream, retrieving instructions, or —if permitted— stopping, locking, or deleting the stream.

Each Stream Overview consists of three main elements, which ensures clarity, easy access to key actions, and a streamlined workflow for managing streams efficiently.

1. **Header** (Visible across all tabs, f.l.t.r.)
 - Stream State
 - Stream Creation Date
 - ABR Stream (<span className="badge-streamgroup">Streamgroup (*n* Playouts)</span> or <span className="badge-noStreamgroup">Single Stream</span>)
 - Indicator if the stream is secure (if security features are enabled)
 - Stream ID

2. **Quick Action Buttons** (Visible across all tabs, f.l.t.r.)
 - Start nanoStream Webcaster
 - Watch Stream
 - [Get Instructions](./start_streaming.md#start-streaming)
 - Stop & Lock Stream (only if the stream is live and the user has the necessary permissions)
 - Delete Stream (only if the user has the necessary permissions)

3. **Tabs for Detailed Management**
 - **Stream Overview** – General information about the stream
 - **Live Processing** – Configuration of live processing features
 - **Code Snippets** – Ready-to-use implementation snippets

### Stream Overview

The Stream Overview UI changes depending on the stream-type:
- **Single Stream** → *Stream* (<span className="badge-noStreamgroup">Single Stream</span>)  
- **Adaptive Bitrate (ABR) Stream** → *Streamgroup* (<span className="badge-streamgroup">*n* Playouts</span>)  

#### Stream(group) Details

For streams with Adaptive Bitrate enabled, the Stream(group) details section is more compact than the single stream view.

| Label         | <span className="badge-noStreamgroup">Single Stream</span> | <span className="badge-streamgroup">*n* Playouts</span> |
|--------------------|--------------|-------------------|
| **Streamgroup ID** | ✅            | ✅               |
| **Updated At**     | ✅            | ✅               |
| **Timecode**     | ✅            | ✅               |
| **Timecode Interval**     | ✅            | ✅               |
| **Tags**¹  | ✅ | ❌² |
| **Push URL**¹  | ✅ | ❌² | 

¹Editable depending on access level <br/>
²Information can be found in the [Streamgroup Details](#streamgroup-details-streamgroup-n-playouts) section


#### Ingest Information

These details are required to start a stream. To copy the information easily, click the copy icon next to the relevant entry. If you need guidance on starting a stream, refer to the [Start Streaming](./start_streaming.md#start-streaming) section.

- RTMP Ingest Streamname
- RTMP Ingest URL 

#### Adaptive Bitrate (ABR) Stream Overview  <span className="badge-streamgroup">Streamgroup (*n* Playouts)</span>

For ABR-enabled streams, this additional section breaks down the streams in the stream group. The streams are categorized as:
- Passthrough (original stream)
- Transcoded Streams (*n* profiles)

Each stream is listed in a details table, with an **Add Profile** button available (depending on access level and organization limits).

| **Passthrough Stream** | **Transcoded Stream** (*n*th Profile)¹ |
|----------------------|-----------------------------------|
| **Streamgroup ID**   | **Streamgroup ID**   |
| **Streamname**       | **Streamname**       |
| **Push URL**¹  | **Push URL**¹  |
| **Tags**¹  | **Tags**¹  |
| **Tags**¹ | **Tags**¹ |
| ❌ (Original Stream) | **Resolution, Bitrate, Framerate** |

¹Editable depending on access level

#### Secure Playback Token

If your organization has enabled the secure streaming feature, this section displays your decoded logged-in session token information:

- **JWT Token**
- **Valid From**
- **Valid Until**
- **Optional Settings**
- **Token Tag**

When sharing the live playout URL, this token is applied, ensuring transparency regarding its usage.

#### H5Live Playout
View the live playout URL for real-time streaming:
- Live Playout URL
- iFrame Embed URL
For details on embedding and customizing the iFrame, see the [Code Snippets](#code-snippets) section.

#### VOD Playout URLs

If your organization has enabled the `vod` feature, VOD recordings will be listed here. They are sorted by session and include:
- Session Date (UTC)
- Recording Name
- File Size

### Live Processing

If your organization has enabled `live processing` features, their assets will be listed here.  
To display them, select the desired feature from the **submenu** under the tabs. As shown in the screenshot, the currently selected process is highlighted in light orange. Clicking on a process reveals its associated details below.  

Assets for each process are displayed in a **tab-based structure**, depending on whether they belong to an **ABR stream** ( <span className="badge-streamgroup">Streamgroup (*n* Playouts)</span>) or a **single stream** (<span className="badge-noStreamgroup">Single Stream</span>). Users can switch between different quality levels for ABR streams, while single streams have only one quality level available.  

#### Thumbnails and/or Motion Clips 
In the title row, you can press the **Refresh** button to update the thumbnail. Similarly, you can modify settings.¹ The refresh button is useful because the stream overview does not update dynamically. Since thumbnails or motion clips change based on the interval/duration settings, this button allows users to reload the latest updates.  

Thumbnail- and motion clip-related information include:  

- **Process status** (active/inactive)  
- **Streamname**  
- **Asset quality**
- **URL to the asset on our servers**
- **Interval** (in seconds)  

For motion clips, the **Duration** of the generated assets is also displayed.  

#### Live replay

The **Live Replay** details includes:  

- **Process status** (active/inactive)  
- **Streamname**  
- **Asset quality**
- **URL to the asset on our servers**
- **Duration** (in seconds) or whether it applies to the entire stream  

Replay files and access details are listed below and categorized as follows:  

- **Session Date (UTC)**  
- **HLS File**  
- **Replay Access**  
- **Clip & Share Access**  

:::warning Note
URLs always belong to their respective streams. For **ABR streams**, the URLs are grouped accordingly and listed separately.
:::

#### Recording

The Detail view for the **Recording** live process include:  

- **Process status** (active/inactive)  
- **Streamname**  
- **Asset quality**
- **URL to the asset on our servers**
- **Recording Duration** (in seconds) or whether it applies to the entire stream  

Files are sorted by:  

- **Session Date (UTC)**  
- **File Access**  

:::warning Note
URLs always belong to their respective streams. For **ABR streams**, the URLs are grouped accordingly and listed separately.
:::

### Code Snippets

The **Code Snippet** tab provides the necessary details to embed the **nanoStream H5Live Player** effortlessly into your website.  

- **iFrame Code Snippet**
- **HTML Code Snippet**

Using the **Code Snippet Settings** collapsible section, users can modify these snippets. Available settings include:  

- **Start Quality** (for ABR streams)  
- **Latency Control Mode**  

If your organization is part of a `secure` setup, an additional **Token Settings** section is available. Here, users can generate a custom token, which is displayed in a structured format. When sharing the **live playout URL**, this token is automatically applied, ensuring transparency regarding its usage.  
