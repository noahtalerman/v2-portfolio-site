import React from 'react'
import IntroSection from '../../components/intro-section/intro-section.js'
import Layout from '../../components/layout/layout.js'
import Main from '../../components/main/main.js'
import Article from '../../components/article/article.js'
import ResumePage from '../../components/resume-page/resume-page.js'
import Button from '../../components/button/button.js'

const Page = () => {
    return (
        <Layout>
            <IntroSection collapsed="collapsed" />
            <Main location="Projects wellnest-v2">
                <Button url="/projects" content="<" arrow="arrow" left="left" />
                <Article>
                    <ResumePage />
                </Article>
            </Main>
        </Layout>
    );
}

export default Page