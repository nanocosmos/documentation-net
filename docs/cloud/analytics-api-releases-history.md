---
id: analytics-api-releases-history
title: API Release - History
sidebar_label: History
---

# Changelog

## 2.23 - CSV export

### official

-  added support for CSV export via public API and frontend
-  added support for country filtering to historical usage
-  added table with numbers shown in chart to historical usage
-  redesigned dashboard interface
-  added button to jump instantly to next/previous interval in date picker
-  improved selection of quick time settings in date picker to offer better date/time ranges

## 2.22 - Alerting service

### official

-  added route to request detected alerts
   -  GET `/api/v2/alerting/ingest/`
   -  POST `/api/v2/alerting/ingest/` (supports excluded streams / stream expected to be online detection)
-  added `stream time ratio` and `real-time framerate` metrics to troubleshooting ingest metrics

## 2.21 - JWT / API improvement / agg service extension

### official

-  enabled country, tag and event filtering for supporting API routes
-  added routes to ask for values which can be used for filtering (recent used tags are requestable via bintu):
   -  countries: `api/v2/filters/countries`
   -  events: `api/v2/filters/events`

### Aggregation service

-  automatic validation of written hourly usage data against accounting data after 5 / 30 / 60 days (with mattermost notification in case of detected differences)
-  added stream aggregation -> support for countries and streams filtering (currently still pending)
-  added aggregation of playtime, which is required for FE usage of aggregated data (currently still pending)

### Current viewer service

-  added country aggregation -> support for countries and streams filtering

## 2.20.1 - new API routes part 2

### official

-  new API route: `/api/v2/usage/hourly/bytes/timeseries`:
   -  time series of byte usage for playout and ingest traffic with a maximum temporal resolution of an hour
   -  no support for stream filtering
   -  start and end date have to point to a full hour e.g. 2021-01-14T15:00
   -  accesses low resolution data -> longer time ranges requestable / historical data / low response time
-  added IP/referrer blocking either via `Breakdown` or `Guardian` view

## 2.20.0 - new API routes

### official

-  new API routes to request monitoring metrics

   -  `/api/v2/monitoring/playout/bufferingRatio` (play buffering ratio)
   -  `/api/v2/monitoring/playout/startuptime` (startup time)
   -  `/api/v2/monitoring/playout/errorcode` (recent occurred error codes)
   -  `/api/v2/monitoring/ingest/timeRatio/timeseries` (stream time ratio)

-  new API routes to request bytes usage in timeseries

   -  `/api/v2/usage/bytes/timeseries` (byte usage of playout/ingest in timeseries)

-  new API routes to request to broken down bytes usage (supported break down metrics: "ip" "stream" "country" "city" "referrer")

   -  `/api/v2/usage/{break down metric}/ingest/bytes` (breakdown of ingest bytes)
   -  `/api/v2/usage/{break down metric}/playout/bytes` (breakdown of playout bytes)

-  new API doc interface

## 2.19 - Elasticsearch query optimization

### official

-  improved dashboard loading time
-  improved: standardized public API route naming (v2)
-  fixed: minor bugfixes

## 2.18.1 - Block/Unblock IPs and referrers

### official

-  enabled functionality to block/unblocking of certain IPs or referrers on 'Breakdown' view

## 2.18 - More WebRTC metrics/details

### official

-  new API routes to request ingest counts broken down to browsers and operating systems
   -  `/api/v1/stats/webrtc/ingest/count/browser`
   -  `/api/v1/stats/webrtc/ingest/count/os`
-  added Webcaster widget 'Reasons for stopping' (with zoom feature) to see stopping counts for a given stopping reason
-  improved troubleshooting on ingest side:
   -  for WebRTC failing ingest starts and errors while ingesting are listed now
   -  for that ingests corresponding error logs message are shown at the details
   -  WebRTC details now also contain the webcaster ID and the description of the camera used to record the stream
-  improved troubleshooting generally by changing the carousel to showcase the stream/playout details
-  new API routes to request the video bitrate for a WebRTC ingest (stream name filtering is supported)
   -  `/api/v1/stats/webrtc/ingest/bitrate/video`

## 2.16 - Zoom for every widget / monitoring ingest bitrate for multiple stream at once

