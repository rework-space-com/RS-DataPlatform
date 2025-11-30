import Heading from '@theme/Heading';

export default function Case() {
  return (
    <section id="case" className="article-section">
      <div className="container">
        <div className="row justify-center section-width">
          <div className="col col--6">
            <article id="article-case">
              <Heading as="h2">Case 1: Retail Migration</Heading>
              <ul style={{listStyle: 'none', paddingLeft: 0, textAlign: 'left'}}>
                <li className="li-case-icon">
                  <img src={require(`@site/static/img/checkin-icon.png`).default} alt="" className="case-icon" />
                  Manual migration of 100+ security policies to the cloud was estimated to take six months.
                </li>
                <li className="li-case-icon">
                  <img src={require(`@site/static/img/checkin-icon.png`).default} alt="" className="case-icon" />
                  AI-agent analyzed the business logic and auto-generated 90% of the required IaC code.
                </li>
                <li className="li-case-icon">
                  <img src={require(`@site/static/img/checkin-icon.png`).default} alt="" className="case-icon" />
                  Migration was accelerated by 40%, deploying the solution in only three days.
                </li>
                <li className="li-case-icon">
                  <img src={require(`@site/static/img/checkin-icon.png`).default} alt="" className="case-icon" />
                  The quick deployment resulted in significant savings in engineering and operational costs.
                </li>
              </ul>
            </article>
          </div>
          <div className="col col--6" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img
              src={require(`@site/static/img/image17.jpeg`).default}
              alt="Case Study Image"
              style={{maxWidth: '400px', height: '400px', borderRadius: '50%', objectFit: 'cover'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
