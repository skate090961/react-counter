import React from 'react'
import {SetCounter} from "../SetCounter/SetCounter"
import {ResultCounter} from "../ResultCounter/ResultCounter"
import s from './Counter.module.css'

export const Counter = () => {
    return (
        <div className={s.main}>
            <SetCounter/>
            <ResultCounter/>
        </div>
    )
}
