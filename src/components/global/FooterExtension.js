import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'nanoStream Cloud',
        Svg: require('@site/static/img/nsc.svg').default,
        description: ("Get your camera ready, configure your stream and see our CDN delivering your content worldwide in less than a second."),
    },
    {
        title: 'nanoPlayer',
        Svg: require('@site/static/img/player-icon.svg').default,
        description: ("Get your camera ready, configure your stream and see our CDN delivering your content worldwide in less than a second."),
    },
    {
        title: 'FAQ',
        Svg: require('@site/static/img/chat-icon.svg').default,
        description: ("Get your camera ready, configure your stream and see our CDN delivering your content worldwide in less than a second."),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
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
        <section className={styles.footerExtensionWrapper}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
