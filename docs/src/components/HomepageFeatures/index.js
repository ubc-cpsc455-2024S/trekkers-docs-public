import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
// import CCLogo from '@site/static/img/trekkerscompanion-logo-1.svg';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { version, availabilty } from '@site/src/version';



// Edit the Constants if you are just updating the version number
const preReleaseVersion = version;



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" id="demo-container">

        {availabilty && <Admonition type="warning" title="Service Notice">
          <b>{availabilty}</b>
        </Admonition>}

        <Admonition type="info" title="new release!">
          <p>First Release Version {preReleaseVersion} has been released. For more information, please refer to the <Link to={`/docs/release-notes/${preReleaseVersion}`}>Release Notes</Link></p>
        </Admonition>

        <div className={styles.row}>

          <div className={clsx('col col--4', styles.featureCard)}>
            <div className="text--center">
              <div className={styles.adminLogoContainer}>
                <span className={styles.trekTextLogo}>Trek</span>
              </div>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Pre-Release Demo (v{preReleaseVersion})</Heading>
              <p>A trip planner built for you!</p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="https://google.ca">
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
