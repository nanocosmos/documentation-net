import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Infographic from '../../../static/img/nsc-inforgraphic.png';

export default function HomepageFeatures() {
  return (
    <section>
      <div className="container">
        <div className="row">
            <img src={Infographic} className={styles.infographic}/>
        </div>
      </div>
    </section>
  );
}
