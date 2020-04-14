import React from 'react'
import reportPageStyles from './report-page.module.scss'
import BannerImgWellnest from '../../images/banner.png'

const Title = (props) => {
    return (
        <h3 className={reportPageStyles.title}>{props.text}</h3>
    )
}

const BannerImg = (props) => {
    return (
        <div className={reportPageStyles.bannerImg}>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
    );
}

const Header = (props) => {
    return (
        <h4 className={reportPageStyles.header}>{props.text}</h4>
    )
}

const Body = (props) => {
    return (
        <p className={reportPageStyles.body}>{props.text}</p>
    )
}

const ReportPage = () => {
    const project = {
        title: 'Wellnest Marketing Site v2',
        bannerImg: 'banner-img.png',
        sections: [
            {
                header: 'Problem',
                body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi eget suspendisse cursus eros, egestas sit ut. Sed velit blandit cursus lorem semper in. Nunc consectetur a at lectus pharetra sed massa aenean. Feugiat ac sapien sed nullam. Imperdiet pretium convallis aliquam a nisl sagittis risus. Id gravida dictum et blandit posuere viverra massa laoreet. Odio aliquet arcu interdum maecenas. Nisl risus neque, massa orci amet, at senectus feugiat sit. Etiam donec aliquam integer iaculis imperdiet amet, id fringilla. Mauris nibh cursus varius molestie. Amet, ipsum nibh varius imperdiet.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi eget suspendisse cursus eros, egestas sit ut. Sed velit blandit cursus lorem semper in. Nunc consectetur a at lectus pharetra sed massa aenean. Feugiat ac sapien sed nullam. Imperdiet pretium convallis aliquam a nisl sagittis risus. Id gravida dictum et blandit posuere viverra massa laoreet. Odio aliquet arcu interdum maecenas. Nisl risus neque, massa orci amet, at senectus feugiat sit. Etiam donec aliquam integer iaculis imperdiet amet, id fringilla. Mauris nibh cursus varius molestie. Amet, ipsum nibh varius imperdiet.']
            },
            {
                header: 'Solution',
                body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi eget suspendisse cursus eros, egestas sit ut. Sed velit blandit cursus lorem semper in. Nunc consectetur a at lectus pharetra sed massa aenean. Feugiat ac sapien sed nullam. Imperdiet pretium convallis aliquam a nisl sagittis risus. Id gravida dictum et blandit posuere viverra massa laoreet. Odio aliquet arcu interdum maecenas. Nisl risus neque, massa orci amet, at senectus feugiat sit. Etiam donec aliquam integer iaculis imperdiet amet, id fringilla. Mauris nibh cursus varius molestie. Amet, ipsum nibh varius imperdiet.']
            },
            {
                header: 'Something',
                body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi eget suspendisse cursus eros, egestas sit ut. Sed velit blandit cursus lorem semper in. Nunc consectetur a at lectus pharetra sed massa aenean. Feugiat ac sapien sed nullam. Imperdiet pretium convallis aliquam a nisl sagittis risus. Id gravida dictum et blandit posuere viverra massa laoreet. Odio aliquet arcu interdum maecenas. Nisl risus neque, massa orci amet, at senectus feugiat sit. Etiam donec aliquam integer iaculis imperdiet amet, id fringilla. Mauris nibh cursus varius molestie. Amet, ipsum nibh varius imperdiet.']
            }
        ],

    };

    const sections = Object.keys(project.sections).map((key, i) => {
        console.log(project.sections[key])
        const bodies = project.sections[key].body.map((paragraph, i) => {
            return (
                <Body className={reportPageStyles.body} text={paragraph} />
            )
        })

        console.log(bodies)

        return (
            <section className={reportPageStyles.section}>
                <Header text={project.sections[key].header} />
                {bodies}
            </section>
        );
    })

    return (
        <div className={reportPageStyles.container}>
            <Title text='Project Title' />
            <BannerImg imgSrc={BannerImgWellnest} imgAlt='alt' />
            {sections}
        </div>
    );
}

export default ReportPage