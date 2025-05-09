import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ItemList = [
  {
    title: 'Browser Demos',
    Svg: require('@site/static/img/demo.svg').default,
    description: ("Try our web demos for easy and simple tests."),
    link: 'docs/webrtc/nanostream_webrtc_demos',
    button: 'See more'
  },
  {
    title: 'Webcaster API',
    Svg: require('@site/static/img/webcaster-api.svg').default,
    description: ("Browse the documentation and learn how to embed the Webcaster on any web page."),
    link: 'https://nanocosmos.github.io/webcaster/docs',
    button: 'Read documentation'
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

export default function Webcaster() {
  return (
    <div className={styles.playerWrapper}>
      <div className="text--center padding-horiz--md">
        <h1>Webcaster</h1>
        <p>The right technology for interactive live streaming use cases.</p>
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
    </div>
  );
}
