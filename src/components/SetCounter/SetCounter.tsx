import React from 'react'
import s from './SetCounter.module.css'
import commonStyle from "../Counter/Counter.module.css";
import {Button} from "../UI/Button/Button";
import {ScreenType} from "../Counter/Counter";
import {SettingForm} from "./SettingForm/SettingForm";

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

    return (
        <div className={commonStyle.counter}>
            <div className={commonStyle.screen}>
                <div className={s.settings_form}>
                    <SettingForm
                        formName={'start value'}
                        value={startValue}
                        onChangeValue={updateStartValue}
                        onClickClear={clearStartValue}
                        isValid={isStartValueValid}
                    />
                    <SettingForm
                        formName={'max value'}
                        value={maxValue}
                        onChangeValue={updateMaxValue}
                        onClickClear={clearMaxValue}
                        isValid={isMaxValueValid}
                    />
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