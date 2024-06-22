import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';





export default function HomepageFeatures() {

  // import json object from 
  const { version } = require('../../../static/version.json');


  return (
    <section className={styles.features}>
      <div className="container" id="demo-container">

        <Admonition type="info" title="new release!">
          <p>First Release Version {version} has been released. For more information, please refer to the <Link to={`/docs/release-notes/${version}`}>Release Notes</Link></p>
        </Admonition>

        <div className={styles.row}>

          <div className={clsx('col col--4', styles.featureCard)}>
            <div className="text--center">
              <div className={styles.adminLogoContainer}>
                <span className={styles.trekTextLogo}>Trek</span>
              </div>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Pre-Release Demo (v{version})</Heading>
              <p>A trip planner built for you!</p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="https://trek-beta.fly.dev/">
                  See Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
