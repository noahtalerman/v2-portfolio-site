import React from 'react'
import IntroSection from '../components/intro-section/intro-section.js'
import Layout from '../components/layout/layout.js'
import Main from '../components/main/main.js'
import Article from '../components/article/article.js'
import SidebarMedia from '../components/sidebar-media/sidebar-media.js'
import MediaPage from '../components/media-page/media-page.js'

const Page = () => {
    return (
        <Layout>
            <IntroSection collapsed="collapsed" />
            <Main location="Media">
                <SidebarMedia />
                <Article>
                    <MediaPage />
                </Article>
            </Main>
        </Layout>
    );
}

export default Page