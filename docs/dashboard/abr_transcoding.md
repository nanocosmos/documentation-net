---
id: abr_transcoding
title: Adaptive Bitrate (ABR) and Live Transcoding
sidebar_label: Adaptive Bitrate (ABR) and Live Transcoding
---

## Adaptive Bitrate (ABR)

### What is Adaptive Bitrate Playback?

Live playback of a live stream relies on a specific network bandwidth. If the viewer's network cannot support the required bandwidth, buffering issues may occur. To prevent buffering, the stream quality can be dynamically adjusted by switching to a lower quality stream encoded with a lower bitrate. Adaptive Bitrate Playback (ABR) is a feature that enables the live player to automatically adapt to the optimal stream quality based on the viewer's available network capacity.

For ABR to function effectively, the live stream needs to be available in multiple quality levels, allowing seamless adjustment according to the viewer's network bandwidth.

For instance, consider a live stream that offers a high-quality Full HD stream at 1920x1080 resolution with a bitrate of 3 Mbit/s, as well as a lower-resolution stream at 640x360 with a bitrate of 500 kBits/s. This enables viewers with varying network conditions to select the most suitable stream quality for their viewing experience.

![Infographic: Adaptive Bitrate Playback](../assets/cloud-frontend/cf-abr-infographic.jpg)
*Infographic: Adaptive Bitrate Playback*

### How to enable Adaptive Bitrate

Adaptive Bitrate Playback with nanoPlayer does not require server-generated live transcoding. You can also create 3 live streams with the same content but different bitrates from your live encoder. Typically, live transcoding is done on the server to avoid sending 3 separate streams.

## Live Transcoding

### What is Live Transcoding?

Live Transcoding refers to the process of converting a high-quality input live stream into multiple lower-quality output streams. It eliminates the need to send multiple streams from the live encoder or broadcaster by dynamically generating additional formats suitable for distribution and playback at the player.

By employing live transcoding, a single high-quality input stream can be transformed into various output streams with different resolutions, bitrates, or other encoding parameters. This allows for efficient streaming to viewers with diverse network conditions and device capabilities, ensuring an optimal viewing experience for each user without the need for separate streams for each quality level.

Live transcoding simplifies the streaming workflow by enabling broadcasters to send a single stream while the transcoding system automatically generates the required output formats, reducing bandwidth and storage requirements. This process ensures that viewers can access the live stream in the most suitable quality based on their device capabilities and network conditions.

### How to enable Live Transcoding

