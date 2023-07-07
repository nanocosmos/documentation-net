import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '244'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '518'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '6a6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '926'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '8c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '26e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '699'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '5bd'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '375'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '493'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '1b7'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'ac4'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'fd0'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '33b'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '6cd'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '6ac'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '537'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '473'),
    exact: true
  },
  {
    path: '/empty-markdown-page',
    component: ComponentCreator('/empty-markdown-page', 'e1f'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '324'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f6c'),
    routes: [
      {
        path: '/docs/cloud-frontend-v3/Dashboard_ABR_Transcoding',
        component: ComponentCreator('/docs/cloud-frontend-v3/Dashboard_ABR_Transcoding', 'be4'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud-frontend-v3/Dashboard_Getting_Started',
        component: ComponentCreator('/docs/cloud-frontend-v3/Dashboard_Getting_Started', '11c'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud-frontend-v3/Dashboard_nanoPlayer',
        component: ComponentCreator('/docs/cloud-frontend-v3/Dashboard_nanoPlayer', '593'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud-frontend-v3/Dashboard_Overview',
        component: ComponentCreator('/docs/cloud-frontend-v3/Dashboard_Overview', '6a1'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud-frontend-v3/Dashboard_Secure',
        component: ComponentCreator('/docs/cloud-frontend-v3/Dashboard_Secure', '9d0'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud-frontend-v3/Dashboard_Start_Streaming',
        component: ComponentCreator('/docs/cloud-frontend-v3/Dashboard_Start_Streaming', 'c9d'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud-frontend-v3/Dashboard_Stream_Overview',
        component: ComponentCreator('/docs/cloud-frontend-v3/Dashboard_Stream_Overview', '71b'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud-frontend/cloud-playback-tokens',
        component: ComponentCreator('/docs/cloud-frontend/cloud-playback-tokens', '2b4'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/cloud-readme',
        component: ComponentCreator('/docs/cloud-frontend/cloud-readme', '8dc'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/cloud-tags',
        component: ComponentCreator('/docs/cloud-frontend/cloud-tags', 'b92'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/getting_started',
        component: ComponentCreator('/docs/cloud-frontend/getting_started', 'd19'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/How_to_Delete_a_Stream',
        component: ComponentCreator('/docs/cloud-frontend/How_to_Delete_a_Stream', 'd72'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/How_to_Find_Metrics',
        component: ComponentCreator('/docs/cloud-frontend/How_to_Find_Metrics', 'a75'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/How_to_Log_in_to_the_nanoStream_Cloud',
        component: ComponentCreator('/docs/cloud-frontend/How_to_Log_in_to_the_nanoStream_Cloud', '93f'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/How_to_Setup_Low_Latency_Stream',
        component: ComponentCreator('/docs/cloud-frontend/How_to_Setup_Low_Latency_Stream', '6d0'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/How_to_Start_a_Stream',
        component: ComponentCreator('/docs/cloud-frontend/How_to_Start_a_Stream', 'b67'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/How_to_Use_the_nanoStream_Webcaster',
        component: ComponentCreator('/docs/cloud-frontend/How_to_Use_the_nanoStream_Webcaster', 'bd6'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/nanoplayer-snippet',
        component: ComponentCreator('/docs/cloud-frontend/nanoplayer-snippet', '394'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/stream-list',
        component: ComponentCreator('/docs/cloud-frontend/stream-list', 'dac'),
        exact: true
      },
      {
        path: '/docs/cloud-frontend/transcoding-abr',
        component: ComponentCreator('/docs/cloud-frontend/transcoding-abr', 'e48'),
        exact: true
      },
      {
        path: '/docs/cloud/analytics',
        component: ComponentCreator('/docs/cloud/analytics', '239'),
        exact: true,
        sidebar: "nanoStream Analytics"
      },
      {
        path: '/docs/cloud/analytics-api',
        component: ComponentCreator('/docs/cloud/analytics-api', 'fc7'),
        exact: true,
        sidebar: "nanoStream Analytics"
      },
      {
        path: '/docs/cloud/analytics-guardian',
        component: ComponentCreator('/docs/cloud/analytics-guardian', '7df'),
        exact: true,
        sidebar: "nanoStream Analytics"
      },
      {
        path: '/docs/cloud/analytics-zoom',
        component: ComponentCreator('/docs/cloud/analytics-zoom', 'cb4'),
        exact: true,
        sidebar: "nanoStream Analytics"
      },
      {
        path: '/docs/cloud/bintu_api',
        component: ComponentCreator('/docs/cloud/bintu_api', '5e4'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/bintu_custom_webhooks',
        component: ComponentCreator('/docs/cloud/bintu_custom_webhooks', 'dab'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/bintu_stream_tags',
        component: ComponentCreator('/docs/cloud/bintu_stream_tags', 'ff0'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/cloud_getting_started',
        component: ComponentCreator('/docs/cloud/cloud_getting_started', '5b0'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/cloud_introduction',
        component: ComponentCreator('/docs/cloud/cloud_introduction', 'fdf'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/cloud_overview',
        component: ComponentCreator('/docs/cloud/cloud_overview', '83e'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/guardian',
        component: ComponentCreator('/docs/cloud/guardian', '74e'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/live_encoding',
        component: ComponentCreator('/docs/cloud/live_encoding', '76f'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/live-recording-vod',
        component: ComponentCreator('/docs/cloud/live-recording-vod', 'f74'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/network-diagnostics',
        component: ComponentCreator('/docs/cloud/network-diagnostics', '0ca'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/network-diagnostics-mtr',
        component: ComponentCreator('/docs/cloud/network-diagnostics-mtr', 'ac5'),
        exact: true
      },
      {
        path: '/docs/cloud/security',
        component: ComponentCreator('/docs/cloud/security', '9cc'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/srt_ingest',
        component: ComponentCreator('/docs/cloud/srt_ingest', '2e6'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/support',
        component: ComponentCreator('/docs/cloud/support', '4e0'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/cloud/troubleshooting',
        component: ComponentCreator('/docs/cloud/troubleshooting', '971'),
        exact: true,
        sidebar: "nanoStream Analytics"
      },
      {
        path: '/docs/cloud/worldmap',
        component: ComponentCreator('/docs/cloud/worldmap', 'fa8'),
        exact: true,
        sidebar: "nanoStream Analytics"
      },
      {
        path: '/docs/faq/',
        component: ComponentCreator('/docs/faq/', '898'),
        exact: true,
        sidebar: "FAQ"
      },
      {
        path: '/docs/faq/faq_adv_codec_config',
        component: ComponentCreator('/docs/faq/faq_adv_codec_config', '502'),
        exact: true,
        sidebar: "FAQ"
      },
      {
        path: '/docs/faq/faq_devices_support',
        component: ComponentCreator('/docs/faq/faq_devices_support', '33b'),
        exact: true,
        sidebar: "FAQ"
      },
      {
        path: '/docs/faq/faq_h5live_player_adjust_style',
        component: ComponentCreator('/docs/faq/faq_h5live_player_adjust_style', '360'),
        exact: true,
        sidebar: "FAQ"
      },
      {
        path: '/docs/faq/faq_h5live_player_general',
        component: ComponentCreator('/docs/faq/faq_h5live_player_general', '918'),
        exact: true,
        sidebar: "FAQ"
      },
      {
        path: '/docs/faq/faq_purchase_and_license',
        component: ComponentCreator('/docs/faq/faq_purchase_and_license', '06e'),
        exact: true,
        sidebar: "FAQ"
      },
      {
        path: '/docs/faq/faq_streaming',
        component: ComponentCreator('/docs/faq/faq_streaming', 'dac'),
        exact: true
      },
      {
        path: '/docs/faq/faq_WebRTC_devices',
        component: ComponentCreator('/docs/faq/faq_WebRTC_devices', 'dca'),
        exact: true,
        sidebar: "FAQ"
      },
      {
        path: '/docs/faq/faq_WebRTC_general',
        component: ComponentCreator('/docs/faq/faq_WebRTC_general', '4f2'),
        exact: true,
        sidebar: "FAQ"
      },
      {
        path: '/docs/nanomeet/api',
        component: ComponentCreator('/docs/nanomeet/api', 'b1b'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/nanomeet/getting-started',
        component: ComponentCreator('/docs/nanomeet/getting-started', '10f'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/nanomeet/introduction',
        component: ComponentCreator('/docs/nanomeet/introduction', '549'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/nanomeet/samples',
        component: ComponentCreator('/docs/nanomeet/samples', 'c08'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/nanomeet/source-code',
        component: ComponentCreator('/docs/nanomeet/source-code', '105'),
        exact: true,
        sidebar: "nanoStream Cloud"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_api',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_api', 'b3f'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_api_errors',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_api_errors', 'f13'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_autoplay',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_autoplay', '233'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_blogposts',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_blogposts', '20c'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_embed_detailed',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_embed_detailed', '6e0'),
        exact: true
      },
      {
        path: '/docs/nanoplayer/nanoplayer_faq',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_faq', 'dcf'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_feature_customization',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_feature_customization', '123'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_feature_fullscreen_api',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_feature_fullscreen_api', '537'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_feature_latency_control_modes',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_feature_latency_control_modes', '64a'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_feature_media_error_recovery',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_feature_media_error_recovery', 'd2c'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_feature_reconnect_timeouts',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_feature_reconnect_timeouts', 'f13'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_feature_security_sts',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_feature_security_sts', 'f3e'),
        exact: true
      },
      {
        path: '/docs/nanoplayer/nanoplayer_feature_source_defaults',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_feature_source_defaults', 'f75'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_feature_stream_group_configuration',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_feature_stream_group_configuration', 'b25'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_feature_stream_switching',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_feature_stream_switching', '4da'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_feature_video_access_and_processing',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_feature_video_access_and_processing', '57c'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_getting_started',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_getting_started', '0e7'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_iframe',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_iframe', 'ce7'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_introduction',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_introduction', '4a7'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_player_metrics',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_player_metrics', 'db3'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_release_history',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_release_history', 'd6c'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_release_latest',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_release_latest', 'd06'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_security_jwt',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_security_jwt', 'f36'),
        exact: true
      },
      {
        path: '/docs/nanoplayer/nanoplayer_supported_browsers',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_supported_browsers', '197'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_token_security',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_token_security', 'cf4'),
        exact: true,
        sidebar: "H5Live Player"
      },
      {
        path: '/docs/nanoplayer/nanoplayer_update_source',
        component: ComponentCreator('/docs/nanoplayer/nanoplayer_update_source', 'cff'),
        exact: true
      },
      {
        path: '/docs/nanostream/',
        component: ComponentCreator('/docs/nanostream/', '3f9'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/android/nanostream_android_developer_manual_playback',
        component: ComponentCreator('/docs/nanostream/android/nanostream_android_developer_manual_playback', '6a7'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/android/nanostream_android_developer_manual_sample',
        component: ComponentCreator('/docs/nanostream/android/nanostream_android_developer_manual_sample', 'ced'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/android/nanostream_android_developer_manual_streaming',
        component: ComponentCreator('/docs/nanostream/android/nanostream_android_developer_manual_streaming', '983'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/android/nanostream_android_getting_started',
        component: ComponentCreator('/docs/nanostream/android/nanostream_android_getting_started', 'd04'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/directshow/',
        component: ComponentCreator('/docs/nanostream/directshow/', '5e2'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/directshow/directshow_audio_volume',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_audio_volume', 'd35'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_avc_h264',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_avc_h264', '0dc'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_h264_video_decoder',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_h264_video_decoder', '67e'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_h264_video_encoder',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_h264_video_encoder', '841'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_mpeg_audio_encoder',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_mpeg_audio_encoder', 'cb5'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_mpeg2_broadcast_sdk',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_mpeg2_broadcast_sdk', 'e9c'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_mpeg2_video_decoder',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_mpeg2_video_decoder', '6b3'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_mpeg2_video_encoder',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_mpeg2_video_encoder', 'e47'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_nanoAVC_decoding_sdk',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_nanoAVC_decoding_sdk', '618'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_nanoAVC_encoding_sdk',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_nanoAVC_encoding_sdk', '9cf'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_overlay_mixing',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_overlay_mixing', '81c'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_quicktime_imx',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_quicktime_imx', 'fb2'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_rtmp_source',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_rtmp_source', '9ac'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_rtmp_status_statistics',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_rtmp_status_statistics', '6f2'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_rtmp_writer',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_rtmp_writer', '702'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/directshow/directshow_rtsp_sink',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_rtsp_sink', '911'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_rtsp_source',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_rtsp_source', 'a49'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_screen_capture_filter',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_screen_capture_filter', '973'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_udp_ts_streaming',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_udp_ts_streaming', 'c71'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/directshow_video_mixer',
        component: ComponentCreator('/docs/nanostream/directshow/directshow_video_mixer', '2e8'),
        exact: true
      },
      {
        path: '/docs/nanostream/directshow/nanostream_directshow_h264',
        component: ComponentCreator('/docs/nanostream/directshow/nanostream_directshow_h264', 'c56'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/directshow/nanostream_directshow_rtmp',
        component: ComponentCreator('/docs/nanostream/directshow/nanostream_directshow_rtmp', '607'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/directshow/nanostream_directshow_rtsp',
        component: ComponentCreator('/docs/nanostream/directshow/nanostream_directshow_rtsp', '63f'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/directshow/nanostream_directshow_udp_streaming',
        component: ComponentCreator('/docs/nanostream/directshow/nanostream_directshow_udp_streaming', '56b'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/directshow/nanostream_directshow_video_filter',
        component: ComponentCreator('/docs/nanostream/directshow/nanostream_directshow_video_filter', 'f60'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/ios/bintu_ios_sample',
        component: ComponentCreator('/docs/nanostream/ios/bintu_ios_sample', '555'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/ios/bintu_ios_sdk',
        component: ComponentCreator('/docs/nanostream/ios/bintu_ios_sdk', '4ec'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/ios/nanostream_ios_license_deployment',
        component: ComponentCreator('/docs/nanostream/ios/nanostream_ios_license_deployment', '095'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/ios/nanostream_ios_quick_start',
        component: ComponentCreator('/docs/nanostream/ios/nanostream_ios_quick_start', 'a0b'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/ios/nanostream_ios_sdk',
        component: ComponentCreator('/docs/nanostream/ios/nanostream_ios_sdk', '3d6'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/ios/nanostream-ios-step-by-step',
        component: ComponentCreator('/docs/nanostream/ios/nanostream-ios-step-by-step', '212'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/macos/nanostream_macos_sdk',
        component: ComponentCreator('/docs/nanostream/macos/nanostream_macos_sdk', 'b9c'),
        exact: true
      },
      {
        path: '/docs/nanostream/windows/nanostream_encoder_plugin_api',
        component: ComponentCreator('/docs/nanostream/windows/nanostream_encoder_plugin_api', 'bb8'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/windows/nanostream_windows_binaries',
        component: ComponentCreator('/docs/nanostream/windows/nanostream_windows_binaries', '9fb'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/windows/nanostream_windows_developer_manual',
        component: ComponentCreator('/docs/nanostream/windows/nanostream_windows_developer_manual', 'c09'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/windows/nanostream_windows_language_integration',
        component: ComponentCreator('/docs/nanostream/windows/nanostream_windows_language_integration', '6c2'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/nanostream/windows/nanostream_windows_license_help',
        component: ComponentCreator('/docs/nanostream/windows/nanostream_windows_license_help', '46b'),
        exact: true,
        sidebar: "nanoStream Apps & SDKs"
      },
      {
        path: '/docs/samples/',
        component: ComponentCreator('/docs/samples/', '0ff'),
        exact: true
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_api',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_api', '02e'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_audio_video_only',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_audio_video_only', 'fec'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_demos',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_demos', '30e'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_device_selection',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_device_selection', '658'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_getting_started',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_getting_started', '95f'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_introduction',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_introduction', '391'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_multiple_webcasts',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_multiple_webcasts', 'ea5'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_quality',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_quality', '5ff'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_reconnect',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_reconnect', '5ba'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_screen_sharing',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_screen_sharing', '8be'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_secure_ingest',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_secure_ingest', '587'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_set_mediastream',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_set_mediastream', 'd3d'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_speech_music',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_speech_music', 'dc6'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_stats_and_metrics',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_stats_and_metrics', '037'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      },
      {
        path: '/docs/webrtc/nanostream_webrtc_support',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_support', '784'),
        exact: true,
        sidebar: "nanoStream Webcaster"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '01c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
