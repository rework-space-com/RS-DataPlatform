import Heading from '@theme/Heading';
import styles from './styles.module.css'

export default function Contacts() {
  return (
    <section id="contacts" className="article-section">
      <div className="container">
        <div className="row justify--center">
          <div className="col col--12">
            <article>
              <Heading as="h2">Contacts</Heading>
              <hr />

              <Heading as="h3">Get in Touch</Heading>
              <p>
                We're here to help you accelerate your business growth with cutting-edge cloud infrastructure solutions.
                Whether you have questions about our services, need technical support, or want
                to discuss partnership opportunities, don't hesitate to reach out.
              </p>

              <Heading as="h3"></Heading>
              <p>
                <strong>Email:</strong> sales@rework-space.com<br/>
                <strong>Phone:</strong> +38 067 324 6141<br/>
                <strong>Company website:</strong> <a href={"https://rework-space.com"}>rework-space.com</a><br/>
                <strong>LinkedIn:</strong> <a href={"https://www.linkedin.com/company/rework-space/"}>rework-space</a>
              </p>

              <hr />

            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
