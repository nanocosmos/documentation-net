import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';


const featureList = [
    {
        title: 'Sub-Second Latency', color: "#07456B",
        img: require('@site/static/img/subsecond.png').default,
        description: ("Engage your audience around the world by streaming your content in less than one second."),
    },
    {
        title: 'Secure Streaming', color: "#055A87",
        img: require('@site/static/img/secure.png').default,
        description: ("Rely on a full set of security tools to ensure your content is protected against misuse and is 100% GDPR compliant."),
    },
    {
        title: 'Adaptive Streaming', color: "#1C5D85",
        img: require('@site/static/img/abr.png').default,
        description: ("Deliver the best experiences for every network based on adaptive streaming technology."),
    },
    {
        title: 'Multi protocol', color: "#046D9D",
        img: require('@site/static/img/multiprotocol.png').default,
        description: ("Stream with RTMP, SRT and WebRTC. Start instantly with Webcaster, OBS Studio or other encoder of your choice."),
    },
];

const feature2List = [
    {
        title: 'VoD & Thumbnails', color: "#0678AB",
        img: require('@site/static/img/vod.png').default,
        description: ("Make your content available at any time with VoD and instantly generated thumbnails."),
    },
    {
        title: 'Live Metadata Support', color: "#0880B6",
        img: require('@site/static/img/metadata.png').default,
        description: ("Sync audio and video streams to your interactive elements and content. "),
    },
    {
        title: '24/7/365 Operations', color: "#018BC9",
        img: require('@site/static/img/operations.png').default,
        description: ("Rely on a platform that is designed to suit your 24/7 business. You never stop, neither do we."),
    },
    {
        title: '100% SLA', color: "#00A3E0",
        img: require('@site/static/img/sla.png').default,
        description: ("Trust a robust and stable streaming infrastructure designed to never let your streams down."),
    },
];

function Feature({ img, color, title, description }) {
    return (
        <div className={clsx('col col--3', styles.feature)} style={{ backgroundColor: color }}>
            <div className="text--center padding-horiz--md">
                <img className={styles.featureSvg} role="img" src={img} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function FooterExtension() {
    return (
        <span className={styles.footerExtensionWrapper}>
            <div className="text--center padding-horiz--md">
                <h1><span className={styles.orange}>All you need</span> - in one platform</h1>
            </div>
            <section className={styles.footerExtensionSection}>
                <div className="container">
                    <div className="row">
                        {featureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.footerExtensionSection}>
                <div className="container">
                    <div className="row">
                        {feature2List.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--md"
                        to="/docs/cloud/cloud_overview">
                        Dive into nanoStream Cloud →
                    </Link>
                </div>
            </section>
        </span>
    );
}
