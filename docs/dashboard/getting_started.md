---
id: getting_started
title: Getting Started
sidebar_label: Getting Started
---

Getting started with nanoStream is a straightforward process. You will need a live source, such as a camera, which can be connected to the nanoStream network (CDN). Our robust platform takes care of efficiently delivering your live stream. To play your live stream on any web browser, you can leverage the power of the [nanoStream H5Live Player (nanoPlayer)](../nanoplayer/nanoplayer_introduction).

To create and broadcast a live stream, it is essential to have a reliable live source. This can include a webcam, external camera, streaming device, or even the screen of your desktop or laptop. In order to send a live stream to the nanoStream Cloud, you will require a Live Encoder. This can be accomplished using industry-standard software like OBS, dedicated hardware encoders, or even a web page equipped with the [nanoStream Webcaster](https://docs.nanocosmos.de/docs/webrtc/nanostream_webrtc_introduction).

Before you can start streaming, you need to authenticate your account. The authentication process depends on whether you already have an account or are new to nanoStream.

## Authentication

To access the nanoStream Dashboard, users must authenticate. There are three ways to do this:
- **Sign in with an existing account**
- **Receive an invite to an existing organization**
- **Sign up for a new account**.

### Sign In

To log into the nanoStream Dashboard:
1. Navigate to [dashboard.nanostream.cloud/auth](https://dashboard.nanostream.cloud/auth).
2. Enter your registered email and password.
3. Click **Sign In** to access your dashboard and manage your live streaming workflow.

### Invite 

Users can also be invited to an existing organization within the nanoStream. This allows them to collaborate with team members and share streaming resources efficiently.

:::info Invitation Management
Only users with the <span className="role role-admin">nanoAdmin</span> role have permission to send invites to new members. <br/>
Learn more about roles and permissions in the [User Management](./user-management).
:::

1. If you receive an invitation, click the provided link.
2. Enter your **Email**, and **Password**.
3. Accept the terms and conditions before proceeding and click on **Start Streaming** to create your account.
4. Verify your account by entering the verification code sent to your email.
5. After logging in, you will automatically become part of the inviting organization with the assigned role set by the inviter.


### Sign Up

If you are new to nanoStream, you need to create an account:
1. Visit the [dashboard.nanocosmos.cloud/signup](https://dashboard.nanocosmos.cloud/signup) page.
2. Enter your **Company Name**, **Email**, and **Password**.
3. Accept the terms and conditions before proceeding.
4. Click **Start Streaming** to create your account.
5. Check your email for a verification link or code.
6. Click the link or enter the verification code to confirm your account.
7. Once verified, log in to start using the dashboard.

### Upgrade to Premium

Upon signing up, you may notice a **Trial Flag** in the dashboard appbar. This indicates that your account is currently in trial mode, which comes with certain limitations.

To unlock the full potential of nanoStream, consider upgrading to a premium plan. Simply click the **"Upgrade to Premium"** button within the dashboard menu on the top right.

:::info Contact Us
[Click here](https://www.nanocosmos.de/contact) to reach out to our team and gain access to the full range of nanoStream services.
:::

## Next steps

:::tip Before starting
To begin, please sign in using your nanoStream account credentials. <br/>
If you have not created an account yet, you can [dashboard.nanostream.cloud/signup](https://dashboard.nanostream.cloud/signup) or reach out to our dedicated sales team via the [nanocosmos.de/contact](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.net. <br/>
*If you are unsure how to create an account or need access to an existing organization, please refer to the [Authentication section](#authentication). There, you will find instructions on signing up, logging in, or requesting an invitation from your system administrator.*
:::

<article class="margin-top--lg">
    <section class="row list_ZO3j">
        <article class="col col--4 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx" href="./start_streaming.md">
                <h2>Start streaming</h2>
                <p>How to Begin Your First Live Stream</p>
            </a>
        </article>
        <article class="col col--4 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx" href="./stream_overview.md">
                <h2>Stream Overview</h2>
                <p>Understanding and Interpreting Your Stream Data</p>
            </a>
        </article>
        <article class="col col--4 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx" href="./abr_transcoding.md">
                <h2>Adaptive Bitrate</h2>
                <p>How to Optimize Streaming Quality with ABR</p>
            </a>
        </article>
    </section>
</article>
