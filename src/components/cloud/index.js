import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ItemList = [
  {
    title: 'Products & Services',
    Svg: require('@site/static/img/components.svg').default,
    description: ("Browse the documentation and learn how to embed the nanoPlayer on any web page."),
    link: '/docs/cloud/cloud_overview',
    button: 'Dive into'
  },
  {
    title: 'nanoStream Cloud Security',
    Svg: require('@site/static/img/security.svg').default,
    description: ("nanoStream Guardian is an integrated service, which allows you to block specific IP addresses, referrers, and even entire CIDR masks from accessing your streams."),
    link: 'docs/cloud/security',
    button: 'Learn more'
  },
  {
    title: 'bintu API',
    Svg: require('@site/static/img/bintu-api.svg').default,
    description: ("Create and manage your live streams, to enable ultra-low-latency live streaming at a global scale."),
    link: 'https://doc.pages.nanocosmos.de/bintuapi-docs',
    button: 'Read documentation'
  },
];

function Item({ Svg, title, description, link, button }) {
  return (
    <div className={clsx('col col--4', styles.itemWrapper)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--md"
          to={link}>
          {button} →
        </Link>
      </div>
    </div>
  );
}

export default function Cloud() {
  return (
    <span className={styles.playerWrapper}>
      <div className="text--center padding-horiz--md">
        <h1>nanoStream <span className={styles.blue}>Cloud</span></h1>
        <p>A unique live streaming platform based on different components for ultra low latency live streaming.</p>
      </div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {ItemList.map((props, idx) => (
              <Item key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </span>
  );
}
