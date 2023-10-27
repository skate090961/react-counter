import React from 'react'
import './assets/styles/app_wrapper.css'
import {Counter} from "./components/Counter/Counter"

export const App = () => {
    return (
        <div className={'wrapper'}>
            <Counter/>
        </div>
    )
}
