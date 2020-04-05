import React from 'react'
import homeSectionStyles from './home-section.module.scss'

const HomeSection = (props) => {
    return (
        <section className={homeSectionStyles.homeSectionContainer}>
            <h2 className={homeSectionStyles.homeSectionHeader}>{props.location}</h2>
        </section>
    )
}

export default HomeSection