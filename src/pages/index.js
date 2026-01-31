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
import Case from "../components/case";

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <header className={clsx('hero', styles.modernHero)} style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '90vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <div style={{padding: '2rem 0'}}>
                <Heading as="h1" style={{fontSize: '3.5rem', fontWeight: '700', color: 'white', marginBottom: '1.5rem', lineHeight: '1.2'}}>
                  Cloud Infrastructure Made Simple
                </Heading>
                <p style={{fontSize: '1.4rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', lineHeight: '1.6'}}>
                  Vendor-agnostic Infrastructure-as-Code solution with enterprise-grade security for modern businesses
                </p>
                <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                  <button style={{padding: '1rem 2rem', backgroundColor: 'white', color: '#667eea', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer'}}>
                    Get Started
                  </button>
                  <button style={{padding: '1rem 2rem', backgroundColor: 'transparent', color: 'white', border: '2px solid white', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer'}}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col col--6" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '3rem', backdropFilter: 'blur(10px)'}}>
                <img src="/img/placeholder.png" alt="Platform Overview" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px'}} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main style={{backgroundColor: '#f8fafc'}}>
        <Description/>
        <ProblemStatement/>
        <Solution/>
        <Usage/>
        <Case/>
        <Contacts/>
      </main>
    </Layout>
  );
}
