import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function H5LivePlayer() {
  return (
    <section>
      <div className={clsx('col', styles.sectionWrapper)}>
        <div className="text--center padding-horiz--md">
          <h1>nanoStream H5Live Player</h1>
          <p>This is the description that will be above the button that leads you to the docs.</p>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--md"
            to="/docs/nanoplayer/nanoplayer_introduction">
              Read documentation
          </Link>
        </div>
      </div>
    </section>
  );
}
