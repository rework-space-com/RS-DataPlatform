import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Description from '../components/Description';
import Homepage from '../components/Homepage';
import Features from '../components/Features';
import Technology from '../components/Technology';
import Usage from '../components/Usage';
import BusinessModel from '../components/BusinessModel';
import Contacts from '../components/Contacts';

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
        <Description/>
        <Homepage/>
        <Technology/>
        <Usage/>
        <BusinessModel/>
        <Contacts/>
      </main>
    </Layout>
  );
}
