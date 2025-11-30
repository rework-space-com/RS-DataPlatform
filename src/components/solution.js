import Heading from '@theme/Heading';

export default function Solution() {
  return (
    <section id="solution" className="article-section">
      <div className="container">
        <div className="row justify-center">
          <div className="col col--12">
            <article id="article-solution">
              <div>
                <Heading as="h2" className="text--center">Solution Overview</Heading>

                {/* Three Column Layout */}
                <div className="row">
                  {/* First Column - Text */}
                  <div className="col col--4 text--center">
                    <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', minHeight: '400px'}}>
                      <div>
                        <Heading as="h3">01 - Single IaC platform streamlines infrastructure provisioning efficiently.</Heading>
                      </div>
                      <div>
                        <Heading as="h3">02 - Solution provides a vendor-agnostic approach for all cloud providers.</Heading>
                      </div>
                    </div>
                  </div>

                  {/* Second Column - Image */}
                  <div className="col col--4 text--center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px'}}>
                    <img
                      src={require(`@site/static/img/image7.jpeg`).default}
                      alt="Our Solution"
                      style={{maxWidth: '400px', height: '400px', borderRadius: '50%', objectFit: 'cover'}}
                    />
                  </div>

                  {/* Third Column - Text */}
                  <div className="col col--4 text--center">
                    <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', minHeight: '400px'}}>
                      <div>
                        <Heading as="h3">03 - Platform enhances scalability and improves cost-efficiency significantly.</Heading>
                      </div>
                      <div>
                        <Heading as="h3">04 - Integrated enterprise security is AI-powered for troubleshooting support.</Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
