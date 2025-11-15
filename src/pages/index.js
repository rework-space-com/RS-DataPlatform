import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Features from '../components/Features';
import Technology from './technology.mdx';
import Usage from './usage.md';
import BusinessModel from './business-model.md';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <HomepageFeatures />
        <Features />
        <Technology />
        <Usage />
        <BusinessModel />
      </main>
    </Layout>
  );
}
