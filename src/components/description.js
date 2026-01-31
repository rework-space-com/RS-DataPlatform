import Heading from '@theme/Heading';

export default function Description() {
  return (
    <section id="home" style={{padding: '5rem 0', backgroundColor: 'white'}}>
      <div className="container" style={{maxWidth: '1200px'}}>
        <div className="row justify-center">
          <div className="col col--12">
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
              <Heading as="h2" style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem'}}>
                Why Choose RS-DataPlatform?
              </Heading>
              <p style={{fontSize: '1.2rem', color: '#6b7280', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto'}}>
                RS-DataPlatform is building a cloud vendor-agnostic Infrastructure-as-Code (IaC) solution with
                integrated enterprise-grade security, empowering startups and scaleups with agile, Europe-native
                tools to optimize their operations.
              </p>
            </div>

            <div className="row" style={{marginTop: '4rem'}}>
              <div className="col col--4" style={{textAlign: 'center', marginBottom: '2rem'}}>
                <div style={{backgroundColor: '#f3f4f6', borderRadius: '12px', padding: '2rem', height: '100%'}}>
                  <div style={{width: '60px', height: '60px', backgroundColor: '#667eea', borderRadius: '12px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: '1.5rem'}}>🚀</span>
                  </div>
                  <Heading as="h3" style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937'}}>
                    Vendor Agnostic
                  </Heading>
                  <p style={{color: '#6b7280', lineHeight: '1.6'}}>
                    Fully compatible with major cloud providers and supporting seamless migration across cloud and on-premise infrastructures.
                  </p>
                </div>
              </div>

              <div className="col col--4" style={{textAlign: 'center', marginBottom: '2rem'}}>
                <div style={{backgroundColor: '#f3f4f6', borderRadius: '12px', padding: '2rem', height: '100%'}}>
                  <div style={{width: '60px', height: '60px', backgroundColor: '#667eea', borderRadius: '12px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: '1.5rem'}}>🔒</span>
                  </div>
                  <Heading as="h3" style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937'}}>
                    Enterprise Security
                  </Heading>
                  <p style={{color: '#6b7280', lineHeight: '1.6'}}>
                    Integrated enterprise-grade security ensuring your infrastructure remains protected and compliant.
                  </p>
                </div>
              </div>

              <div className="col col--4" style={{textAlign: 'center', marginBottom: '2rem'}}>
                <div style={{backgroundColor: '#f3f4f6', borderRadius: '12px', padding: '2rem', height: '100%'}}>
                  <div style={{width: '60px', height: '60px', backgroundColor: '#667eea', borderRadius: '12px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: 'white', fontSize: '1.5rem'}}>📈</span>
                  </div>
                  <Heading as="h3" style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937'}}>
                    Scalable Growth
                  </Heading>
                  <p style={{color: '#6b7280', lineHeight: '1.6'}}>
                    Platform ensures resilience during instability and enables scalable growth for modern businesses.
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
