import React from 'react'
import { Link } from 'gatsby'
import projectsPageStyles from './projects-page.module.scss'
import Wellnest2 from '../../images/wellnest2.png'
import Wellnest1 from '../../images/wellnest1.png'
import ChoreGroup from '../../images/choregroup.png'

const ProjectCard = (props) => {
    return (
        <Link to={`/projects/${props.projectUrl}`} className={projectsPageStyles.projectCard}>
            <div className={`${projectsPageStyles[props.background]} ${projectsPageStyles.background}`}>
                <img className={projectsPageStyles.img} src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div className={projectsPageStyles.projectCardText}>
                <h3 className={projectsPageStyles.header}>{props.header}</h3>
                <p className={projectsPageStyles.description}>{props.description}</p>
            </div>
        </Link>
    );
}

const Section = () => {
    const cards = [{title: 'Wellnest Marketing Site v2', 
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas et turpis nunc   lectus posuere risus. Amet, massa nulla arcu.',
              img: {Wellnest2},
              alt: 'alt',
              url: 'project-1'
            },
            {title: 'Wellnest Marketing Site v1', 
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas et turpis nunc   lectus posuere risus. Amet, massa nulla arcu.',
              img: {Wellnest1},
              alt: 'alt',
              url: 'project-2'
            },
            {title: 'Solution For House Chores', 
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas et turpis nunc   lectus posuere risus. Amet, massa nulla arcu.',
              img: {ChoreGroup},
              alt: 'alt',
              url: 'project-3'
            }];

    const cardElems = cards.map((card, i) => {
        const imgKey = Object.keys(card.img)[0];
        return (
            <ProjectCard background={`background${i}`} imgSrc={card.img[imgKey]} imgAlt={card.alt} header={card.title} description={card.description} projectUrl={card.url} key={card.title} />
        );
    });

    return (
        <section className={projectsPageStyles.section}>
            {cardElems}
        </section>
    );
}

const ProjectsPage = () => {
    return (
        <Section />
    );
}

export default ProjectsPage