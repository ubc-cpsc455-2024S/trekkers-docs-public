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
        {/* 
        <Admonition type="info" title="new release!">
          <p>First Release Version {version} has been released. For more information, please refer to the <Link to={`/docs/release-notes/${version}`}>Release Notes</Link></p>
        </Admonition> */}

        <Admonition type="info" title="Important Notice">
          <p>Even though the deadline for the final project of CPSC 455 has passed, we will continue to update this website to share our knowledge! If you wish to view the version of our documentation website
            as it was before the deadline (12:00 PM, August 7th, 2024), please refer to <a href="https://github.com/ubc-cpsc455-2024S/trekkers-docs-public/tree/3f462d02934b54322cd4e7f2da2aad5e052b6c24">this commit</a>.
          </p>
        </Admonition>

        <div className={styles.row}>

          <div className={clsx('col col--4', styles.featureCard)}>
            <div className="text--center">
              <div className={styles.adminLogoContainer}>
                <span className={styles.trekTextLogo}>Trek</span>
              </div>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">First Release Demo (v{version})</Heading>
              <p>Refer to <Link to={`/docs/demo`}>Demo Access Documentation</Link> on how to access our demo, including Course Staff Credentials.</p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="https://trek.wyfx.ca">
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
