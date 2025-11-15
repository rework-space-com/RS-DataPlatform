import Heading from '@theme/Heading';

export default function BusinessModel() {
  return (
    <section id="business-model" className="article-section">
      <div className="container">
        <div className="row justify-center">
          <div className="col col--12">
            <article>
              <Heading as="h2">Business Model</Heading>
              <hr />

              <Heading as="h3">Value Proposition</Heading>
              <p>
                Our platform provides comprehensive satellite data processing and analysis solutions
                that transform raw remote sensing data into actionable insights. We enable organizations
                to make data-driven decisions for agriculture, environmental monitoring, and urban planning
                through cutting-edge AI and machine learning technologies.
              </p>

              <Heading as="h3">Target Market</Heading>
              <p>
                We serve agricultural companies, environmental agencies, research institutions,
                government organizations, and consulting firms that require accurate and timely
                analysis of satellite imagery for their operations and decision-making processes.
              </p>

              <Heading as="h3">Revenue Streams</Heading>
              <p>
                Our revenue model is based on SaaS subscriptions with tiered pricing plans,
                custom enterprise solutions, API usage fees, and professional consulting services.
                We also offer data licensing partnerships and white-label solutions for specialized markets.
              </p>

              <hr />

              <Heading as="h2">Market Strategy</Heading>
              <hr />

              <Heading as="h3">Competitive Advantage</Heading>
              <p>
                Our competitive edge lies in advanced AI algorithms for satellite data processing,
                real-time analysis capabilities, user-friendly interfaces, and comprehensive API
                integration. We provide faster processing times and more accurate results compared
                to traditional solutions.
              </p>

              <Heading as="h3">Growth Strategy</Heading>
              <p>
                We focus on strategic partnerships with satellite data providers, expansion into
                emerging markets, continuous R&D investment, and building a strong ecosystem of
                developers and researchers. Our goal is to become the leading platform for
                satellite data analysis globally.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
