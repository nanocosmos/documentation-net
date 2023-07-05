import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Workflow from '../components/Workflow';

import Cheetha from '../../static/img/orange-cheetha.png'
import H5LivePlayer from '../components/H5LivePlayer';
import Cloud from '../components/Cloud';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={Cheetha} className={styles.cheetha} />
        <h1 className="hero__title">Developer Documentation</h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>Browse the latest developer documentation, including sample code, tutorials, and API reference.</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Official nanocosmos Developer Documentation`}
      description={`${siteConfig.title} | Official nanocosmos Developer Documentation`}>
      <HomepageHeader />
      <main>
        <Cloud/>
        <H5LivePlayer/>
        <Workflow />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
