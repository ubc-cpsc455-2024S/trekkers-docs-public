import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBannerMain)}>
      <div className="container">
        <div className={styles.animationContainer}>
          <div className={styles.headingDescriptor}>
            <Heading as="h1" className={styles.heroBannerMainTitle}>
              Building Industry-Grade Software <br />
              With Industry-Leading Practices
            </Heading>
            <p className={styles.heroBannerMainSubtext}>We strive to achieve high quality in both the processes and products of professional work.</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/team">
                About Us
              </Link>
            </div>
          </div>
          <img src="img/Trek_Phone.png" className={styles.trekPhoneImage} />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="We are Trekkers">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
