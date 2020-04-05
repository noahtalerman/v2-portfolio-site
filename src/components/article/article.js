import React from 'react'
import articleStyles from './article.module.scss'

const Article = (props) => {
    return (
        <article className={articleStyles.article}>
            {props.children}
        </article>
    );
}

export default Article