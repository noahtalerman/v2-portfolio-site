import React, {useEffect, useState} from 'react'
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
            <li className={sidebarStyles.listElement} key={elem}>
                <a className={sidebarStyles.listLink}>{elem}</a>
                <br></br>
            </li>
        );
    });

    return (
        <ol className={`${sidebarStyles.list} ${sidebarStyles.listTracks}`}>{listElements}</ol>
    );
}

const ListBooks = (props) => {

    const elements = props.children.split('+');
    const listElements = elements.map((elem, i) => {
        const bookInfo = elem.split('*');
        let title = bookInfo[0];
        const author = bookInfo[1];
        if (title.indexOf('✓') !== -1) {
            title = title.replace('✓', '');
            return (
                <li className={`${sidebarStyles.listElement} ${sidebarStyles.listBooksRead}`} key={elem}>
                    <a className={sidebarStyles.listLink}>{title}</a>{author}
                    <br></br>
                </li>
            );
        } else {
            return (
                <li className={sidebarStyles.listElement} key={elem}>
                    <a className={sidebarStyles.listLink}>{title}</a>{author}
                    <br></br>
                </li>
            );
        }
    });

    return (
        <ul className={`${sidebarStyles.list} ${sidebarStyles.listBooks}`}>{listElements}</ul>
    );
}

const SidebarMedia = () => {

    // const[className, setClassName] = useState({
    //     className: sidebarStyles.sidebarContainer
    // }) 

    // useEffect(() => {
    //     function handleResize() {
    //         const height = window.innerHeight;
    //         if (height < 700) {
    //             setClassName({
    //                 className: sidebarStyles.sidebarContainerScroll,
    //             })
    //         } else {
    //             setClassName({
    //                 className: sidebarStyles.sidebarContainer,
    //             })
    //         }
    //     } 
        
    //     window.addEventListener('resize', handleResize)

    //     return _ => {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // })

    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let pastWeek = new Date()
    pastWeek.setDate(pastWeek.getDate() - 7);
    const pastMonth = pastWeek.getMonth() + 1;
    const pastDay = pastWeek.getDate();

    return (
        <div className={sidebarStyles.sidebarContainer}>
            <div className={sidebarStyles.tracksContainer}>
                <Header text='Top Tracks' />
                <SubHeader text={`${pastMonth} / ${pastDay} - ${month} / ${day}`} />
                <ListTracks>
                    Alone Again+
                    Snowchild+
                    It Is Not Meant To Be
                </ListTracks>
            </div>
            <div className={sidebarStyles.booksContainer}>
                <Header text='Reading List' />
                <SubHeader text='Updated 4 / 8' />
                <ListBooks>
                    Hooked * by Nir Eyal and Ryan Hoover+
                    Misbehaving * by Richard Thaler+
                    ✓The Design of Everday Things *
                    by Don Norman+
                    ✓Thinking, Fast and Slow * by Daniel Kahneman+
                    ✓Nudge * by Richard Thaler
                </ListBooks>  
            </div>
        </div>
    );
}

export default SidebarMedia