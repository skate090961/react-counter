import React, {ButtonHTMLAttributes} from 'react'
import s from './Button.module.css'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonType> = ({name, ...props}) => {
    return (
        <button className={s.button}>
            {name}
        </button>
    )
}