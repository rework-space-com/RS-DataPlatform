import clsx from 'clsx';
import Heading from '@theme/Heading';

const FeaturesList = [
  {
    title: 'Title',
    // Svg: require('@site/static/img/placeholder.png').default,
    description: (
      <>
        Description
      </>
    ),
  },
  {
    title: 'Title',
    // Svg: require('@site/static/img/placeholder.png').default,
    description: (
      <>
        Description
      </>
    ),
  },
  {
    title: 'Title',
    // Svg: require('@site/static/img/placeholder.png').default,
    description: (
      <>
        Description
      </>
    ),
  },
  {
    title: 'Title',
    // Svg: require('@site/static/img/placeholder.png').default,
    description: (
      <>
        Description
      </>
    ),
  },
  {
    title: 'Title',
    // Svg: require('@site/static/img/placeholder.png').default,
    description: (
      <>
        Description
      </>
    ),
  },
  {
    title: 'Title',
    // Svg: require('@site/static/img/placeholder.png').default,
    description: (
      <>
        Description
      </>
    ),
  }
];

function Feature({Svg, title,description}) {
  return (
    <div className={clsx('col col--6')}>
      {/* <div className="text--center">
        <Svg className="featureSvg" role="img" />
      </div> */}
      {
        <div className="text--center">
          <img className="featureSvg" src={require(`@site/static/img/placeholder.png`).default} alt={"placeholder icon"} />
        </div>
      }
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="row">
          {FeaturesList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
