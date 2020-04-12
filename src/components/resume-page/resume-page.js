import React from 'react'
import resumePageStyles from './resume-page.module.scss'

const Header = (props) => {
    return (
        <h3 className={resumePageStyles.header}>{props.text}</h3>
    );
}

const SmallHeader = (props) => {
    const elements = props.children.split('+');
    const headerElems = elements.map((elem, i) => {
        if (elem.indexOf('_') !== -1) {
            elem = elem.replace('_', '');
            return (
                <h4 key={elem}>
                    <a href={props.url} target="_blank" rel="noopener noreferrer" className={resumePageStyles.link}>{elem}</a> /
                </h4>
            )
        } else if (i !== (elements.length - 1)) {
            return (
                <h4 className={resumePageStyles.smallHeader} key={elem}>&nbsp;{`${elem} /`} </h4>
            )
        } else if (elements.length > 1) {
            return (
                <h4 className={resumePageStyles.smallHeader} key={elem}>&nbsp;{`${elem}`}</h4>
            )
        } else {
            return (
                <h4 className={resumePageStyles.smallHeader} key={elem}>{elem}</h4>
            )
        }
    })
    return (
        <div className={resumePageStyles.smallHeaderContainer}>{headerElems}</div>
    );
}

const Body = (props) => {
    return (
        <p className={resumePageStyles.body}>{props.children}</p>
    );
}

const Section = (props) => {
    return (
        <section className={resumePageStyles.section}>
            {props.children}
        </section>
    )
}

const ResumePage = () => {
    return (
        <div className={resumePageStyles.container}>

            <Header text='Education' />
            <Section>
                <SmallHeader url='https://umich.edu/' >
                    _University of Michigan+B.S. Economics+
                    B.S. Cognitive Science+May 2020
                </SmallHeader>
                <SmallHeader>
                    GPA: 3.8
                </SmallHeader>
                <SmallHeader>
                    Location: Ann Arbor, Michigan
                </SmallHeader>
                <Body>
                    I coupled economics and cognitive science to explore decision processes and behavioral economics. Pursued passion for programming and interaction design coursework.
                </Body>
            </Section>

            <Header text='Work Experience' />
            <Section>
                <SmallHeader url='https://wellnest.co' >
                    _Wellnest+Web Developer+Sept. 2019 to Present
                </SmallHeader>
                <SmallHeader>
                    Location: Ann Arbor, Michigan
                </SmallHeader>
                <Body>
                    Early-stage startup building a mental health mobile application. Backed by venture capital firm. I lead the design and development of front-end features of the static marketing website and the web application. Conduct product meetings with Lead Designer. Negociate project timelines and communicate next steps. Delivered and deployed the first and second build of the marketing website.
                </Body>
            </Section>

            <Section>
                <SmallHeader url='https://www.iprospect.com/en/us/' >
                    _iProspect+Account Management Intern+June to Aug. 2019
                </SmallHeader>
                <SmallHeader>
                    Location: Ann Arbor, Michigan
                </SmallHeader>
                <Body>
                    Early-stage startup building a mental health mobile application. Backed by venture capital firm. I lead the design and development of front-end features of the static marketing website and the web application. Conduct product meetings with Lead Designer. Negociate project timelines and communicate next steps. Delivered and deployed the first and second build of the marketing website.
                </Body>
            </Section>
            
            <Header text='Research Projects' />
            <Section>
                <SmallHeader url='https://www.figma.com/proto/q1BfyCnd97uBHmzEsdTRvW/Digital-Prototype-I?node-id=491%3A33901&scaling=min-zoom' >
                    _ChoreGroup+Course Project+Sept. to Dec. 2019
                </SmallHeader>
                <Body>
                    I hypothesized a need for a tool that facilitates communication of shared house chores between housemates. Conducted need-finding interviews with target users to define features of my solution. Researched competitors’ solutions. Created paper prototypes and conducted user testing. Desgined wireframes and medium-fidelity prototype.
                </Body>
            </Section>
            
            <Section>    
                <SmallHeader url='https://columbiaeconomicreview.com'>
                    _Economic Research+Course Project+Sept. to Dec. 2019
                </SmallHeader>
                <Body>
                    My goal was to examine the realtionship between computer technology adoption and income inequality across countries. Consulted with academic professionals to form hypothesis. Synthesized large datasets and performed analysis using the statistical software Stata. Summarized data findings and presented actionable insights.
                </Body>
            </Section>

        </div>

    );
}

export default ResumePage