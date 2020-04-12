import React from 'react'
import { Link } from 'gatsby'
import introSectionStyles from './intro-section.module.scss'

const IntroParagraphs = () => {
    return (
        <div className={introSectionStyles.introParagraphContainer}>
            <p>I am actively searching for a full time roll as a front end developer. </p>
            <p>Come May 2020, I will have graduated from the University of Michigan with an Economics and Cognitive Science Degree. </p>
            <p>My proximate goals are to continue to grow my technical skills and contribute at a growing company in tech.</p>
            <p>My ultimate goals are to pursue a career in product management whether that be the tech, healthcare,  or other industry.</p>
        </div>
    );
}

const Navigation = () => {
    return (
        <div className={introSectionStyles.navContainer}>
            <Link to='/' className={introSectionStyles.bigLink}>Noah Talerman</Link>
            <Link to='/projects' className={introSectionStyles.smallLink}>Projects</Link>
            <Link to='/resume' className={introSectionStyles.smallLink}>Resume</Link>
            <Link to='/media' className={introSectionStyles.smallLink}>Media</Link>
        </div>
    );
}

const IntroSection = (props) => {

    let container = introSectionStyles.introSectionContainer;
    let section = introSectionStyles.introSection;
    if (props.collapsed) {
        container += ` ${introSectionStyles.introSectionContainerCollapsed}`;
        section += ` ${introSectionStyles.introSectionCollapsed}`;
    }

    return (
        <header className={container}>
            <div className={section}>
                <nav className={introSectionStyles.navContainerOuter}>
                    <Navigation />
                </nav>
                <IntroParagraphs />
            </div>
        </header>
    );
}

export default IntroSection