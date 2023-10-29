import React, {useEffect, useState} from 'react'
import {SetCounter} from "../SetCounter/SetCounter"
import {ResultCounter} from "../ResultCounter/ResultCounter"
import s from './Counter.module.css'

export type ScreenType = 'tooltip' | 'error' | 'value'

export const Counter = () => {
    const START_VALUE = 0
    const MAX_VALUE = 1

    const [startValue, setStartValue] = useState<number>(START_VALUE)
    const [maxValue, setMaxValue] = useState<number>(MAX_VALUE)
    const [currentValue, setCurrentValue] = useState<number>(0)
    const [screen, setScreen] = useState<ScreenType>('tooltip')

    //localstorage
    useEffect(() => {
        const getMaxValue = localStorage.getItem('maxValue');
        const getStartValue = localStorage.getItem('startValue');

        if (getMaxValue) {
            const parsedMaxValue = JSON.parse(getMaxValue);
            setMaxValue(parsedMaxValue);
        }

        if (getStartValue) {
            const parsedStartValue = JSON.parse(getStartValue);
            setStartValue(parsedStartValue);
        }
    }, [])

    useEffect(() => {
        setScreen(isMaxValueValid || isStartValueValid ? 'error' : 'tooltip')
    }, [startValue, maxValue])

    const isMaxValueValid = maxValue <= 0 || startValue === maxValue
    const isStartValueValid = startValue < 0 || startValue >= maxValue

    const setSettings = () => {
        setCurrentValue(startValue)
        setScreen('value')
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }
    const incValue = () => {
        setCurrentValue(prevState => prevState + 1)
    }
    const resetValue = () => {
        setCurrentValue(startValue)
    }
    const updateMaxValue = (value: number) => {
        setMaxValue(value)
    }
    const updateStartValue = (value: number) => {
        setStartValue(value)
    }
    const clearStartValue = () => {
        setStartValue(START_VALUE)
    }
    const clearMaxValue = () => {
        setMaxValue(MAX_VALUE)
    }

    return (
        <main className={s.main}>
            <SetCounter
                startValue={startValue}
                maxValue={maxValue}
                screen={screen}
                isMaxValueValid={isMaxValueValid}
                isStartValueValid={isStartValueValid}

                setSettings={setSettings}
                updateMaxValue={updateMaxValue}
                updateStartValue={updateStartValue}
                clearStartValue={clearStartValue}
                clearMaxValue={clearMaxValue}
                setScreen={setScreen}
            />
            <ResultCounter
                currentValue={currentValue}
                maxValue={maxValue}
                screen={screen}

                incValue={incValue}
                resetValue={resetValue}
            />
        </main>
    )
}
