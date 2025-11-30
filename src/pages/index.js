import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Description from '../components/description';
import Usage from '../components/usage';
import Contacts from '../components/contacts';
import ProblemStatement from "../components/problem-statement";
import Solution from "../components/solution";

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
        <ProblemStatement/>
        <Solution/>
        {/*<Technology/>*/}
        <Usage/>
        {/*<BusinessModel/>*/}
        <Contacts/>
      </main>
    </Layout>
  );
}
