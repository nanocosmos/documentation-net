---
id: bintu_api
title: Bintu API
sidebar_label: Bintu API
description: Stream management with the Bintu Dashboard and REST API for nanoStream Cloud.
---

**Bintu** is the stream-management system at the core of **nanoStream Cloud**. It ties together encoders, CDN playout, recordings, and playback clients into a single managed workflow so you can deliver ultra-low-latency live streaming globally. If you are new to nanoStream Cloud, start with the [Core Concepts](/docs/cloud/cloud_introduction).

You can work with Bintu in two ways:

<article className="margin-vert--lg">
  <Columns className="list_ZO3j">
    <Card className="col col--6 margin-horiz--md" href="https://dashboard.nanostream.cloud/auth">
      <Card.Header title="Dashboard" />
      <Card.Body>Use the nanoStream Cloud Dashboard to get an intuitive and comprehensive overview of your streaming activities.</Card.Body>
    </Card>
    <Card className="col col--6 margin-horiz--md" href="https://api.nanostream.cloud/docs/bintu/">
      <Card.Header title="REST API" />
      <Card.Body>Use the bintu REST API directly for automation, backend integration, and dynamic workflows.</Card.Body>
    </Card>
  </Columns>
</article>


Both interfaces operate on the same underlying system: **API-created streams appear in the Dashboard instantly, and Dashboard changes are reflected via the API**.