### official

-  added Zoom feature (breakdown for interesting chart datapoints) to widgets

   -  Home view:
      -  Maximum concurrent H5live viewers
      -  Month to Date
   -  H5live view:
      -  H5Live playback count per OS
      -  H5Live playback count per browser
      -  Average and median playing time in seconds
      -  Play buffering ratio in percent
      -  Player loading count per country
      -  Used player versions
      -  Average and median player latency in seconds
      -  Median play startup time in seconds
      -  Status/Error Codes
      -  Reasons for stopping
   -  Adaptive bitrate view:
      -  Playtime per ABR profile (video height)
      -  Viewers per ABR profile (video height)
      -  Switches success / fail
      -  Switches between ABR profiles
   -  Webcaster view:
      -  Webcaster publish count per OS
      -  Webcaster publish count per browser
      -  Status/Error Codes
      -  Average and median of video bitrate
      -  Average and median of audio bitrate
   -  World map view: just added Zoom hint

-  allow to get last ingest audio/video bitrate for multiple streams at once
   -  now we provide 3 routes
      -  `/api/v1/monitoring/ingest/bitrate` (returns audio + video bitrate)
      -  `/api/v1/monitoring/ingest/bitrate/audio` (returns just audio bitrate)
      -  `/api/v1/monitoring/ingest/bitrate/video` (returns just video bitrate)
   -  max. 50 streams allowed
-  fixed Zoom for world maps `Playout/Ingest` metric to count only full sessions instead of every subsession (same approach `Playout/Ingest` world map metric works)
-  added 'Status/Error codes' widget for webcaster
-  changed 'Used player/webcaster version' to be switchable between pie chart and table view

## 2.15 - ES7 support / public API: h5live client metrics

### official

-  added API routes for h5live client metrics
   -  `/api/v1/stats/h5live/bufferingratio`
   -  `/api/v1/stats/h5live/bufferingratio/streams`
   -  `/api/v1/stats/h5live/latency`
   -  `/api/v1/stats/h5live/latency/streams`
   -  `/api/v1/stats/h5live/playtime`
   -  `/api/v1/stats/h5live/playtime/streams`
   -  `/api/v1/stats/h5live/startuptime`
   -  `/api/v1/stats/h5live/startuptime/streams`
-  fixed frontend crash when a playback with a short duration is selected on the troubleshooting page
-  fixed minor issue with time range validation

## 2.14 - public API: ingest video and audio bitrate

### official

-  added API route for monitoring ingest audio and video bitrate
-  improved StreamGuard: accuracy of values have been increased, particularly for concurrency metric
-  improved date time picker
-  improved UX:
   -  display message in widget when no data is available
   -  display message in widget when request went wrong (e.g. no connection)
   -  changed some widget titles and descriptions for better understanding
   -  widgets in the same row have same height
   -  consistent look for widget headers
   -  use thousand separators for all figures
   -  switch pie chart to table when a lot of entries need to be shown
   -  missing values displayed as zero in line charts are only shown between two available data points
-  improved: total count on world map will not be rounded if the value is below 1e7
-  improved: event filtering now available for H5live based world map metric and for adaptive bitrate view
-  fixed: tag filter was not applied to concurrent viewers

## 2.13 - StreamGuard

### official

-  added new StreamGuard view which allows filtering and blocking of IPs
   -  currently only available for selected customers
-  added API route for filtering IPs (used also by the StreamGuard view)
-  improved playout count on world map, it is now more accurate
-  fixed: when changing to a different view it was possible that loading indications did not work anymore
-  fixed wrong UTC dates on time axes in the troubleshooting view

### internal/confidential

-  added possibility to use Elasticsearch 7 endpoint
   -  important to verify data validity before ES7 can be used in production
-  improved: the backend now only sends the number of publish events (five) for troubleshooting which are actually shown by the frontend
-  improved: further migration work to typescript in the backend
-  fixed: the hash value for the monthly data was always the same, independent of the actual data
-  fixed: the "ratio player/ server metric current month", which is shown for the admin user, was wrong on the first day of the month
-  already deployed as hotfix to production:
   -  improved: use new index `streamcloud_metrics_webrtc` for webrtc client metrics, which are now sent to logstash
   -  improved: use new index `streamcloud_metrics_player` for h5live client metrics, which are now sent to logstash

