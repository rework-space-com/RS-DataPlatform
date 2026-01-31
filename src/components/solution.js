import Heading from '@theme/Heading';

export default function Solution() {
  return (
    <section id="solution" style={{padding: '5rem 0', backgroundColor: 'white'}}>
      <div className="container" style={{maxWidth: '1200px', width: '100%', margin: '0 auto'}}>
        <div className="row justify-center">
          <div className="col col--12">
            <div style={{textAlign: 'center', marginBottom: '4rem'}}>
              <Heading as="h2" style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem'}}>
                Our Solution
              </Heading>
              <p style={{fontSize: '1.2rem', color: '#6b7280', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto'}}>
                Comprehensive cloud infrastructure platform designed for modern businesses
              </p>
            </div>

            {/* Three Column Layout */}
            <div className="row" style={{alignItems: 'center'}}>
              {/* First Column - Text */}
              <div className="col col--4">
                <div style={{padding: '1rem'}}>
                  <div style={{marginBottom: '3rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                      <span style={{background: '#667eea', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold', marginRight: '1rem'}}>01</span>
                      <Heading as="h3" style={{fontSize: '1.2rem', fontWeight: '600', color: '#1f2937', margin: 0}}>
                        Single IaC Platform
                      </Heading>
                    </div>
                    <p style={{color: '#6b7280', lineHeight: '1.6', margin: 0}}>
                      Streamlines infrastructure provisioning efficiently across all environments.
                    </p>
                  </div>

                  <div>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                      <span style={{background: '#667eea', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold', marginRight: '1rem'}}>02</span>
                      <Heading as="h3" style={{fontSize: '1.2rem', fontWeight: '600', color: '#1f2937', margin: 0}}>
                        Vendor Agnostic
                      </Heading>
                    </div>
                    <p style={{color: '#6b7280', lineHeight: '1.6', margin: 0}}>
                      Solution provides a vendor-agnostic approach for all cloud providers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Column - Image */}
              <div className="col col--4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'}}>
                <div style={{position: 'relative'}}>
                  <img
                    src={require(`@site/static/img/image7.jpeg`).default}
                    alt="Our Solution"
                    style={{maxWidth: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'}}
                  />
                </div>
              </div>

              {/* Third Column - Text */}
              <div className="col col--4">
                <div style={{padding: '1rem'}}>
                  <div style={{marginBottom: '3rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                      <span style={{background: '#667eea', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold', marginRight: '1rem'}}>03</span>
                      <Heading as="h3" style={{fontSize: '1.2rem', fontWeight: '600', color: '#1f2937', margin: 0}}>
                        Enhanced Scalability
                      </Heading>
                    </div>
                    <p style={{color: '#6b7280', lineHeight: '1.6', margin: 0}}>
                      Platform enhances scalability and improves cost-efficiency significantly.
                    </p>
                  </div>

                  <div>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                      <span style={{background: '#667eea', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold', marginRight: '1rem'}}>04</span>
                      <Heading as="h3" style={{fontSize: '1.2rem', fontWeight: '600', color: '#1f2937', margin: 0}}>
                        AI-Powered Security
                      </Heading>
                    </div>
                    <p style={{color: '#6b7280', lineHeight: '1.6', margin: 0}}>
                      Integrated enterprise security is AI-powered for troubleshooting support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
