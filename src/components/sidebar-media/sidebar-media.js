import React from 'react'
import sidebarStyles from './sidebar-resume.module.scss'

const Header = (props) => {
    return (
        <h3 className={sidebarStyles.header}>{props.text}</h3>
    );
}

const SubHeaderResume = (props) => {
    return (
        <h4 className={sidebarStyles.subHeaderResume}>{props.text}</h4>
    );
}

const SubHeaderMedia = (props) => {
    return (
        <h4 className={sidebarStyles.subHeaderMedia}>{props.text}</h4>
    );
}

const ListResume = (props) => {
    const listElements = React.Children.map(props.children, (child, i) => {
        return (
            <li className={sidebarStyles.listElementResume}>{child.props.children}</li>
        );
    });

    return (
        <ul className={sidebarStyles.listResume}>{listElements}</ul>
    );
}

const ListTracks = (props) => {
    const listElements = React.Children.map(props.children, (child, i) => {
        return (
            <li className={sidebarStyles.listElementTracks}>
                <a>{child.props.children}</a>
            </li>
        );
    });

    return (
        <ol className={sidebarStyles.listResume}>{listElements}</ol>
    );
}

const ListBooks = (props) => {
    const listElements = React.Children.map(props.children, (child, i) => {
        return (
            <li className={sidebarStyles.listElementBooks}>
                <a>{child.props.children}</a>
            </li>
        );
    });

    return (
        <ul className={sidebarStyles.listResume}>{listElements}</ul>
    );
}

const SidebarMedia = (props) => {
    const elements = React.Children.map(props.children, (child, i) => {
        
    });

    return (
        <div className={sidebarStyles.sidebarContainer}>
            {elements}
        </div>
    );
}

export default SidebarMedia