## 2.12 - public API: concurrent viewer

### official

-  added API route for concurrent viewers
-  added boundaries to US regions
-  added link, in the UI, to the API documentation
-  improved troubleshooting view: if no WebRTC client metrics are available, show RTMP ingest metrics instead
-  improved: the "Home" view is now split up into "Home" and "Break down"
-  improved month-to-date: it is now obvious which time spans are used
-  improved historical usage: on hover the total traffic is shown for the selected month
-  improved and updated documentation
-  improved: consistently use three decimal places for all usage values
-  fixed: zoom on world map for a US region would show data for entire US
-  fixed: in rare cases it was possible that the query for the world map category latency timed out
-  removed unused setting "start of week"

## 2.11 - public API

### official

-  added direct API access: accounting data for last month can be queried
-  created API documentation: https://metrics.nanocosmos.de/api/doc/

## 2.10 - troubleshooting

-  added troubleshooting view to investigate stream issues based on ingest and playout client metrics
-  added world map regions like Europe, North America, etc.
-  added ABR up and down switch count to world map
-  added ABR viewers by profile/quality
-  added historical usage view to see development of usage over months
-  added further Webcaster error codes
-  added option to route `/bytes/perorga` so that the new trial guardian service is able to get the usage for a list of organization hashes
-  improved: use ES field `CloudComponent` instead of `source` where possible
-  improved: split up single express router into multiple router categories
-  improved: centralized chart.js options
-  changed: maximum concurrent viewers moved from "H5Live" to "Home" view
-  fixed: maximum concurrent viewers was wrong, if multiple streams were selected, e.g using the tag filter
-  fixed: use type undefined as return value instead of string "undefined" so that no unnecessary ES requests are made

## 2.9 - world map improvement

-  added zoom for every category on the world map
   -  users can now click on a point in the world map to get top 10 values for different fields, like IP, stream name, city, referrer, etc.
-  added zoom for ABR profiles, including columns latency and play/buffer ratio
-  added stream name filtering
-  added option to world map to switch between different CDNs: t2 and ct6
-  added percentage for usage values in admin organization list
-  added (enabled) adaptive bitrate metrics for premium level customers
-  improved zoom for usage: now also displays referrer and related organization
-  improved concurrent viewer calculation: script will not abort processing for subsequent organizations and streams if an error occurs
-  improved: load data for a world map category when it was selected by the user
-  improved: world map options can now be shared with URL sharing
-  improved: only use one term aggregation for each Elasticsearch query for better performance
-  improved: limited "GBytes per ..." widgets to 1k results for better performance
-  improved play/buffer ratio calculation
-  fixed handling of special characters for URL sharing
-  fixed: URL sharing would not switch to specified view if user had to login first
-  fixed: zoom Top10 list of stream names did not show correct usage
-  fixed for admin: content of filter drop down menus were not always correctly updated when switching to another organization
-  removed old unused h5live pull tokens

## 2.8 - Insight

-  added analytics URL sharing
-  added: the admin organization list is now searchable for email addresses
-  added usage current month to admin organization overview
-  added admin option to switch between metrics level
-  added H5Live token for customer Aerodyne
-  improved: playout counts for ABR view were limited to 10k
-  improved buffering/play ratio, invalid values where bufferingTotal is bigger than elapsedTotal are omitted
-  improved: do not show negative latency values on world map, because of invalid values stored in Elasticsearch
-  improved caching for month-to-date metric
-  improved use of local cache on the backend
-  improved canceling of requests when switching to another view
-  improved: monolithic "BytesController" has been split up into single protocol controllers
-  fixed: playout count on world map was wrong for numbers below 10
-  fixed: user selected date was not always displayed correctly in the headline of single metrics
-  fixed: time span selection for "Absolute" worked inconsistently
-  fixed: PDF export was not working anymore
-  fixed rare error "Converting circular structure to JSON"

## 2.7 - Zoom/Filter

-  added "zoom" overlay to show top 10 of IPs, stream names, countries or cities for a selected interval bar of a histogram
   -  currently available for "Usage Playout/Ingest", "Usage Playout" and "Usage Ingest"
