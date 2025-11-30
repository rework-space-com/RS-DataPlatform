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
              <ul style={{textAlign: 'left', listStyle: 'none', paddingLeft: 0}}>
                <li className="li-usage-icon">
                  <img src={require(`@site/static/img/Icon1.png`).default} alt="" className="usage-icon" />
                  Example 1: A retail enterprise scaling globally without cloud vendor lock-in.
                </li>
                <li className="li-usage-icon">
                  <img src={require(`@site/static/img/Icon1.png`).default} alt="" className="usage-icon" />
                  Example 2: A fintech startup reducing cloud migration security risks with automated IaC.
                </li>
                <li className="li-usage-icon">
                  <img src={require(`@site/static/img/Icon1.png`).default} alt="" className="usage-icon" />
                  Example 3: A media company ensuring multi-cloud and hybrid cloud.
                </li>
              </ul>
              <hr/>

            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
