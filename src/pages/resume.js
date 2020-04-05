import React from 'react'
import IntroSection from '../components/intro-section/intro-section.js'
import Layout from '../components/layout/layout.js'
import Main from '../components/main/main.js'
import Article from '../components/article/article.js'
import Sidebar from '../components/sidebar/sidebar.js'

const Page = () => {
    return (
        <Layout>
            <IntroSection collapsed="collapsed" />
            <Main location="Resume">
                <Sidebar>
                    <h3>Contact</h3>
                    <h4>Email</h4>
                    <p>noahtal@umich.edu</p>
                    <h4>Phone</h4>
                    <p>206.617.2332</p>
                    <h4>Location</h4>
                    <p>Seattle, Washington</p>

                    <h3>Tools / Skills</h3>
                    <p>HTML / CSS</p>
                    <p>JavaScript</p>
                    <p>ReactJS</p>
                    <p>GatsbyJS</p>
                    <p>Ruby</p>
                    <p>Python</p>
                    <p>Stata</p>
                    <p>Figma</p>
                    <p>Adobe XD</p>
                    <p>Adobe Photoshop</p>
                    <p>Facebook Business</p>
                    <p>Data Analysis</p>
                    <p>Digital Marketing</p>
                    <p>Wireframing</p>
                    <p>Prototyping</p>
                    <p>Debugging</p>
                </Sidebar>
                <Article>
                    <p>resume</p>
                </Article>
            </Main>
        </Layout>
    );
}

export default Page