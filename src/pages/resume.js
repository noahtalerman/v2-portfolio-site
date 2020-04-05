import React from 'react'
import IntroSection from '../components/intro-section/intro-section.js'
import Layout from '../components/layout/layout.js'
import Main from '../components/main/main.js'
import Article from '../components/article/article.js'
import SidebarResume from '../components/sidebar-resume/sidebar-resume.js'

const Page = () => {
    return (
        <Layout>
            <IntroSection collapsed="collapsed" />
            <Main location="Resume">
                <SidebarResume>

                </SidebarResume>
                <Article>
                    <p>resume</p>
                </Article>
            </Main>
        </Layout>
    );
}

export default Page