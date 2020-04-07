import React from 'react'
import sidebarStyles from './sidebar-media.module.scss'

const Header = (props) => {
    return (
        <h3 className={sidebarStyles.header}>{props.text}</h3>
    );
}

const SubHeader = (props) => {
    return (
        <h4 className={sidebarStyles.subHeader}>{props.text}</h4>
    );
}

const ListTracks = (props) => {
    const elements = props.children.split('+');
    const listElements = elements.map((elem, i) => {
        return (
            <li className={sidebarStyles.listElement} key={elem}>{i + 1}. {elem}<br></br></li>
        );
    });

    return (
        <ul className={`${sidebarStyles.list} ${sidebarStyles.listTracks}`}>{listElements}</ul>
    );
}

const ListBooks = (props) => {
    const elements = props.children.split('+');
    const listElements = elements.map((elem, i) => {
        console.log(i)
        return (
            <li className={sidebarStyles.listElement} key={elem}>{elem}<br></br></li>
        );
    });

    return (
        <ul className={`${sidebarStyles.list} ${sidebarStyles.listBooks}`}>{listElements}</ul>
    );
}

const SidebarMedia = (props) => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let pastWeek = new Date()
    pastWeek.setDate(pastWeek.getDate() - 7);
    const pastMonth = pastWeek.getMonth() + 1;
    const pastDay = pastWeek.getDate();

    return (
        <div className={sidebarStyles.sidebarContainer}>
            <Header text='Top Tracks' />
            <SubHeader text={`${pastMonth} / ${pastDay} - ${month} / ${day}`} />
            <ListTracks>
                Alone Again+
                Snowchild+
                It Is Not Meant To Be
            </ListTracks>
        </div>
    );
}

export default SidebarMedia