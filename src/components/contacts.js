import Heading from '@theme/Heading';

export default function Contacts() {
  return (
    <section id="contacts" style={{padding: '5rem 0', backgroundColor: '#1f2937', color: 'white'}}>
      <div className="container" style={{maxWidth: '1200px'}}>
        <div className="row justify-center">
          <div className="col col--12">
            <div style={{textAlign: 'center', marginBottom: '4rem'}}>
              <Heading as="h2" style={{fontSize: '2.5rem', fontWeight: '700', color: 'white', marginBottom: '1.5rem'}}>
                Get Started Today
              </Heading>
              <p style={{fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto'}}>
                Ready to transform your cloud infrastructure? Contact us to discuss your needs and see how we can help accelerate your business growth.
              </p>
            </div>

            <div className="row">
              <div className="col col--6" style={{marginBottom: '2rem'}}>
                <div style={{backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2.5rem', height: '100%', backdropFilter: 'blur(10px)'}}>
                  <Heading as="h3" style={{fontSize: '1.5rem', fontWeight: '600', color: 'white', marginBottom: '2rem'}}>
                    Contact Information
                  </Heading>

                  <div style={{marginBottom: '1.5rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                      <span style={{color: '#667eea', marginRight: '0.75rem', fontSize: '1.2rem'}}>📧</span>
                      <strong style={{color: 'white'}}>Email:</strong>
                    </div>
                    <p style={{margin: 0, paddingLeft: '2rem', color: 'rgba(255,255,255,0.8)'}}>
                      <a href="mailto:sales@rework-space.com" style={{color: '#667eea', textDecoration: 'none'}}>
                        sales@rework-space.com
                      </a>
                    </p>
                  </div>

                  <div style={{marginBottom: '1.5rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                      <span style={{color: '#667eea', marginRight: '0.75rem', fontSize: '1.2rem'}}>📞</span>
                      <strong style={{color: 'white'}}>Phone:</strong>
                    </div>
                    <p style={{margin: 0, paddingLeft: '2rem', color: 'rgba(255,255,255,0.8)'}}>
                      <a href="tel:+380673246141" style={{color: '#667eea', textDecoration: 'none'}}>
                        +38 067 324 6141
                      </a>
                    </p>
                  </div>

                  <div style={{marginBottom: '1.5rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                      <span style={{color: '#667eea', marginRight: '0.75rem', fontSize: '1.2rem'}}>🌐</span>
                      <strong style={{color: 'white'}}>Website:</strong>
                    </div>
                    <p style={{margin: 0, paddingLeft: '2rem', color: 'rgba(255,255,255,0.8)'}}>
                      <a href="https://rework-space.com" target="_blank" rel="noopener noreferrer" style={{color: '#667eea', textDecoration: 'none'}}>
                        rework-space.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                      <span style={{color: '#667eea', marginRight: '0.75rem', fontSize: '1.2rem'}}>💼</span>
                      <strong style={{color: 'white'}}>LinkedIn:</strong>
                    </div>
                    <p style={{margin: 0, paddingLeft: '2rem', color: 'rgba(255,255,255,0.8)'}}>
                      <a href="https://www.linkedin.com/company/rework-space/" target="_blank" rel="noopener noreferrer" style={{color: '#667eea', textDecoration: 'none'}}>
                        rework-space
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col col--6" style={{marginBottom: '2rem'}}>
                <div style={{backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2.5rem', height: '100%', backdropFilter: 'blur(10px)'}}>
                  <Heading as="h3" style={{fontSize: '1.5rem', fontWeight: '600', color: 'white', marginBottom: '2rem'}}>
                    Ready to Get Started?
                  </Heading>
                  <p style={{color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '2rem'}}>
                    We're here to help you accelerate your business growth with cutting-edge cloud infrastructure solutions.
                    Whether you have questions about our services, need technical support, or want to discuss partnership opportunities.
                  </p>
                  <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
                    <button style={{padding: '1rem 2rem', backgroundColor: '#667eea', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s'}}>
                      Schedule a Demo
                    </button>
                    <button style={{padding: '1rem 2rem', backgroundColor: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s'}}>
                      Download Brochure
                    </button>
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
