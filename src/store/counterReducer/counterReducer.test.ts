import {
    changeScreenAC,
    counterReducer,
    CounterStateType,
    incCurrentValueAC,
    resetMaxValueAC,
    resetStartValueAC,
    updateCurrentValueAC,
    updateMaxValueAC,
    updateStartValueAC
} from "./counterReducer";

let counterState: CounterStateType

beforeEach(() => {
    counterState = {
        startValue: 5,
        maxValue: 10,
        currentValue: 7,
        screen: 'tooltip'
    }
})

test('current value of counter should be increment correctly', () => {
    const endState = counterReducer(counterState, incCurrentValueAC(1))
    expect(endState.currentValue).toBe(8)
})

test('start value of counter should be update', () => {
    const newValue = 100500
    const endState = counterReducer(counterState, updateStartValueAC(newValue))
    expect(endState.startValue).toBe(newValue)
    expect(endState.maxValue).toBe(10)
})

test('max value of counter should be update', () => {
    const newValue = 100500
    const endState = counterReducer(counterState, updateMaxValueAC(newValue))
    expect(endState.maxValue).toBe(newValue)
    expect(endState.startValue).toBe(5)
})

test('current value of counter should be update', () => {
    const endState = counterReducer(counterState, updateCurrentValueAC())
    expect(endState.startValue).toBe(counterState.startValue)
    expect(endState.maxValue).toBe(10)
})

test('screen of counter should be changed', () => {
    const screen = 'error'
    const endState = counterReducer(counterState, changeScreenAC(screen))
    expect(endState.screen).toBe(screen)
})

test('start value of counter should be reset to initial value', () => {
    const endState = counterReducer(counterState, resetStartValueAC())
    expect(endState.startValue).toBe(0)
})

test('max value of counter should be reset to initial value', () => {
    const endState = counterReducer(counterState, resetMaxValueAC())
    expect(endState.maxValue).toBe(1)
})