---
id: nanoplayer_webview
title: Mobile WebViews
sidebar_label: Mobile WebViews
---


H5Live Player works on native browsers like Safari on iOS and Chrome on Android.
For native apps, you can use WebView components in-app, which both operating systems support.
The operating systems need to support H264 video and AAC audio formats for playback, which most platforms do.

### Mobile Webviews
Mobile webviews provide a seamless integration of web content within a native mobile application, offering numerous advantages for a smooth user experience. However, certain considerations need to be addressed, particularly on iOS and Android devices.

#### Webview Loading Recommendations
When integrating web content into mobile applications using webviews, it must consider whether to load content locally or remotely:

* Local Loading: 
Local loading involves loading web content from a local file or resource bundled within the application. This method is specific to the device's file system or bundled resources. Loading web content locally within a webview may encounter restrictions due to security policies and sandboxing mechanisms imposed by the operating system. Examples include loading pages included in the app's bundle or using file:// URLs.

* Remote Loading (Recommended):
Remote loading involves fetching web content from a remote server or external source over the internet using standard HTTP or HTTPS protocols. Utilizing webviews with remote pages offers enhanced performance, flexibility, and compatibility with various web technologies. By loading content remotely, it can ensure access to the latest updates, dynamic content, and external resources, avoiding potential issues associated with local loading.

:::tip
We strongly recommend utilizing webviews with remote pages to leverage their benefits, including enhanced performance and flexibility. This approach ensures compatibility with various web technologies and allows for seamless integration of dynamic content.
:::

#### Platform-Specific Considerations
* Android

    Android webviews generally offer robust support for web technologies and extensions. However, it's important to consider the specific APIs and features required by your web content to ensure compatibility across different Android versions and device configurations. 


Example of configuring a WebView in an Android appication with autoplay:
For enabling autoplay in Android, the webview settings can be configured to allow autoplay of media content. This can be achieved by setting the appropriate attributes or properties in the webview configuration. One approach to enabling autoplay in Android webviews is by adjusting the webview settings programmatically. Below is an example of how to achieve autoplay in an Android webview using JavaScript:

```
webView.getSettings().setMediaPlaybackRequiresUserGesture(false); // enables autoplay
```

For more detailed information and additional options regarding webview configuration in Android, please refer to the official Android documentation on webview settings[the official Android documentation on webview settings](https://developer.android.com/reference/android/webkit/WebSettings).

* iOS

    In some cases, particularly when utilizing local pages with the Managed Media Source Extension (MMSE) API introduced by Apple in iOS 17.1, playback on iOS devices may encounter issues when loaded within a webview. This issue arises due to the interaction of webviews with certain APIs and extensions, leading to limitations in the playback experience. To mitigate this issue, we recommend using remote loading, which can help avoid compatibility issues and ensure smoother playback on iOS devices.

 Example of configuring a WKWebView instance in an iOS application to load a remote page:


```
//  ViewController.swift
//  wkwebview


import UIKit
import WebKit

class ViewController: UIViewController, WKNavigationDelegate {
    var webView: WKWebView!

    override func loadView() {
        let webConfiguration = WKWebViewConfiguration()
        webConfiguration.preferences.javaScriptEnabled = true
        webConfiguration.mediaPlaybackRequiresUserAction = false
        webConfiguration.allowsInlineMediaPlayback = true
        webConfiguration.mediaTypesRequiringUserActionForPlayback = []
        webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.navigationDelegate = self
        if #available(iOS 16.4, *) {
            webView.isInspectable = true
        } else {
            // Fallback on earlier versions
        }
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        let url = URL(string: “https://your-page.com")!
        webView.load(URLRequest(url: url))
        webView.allowsBackForwardNavigationGestures = true
    }
}
```