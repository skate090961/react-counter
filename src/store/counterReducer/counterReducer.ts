export type ScreenType = 'tooltip' | 'error' | 'value'

export type CounterStateType = {
    startValue: number
    maxValue: number
    currentValue: number
    screen: ScreenType
}
type ActionTypes =
    ReturnType<typeof incCurrentValueAC> |
    ReturnType<typeof resetCurrentValueAC> |
    ReturnType<typeof updateStartValueAC> |
    ReturnType<typeof updateMaxValueAC> |
    ReturnType<typeof changeScreenAC> |
    ReturnType<typeof resetStartValueAC> |
    ReturnType<typeof resetMaxValueAC> |
    ReturnType<typeof updateCurrentValueAC>

const counterState: CounterStateType = {
    startValue: 0,
    maxValue: 1,
    currentValue: 0,
    screen: 'tooltip'
}

export const counterReducer = (state: CounterStateType = counterState, action: ActionTypes): CounterStateType => {
    switch (action.type) {
        case 'INCREMENT-CURRENT-VALUE':
            return {...state, currentValue: state.currentValue + action.payload}
        case 'RESET-CURRENT-VALUE':
            return {...state, currentValue: state.startValue}
        case 'UPDATE-START-VALUE':
            return {...state, startValue: action.payload}
        case 'UPDATE-MAX-VALUE':
            return {...state, maxValue: action.payload}
        case 'UPDATE-CURRENT-VALUE':
            return {...state, currentValue: state.startValue}
        case 'CHANGE-SCREEN-VALUE':
            return {...state, screen: action.screen}
        case 'RESET-START-VALUE':
            return {...state, startValue: 0}
        case 'RESET-MAX-VALUE':
            return {...state, maxValue: 1}
        default:
            return state
    }
}

export const incCurrentValueAC = (payload: number) => ({type: 'INCREMENT-CURRENT-VALUE', payload} as const)
export const resetCurrentValueAC = () => ({type: 'RESET-CURRENT-VALUE'} as const)
export const updateStartValueAC = (payload: number) => ({type: 'UPDATE-START-VALUE', payload} as const)
export const updateMaxValueAC = (payload: number) => ({type: 'UPDATE-MAX-VALUE', payload} as const)
export const updateCurrentValueAC = () => ({type: 'UPDATE-CURRENT-VALUE'} as const)
export const changeScreenAC = (screen: ScreenType) => ({type: 'CHANGE-SCREEN-VALUE', screen} as const)
export const resetStartValueAC = () => ({type: 'RESET-START-VALUE'} as const)
export const resetMaxValueAC = () => ({type: 'RESET-MAX-VALUE'} as const)