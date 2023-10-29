import React, {useEffect} from 'react'
import {SetCounter} from "../SetCounter/SetCounter"
import {ResultCounter} from "../ResultCounter/ResultCounter"
import s from './Counter.module.css'
import {useDispatch} from "react-redux";
import {updateMaxValueAC, updateStartValueAC} from "../../store/counterReducer/counterReducer";

export type ScreenType = 'tooltip' | 'error' | 'value'

export const Counter = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getMaxValue = localStorage.getItem('maxValue')
        const getStartValue = localStorage.getItem('startValue')

        if (getMaxValue) {
            const parsedMaxValue = JSON.parse(getMaxValue)
            dispatch(updateMaxValueAC(parsedMaxValue))
        }
        if (getStartValue) {
            const parsedStartValue = JSON.parse(getStartValue)
            dispatch(updateStartValueAC(parsedStartValue))
        }
    }, [])

    return (
        <main className={s.main}>
            <SetCounter/>
            <ResultCounter/>
        </main>
    )
}
