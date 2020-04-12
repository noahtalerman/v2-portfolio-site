import React from 'react'
import buttonStyles from './button.module.scss'

const Button = (props) => {

    let className = buttonStyles.button;
    if (props.right) {
        className += ` ${buttonStyles.buttonRight}`
    } else if (props.left) {
        className += ` ${buttonStyles.buttonLeft}`
    }
    if (props.text) {
        className += ` ${buttonStyles.buttonText}`
    } else if (props.arrow) {
        className += ` ${buttonStyles.buttonArrow}`
    }

    return (
        <a className={className} href={props.url}>{props.content}</a>
    )
}

export default Button