---
id: nanoplayer_embed_detailed
title: Embed detailed
---

## Player Embed v2.0.0

The version of the embed is related to the embed application code, current version is 2.0.0.
The embed is using the latest player version, you can ready more about the latest version here: [latest 5.x](./nanoplayer_release_latest).


### Implementation with iFrame

#### Template example
In the following example the `streamname` value has to be replaced:

Link: `https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY`

```html
<iframe src="https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY" frameborder="0" allowfullscreen width="1280" height="720"></iframe>
```

iFrame src has to direct to the embedded player ( `https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY` ). It is necessary to add the query (like `entry.rtmp` with `streamname`, else the embedded player will be set but won't run without the stream)!

#### Example with Nanocosmos Test Stream
Test stream is `streamname=HX26g-NRbx9`

Link: `https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9`

```html
<iframe src="https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9" frameborder="0" allowfullscreen width="1280" height="720"></iframe>
```
### New in v2.0.0

Using nanoplayer.5.min.js instead of nanoplayer.4.min.js.
Embed Player 2.0.0 has full support of query params which are compatibile with [nanoStream H5Live Player Version v5](./nanoplayer_v5_migration_guide).

#### Query Parameter Type Handling

Embed Player 2.0.0 uses **strict type checking** for configuration parameters. This ensures proper behavior and prevents unexpected type conversions.

**Boolean Parameters**
- Only the string values `"true"` and `"false"` will be converted to boolean types
- Numeric values like `1` or `0` will NOT be converted to booleans
- Common boolean parameters include:
  - `playback.autoplay=true`
  - `playback.automute=true`
  - `playback.muted=false`
  - `playback.faststart=true`
  - `playback.metadata=true`

**Migration from v1.x:**
If previously numeric values were used for boolean parameters (e.g., `playback.metadata=1`), in the Embed Player 2.0.0. it must be updated to use explicit boolean strings (`playback.metadata=true`).

### New in v1.3.4

Added support for embed page custom title via query param `title`.

### New in v1.3.3

Wait until container is ready before creating the player at iframes `DOMContenLoaded`.

### New in v1.3.2

Using nanoplayer.4.min.js instead of static nanoplayer.4.18.0.min.js again.

### New in v1.3.1

Added support for stream group configuration and secure JSON Web Token introduced in nanoStream H5Live Player Version 4.18.x.

### New in v1.3.0

Added player metrics configuration support.

### New in v1.2.0

Following the nanoStream H5Live Player Version 4.14.x release where two new [latency control modes](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_feature_latency_control_modes/) have been added, it is possible to use them within Player Embed since v1.2.0. The default value is set to `"classic"` and doesn't require passing any parameter. To change to any of the adaptive modes, it is necessary to pass the desired value in the `playback.latencyControlMode` object via URL params.

Values: `"classic"`, `"balancedadaptive"`, `"fastadaptive"`.

#### URLs with latency control modes

* default mode:
  * https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=classic
* latency control mode set to `"balancedadaptive"`:
  * https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive
* latency control mode set to `"fastadaptive"`:
  * https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=fastadaptive

**Important:** Latency control modes are not available in Player Embed prior to v1.2.0.

#### Example URLs for embed player v2.0.0

* single stream minimal:
  * https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9

* latency control mode:
  * https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.latencyControlMode=balancedadaptive

* abr/multi stream:
  * https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&entry.info.bitrate=1500&entry2.rtmp.streamname=HX26g-uVn3M&entry2.info.bitrate=800&entry3.rtmp.streamname=HX26g-VbAxm&entry3.info.bitrate=200&options.adaption.rule=deviationOfMean2&startIndex=2

* autoplay/mute setting:
  * https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&playback.muted=false

* UI related: fullScreenControl, displayMutedAutoplay, backgroundColor and poster
  * https://demo.nanocosmos.de/nanoplayer/embed/2.0.0/nanoplayer.html?entry.rtmp.streamname=HX26g-NRbx9&playback.autoplay=true&playback.automute=true&style.displayMutedAutoplay=false&style.fullScreenControl=true&style.backgroundColor=black&style.poster=https://demo1.nanocosmos.de/assets/around720.png

### Configuration via URL parameters

For embedded player the configuration is set via URL parameters. These params are mapped with the Player [config](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_api#nanoplayerconfig--codeobjectcode) params, however in URL  the dot notation is being used for object values. For all objects the object name has to be included, expect from `config.source`.

Supported query params:

* general parameters from `config.source` object (without `source` as prefix) e.g.:
  * `defaults.service=bintu`
  * `startIndex=2`
  * `options.adaption.rule=deviationOfMean2`
* entries from `config.source.entries` array (except `info`, `label` & `tag`) e.g.:
  * `entry.rtmp.streamname=**here the streamname**`
  * `entry2.rtmp.streamname=**here the streamname**`
  * `entry3.rtmp.streamname=**here the streamname**`
* all playback parameters from `config.playback` e.g.:
  * `playback.autoplay=true`
  * `playback.muted=false`
  * `playback.automute=true`
  * `playback.timeouts.buffering=20`
  * `playback.latencyControlMode=classic` (v1.2.0)
* all style parameters from `config.style` e.g.:
  * `style.fullScreenControl=true`
  * `style.displayMutedAutoplay=true`
  * `style.backgroundColor=black`
* all tweaks parameters from `config.tweaks` (have to be given in a complete set) e.g.:
  * `tweaks.buffer.limit=1.7`
* all metrics parameters from `config.metrics` e.g.:
  * `metrics.accountKey=**here the account key**`
  * `metrics.accountId=**here the account id**`

Read more about how to use: [metrics](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_player_metrics).

### Not supported

Player config which is not supported in embed:

* secure playback with referer binding
