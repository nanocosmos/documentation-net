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

![Screenshot: All Streams Overview](../assets/cloud-frontend/cf-all-streams.jpg)
*Screenshot: All Streams Overview*

If a stream belongs to a stream group, you have the option to collapse the row and view the individual streams within the group, such as passthrough, first transcode, and second transcode.

![Screenhot: Collapsed Streamgroup](../assets/cloud-frontend/cf-streamgroup.jpg)
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

![Screenshot: Filter](../assets/cloud-frontend/cf-filter.png)
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

![Screenshot: Stream Overview](../assets/cloud-frontend/cf-overview.jpg)
*Screenshot: Stream Overview*

1. **Detailed Stream View**
   - View the unique stream ID, its current state (live, created, ended), date of creation, its association with a stream group, and the number of associated playouts. Determine if the stream is secure.
2. **Stream Group Details**:
   - Understand your stream group with its ID and the last update timestamp. You have the option to activate the time code interval and thumbnails. If activated, the chosen intervals are displayed.
3. **Adaptive Bitrate (ABR) Stream Overview**:
   - Navigate between tabs for a comprehensive view of individual streams within a stream group.
   - Details include each stream's ABR profile quality, ID, tags, push URL, and name. You can edit the tags and push URL for each profile. Additionally, profiles can be [added](./Dashboard_ABR_Transcoding#transform-a-non-transcoding-stream-into-an-abr-stream), [edited](./Dashboard_ABR_Transcoding#edit-profiles), or [removed](Dashboard_ABR_Transcoding#delete-profiles).
4. **Thumbnails**:
   - If activated, view the thumbnail of your stream generated based on the chosen interval during activation.
5. **Ingest Section**:
   - Access the RTMP ingest stream name and URL for easy integration with your streaming source.
6. **Secure JWT Token Creation** (if enabled):
   - Generate secure JWT tokens for enhanced stream access control when this feature is activated.
7. **H5Live Playout**:
   - View the live playout URL, enabling real-time streaming for viewers. For embedding the nanoStream H5Live Player on a website, an iframe embed URL is available for integration.
8. **Codes for Nanoplayer Integration**:
   - Use the provided code snippets, such as the iframe embed tag or the HTML nanoStream H5Live code, to embed the nanoStream H5Live Player effortlessly on your website.
9. **RTMP Playout Stream**:
   - Retrieve the RTMP playout stream name and URL for broader distribution or integration into other platforms.
10. **Stream Management (Delete, Lock)**:
      - Manage your streams effectively with options to delete, lock, or unlock them for ingest purposes.
