---
id: nanostream_webrtc_release_history
title: Release History
sidebar_label: History
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


# 6.1.0 (2024-04-10)


### Bug Fixes

* calling dispose fails when server is not reachable 4f094b9
* **ci:** allow subsequent stages to be run after deploy c3dbaaa
* **ci:** make job branches coherent 3b3f7cd
* initially disabled tracks on the incoming mediaStream are enabled automatically 004df24
* isMuted method returns not the actual muted status, but passed isMuted config 03a557e


### Features

* add auto-reconnection f7947b6
* add onConnectionChange callback 7406317
* **readme:** add CI/CD header ea2f12e

# v6.0.2

First public release!

# v6.0.1

Minor improvements in documentation and samples.

# v6.0.0

Official release, see MIGRATION_GUIDE.md for details.

# v6.0.0-beta1

Our first version with the new API!
