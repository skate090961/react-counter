import React, {useEffect} from 'react'
import s from './SetCounter.module.css'
import commonStyle from "../Counter/Counter.module.css";
import {Button} from "../UI/Button/Button";
import {ScreenType} from "../Counter/Counter";
import {SettingForm} from "./SettingForm/SettingForm";
import {useDispatch, useSelector} from "react-redux";
import {
    changeScreenAC,
    resetMaxValueAC,
    resetStartValueAC,
    updateCurrentValueAC,
    updateMaxValueAC,
    updateStartValueAC
} from "../../store/counterReducer/counterReducer";
import {RootReducerType} from "../../store/store";

export const SetCounter = () => {
    const startValue = useSelector<RootReducerType, number>(state => state.counter.startValue)
    const maxValue = useSelector<RootReducerType, number>(state => state.counter.maxValue)
    const screen = useSelector<RootReducerType, ScreenType>(state => state.counter.screen)

    useEffect(() => {
        const currentScreen = isMaxValueValid || isStartValueValid ? 'error' : 'tooltip'
        dispatch(changeScreenAC(currentScreen))
    }, [startValue, maxValue])

    const dispatch = useDispatch()
    const setSettings = () => {
        dispatch(updateCurrentValueAC())
        dispatch(changeScreenAC('value'))
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }
    const updateMaxValue = (value: number) => dispatch(updateMaxValueAC(value))
    const updateStartValue = (value: number) => dispatch(updateStartValueAC(value))
    const clearStartValue = () => dispatch(resetStartValueAC())
    const clearMaxValue = () => dispatch(resetMaxValueAC())

    const isMaxValueValid = maxValue <= 0 || startValue === maxValue
    const isStartValueValid = startValue < 0 || startValue >= maxValue
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