import React from 'react'
import buttonStyles from './button.module.scss'

const Button = (props) => {

    let className = buttonStyles.button;
    if (props.right) {
        className += ` ${buttonStyles.buttonRight}`
    } else if (props.left) {
        className += ` ${buttonStyles.buttonLeft}`
    }

    return (
        <a className={className} href={props.href}>{props.content}</a>
    )
}

export default Button