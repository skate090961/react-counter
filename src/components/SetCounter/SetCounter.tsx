import React from 'react'
import s from './SetCounter.module.css'
import commonStyle from "../Counter/Counter.module.css";
import {Button} from "../UI/Button/Button";
import {AiOutlineClear} from "react-icons/ai";

export const SetCounter = () => {
    return (
        <div className={commonStyle.counter}>
            <div className={commonStyle.screen}>
                <div className={s.screen_form}>
                    <div className={s.form_group}>
                        <span className={s.label}>start value:</span>
                        <div className={s.input_svg}>
                            <input className={s.input} type="number"/>
                            <div><AiOutlineClear className={s.clear_icon} size={'30px'}/></div>
                        </div>
                    </div>
                    <div className={s.form_group}>
                        <span className={s.label}>max value:</span>
                        <div className={s.input_svg}>
                            <input className={s.input} type="number"/>
                            <AiOutlineClear className={s.clear_icon} size={'30px'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={commonStyle.buttons}>
                <Button name={'Set'}/>
            </div>
        </div>
    )
}