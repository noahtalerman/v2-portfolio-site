import React from 'react'
import mainStyles from './main.module.scss'

const Main = (props) => {
    const headerTextArray = props.location.split(' ');
    console.log(headerTextArray.length)
    if (headerTextArray.length === 1) {
        return (
            <main className={mainStyles.main}>
                <h2 className={mainStyles.mainHeader}>{props.location}</h2>
                {props.children}
            </main>
        );
    } else if (headerTextArray.length > 1) {
        return (
            <main className={mainStyles.main}>
                <h2 className={mainStyles.mainHeader}>{headerTextArray[0]}</h2>
                <h3 className={mainStyles.subHeader}>{headerTextArray[1]}</h3>
                {props.children}
            </main>
        );
    }
}

export default Main