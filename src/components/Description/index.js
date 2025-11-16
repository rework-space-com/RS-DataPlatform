import Heading from '@theme/Heading';

export default function Description() {
  return (
    <section id="home" className="article-section">
      <div className="container">
        <div className="row justify-center">
          <div className="col col--12">
            <article>
              <div>
                RS-DataPlatform is building a cloud vendor-agnostic Infrastructure-as-Code (IaC) solution with
                integrated enterprise-grade security, empowering startups and scaleups with agile, Europe-native
                tools to optimize their operations. Fully compatible with major cloud providers and supporting
                seamless migration across cloud and on-premise infrastructures, our platform ensures resilience
                during instability and enables scalable growth - critical for Ukraine's post-war reconstruction.
                <hr />
                <Heading as="h2">Problem Statement</Heading>
                <Heading as="h3">Current Challenges:</Heading>
                <li>Vendor lock-in limiting scalability and Migration to Public Cloud Hadoop ETLs.</li>
                <li>Inefficient infrastructure provisioning slowing innovation.</li>
                <li>High costs associated with multi-cloud or hybrid Hadoop deploy management.</li>
                <Heading as="h3">Impact on Businesses:</Heading>
                <li>Inhibited growth and adaptability in competitive markets.</li>
                <Heading as="h3">On-Premise Hadoop Clusters</Heading>
                <li>Complex Authentication Setup and maintenance</li>
                <li>Scaling Issues for high number of users, groups, roles</li>
                <li>Operational Overhead for maintenance and upgrades</li>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
