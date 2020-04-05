import React from 'react'
import sidebarStyles from './sidebar.module.scss'

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

const Paragraph = (props) => {
    return (
        <p className={sidebarStyles.paragraph}>{props.text}</p>
    );
}

const Link = (props) => {
    return (
        <a href={props.href} className={sidebarStyles.link}>{props.text}</a>
    );
}

const Sidebar = (props) => {
    const elements = React.Children.map(props.children, (child, i) => {
        if (child.type === 'h3') {
            return (
                <Header text={child.props.children} />
            );
        } else if (child.type === 'h4') {
            return (
                <SubHeader text={child.props.children} />
            );
        } else if (child.type === 'p') {
            return (
                <Paragraph text={child.props.children} />
            );
        } else if (child.type === 'a') {
            return (
                <Link href={props.href} text={child.props.children} />
            );
        }
    });

    return (
        <div className={sidebarStyles.sidebarContainer}>
            {elements}
        </div>
    );
}

export default Sidebar