import React, {ButtonHTMLAttributes} from 'react'
import s from './Button.module.css'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonType> = ({name, ...props}) => {
    return (
        <button {...props} className={s.button}>
            {name}
        </button>
    )
}

export default React.memo(Button)