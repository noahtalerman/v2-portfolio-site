import React from 'react'
import mainStyles from './main.module.scss'

const Main = (props) => {
    return (
        <main className={mainStyles.main}>
            <h2 className={mainStyles.mainHeader}>{props.location}</h2>
            {props.children}
        </main>
    );
}

export default Main