import React from 'react'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <article className={layoutStyles.article}>
            {props.children}
        </article>
    );
}

export default Layout