You can enable Live Transcoding for your stream during the [dashboard.nanostream.cloud/stream/create](https://dashboard.nanostream.cloud/stream/create).

:::info Before starting
To get started with the **nanoStream Dashboard**, sign in with your existing *nanoStream account*.  
If you don’t have an account yet, you can [sign up](https://dashboard.nanostream.cloud/signup), or get in touch with our sales team via [nanocosmos.de/contact](https://www.nanocosmos.de/contact) or by email at sales(at)nanocosmos.net.

*Need help accessing an existing organization or unsure how to proceed?* <br/>
👉  Check the [Authentication section](./getting_started#authentication) for step-by-step guidance on creating an account, logging in, and requesting access from your system administrator.
:::


During the stream creation process live transcoding is already enabled by default. You have the option to add transcoding profiles and configure them according to your requirements. The default selection is pre-filled, but you can choose different settings. Ensure that the bitrate of each Transcoding Profile is lower than the ingest/passthrough bitrate or the profile above. Once you have completed the setup and created the stream, you can start broadcasting using your live encoder or the nanoStream Webcaster.

![Screenshot: Adding transcoding during stream creation](../assets/dashboard/create-stream-add-abr.png)
*Screenshot: Adding transcoding during stream creation*

## Modifying Transcoding Profiles After Stream Creation

As your streaming requirements evolve, you may find the need to revise your transcoding profiles. Whether it was an oversight initially or a strategic shift, nanoStream ensures you have the tools to make post-creation adjustments effortlessly.

Should you have omitted transcoding profiles during your stream's setup, they can always be integrated later through the stream overview.

:::note <span className="badge-noStreamgroup">Single Stream</span> vs. <span className="badge-streamgroup">Streamgroup (*n* Playouts)</span>
Beneath the **[Stream Overview](./stream_overview.md#single-stream-overview)** header, you'll notice a chip that reads <span className="badge-noStreamgroup">Single Stream</span>. This chip is an indicator that **no transcoding profiles have been configured for this stream**. In contrast, if transcoding profiles were present, it would display as <span className="badge-streamgroup">Streamgroup (*n* Playouts)</span>.
:::

### Transform a Non-Transcoding Stream into an ABR Stream

At the bottom of the [stream details](./stream_overview.md#stream-overview) on the **Stream Overview** page, you'll find a button to **add a profile**. By clicking on it, a dialog will appear, allowing you to create a profile and transform your single stream into a stream group.

![Screenshot: Add new transcoding profile to single stream](../assets/dashboard/add-new-transcode.png)
*Screenshot: Add new transcoding profile to single stream*

### Adding Additional Profiles to Your Streamgroup

Upon either initializing your stream as a streamgroup with transcoding profiles or transitioning it to one, the stream overview presents a refined interface, as illustrated in the accompanying screenshot.

In the **Adaptive Bitrate (ABR) Stream Overview** section you can switch between various tabs to explore the passthrough and the associated transcoding profiles. On the bottom of this section, the **Add Profile** button stands ready. By clicking on it, you can effortlessly incorporate additional profiles to the streamgroup. Each added profile seamlessly integrates and becomes a cohesive part of the overarching streamgroup.

![Screenshot: Adaptive Bitrate (ABR) Stream Overview](../assets/dashboard/abr-overview.png)
*Screenshot: Adaptive Bitrate (ABR) Stream Overview*

### Edit Transcoding Profiles

Within the streamgroup, each profile is designed for adaptability. As you navigate, options to edit or remove specific profiles become apparent. Opting to **Edit profile** brings forth a the option to update the transcoding profile. 

![Screenshot: Edit Transcoding Profile](../assets/dashboard/edit-abr.png)
*Screenshot: Edit Transcoding Profile*

Upon selection, a side-by-side comparison layout emerges. On the left, you're presented with **Current Transcoding Profile**, showcasing the current configurations. In contrast, the right side displays **New Transcoding Profile**, revealing potential modifications. Before any changes take effect, a confirmation is required, ensuring intentional adjustments. Nevertheless, if uncertainty strikes, the option to cancel remains readily available, providing flexibility in decision-making.

### Delete Transcoding Profiles

Alongside the edit function, the **Remove Profile** option is present for every transcoding profile. Initiating the removal action triggers a modal window, necessitating your confirmation for the deletion.

![Screenshot: Delete Transcoding Profile](../assets/dashboard/remove-abr.png)
*Screenshot: Delete Transcoding Profile*

It's worth noting that post-deletion, the system intuitively restructures the extant profiles within the streamgroup. This automatic reorganization ensures that the streaming quality remains at its optimal level, even in the absence of the deleted profile.

## Operation and Workflow

Transcoding and Adaptive Bitrate Playback (ABR) are built upon a group of streams. On the customer/viewer side, the stream switching occurs seamlessly in the background, depending on the internet connection. A typical configuration involves a single input stream (ingest) and three output streams, including one "passthrough" stream (maintaining the same input quality) and two lower-resolution streams.

### Example

- Input (Ingest) and Highest Quality: 1920x1080, 3 Mbit/s
- Output 1 (Passthrough): 1920x1080, 3 Mbit/s
- Transcode 1 (High): 1280x720, 1600 Kbit/s
- Transcode 2 (Medium): 852x480, 800 Kbit/s
- Transcode 3 (Low): 640x360, 400 Kbit/s

## Switch Stream Quality manually

On the playout page, you have the ability to adjust the stream quality manually by collapsing the stream selection labeled **Auto (Original)** underneath the player. Per default, the adaptation is set to **Auto**, which allows the player to dynamically adjust the stream quality based on the viewer's network conditions. However, you can choose to switch to manual mode and your desired quality.

When in manual mode, you can switch between the stream qualities, including resolution, bitrate, and framerate, along with their corresponding streamnames. This gives you greater control over the playback experience and allows you to choose a specific quality that suits your preferences or requirements.

![Screenshot: Switch Stream Quality](../assets/dashboard/switch-stream.png)
*Screenshot: Switch Stream Quality*

## Setup Start Quality for code snippets

In the [**Code Snippets section**](./code_snippets) page, you can adjust the start quality for a specific stream. Per default, the adaptation is set to **Auto**, which allows the player to dynamically adjust the stream quality based on the viewer's network conditions. However, you can choose to switch to manual mode and/or your desired quality.

![Screenshot: Start Quality (ABR) for Code Snippets](../assets/dashboard/abr-startindex.png)
*Screenshot: Start Quality (ABR) for Code Snippets *