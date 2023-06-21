---
id: Dashboard_Stream_Overview
title: Stream Overview
sidebar_label: Stream Overview
---

The [streams page](https://dashboard.nanostream.cloud/stream) provides a comprehensive list of all your streams, displaying their state (`created`, `live`, `ended`), stream ID, stream name, whether they are part of a stream group, and their last update timestamp. Additionally, the pesence of tags allows for easier stream identification.

## Stream List

:::info Before starting
To begin, please sign in using your nanoStream Cloud/Bintu account credentials. <br/>
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::

![Screenshot: All Streams Overview](../assets/cf-all-streams.jpg)
*Screenshot: All Streams Overview*

If a stream belongs to a stream group, you have the option to collapse the row and view the individual streams within the group, such as passthrough, first transcode, and second transcode.

![Screenhot: Collapsed Streamgroup](../assets/cf-streamgroup.jpg)
*Screenhot: Collapsed Streamgroup*

## Labels of the Stream List

### Stream State
This column indicates the current state of each stream.
   - `created`: The stream has never been live
   - `live`: The stream is live right now
   - `deleted`: The stream was live and is not outputting footage anymore.
   
### Stream ID
The column displays a unique identifier for each stream and if the stream is an ABR stream it is also the stream group id.
### Stream name
The streamname („XXXXX-YYYYY“) shows the organisation hash and the unique stream name assigned to each stream.
### ABR Stream
Indicates whether the stream is an Adaptive Bitrate (ABR) stream. It shows the number of playouts for ABR streams, and for non-ABR streams, it displays "No ABR".
### Last Udpated
Timestamp of the most recent update or modification to the stream.
### Tags
Assigned tags or labels for categorizing and identifying streams based on specific attributes or characteristics.

## Filter

To streamline your search, you can utilize various filters such as selecting a date range to view specific streams, filtering streams by tags, or filtering by state.

![Screenshot: Filter](../assets/cf-filter.png)
*Screenshot: Filter*

These features enable you to efficiently manage and navigate through your streams, providing a clear and organized overview of your streaming content within the nanoStream Cloud Dashboard.

### Select Dates

The "Select Date" filter allows you to choose any specific day and time range within the entire duration of your usage of the nanoStream Cloud. You can select a start date and time, as well as an end date and time.

### All ABR Streams

You have the option to enable the "All ABR Streams" button, which allows you to view all individual streams, regardless of whether they are part of a stream group or not. To assist you in identifying stream groups, the stream ID of the corresponding stream group will be displayed underneath. However, please note that it may be a bit confusing to differentiate between individual streams and stream groups in this view.

### Filter by tags

The tag filter allows you to look for streams based on specific tags. You can either manually type in the desired tag or choose from the existing tags that you have previously used. As you start typing at least 3 characters, the system will suggest tags that match the entered characters. To apply a tag, simply hit the "Enter" key after typing it.

### State

The "Filter by State" option allows you to choose between different stream states:

   1. `live`: This state indicates that the stream is currently active and being broadcasted live.
   2. `created`: Streams in the "Created" state are newly created streams that are ready to be started or scheduled for future broadcasting.
   3. `ended`: "Ended" streams have completed their live broadcasting and are no longer actively streaming.
   4. `deleted`: Streams in the "Deleted" state have been removed or deleted from the system. Please note that you can only access the deleted streams once you select the "Deleted" option in the filter line. *Also: It is not possible to see a stream overview of it.*

## Single Stream Overview

The stream overview provides a comprehensive view of your streams and their associated details. This section serves as a central hub where you can access important information about your stream.

![Screenshot: Stream Overview](../assets/cf-overview.jpg)
*Screenshot: Stream Overview*

1. **Detailed Stream View**:
   - Take a closer look at a specific stream by identifying it through its unique stream ID.
   - The stream's state (`live`, `created`, `ended`), date of creation, stream group association, and the number of associated playouts are on the top of each stream overview.
2. **Stream Group Details**:
   - Gain insights into the stream group by accessing its ID and the timestamp of the last update.
3. **Adaptive Bitrate (ABR) Stream Overview**:
   - Switch between tabs to access a more detailed overview of individual streams within a stream group.
   - Each stream's ABR profile quality, stream ID, tags, push URL, and stream name are presented. The tags and push url of each profile can be edited.
4. **Ingest Section**:
   - Find the RTMP ingest stream name and RTMP ingest URL for seamless integration with your streaming source.
5. **H5Live Playout**:
   - Access the live playout URL, which enables viewers to watch the stream in real-time.
   - If you prefer embedding the nanoStream H5Live Player on your webpage, an iframe embed URL is also provided for quick integration.
6. **Secure JWT Token Creation** (if enabled):
   - If enabled, you have the `secure` option to generate secure JWT tokens for stream access, ensuring enhanced security and control.
7. **Codes for nanoPlayer Integration**:
   - Simplify the integration process by utilizing the provided code snippets, such as an iframe embed tag or a HTML nanoStream H5Live code snippet, to seamlessly integrate the nanoStream H5Live Player into your own webpage.
8. **RTMP Playout Stream**:
   - Obtain the RTMP playout stream name and URL, which can be used for further distribution or integration with other platforms.
9. **VODs** (if enabled):
    - If `vod` is enabled, this section provides relevant information about associated Video-On-Demand content, enabling easy management and access.
10. **Stream Management (Delete, Lock)**:
    - Take control of your streams by performing actions such as removing a stream, or locking and unlocking it for ingests.

