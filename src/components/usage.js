import Heading from '@theme/Heading';

export default function Usage() {
  return (
    <section id="usage" style={{padding: '5rem 0', backgroundColor: '#f8fafc'}}>
      <div className="container" style={{maxWidth: '1200px'}}>
        <div className="row justify-center">
          <div className="col col--12">
            <div style={{textAlign: 'center', marginBottom: '4rem'}}>
              <Heading as="h2" style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem'}}>
                Use Cases
              </Heading>
              <p style={{fontSize: '1.2rem', color: '#6b7280', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto'}}>
                Real-world applications of our platform across different industries
              </p>
            </div>

            <div className="row">
              <div className="col col--4" style={{marginBottom: '2rem'}}>
                <div style={{backgroundColor: 'white', borderRadius: '16px', padding: '2.5rem', height: '100%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', textAlign: 'center'}}>
                  <div style={{width: '60px', height: '60px', backgroundColor: '#667eea', borderRadius: '12px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={require(`@site/static/img/Icon1.png`).default} alt="" style={{width: '30px', height: '30px'}} />
                  </div>
                  <Heading as="h3" style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937'}}>
                    Retail Enterprise
                  </Heading>
                  <p style={{color: '#6b7280', lineHeight: '1.6'}}>
                    A retail enterprise scaling globally without cloud vendor lock-in, ensuring flexibility and cost optimization.
                  </p>
                </div>
              </div>

              <div className="col col--4" style={{marginBottom: '2rem'}}>
                <div style={{backgroundColor: 'white', borderRadius: '16px', padding: '2.5rem', height: '100%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', textAlign: 'center'}}>
                  <div style={{width: '60px', height: '60px', backgroundColor: '#667eea', borderRadius: '12px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={require(`@site/static/img/Icon1.png`).default} alt="" style={{width: '30px', height: '30px'}} />
                  </div>
                  <Heading as="h3" style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937'}}>
                    Fintech Startup
                  </Heading>
                  <p style={{color: '#6b7280', lineHeight: '1.6'}}>
                    A fintech startup reducing cloud migration security risks with automated IaC and compliance features.
                  </p>
                </div>
              </div>

              <div className="col col--4" style={{marginBottom: '2rem'}}>
                <div style={{backgroundColor: 'white', borderRadius: '16px', padding: '2.5rem', height: '100%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', textAlign: 'center'}}>
                  <div style={{width: '60px', height: '60px', backgroundColor: '#667eea', borderRadius: '12px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={require(`@site/static/img/Icon1.png`).default} alt="" style={{width: '30px', height: '30px'}} />
                  </div>
                  <Heading as="h3" style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937'}}>
                    Media Company
                  </Heading>
                  <p style={{color: '#6b7280', lineHeight: '1.6'}}>
                    A media company ensuring multi-cloud and hybrid cloud deployments for content distribution.
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
