import React, {useCallback} from 'react'
import s from './ResultCounter.module.css'
import commonStyle from '../Counter/Counter.module.css'
import Button from "../UI/Button/Button";
import {ScreenType} from "../Counter/Counter";
import {incCurrentValueAC, updateCurrentValueAC} from "../../store/counterReducer/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";

export const ResultCounter = () => {
    const maxValue = useSelector<RootReducerType, number>(state => state.counter.maxValue)
    const screen = useSelector<RootReducerType, ScreenType>(state => state.counter.screen)
    const currentValue = useSelector<RootReducerType, number>(state => state.counter.currentValue)
    const dispatch = useDispatch()
    const incValue = useCallback(() => dispatch(incCurrentValueAC(1)), [dispatch])
    const resetValue = useCallback(() => dispatch(updateCurrentValueAC()), [dispatch])

    const isDisableButtons = screen === 'tooltip' || screen === 'error'

    const isCurrentMaxValue = maxValue === currentValue
    const maxValueStyle = isCurrentMaxValue ? `${s.value} ${s.max_value}` : s.value

    const switchScreen = (screen: ScreenType) => {
        switch (screen) {
            case "tooltip":
                return <span className={s.tooltip_message}>Enter values and press 'set'</span>
            case "error":
                return <span className={s.error_message}>Incorrect Value!</span>
            case "value":
                return <span className={maxValueStyle}>{currentValue}</span>
        }
    }
    const currentScreen = switchScreen(screen)

    return (
        <div className={commonStyle.counter}>
            <div className={commonStyle.screen}>
                <div className={s.screen_value}>
                    {currentScreen}
                </div>
            </div>
            <div className={commonStyle.buttons}>
                <Button
                    name={'Inc'}
                    onClick={incValue}
                    disabled={isDisableButtons || isCurrentMaxValue}
                />
                <Button
                    name={'Reset'}
                    onClick={resetValue}
                    disabled={isDisableButtons}
                />
            </div>
        </div>
    )
}