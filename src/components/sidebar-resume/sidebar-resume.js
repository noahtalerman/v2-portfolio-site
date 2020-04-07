import React from 'react'
import sidebarStyles from './sidebar-resume.module.scss'
import { Link } from 'gatsby';

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

const List = (props) => {
    const elements = props.children.split('+');
    const listElements = elements.map((elem) => {
        return (
            <li className={sidebarStyles.listElement} key={elem}>{elem}<br></br></li>
        );
    });

    return (
        <ul className={sidebarStyles.list}>{listElements}</ul>
    );
}

const SidebarResume = (props) => {

    return (
        <div className={sidebarStyles.sidebarContainer}>
            <Header text='Contact' />
            <SubHeader text='Email' />
            <List>
                noahtal@umich.edu
            </List>
            <SubHeader text='Phone' />
            <List>
                206.617.2332
            </List>
            <SubHeader text='Location' />
            <List>
                Seattle, Washington
            </List>
            <Header text='Tools / Skills' />
            <List>
            HTML / CSS+
            JavaScript+
            ReactJS+
            GatsbyJS+
            Ruby+
            Python
            </List>
            <List>
            Figma+
            Adobe XD+
            Adobe Photoshop+
            Facebook Business
            </List>
            <List>
            Data Analysis+
            Digital Marketing+
            Wireframing+
            Prototyping
            </List>
        </div>
    );
}

export default SidebarResume