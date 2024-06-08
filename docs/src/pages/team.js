import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import TeamProfileCards from '@site/src/components/TeamProfileCards';


function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroBannerTitle}>
          “Strive to achieve high quality in both the processes and products of professional work.” - ACM Code of Ethics 2.1
        </div>
      </div>
    </header>
  );
}

export default function Team() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`About Us`}
      description="Trekker Team Profile">
      <Hero />
      <main className={styles.main}>
        <TeamProfileCards />
      </main>
    </Layout>
  );
}
