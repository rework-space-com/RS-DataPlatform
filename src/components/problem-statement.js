import Heading from '@theme/Heading';

export default function ProblemStatement() {
  return (
    <section id="problem-statement" style={{padding: '5rem 0', backgroundColor: '#f8fafc'}}>
      <div className="container" style={{maxWidth: '1200px'}}>
        <div className="row justify-center">
          <div className="col col--12">
            <div style={{textAlign: 'center', marginBottom: '4rem'}}>
              <Heading as="h2" style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem'}}>
                The Challenge
              </Heading>
              <p style={{fontSize: '1.2rem', color: '#6b7280', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto'}}>
                Modern businesses face critical infrastructure challenges that limit growth and innovation
              </p>
            </div>

            <div className="row">
              <div className="col col--6" style={{marginBottom: '2rem'}}>
                <div style={{backgroundColor: 'white', borderRadius: '16px', padding: '2.5rem', height: '100%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'}}>
                  <Heading as="h3" style={{fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.5rem'}}>
                    Current Challenges
                  </Heading>
                  <ul style={{listStyle: 'none', padding: 0}}>
                    <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '1rem'}}>
                      <span style={{color: '#ef4444', marginRight: '0.75rem', fontSize: '1.2rem'}}>❌</span>
                      <span style={{color: '#4b5563', lineHeight: '1.6'}}>Vendor lock-in limiting scalability and Migration to Public Cloud Hadoop ETLs</span>
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '1rem'}}>
                      <span style={{color: '#ef4444', marginRight: '0.75rem', fontSize: '1.2rem'}}>❌</span>
                      <span style={{color: '#4b5563', lineHeight: '1.6'}}>Inefficient infrastructure provisioning slowing innovation</span>
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{color: '#ef4444', marginRight: '0.75rem', fontSize: '1.2rem'}}>❌</span>
                      <span style={{color: '#4b5563', lineHeight: '1.6'}}>High costs associated with multi-cloud or hybrid Hadoop deploy management</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col col--6" style={{marginBottom: '2rem'}}>
                <div style={{backgroundColor: 'white', borderRadius: '16px', padding: '2.5rem', height: '100%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'}}>
                  <Heading as="h3" style={{fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.5rem'}}>
                    On-Premise Hadoop Clusters
                  </Heading>
                  <ul style={{listStyle: 'none', padding: 0}}>
                    <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '1rem'}}>
                      <span style={{color: '#ef4444', marginRight: '0.75rem', fontSize: '1.2rem'}}>❌</span>
                      <span style={{color: '#4b5563', lineHeight: '1.6'}}>Complex Authentication Setup and maintenance</span>
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '1rem'}}>
                      <span style={{color: '#ef4444', marginRight: '0.75rem', fontSize: '1.2rem'}}>❌</span>
                      <span style={{color: '#4b5563', lineHeight: '1.6'}}>Scaling Issues for high number of users, groups, roles</span>
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{color: '#ef4444', marginRight: '0.75rem', fontSize: '1.2rem'}}>❌</span>
                      <span style={{color: '#4b5563', lineHeight: '1.6'}}>Operational Overhead for maintenance and upgrades</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row" style={{marginTop: '3rem'}}>
              <div className="col col--12">
                <div style={{backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '16px', padding: '2.5rem', textAlign: 'center'}}>
                  <Heading as="h3" style={{fontSize: '1.5rem', fontWeight: '600', color: '#dc2626', marginBottom: '1rem'}}>
                    Impact on Businesses
                  </Heading>
                  <p style={{color: '#7f1d1d', fontSize: '1.1rem', lineHeight: '1.6', margin: 0}}>
                    Inhibited growth and adaptability in competitive markets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
