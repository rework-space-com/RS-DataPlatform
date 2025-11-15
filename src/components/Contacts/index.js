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
                We're here to help you harness the power of satellite data for your projects.
                Whether you have questions about our services, need technical support, or want
                to discuss partnership opportunities, don't hesitate to reach out.
              </p>

              <Heading as="h3">Contact Information</Heading>
              <p>
                <strong>Email:</strong> info@rs-dataplatform.com<br/>
                <strong>Phone:</strong> +1 (555) 123-4567<br/>
                <strong>Address:</strong> 123 Innovation Street, Tech City, TC 12345
              </p>

              <Heading as="h3">Business Hours</Heading>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM (EST)<br/>
                Saturday: 10:00 AM - 4:00 PM (EST)<br/>
                Sunday: Closed
              </p>

              <hr />

              <Heading as="h2">Support</Heading>
              <hr />

              <Heading as="h3">Technical Support</Heading>
              <p>
                For technical assistance with our platform, API integration, or data processing issues,
                please contact our technical support team. We provide comprehensive documentation
                and responsive support to ensure your success.
              </p>

              <Heading as="h3">Partnership Inquiries</Heading>
              <p>
                Interested in partnering with us? We're always looking for strategic partnerships
                with organizations that share our vision of making satellite data accessible and actionable.
                Contact us to discuss collaboration opportunities and joint ventures.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
