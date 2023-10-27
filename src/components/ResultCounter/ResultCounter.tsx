import React from 'react'
import s from './ResultCounter.module.css'
import commonStyle from '../Counter/Counter.module.css'
import {Button} from "../UI/Button/Button";

export const ResultCounter = () => {
    return (
        <div className={commonStyle.counter}>
            <div className={commonStyle.screen}>
                <div className={s.screen_value}>
                    <span className={s.value}>0</span>
                </div>
            </div>
            <div className={commonStyle.buttons}>
                <Button name={'Inc'}/>
                <Button name={'Reset'}/>
            </div>
        </div>
    )
}