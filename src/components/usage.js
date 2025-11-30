import Heading from '@theme/Heading';

export default function Usage() {
  return (
    <section id="usage" className="article-section">
      <div className="container">
        <div className="row justify-center">
          <div className="col col--12">
            <article>
              <Heading as="h2">Use Cases</Heading>

              <hr/>
              <ul style={{textAlign: 'left'}}>
                <li>Example 1: A retail enterprise scaling globally without cloud vendor lock-in.</li>
                <li>Example 2: A fintech startup reducing cloud migration security risks with automated IaC.</li>
                <li>Example 3: A media company ensuring multi-cloud and hybrid cloud.</li>
              </ul>

              <hr/>
              <Heading as="h3">Case 1: Retail Migration</Heading>
              <ul>Manual migration of 100+ security policies to the cloud was estimated to take six months.</ul>
              <ul>AI-agent analyzed the business logic and auto-generated 90% of the required IaC code.</ul>
              <ul>Migration was accelerated by 40%, deploying the solution in only three days.</ul>
              <ul>The quick deployment resulted in significant savings in engineering and operational costs.</ul>

            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
