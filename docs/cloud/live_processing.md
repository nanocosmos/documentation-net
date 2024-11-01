---
id: live_processing
title: Live Processing
sidebar_label: Live Processing
---

Live Processing options allow users to enhance the playback experience and manage stream content more effectively. 
These features can be applied to all streams, providing flexibility and customization in how content is processed and presented to viewers.

:::info  Prerequisites
Before you get started, make sure you have an active bintu account, whether it's part of a trial or a paid plan. <br/>
To use the **`live processing`** feature, ensure it is enabled for your account. You can verify this by checking your [Organisation Overview](https://dashboard.nanostream.cloud/organisation).

If you have not created an account or enabled the feature yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.

For more details, visit our [Homepage: Overview and Plans](https://info.nanocosmos.de/)
:::

<article class="margin-top--lg">
    <section class="row list_ZO3j">
        <article class="col col--6 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx" href="../cloud-frontend-v3/Dashboard_Live_Processing">
                <h2 class="text--truncate cardTitle_dwRT" title="Installation">Dashboard</h2>
                <p class="text--truncate cardDescription_mCBT">
                    To configure the live processing options, follow the steps during the stream creation.
                </p>
            </a></article>
        <article class="col col--6 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx"href="https://doc.pages.nanocosmos.de/bintuapi-docs/#operation/processing">
                <h2 class="text--truncate cardTitle_dwRT" title="Configuration">Bintu API</h2>
                <p class="text--truncate cardDescription_mCBT">
                    To utilize the API requests, read more in the bintu docs.
                </p>
            </a></article>
    </section>
</article>

## Example Use Cases

| **Live Process**  | **Use Case Scenario** | **Solution** |
|--|--|--|
| [**Recording**](../cloud/live_processing#recording) | An online casino operator needs to record all live gaming sessions for audit and compliance purposes while also offering players access to past sessions. | Enable the Recording feature during stream setup to automatically save each session, ensuring regulatory compliance and offering players the ability to review previous gameplay. |
| [**Thumbnail**](../cloud/live_processing#thumbnail)    | A live auction platform wants to display snapshots of the auctioneer’s current lot on the homepage to attract more bids in real time. | Use Thumbnail Generation to keep the auction feed visually engaging, automatically updating previews of the active items as they are presented. |
| [**Replay**](../cloud/live_processing#replay) | A sports betting company wants to allow users to instantly replay significant moments, like a goal or controversial decision, during live football matches. | Activate the Replay feature to provide instant replays, helping users stay informed without disrupting the live stream. |
| [**Motion Clip**](../cloud/live_processing#motion-clip) | An online betting platform wants to enhance user interaction by allowing them to view highlights of key moments in a game, encouraging faster bets. | Use Motion Clips to generate exciting snippets, offering viewers real-time previews of critical moments, which they can quickly watch and place bets on without leaving the stream. |

## Live Processing Options

### Thumbnail

The thumbnail option captures snapshots of the stream at defined intervals. These snapshots allow quick and easy visual review of key moments, making it an essential tool for content managers looking to enhance stream previews and navigation.

:::tip Key benefits
- Enables fast review of important moments without watching the full stream.
- Ideal for creating visual highlights or navigating to specific segments of the stream.
:::

| Setting | Description | Min | Max |
|-|-|-|-|
| `interval`  | Time between each snapshot. | 10s  | 60s |


### Motion Clip

Motion clip generates short sequences of snapshots, offering a more dynamic way to preview moments in the stream. These clips can be used to create engaging content previews, helping viewers get a quick sense of what’s happening in the stream.

:::tip Key benefits
- Provides dynamic visual content that enhances user engagement.
- Helps users quickly assess key moments with a moving snapshot sequence.
:::

| Setting | Description | Min | Max |
|-|-|-|-|
| `duration`  | Length of each generated clip.  | 1s | 60s |
| `interval`  | Time between each snapshot.  | 10s | 60s |


### Recording

The recording option allows parts or the entire stream to be recorded for later access as Video on Demand (VOD) available after the session. This is ideal for customers who wish to provide viewers with the ability to rewatch streams.

:::tip Key benefits
- Provides a recording of the stream for future playback and processing.
- Facilitates video archiving and on-demand access for viewers.
:::

| Setting | Description | Min | Max |
|-|-|-|-|
| `duration` | Length of the recorded segment. |  1s | Entire stream |


### Replay

Replay enables users to rewind and view previous sections of the live stream, offering greater flexibility and control over the live playback experience.

:::tip Key benefits
- Allows users to revisit earlier moments in the stream without interrupting the ongoing broadcast.
- Predefined replay clippings of the stream that users can instantly share
- Improves the viewer experience by adding on-the-fly rewatchability.
:::


| Setting | Description | Min | Max |
|-|-|-|-|
| `duration` | Length of the replay buffer. |  1s | Entire stream |