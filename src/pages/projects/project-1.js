import React from 'react'
import IntroSection from '../../components/intro-section/intro-section.js'
import Layout from '../../components/layout/layout.js'
import Main from '../../components/main/main.js'
import Article from '../../components/article/article.js'
import ReportPage from '../../components/report-page/report-page.js'
import ButtonBack from '../../components/button-back/button-back.js'

const Page = () => {
    return (
        <Layout>
            <IntroSection collapsed="collapsed" />
            <Main location="Projects wellnest-v2">
                <ButtonBack url="/projects" />
                <Article>
                    <ReportPage />
                </Article>
            </Main>
        </Layout>
    );
}

export default Page