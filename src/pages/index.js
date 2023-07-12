import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Logo from '../../static/img//nsc.png'

import styles from './index.module.css';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import FooterExtension from '../components/global/FooterExtension';
import Player from '../components/player';
import Cloud from '../components/cloud';
import Analytics from '../components/analytics';
import Webcaster from '../components/webcaster';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={Logo} className={styles.logo} />
        <h1 className="hero__title">Developer Documentation</h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>Browse the latest developer documentation, including sample code, tutorials, and API reference.</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--primary button--md"
            to="/docs/intro">
            Product & Services
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
        <Cloud />
        <hr className={styles.horizontalLine} />
        <Player />
        <hr className={styles.horizontalLine} />
        <Analytics />
        <hr className={styles.horizontalLine} />
        <Webcaster/>
      </main>
      <FooterExtension />
    </Layout>
  );
}
