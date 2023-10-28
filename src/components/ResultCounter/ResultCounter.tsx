import React from 'react'
import s from './ResultCounter.module.css'
import commonStyle from '../Counter/Counter.module.css'
import {Button} from "../UI/Button/Button";
import {ScreenType} from "../Counter/Counter";

type ResultCounterPopsType = {
    currentValue: number
    maxValue: number
    screen: ScreenType
    incValue: () => void
    resetValue: () => void
}

export const ResultCounter: React.FC<ResultCounterPopsType> = ({
                                                                   incValue,
                                                                   resetValue,
                                                                   screen,
                                                                   currentValue,
                                                                   maxValue
                                                               }) => {
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