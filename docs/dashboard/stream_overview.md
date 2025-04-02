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
- **Streamgroup**: Indicates whether the stream is an Adaptive Bitrate (ABR) stream. It shows the number of playouts for ABR streams, e.g. <span className="badge-streamgroup">✓ Streamgroup (*n* Playouts)</span>, and for non-ABR streams, it displays <span className="badge-noStreamgroup">ⓧ Single Stream</span>.
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

## Stream Overview

### Stream Overview

### Live Processing

### Code Snippets