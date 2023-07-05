import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const CloudList = [
  {
    title: 'Bintu smth',
    overline: "Learn smth",
    description: "Interact with your audience in real-time on any mobile or desktop device and over any network.",
  },
  {
    title: 'Dashboard',
    overline: "Getting started",
    description: "Interact with your audience in real-time on any mobile or desktop device and over any network.",
  },
];

function Card({ title, description, overline }) {
  return (
    <div className={clsx('col col--6', styles.card)}>
      <div className="text--center padding-horiz--md">
        <p className={styles.overline}>{overline}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function Cloud() {
  return (
    <section>
      <div className={clsx('col', styles.sectionWrapper)}>
        <div className="text--center padding-horiz--md">
          <h1>nanoStream Cloud</h1>
          <p>This is the description that will be above the button that leads you to the docs.</p>
        </div>
        <div className={clsx("row", styles.cardWrapper)}>
          {CloudList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
