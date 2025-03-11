---
id: nanostream_webrtc_release_latest
title: Latest Release
sidebar_label: Latest
---


# 6.2.0 (2024-07-15)


## Release Notes

## Changelog

### Bug Fixes

* address Chrome bug in main sample where requested resolutions are too low 286761c
* assure webcasterId does not change per instance e70b0c8
<!-- * **ci:** update_public_repo remove freshen flag 828246c -->
* replace legacy resolution changed values with counter "resolutionChangeCount" 
* stop tracks of temporary MediaStream after it was created for device permissions request


### Features

* improve error handling
* improved metrics reporting of session lifetime
* send metrics for status of MediaStream muted and document visibility


## Packages

 - [6.2.0](https://files.nanocosmos.de/index.php/s/7nXTy2gz9DpPrZa "nanoStream-Webcaster-6.2.0.zip")
 - Clone the git repository at https://github.com/nanocosmos/webcaster
 - or download a zipped archive from [nanocosmos/webcaster](https://github.com/nanocosmos/webcaster/archive/refs/heads/main.zip)
