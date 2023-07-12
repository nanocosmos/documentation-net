import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Sub-Second Latency',
        Svg: require('@site/static/img/nsc.svg').default,
        description: ("Engage your audience around the world by streaming your content in less than one second."),
    },
    {
        title: 'Secure Streaming',
        Svg: require('@site/static/img/nsc.svg').default,
        description: ("Rely on a full set of security tools to ensure your content is protected against misuse and is 100% GDPR compliant."),
    },
    {
        title: 'Adaptive Streaming',
        Svg: require('@site/static/img/nsc.svg').default,
        description: ("Deliver the best experiences for every network based on adaptive streaming technology."),
    },
    {
        title: 'Multi protocol',
        Svg: require('@site/static/img/nsc.svg').default,
        description: ("Stream with RTMP, SRT and WebRTC. Start instantly with Webcaster, OBS Studio or other encoder of your choice."),
    },
];

const Feature2List = [
    {
        title: 'VoD & Thumbnails',
        Svg: require('@site/static/img/nsc.svg').default,
        description: ("Make your content available at any time with VoD and instantly generated thumbnails."),
    },
    {
        title: 'Live Metadata Support',
        Svg: require('@site/static/img/nsc.svg').default,
        description: ("Sync audio and video streams to your interactive elements and content. "),
    },
    {
        title: '24/7/365 Operations',
        Svg: require('@site/static/img/nsc.svg').default,
        description: ("Rely on a platform that is designed to suit your 24/7 business. You never stop, neither do we."),
    },
    {
        title: '100% SLA',
        Svg: require('@site/static/img/nsc.svg').default,
        description: ("Trust a robust and stable streaming infrastructure designed to never let your streams down."),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--3')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function FooterExtension() {
    return (
        <span className={styles.footerExtensionWrapper}>
            <section className={styles.footerExtensionSection}>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.footerExtensionSection}>
                <div className="container">
                    <div className="row">
                        {Feature2List.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <hr className={styles.horizontalLine}/>
        </span>
    );
}
