import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function Usage() {
  return (
    <section id="usage" className={styles.article}>
      <div className="container">
        <div className="row justify-center">
          <div className="col col--12">
            <article>
              <Heading as="h2">Use Cases</Heading>
              <hr />

              <Heading as="h3">Case 1</Heading>
              <p>
                Agricultural monitoring and crop health assessment using satellite imagery.
                Our platform analyzes vegetation indices, soil moisture levels, and weather patterns
                to provide farmers with actionable insights for optimizing crop yields and resource management.
              </p>

              <Heading as="h3">Case 2</Heading>
              <p>
                Environmental monitoring and climate change tracking. Track deforestation,
                water quality changes, urban heat island effects, and other environmental indicators
                to support sustainability initiatives and policy decisions.
              </p>

              <Heading as="h3">Case 3</Heading>
              <p>
                Infrastructure and urban planning analysis. Monitor urban growth patterns,
                assess infrastructure development, and analyze land use changes to support
                smart city planning and sustainable development projects.
              </p>

              <hr />

            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