-  added option to filter H5Live metrics by event id
-  added switch to show traffic either in GBs or hours
-  improved: also consider "bytes_received" to be part of the playback usage, and "bytes_sent" to be part of the ingest usage
   -  the usage for each protocol (RTMP playout, RTMP ingest, H5Live playout, etc.) is now calculated separately, so that the usage for communication between client and server is assigned to the right protocol
-  improved: only use react hook "useMemo" if required
-  fixed: country usage pie chart only considered playout, not ingest
-  fixed: tag filtering did not work for concurrent viewers

## 2.6 - initial QoE metrics

-  added QoE score to world map
-  added new view for QoE metrics
-  added user documentation (on docs.nanocosmos.de)
-  added option to only show trial organisations
-  improved: refactored code for world map
-  improved: integrated ESlint for consistent code formatting rules
-  fixed: webcaster traffic which is ingested locally on rtc servers was not considered
-  fixed: playout count on world map did not consider H5Live pull token playbacks

## 2.5 - initial ABR metrics

-  added ABR overview to world map:
   -  play time in hours for desktop and mobile
-  added ABR metrics:
   -  play time and viewer count per ABR profile
   -  count of successful and failed switches
   -  count of up and down switches
   -  comparison of playouts with and without switches, if ABR is enabled
   -  comparison of playouts with ABR available and ABR not available
-  added: store monthly usage values for each organisation in separate Elasticsearch index
   -  can be used to track trends and changes over months
-  added metric for client versions for H5live and Webcaster
-  updated h5live pull token list
-  fixed: Elasticsearch NOT operator is used in parentheses to prevent unexpected query results

## 2.4 - initial webcaster metrics

-  added webcaster client metrics:
   -  ingests per OS and Browser
   -  status/error codes
   -  average and median of ingest time
   -  average and median of video and audio bitrate
-  added metric for ingest usage per protocol
-  added metric to show usage per h5live pull token
   -  unknown/unauthorized tokens are shown as well

## 2.3 - world map as entry point

-  added further metrics and top 10 list of countries to world map
-  added hidden option to select a country directly from the country pie chart
-  improved display of world map: flatter world map and highlight top 10 points
-  improved month to date widget: user can compare current month with same period of previous month
-  improved: refactored and restructured frontend code

## 2.2 - internal cleanup and refactoring

-  added new H5Live metric: average and median of played time
-  added server/player ratio for H5live metrics to admin organisation list
   -  can be used to see which customers are sending H5live client metrics and for how many playbacks
-  added usage of last hour to admin organisation list
-  improved: use new API route from Bintu to fetch only the recently used tags (last 90 days) to better handle organisations with a high number of tags
-  improved: use React method componentWillUnmount for widgets and cancelable tokens for axios to ignore unfinished requests to the backend
-  improved: refactor the way Elasticsearch request are prepared and created
   -  to avoid duplicate code and simplify adding new widgets and functionality in the future
-  improved: updated React to version 16.8, which allows us to use a new React feature named `hooks`
-  improved display of legend values for the world map
-  improved: unified promise error handling for the backend
-  fixed unrealistically high playback counts on world map
-  fixed: widgets were not loaded when switching views (home to h5live or vice versa) and an absolute time span was selected

## 2.1 - added tags filter and extended world map

-  added new filter to select one or multiple tags, metrics will then only show data for the selected tags
   -  sample use cases: tag one or more streams for one event, or use tag(s) to identify an iGaming table
-  added play/buffer ratio and latency to world map
-  added column received for metric "GBytes per IP"
   -  because of the change for the query to calculate the ingest traffic it is now possible to get IP addresses of the publisher clients
-  added total values to world map
-  added sum of GB sent/received to all "GBytes per ..." metrics
-  improved: in addition to the Bintu orga hash, use account id for an organisation to search for H5live player metrics in Elasticsearch
   -  we can now query and visualize metrics for customers who are not using Bintu but use H5Live token/pull playback and are sending H5Live player metrics
-  improved: round legend values for world map
-  improved user experience for multi country selection
-  improved: use redux store instead of session storage
-  improved: extended QueryBuilder
-  fixed unexpected spikes for play/buffer ratio
-  fixed: drop down menus like the data picker or the tag filter were partly hidden beneath other widgets

