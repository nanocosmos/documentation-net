import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ItemList = [
  {
    title: 'nanoPlayer API',
    Svg: require('@site/static/img/player.svg').default,
    description: ("Browse the documentation and learn how to embed the nanoPlayer on any web page."),
    link: '/docs/nanoplayer/nanoplayer_api',
    button: 'Read documentation'
  },
  {
    title: 'Latest Releases & Updates',
    Svg: require('@site/static/img/player-updates.svg').default,
    description: ("Get an overview of the main changes and updates for the nanoPlayer."),
    link: '/docs/nanoplayer/nanoplayer_release_latest',
    button: 'View all'
  },
];

function Item({ Svg, title, description, link, button }) {
  return (
    <div className={clsx('col col--6', styles.itemWrapper)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link
          className="button button--primary button--md"
          to={link}>
            {button} →
        </Link>
      </div>
    </div>
  );
}

export default function Player() {
  return (
    <span className={styles.playerWrapper}>
      <div className="text--center padding-horiz--md">
        <h1>H5Live Player</h1>
        <body>The right technology for interactive live streaming use cases.</body>
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