:::tip Bintu REST API Reference  
The complete API specification, all endpoints, parameters, workflows, and response schemas, is available at [**api.nanostream.cloud/docs/bintu**](https://api.nanostream.cloud/docs/bintu/). \
Use this when you need full request samples, field descriptions, and advanced configuration.
:::

## When to use Dashboard vs API

The dashboard and API *serve different but complementary purposes*. The choice depends on your workflow, your level of automation, and your operational requirements. Use the comparison below to choose the right interface for each task:

| Dashboard | REST API |
|-----------|----------|
| Use the Dashboard when you want a **visual management experience**. It is ideal for quickly creating streams, adjusting configurations, inspecting ingest/playout URLs, validating transcoding results, or monitoring status.<br/>Non-technical team members (operations, editorial, event managers) typically use the Dashboard for day-to-day handling. | Use the API when you need **automation**, **scaling**, or **integration**.<br/>Typical use cases include backend-driven event creation, stream provisioning in CMS/CRM systems, dynamically creating streams per customer session, or triggering workflows such as ABR setup, tagging, and metadata injection. |

Most users combine both: Dashboard for visibility and operations, API for automation.

## Prerequisite

### Account (Trial or Paid)

To use Bintu (Dashboard or API), you need a **nanoStream Cloud account**. \
If you do not have one yet, create it here: **[dashboard.nanostream.cloud/signup](https://dashboard.nanostream.cloud/signup)**.

If you need guidance regarding plans, multi-region distribution, SLA options or larger configurations, feel free to reach out via [nanocosmos.net/contact](https://www.nanocosmos.net/contact) or by email at *sales(at)nanocosmos.net*. We're happy to assist you in finding the best setup for your use case.

:::tip getting started
There are three ways to access the nanoStream Dashboard:
- **[Sign in with an existing account](/docs/dashboard/getting_started#sign-in)**
- **[Receive an invite to an existing organization](/docs/dashboard/getting_started#invite)**
- **[Sign up for a new account](/docs/dashboard/getting_started#sign-up)**.
:::

### API Key

To work with the **Dashboard**, no additional credentials are required beyond your account login. If you want to use the **REST API directly**, you need the **API key** of your organization. You can find and copy it on your organization overview page: [dashboard.nanostream.cloud/organisation](https://dashboard.nanostream.cloud/organisation).

Use this key in the `X-BINTU-APIKEY` header for all API requests.

### Streaming Setup

If you want to start streaming quickly, the **[Getting Started](/docs/cloud/cloud_getting_started)** guide shows how to:

- create and configure streams
- ingest live content using nanoStream Webcaster, OBS, Osprey Talon, or any RTMP/RTSP encoder
- validate ultra-low-latency playback using the H5Live Player

<article className="margin-vert--lg">
  <Columns className="list_ZO3j">
    <Card className="col col--6 margin-horiz--md" href="/docs/cloud/cloud_getting_started#create-a-stream">
      <Card.Header title="Create a Stream" />
      <Card.Body>Learn how to create and configure a stream in Bintu.</Card.Body>
    </Card>
    <Card className="col col--6 margin-horiz--md" href="/docs/cloud/cloud_getting_started#start-a-stream">
      <Card.Header title="Start a Stream" />
      <Card.Body>Learn how to push and play out live content.</Card.Body>
    </Card>
  </Columns>
</article>

## API Basics

The Bintu REST API provides programmatic access to stream management.

|  | URL |
|--|--|
| API Entry point | [https://bintu.nanocosmos.de](https://bintu.nanocosmos.de/) |
| Official Documentation | [https://api.nanostream.cloud/docs/bintu/](https://api.nanostream.cloud/docs/bintu/) |

## API Examples

The following examples illustrate how to interact with the Bintu API. Each example includes a **cURL command** and a **JavaScript snippet** for direct use in backend applications.

For additional languages, advanced configuration options, and complete request/response samples, please refer to the official **bintu API documentation**: **[api.nanostream.cloud/docs/bintu](https://api.nanostream.cloud/docs/bintu/)**. The API reference provides full details on all available endpoints and workflows.

### Get latest live stream

Retrieves the newest stream(s) in your organization (default is 50).
This is useful for dashboards, monitoring tools, or backend systems that need quick access to recently created streams.

**API Reference** \
[api.nanostream.cloud/docs/bintu/#operation/Stream%20Collection%20Info](https://api.nanostream.cloud/docs/bintu/#operation/Stream%20Collection%20Info)

**Parameters**
- `X-BINTU-APIKEY`: your API key for authentication
- `QUANTITY`: number of returned stream objects

**cURL**
```js title="bintu/get_latest_stream.sh"
curl -X GET "https://bintu.nanocosmos.de/stream?quantity=1" \
-H 'content-type: application/json' \
-H 'x-bintu-apikey: YOUR_BINTU_API_KEY' 
```

**JavaScript**
```js title="bintu/get_latest_stream.js"
fetch("https://bintu.nanocosmos.de/stream?quantity=1", {
  method: "GET",
  headers: { "x-bintu-apikey": BINTU_API_KEY }
}).then(response => response.json());
```

### Create MBR/ABR Stream including live transcoding

Creates a new stream with multiple transcoding profiles. MBR/ABR streaming automatically generates multiple output qualities inside nanoStream Cloud, enabling ultra-low-latency playback even in low-bandwidth environments.

:::info Good to know
A **multi-bitrate stream (MBR)** is transcoded into streams of varying quality to enable the playback of streams with extremely low latency at low bandwidth.

To understand *what multi-bitrate streams are* and *how adaptive bitrate and live transcoding work*, take a look at our [dedicated explanation page](/docs/dashboard/abr_transcoding).
:::

**API Reference** \
[api.nanostream.cloud/docs/bintu/#operation/Create%20Stream](https://api.nanostream.cloud/docs/bintu/#operation/Create%20Stream)

**Parameters**
- `YOUR_STREAM_ID`: the unique ID of your stream in nanoStream Cloud
- `X-BINTU-APIKEY`: your API key for authentication

**Body**
- `TRANSCODES`: transcoding profiles you want to enable
- `TAGS`: useful for grouping, filtering, or searching streams

**cURL**
```js title="bintu/create_stream.sh"
curl 'https://bintu.nanocosmos.de/stream' \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  -H 'x-bintu-apikey: YOUR_BINTU_API_KEY' \
  --data-raw '{
    "transcodes": [
      { "profile": "vtrans2-852x480x800x25", "tags": ["foo", "bar"] },
      { "profile": "vtrans2-640x360x400x25", "tags": [] }
    ]
  }'
```

**JavaScript**
```js title="bintu/create_stream.js"
fetch("https://bintu.nanocosmos.de/stream", {
  method: "POST",
  headers: { "x-bintu-apikey": BINTU_API_KEY },
  body: JSON.stringify({
    transcodes: [
      { profile: "vtrans2-852x480x800x25", tags: ["foo", "bar"] },
      { profile: "vtrans2-640x360x400x25", tags: [] }
    ]
  })
});
```

## Support

If you have questions, need assistance with integration, or want help designing the right workflow for your use case, our support team is ready to assist you:

- Technical support: **[nanocosmos.net/support](https://www.nanocosmos.net/support)**
- Sales and planning: **sales(at)nanocosmos.net**
- General contact: **[nanocosmos.net/contact](https://www.nanocosmos.net/contact)**

For operational questions or issues with an existing project, please include your **stream id** or **organization name** to help us assist you more efficiently.