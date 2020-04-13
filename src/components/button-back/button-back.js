import React from 'react'
import { Link } from 'gatsby'
// import ArrowIcon from '../../images/'
import buttonBackStyles from './button-back.module.scss'

const ButtonBack = (props) => {
    return (
        <Link to={props.url} className={buttonBackStyles.button}>
            {'<'}
        </Link>
    );
}

export default ButtonBack