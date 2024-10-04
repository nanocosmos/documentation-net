---
id: opcodes
title: Live Processing
sidebar_label: Live Processing (Opcodes)
---

Live Processing opcodes allow users to enhance the playback experience and manage stream content more effectively. 
These features can be applied to all streams, providing flexibility and customization in how content is processed and presented to viewers.

:::info  Prerequisites
Before you get started, make sure you have an active bintu account, whether it's part of a trial or a paid plan. <br/>
To use the **`opcodes`** feature, ensure it is enabled for your account. You can verify this by checking your [Organisation Overview](https://dashboard.nanostream.cloud/organisation).

If you have not created an account or enabled the feature yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.


For more details, visit our [Homepage: Overview and Plans](https://info.nanocosmos.de/)
:::

## Thumbnail

The thumbnail opcode captures snapshots of the stream at defined intervals. These snapshots allow quick and easy visual review of key moments, making it an essential tool for content managers looking to enhance stream previews and navigation.

:::tip Key benefits
- Enables fast review of important moments without watching the full stream.
- Ideal for creating visual highlights or navigating to specific segments of the stream.
:::

### Configuration

| Setting | Description | Value Range |
|--|-|-|
| Interval | Time between each snapshot | 10 seconds - 60 seconds |


## Motion Clip

Motion clip generates short sequences of snapshots, offering a more dynamic way to preview moments in the stream. These clips can be used to create engaging content previews, helping viewers get a quick sense of what’s happening in the stream.

:::tip Key benefits
- Provides dynamic visual content that enhances user engagement.
- Helps users quickly assess key moments with a moving snapshot sequence.
:::

### Configuration

| Setting | Description | Value Range |
|--|-|-|
| Duration  | Length of each generated clip   | 1 second - 60 seconds   |
| Interval  | Time between each snapshot      | 10 seconds - 60 seconds  |


## Recording

The recording opcode allows the entire stream to be recorded for later access as Video on Demand (VOD). This is ideal for customers who wish to provide viewers with the ability to rewatch full streams.

:::tip Key benefits
- Provides a full recording of the stream for future playback.
- Facilitates video archiving and on-demand access for viewers.
:::

### Configuration

| Setting | Description | Value Range |
|--|-|-|
| Duration  | Length of the recorded segment  | Minimum: 1 second (or entire stream if not set) |


## Replay

Replay enables users to rewind and view previous sections of the live stream, offering greater flexibility and control over the live playback experience.

:::tip Key benefits
- Allows users to revisit earlier moments in the stream without interrupting the ongoing broadcast.
- Improves the viewer experience by adding on-the-fly rewatchability.
:::


### Configuration

| Setting | Description | Value Range |
|--|-|-|
| Duration  | Length of the replay buffer     | Minimum: 1 second (or entire stream if not set) |