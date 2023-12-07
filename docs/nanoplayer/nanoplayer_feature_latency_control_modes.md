---
id: nanoplayer_feature_latency_control_modes
title: Latency Control Modes
sidebar_label: Latency control modes
---

<div class="video-wrap">
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/65qfMRSSPjU" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

***Click `PLAY` button to start***

Introduced in **nanoStream H5Live Player Version 4.14.x**, two new latency control modes have been added, targeting especially lowest latency use cases like live auctioning.
The latency control mode can be selected via the added `playback.latencyControlMode` configuration parameter.
The established latency control mode is available as the `'classic'` option which remains to be the default mode.
In addition the new latency control modes `'balancedadaptive'` and `'fastadaptive'` have been added. According to the current stream and network conditions they can adjust the latency adaptively. This allows to achieve a lower latency while keeping the playback experience smooth.

## Supported platforms and browsers

This feature is particularly helpful in i.e. live auctioning, where even lower latency is crucial. The usage depends on the needs, however, in most cases the `'classic'` mode is enough to achieve a satisfying viewing experience.

### v.4.14.1

Version 4.14.x added support for all major desktop and Android browsers.

* Desktop Windows/Mac/Linux: Chrome, Edge Chromium (80+), Firefox, Safari, Chromium-based browsers
* Android: Chrome, Firefox, Chromium-based browsers
* iOS is planned to follow soon

For unsupported platforms/browsers the player is doing automatic fallback to `'classic'` mode.

## Configuration

Accessing latency control modes is possible via `playback.latencyControlMode` in the player configuration.

Parameter name: `config.playback.latencyControlMode`  
Values: `'classic'`, `'balancedadaptive'`, `'fastadaptive'`

## Examples

```js
var config = {
    'playback': {
        ...
        'latencyControlMode' : 'classic',
        ...
    }
}
```

```js
var config = {
    'playback': {
        ...
        'latencyControlMode' : 'balancedadaptive',
        ...
    }
}
```

```js
var config = {
    'playback': {
        ...
        'latencyControlMode' : 'fastadaptive',
        ...
    }
}
```

## Latency control modes

### `'classic'` mode

* default mode
* well-established and reliable option for a variety of use cases
* based on threshold values that can be customized via [`tweaks.buffer`](#buffer-tweaks) configuration

### `'balancedadaptive'` mode

* added in version 4.14.x
* latency control adapting to current stream and network conditions
* capable of achieving and maintaining lower playback latency
* lower operating points compared to `classic` mode
* recommended to be used without custom [`tweaks.buffer`](#buffer-tweaks) configuration

### `'fastadaptive'` mode

* added in version 4.14.x
* latency control adapting to current stream and network conditions
* capable of achieving and maintaining lower playback latency
* lower operating points compared to `balancedadaptive` mode
* recommended to be used without custom [`tweaks.buffer`](#buffer-tweaks) configuration

## Buffer Tweaks

:::info Important
It's recommended to use default settings. Feel free to [contact support](https://www.nanocosmos.de/support) for assistance and feedback.
:::

For stable low latency playback, default buffer settings are endorsed. These settings are internally set without passing a `tweaks.buffer` object through the config. The default settings are:

```js
'tweaks' : {
    'buffer': {
        'min': 0.2,
        'start': 0.5,
        'target': 1.2,
        'limit': 1.7,
        'max': 8.0
    }
}
```

:::caution Unappropriate buffer tweaks values can negatively impact playback
It's crucial that when adjusting the buffer, values ascend in the correct order (**`min` < `start` < `target` < `limit` < `max`**). Additionally, ensure that the differences between `min` & `start`, `min` & `target`, `target` & `limit` are significant enough. Values too close to each other (e.g., `min`: `0.2` & `target`: `0.3`) may disrupt the buffer's functioning.
Lower buffer settings may lead to unstable playback such as freezing or switching between buffering and resuming, which can depend on the stream, platform, and network conditions.
:::

Explanation of values:

* **`min`**: If buffer underrun occurs while playing and reaches this value, buffering initiates until the `start` value is reached for playback to resume.

* **`start`**: Playback starts at this buffer value upon the play call.

* **`target`**: This value is aimed for if the buffer reaches `limit` or `max`. It ensures stable playback.

* **`limit`**: Smooth latency reduction occurs if this value is reached, moving towards `target`.

* **`max`**: Absolute maximum buffer; upon reaching this value, a hard seek to `target` is performed. It should be significantly higher than `limit`.

### Buffer tweaks and latency control modes

The `tweaks.buffer` settings primarily influence the behavior of the `'classic'` mode. However, it's essential to note that while using the `'balancedadaptive'` and `'fastadaptive'`modes, the default `tweaks.buffer` settings should be prioritized. The selection of `latencyControlMode` and the **default** buffer tweaks should be emphasized for optimal performance and stability.
