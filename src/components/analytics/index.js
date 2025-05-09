import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

import AnalyticsImg from '@site/static/img/analytics.svg';

export default function Analytics() {

  return (
    <span className={styles.playerWrapper}>
      <div className="text--center padding-horiz--md">
        <h1>Analytics</h1>
        <p>A great way to monitor and analyze the performance and quality of service of your live streams.</p>
      </div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--4', styles.itemWrapper)}>
              <div className="text--center">
              </div>
              <div className="text--center padding-horiz--md">
                <AnalyticsImg className={styles.featureSvg} role="img" />
              </div>
            </div>
            <div className={clsx('col col--8', styles.itemWrapper)}>
              <div className="text--left padding-horiz--md">
                <i>Take action based on your stream data to improve experience, efficiency and profitability of your business content.</i>
                <p>
                  ✔ Improve observability from encoding to playback  <br />
                  ✔ Understand your viewers' experience to make data-driven business decisions <br />
                  ✔ Increase speed of issue resolution with troubleshooting tool <br />
                </p>
              </div>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--md button--outline"
                  to="/docs/cloud/analytics">
                  Explore Analytics →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </span>
  );
}
