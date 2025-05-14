---
id: live_processing
title: Live Processing
sidebar_label: Live Processing
---

Live streaming goes beyond simply delivering video and audio to viewers. **Live Processing** adds advanced functionalities to your streams, enabling features like recording, thumbnail and motion clip generation and replay capabilities. These features enhance the viewer experience and give broadcasters greater flexibility in managing and optimizing their live content in real-time. With the **`Bintu API v1.24.1`**, we introduced several new live processing capabilities, that can be configured easily during stream setup or adjusted as the broadcasters streaming requirements evolve. 

:::tip Prerequisites
To make use of `live processing`, the feature must be explicitly enabled for your organization. Activation may be subject to additional pricing or service terms.

You can verify whether this feature is available by navigating to [dashboard.nanostream.cloud/organisation](https://dashboard.nanostream.cloud/organisation) in your dashboard.  
In the **[Enabled Packages](./organization_overview#enabled-packages)** section, locate the entry for `live processing`. If it shows **Upgrade needed**, please contact us.

![Screenshot: Enabled Packages](../assets/dashboard/enabled-packages.png)  

To activate this feature or learn more about available plans, feel free to reach out via [nanocosmos.de/contact](https://www.nanocosmos.de/contact). We're happy to assist you in finding the best setup for your use case.
:::

## Configuring a Live Process

You can configure Live Processing features during the [stream creation process](start_streaming#live-processing) or adjust them later from the **[Stream Overview](./stream_overview) → [Live Processing](./start_streaming#live-processing)**.

When **transcoding** is enabled for your stream during the stream creation, a toggle appears for each stream in the **Live Processing** section. You can:

- Enable or disable specific processes (e.g., Recording, Thumbnail, Motion Clip, Replay).
- Customize each feature per stream or profile.
- Use the **Sync settings across profiles** button to apply the same settings to all transcoding profiles in the stream group.

:::note Tips for Successful Configuration
- **Plan ahead**: Some features (like recording or replay) must be set up before going live to avoid missing content.
- **Use consistent settings**: For easier management, use the **Sync settings across profiles** button if your stream uses multiple transcoding profiles.
:::

:::tip How to utilize
We’ve outlined several [example use cases](../cloud/live_processing#example-use-cases) to demonstrate how our processes can provide solutions for various scenarios.
:::

## Overview of Live Processing Options

The Live Processing feature has its own tab named **[Live Processing](start_streaming#live-processing)** in the **[Stream Overview](start_streaming)**. This tab displays all enabled live processes, incdicating whether they are active or not and its setup and assets.

If you have omitted live processes during your stream's setup, they can always be integrated later through the stream overview. You can add, remove and modify live processing settings at any time.

:::info Learn More About Live Processing Features
To get a deeper understanding of how Live Processing can enhance your streaming experience, explore the **technical documentation** on each process below.

- **[Recording](../cloud/live_processing#recording)**: Capture and store your streams for later access.
- **[Thumbnail](../cloud/live_processing#thumbnail)**: Generate visual previews at specified intervals.
- **[Replay](../cloud/live_processing#replay)**: Enable instant replays for a better viewer experience.
- **[Motion Clip](../cloud/live_processing#motion-clip)**: Create dynamic clips of important moments in your stream.
:::


## Thumbnails and/or Motion Clips 

If either **Thumbnails** or **Motion Clips**, or both, are enabled, they will appear in a shared view. The layout adapts depending on your configuration:

1. **Tabs**: If you have a stream group (multiple related streams), you can switch between them using tabs. If not, no tabs will be shown.
2. **Header Row**: Displays the section title, a **Refresh** icon button to update assets and data, and an **Edit** button¹.
3. **Asset Display**: A preview of the generated asset.
4. **Details Table**:
   - **Thumbnails**: (In-)Active, Stream Name, Quality, URL, Interval (s)¹
   - **Motion Clips**: (In-)Active, Stream Name, Quality, URL, Interval (s)¹, Duration (s)¹

¹ You can edit settings depending on your access level.

![Screenshot: Thumbnail & Motion Clip Overview](../assets/dashboard/thumbs-motionclip.png)
*Screenshot: Thumbnail & Motion Clip Overview*

## Live Replay

Live Replay allows users to access and share previously streamed content almost instantly.

1. **Tabs**: If you have a stream group (multiple related streams), you can switch between them using tabs. If not, no tabs will be shown.
2. **Header Row**: Displays the section title, a **Refresh** icon button to update assets and data, and an **Edit** button¹.
3. **Details Table**: Displays (In-)Active status, Stream Name, Quality, and Duration (s)¹.
4. **Assets Section**:
   - Session Date (UTC)
   - HLS File (streamed video in .m3u8 format)
   - **Rewatch** button (allows you to replay the selected session.)
   - **Clip & Share** button (to generate shareable segments)

¹ Editable based on your access level.

![Screenshot: Live Replay Overview](../assets/dashboard/live-replay.png)
*Screenshot: Live Replay Overview*

## Recording

The Recording segment stores your live stream sessions for future access and distribution.

1. **Tabs**: If you have a stream group (multiple related streams), you can switch between them using tabs. If not, no tabs will be shown.
2. **Header Row**: Displays the section title, a **Refresh** icon button to update assets and data, and an **Edit** button¹.
3. **Details Table**: Active status, Stream Name, Quality, and Duration (s)¹.
4. **Assets Section**:
   - Session Date (UTC)
   - Recording File (video file of the session)

¹ Editable based on your access level.

![Screenshot: Recordings Overview](../assets/dashboard/recordings.png)
*Screenshot: Recordings Overview*

## Editing Live Processing Settings

:::warning Important Note
Changes to live processing settings require re-ingesting your stream. If your stream is already live, updates will only take effect after you stop and restart the stream.
:::

You can update Live Processing settings based on your permission level. If your stream belongs to a group, you can edit all group members simultaneously. All settings are applied only after clicking **Confirm**.