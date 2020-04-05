import React from 'react'
import IntroSection from '../components/intro-section/intro-section.js'
import HomeSection from "../components/home-section/home-section.js"
import Layout from '../components/layout/layout.js'

const Page = () => {
    return (
        <Layout>
            <IntroSection collapsed='collapsed' />
            <HomeSection location='Media' />
        </Layout>
    );
}

export default Page