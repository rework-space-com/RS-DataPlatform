import Heading from '@theme/Heading';

export default function ProblemStatement() {
  return (
    <section id="problem-statement" className="article-section">
      <div className="container">
        <div className="row justify-center">
          <div className="col col--12">
            <article>
              <div>
                <Heading as="h2">Problem Statement</Heading>
                <div className="row">
                  <div className="col col--6">
                    <Heading as="h3">Current Challenges:</Heading>
                    <ul style={{textAlign: 'left'}}>
                      <li>Vendor lock-in limiting scalability and Migration to Public Cloud Hadoop ETLs.</li>
                      <li>Inefficient infrastructure provisioning slowing innovation.</li>
                      <li>High costs associated with multi-cloud or hybrid Hadoop deploy management.</li>
                    </ul>
                  </div>
                  <div className="col col--6">
                    <Heading as="h3">On-Premise Hadoop Clusters</Heading>
                    <ul style={{textAlign: 'left'}}>
                      <li>Complex Authentication Setup and maintenance.</li>
                      <li>Scaling Issues for high number of users, groups, roles.</li>
                      <li>Operational Overhead for maintenance and upgrades.</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col col--12 text--center">
                    <Heading as="h3">Impact on Businesses:</Heading>
                    <ul style={{display: 'inline-block', textAlign: 'left', 'list-style': 'none'}}>
                      <li>Inhibited growth and adaptability in competitive markets</li>
                    </ul>
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
