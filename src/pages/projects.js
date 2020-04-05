import React from 'react'
import IntroSection from '../components/intro-section/intro-section.js'
import Layout from '../components/layout/layout.js'
import Main from '../components/main/main.js'
import Article from '../components/article/article.js'

const Page = () => {
    return (
        <Layout>
            <IntroSection collapsed="collapsed" />
            <Main location="Projects">
                <Article>
                    <p>hello</p>
                </Article>
            </Main>
        </Layout>
    );
}

export default Page