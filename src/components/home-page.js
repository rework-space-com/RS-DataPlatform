import clsx from 'clsx';
import Heading from '@theme/Heading';

const FeatureList = [
  {
    title: 'Title',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    imgSrc: 'placeholder.png',
    description: (
      <>
        Description
      </>
    ),
  },
  {
    title: 'Title',
    imgSrc: 'placeholder.png',
    description: (
      <>
        Description
      </>
    ),
  },
  {
    title: 'Title',
    imgSrc: 'placeholder.png',
    description: (
      <>
        Description
      </>
    ),
  },
  {
    title: 'Title',
    imgSrc: 'placeholder.png',
    description: (
      <>
        Description
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={require(`@site/static/img/homepage-features/${imgSrc}`).default}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