## 2.0 - added country filters and caching

-  added new filter to select single or multiple countries, metrics will then only show data for the selected countries
-  added caching on the backend side
-  changed: query for calculating the ingest traffic now uses ingest rtmp applications of the ingest servers instead of the play rtmp application
   -  also required for the country filter
   -  note for sales: this leads to negative difference of 4600GB for the customer top4 (1,2% of total monthly traffic for top4)
-  improved tag search: now also shows deleted streams
-  improved time intervals for metric histograms, before it was possible that the current day or hour was not shown (depending on the selected time)
-  fixed: link for exporting a pdf was not available anymore for the admin user

## 1.9

-  improved: replaced percentiles with median and average for player buffer length, only admin can now see the percentile metric
-  improved: playback and ingest counts on the world map now only show connections which lasted at least 2 seconds, so that we won't show false positives, like e.g. for customer ezugi, which is doing one second playbacks to check if a stream is live
-  improved: show connections in region US
-  added hover for world map
-  changed: customers with package full can see the first three H5Live metrics
-  fixed: keep selected organisation when changing to different dashboard
-  hotfix: handle countries from Elasticsearch response, which are not available on the world map
-  hotfix: improve check for updating the sums for the stream name list, led to sluggish UI
-  hotfix: sorting for data and numbers did not work anymore, used in the admin organisation list

## 1.8

-  added option to filter list of stream names in "GBytes per Streamname" by using tags (hidden option for now)
-  improved understandability of H5Live metrics
-  fixed: handle empty Elasticsearch query results for H5Live metrics
-  fixed: admin filter does not always show the selected organisation

## 1.7 - added H5Live metrics and world map (not deployed to prod)

-  improved: use queue for Elasticsearch queries, so they are not executed all at once
-  added initial version of worldmap widget
-  added new H5Live metrics: error/status codes, reasons for stopping, play buffering ratio, player loading count, percentiles of average player buffer length in seconds, median play start time in seconds
-  removed local IP address from GBytes per IP
-  fixed: pie chart not shown in some cases
-  fixed missing organisation name and hash in exported pdf for non-admin users

## 1.6

-  improved admin organisation filter list: shows much more information now
-  the usage for last month (week, yesterday) now also considers the H5live token playback
-  improved logging (less verbose, log rotation)
-  improved display of long strings
-  removed unneeded column received for table "GBytes per Client"
-  refactored code for Elasticsearch queries

## 1.5

-  overage is calculated and shown in exported PDFs
   -  for customers which purchased packages are specified in https://docs.google.com/spreadsheets/d/1bVmXmobu9qeSmiEQ-SvRx3o_50zeJs7Swkt-O6l7HW4/edit#gid=0
-  customer list for the admin user can be sorted by usage of last month

## 1.4

-  added login for different Bintu instances - currently only c-t6-bintu.nanocosmos.de is additionally supported
   -  can be tested with demo+top4@nanocosmos.de and url c-t6-metrics.nanocosmos.de (will resolve to the same host as for metrics.nanocosmos.de, but is requires to distinguish between the two different Bintu instances)
-  show H5Live pull traffic (playback from external rtmp servers with a customer token)
-  fixed difference in total playout usage

## 1.3

-  improved: filter and time range widget now show the last selection, if changing to other dashboards or to reports
-  changed: combined RTMP, H5Live and HLS playback in one widget
-  changed: play percentage per browser and OS are now in separate widgets
-  changed: minor layout and color changes
-  fixed: correct values for RTMP playback and total sum of playback
-  small bug fixes

## 1.2

-  added initial three H5Live player metrics
-  added user permissions: distinguish between three different metric packages (basic, full, premium) a customer can purchase
-  added additional metrics for RTMP and HLS usage
-  small bug fixes

## 1.1

-  improved: don't trigger API requests for every change in the date selector
-  fixed: customer name was missing in PDF
-  fixed wrong total values for custom selected time span

## 1.0 - initial release

-  bug fixes

## 0.1 - beta version

-  customers can login with Bintu account
-  basic usage metrics, like general usage (sent/received), H5Live usage, countries and Gbytes per stream name, client and IP
-  simple PDF export for sent/received, per customer
