import clsx from 'clsx';
import Heading from '@theme/Heading';

const TechnologyList = [
  {
    title: 'Satellite Data Processing',
    description: (
      <>
        Advanced algorithms for processing satellite imagery and remote sensing data
      </>
    ),
  },
  {
    title: 'Machine Learning',
    description: (
      <>
        AI-powered analysis for pattern recognition and data classification
      </>
    ),
  },
  {
    title: 'Cloud Computing',
    description: (
      <>
        Scalable cloud infrastructure for handling large datasets
      </>
    ),
  },
  {
    title: 'Data Visualization',
    description: (
      <>
        Interactive dashboards and visualization tools for data insights
      </>
    ),
  },
  {
    title: 'API Integration',
    description: (
      <>
        RESTful APIs for seamless data access and third-party integrations
      </>
    ),
  },
  {
    title: 'Real-time Processing',
    description: (
      <>
        Stream processing capabilities for real-time data analysis
      </>
    ),
  }
];

function TechnologyItem({title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className="featureSvg" src={require(`@site/static/img/placeholder.png`).default} alt={"technology icon"} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Technology() {
  return (
    <section id="technology" className="features">
      <div className="container">
        <div className="text--center">
          <Heading as="h2">Technology Stack</Heading>
          <p>Our platform leverages cutting-edge technologies for satellite data processing</p>
        </div>
        <div className="row">
          {TechnologyList.map((props, idx) => (
            <TechnologyItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
