import Heading from '@theme/Heading';

export default function Case() {
  return (
    <section id="case-study" style={{padding: '5rem 0', backgroundColor: 'white'}}>
      <div className="container" style={{maxWidth: '1200px'}}>
        <div className="row justify-center">
          <div className="col col--12">
            <div style={{textAlign: 'center', marginBottom: '4rem'}}>
              <Heading as="h2" style={{fontSize: '2.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem'}}>
                Case Study
              </Heading>
              <p style={{fontSize: '1.2rem', color: '#6b7280', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto'}}>
                How we helped a retail company accelerate their cloud migration
              </p>
            </div>

            <div className="row" style={{alignItems: 'center'}}>
              <div className="col col--6">
                <div style={{backgroundColor: '#f8fafc', borderRadius: '16px', padding: '3rem', height: '100%'}}>
                  <Heading as="h3" style={{fontSize: '1.8rem', fontWeight: '600', color: '#1f2937', marginBottom: '2rem'}}>
                    Retail Migration Success
                  </Heading>
                  <ul style={{listStyle: 'none', paddingLeft: 0}}>
                    <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
                      <img src={require(`@site/static/img/checkin-icon.png`).default} alt="" style={{width: '24px', height: '24px', marginRight: '12px', marginTop: '2px', flexShrink: 0}} />
                      <span style={{color: '#4b5563', lineHeight: '1.6', fontSize: '1.1rem'}}>
                        Manual migration of 100+ security policies to the cloud was estimated to take six months
                      </span>
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
                      <img src={require(`@site/static/img/checkin-icon.png`).default} alt="" style={{width: '24px', height: '24px', marginRight: '12px', marginTop: '2px', flexShrink: 0}} />
                      <span style={{color: '#4b5563', lineHeight: '1.6', fontSize: '1.1rem'}}>
                        AI-agent analyzed the business logic and auto-generated 90% of the required IaC code
                      </span>
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
                      <img src={require(`@site/static/img/checkin-icon.png`).default} alt="" style={{width: '24px', height: '24px', marginRight: '12px', marginTop: '2px', flexShrink: 0}} />
                      <span style={{color: '#4b5563', lineHeight: '1.6', fontSize: '1.1rem'}}>
                        Migration was accelerated by 40%, deploying the solution in only three days
                      </span>
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <img src={require(`@site/static/img/checkin-icon.png`).default} alt="" style={{width: '24px', height: '24px', marginRight: '12px', marginTop: '2px', flexShrink: 0}} />
                      <span style={{color: '#4b5563', lineHeight: '1.6', fontSize: '1.1rem'}}>
                        The quick deployment resulted in significant savings in engineering and operational costs
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col col--6" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'}}>
                <div style={{position: 'relative'}}>
                  <img
                    src={require(`@site/static/img/image17.jpeg`).default}
                    alt="Case Study Image"
                    style={{maxWidth: '400px', height: '400px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'}}
                  />
                  <div style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', background: 'white', padding: '1rem 2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
                    <span style={{color: '#667eea', fontWeight: '700', fontSize: '1.5rem'}}>40%</span>
                    <span style={{color: '#6b7280', marginLeft: '0.5rem'}}>Faster Migration</span>
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
