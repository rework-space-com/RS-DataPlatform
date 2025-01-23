import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const TeamMembersList = [
  {
    fullName: 'Name',
    imageName: 'placeholder.png',
    degree: 'degree',
    github: 'github-user',
    role: 'Role: ',
    description: (<></>),
  },
  {
    fullName: 'Name',
    imageName: 'placeholder.png',
    degree: 'degree',
    github: 'github-user',
    role: 'Role: ',
    description: (<></>),
  },
  {
    fullName: 'Name',
    imageName: 'placeholder.png',
    degree: 'degree',
    github: 'github-user',
    role: 'Role: ',
    description: (<></>),
  },
];

function TeamMember({imageName, fullName, degree, github, role, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img className={styles.featureSvg} src={require(`@site/static/img/team-members/${imageName}`).default} alt={`${fullName} image`} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={`https://github.com/${github}`}>{fullName}</Link>
        </Heading>
        {/*<b>{degree}</b><br/>*/}
        {role}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function TeamMembers() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {TeamMembersList.map((props, idx) => (
            <TeamMember key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
