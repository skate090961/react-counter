import React, {ChangeEvent} from 'react'
import s from './SetCounter.module.css'
import commonStyle from "../Counter/Counter.module.css";
import {Button} from "../UI/Button/Button";
import {AiOutlineClear} from "react-icons/ai";
import {ScreenType} from "../Counter/Counter";

type SetCounterPopsType = {
    maxValue: number
    startValue: number
    screen: ScreenType
    isMaxValueValid: boolean
    isStartValueValid: boolean
    setSettings: () => void
    updateMaxValue: (value: number) => void
    updateStartValue: (value: number) => void
    setScreen: (screen: ScreenType) => void
    clearStartValue: () => void
    clearMaxValue: () => void
}

export const SetCounter: React.FC<SetCounterPopsType> = ({
                                                             setSettings,
                                                             startValue,
                                                             maxValue,
                                                             updateMaxValue,
                                                             updateStartValue,
                                                             clearStartValue,
                                                             clearMaxValue,
                                                             screen,
                                                             isMaxValueValid,
                                                             isStartValueValid
                                                         }) => {
    const isSetDisabled = screen === 'value' || screen === 'error'
    const isInputValueStyle = (isValid: boolean) => isValid ? `${s.input} ${s.input_error}` : s.input

    const maxValueUpdateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateMaxValue(Number(e.currentTarget.value))
    }
    const startValueUpdateHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateStartValue(Number(e.currentTarget.value))
    }

    return (
        <div className={commonStyle.counter}>
            <div className={commonStyle.screen}>
                <div className={s.screen_form}>
                    <div className={s.form_group}>
                        <span className={s.label}>start value:</span>
                        <div className={s.input_svg}>
                            <input
                                value={startValue}
                                onChange={startValueUpdateHandler}
                                className={isInputValueStyle(isStartValueValid)}
                                type="number"
                            />
                            <div>
                                <AiOutlineClear className={s.clear_icon} size={'30px'} onClick={clearStartValue}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.form_group}>
                        <span className={s.label}>max value:</span>
                        <div className={s.input_svg}>
                            <input
                                value={maxValue}
                                onChange={maxValueUpdateHandler}
                                className={isInputValueStyle(isMaxValueValid)}
                                type="number"
                            />
                            <AiOutlineClear className={s.clear_icon} size={'30px'} onClick={clearMaxValue}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={commonStyle.buttons}>
                <Button
                    name={'Set'}
                    onClick={setSettings}
                    disabled={isSetDisabled}
                />
            </div>
        </div>
    )
}