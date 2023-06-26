import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '961'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '369'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd77'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e8c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd60'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '006'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '26c'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'efb'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '6b1'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '45c'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '09f'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'ab9'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '389'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '2f8'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'cbf'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'c91'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '537'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a86'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'af8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4f7'),
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
        path: '/docs/webrtc/nanostream_webrtc_demos',
        component: ComponentCreator('/docs/webrtc/nanostream_webrtc_demos', '30e'),
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
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7a7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
