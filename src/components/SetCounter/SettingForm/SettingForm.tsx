import React, {ChangeEvent} from 'react';
import {AiOutlineClear} from "react-icons/ai";
import s from './SettingForm.module.css'

type SettingFormPropsType = {
    formName: string
    value: number
    onChangeValue: (value: number) => void
    onClickClear: () => void
    isValid: boolean
}

const SettingForm: React.FC<SettingFormPropsType> = ({
                                                                formName,
                                                                value,
                                                                onChangeValue,
                                                                onClickClear,
                                                                isValid
                                                            }) => {
    const isInputValueStyle = (isValid: boolean) => isValid ? `${s.input} ${s.input_error}` : s.input

    const onChangeValueCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeValue(Number(e.currentTarget.value))
    }

    return (
        <div className={s.setting_form}>
            <span className={s.label}>{formName}:</span>
            <div className={s.input_svg}>
                <input
                    value={value}
                    onChange={onChangeValueCallback}
                    className={isInputValueStyle(isValid)}
                    type="number"
                />
                <div>
                    <AiOutlineClear className={s.clear_icon} size={'30px'} onClick={onClickClear}/>
                </div>
            </div>
        </div>
    )
}

export default React.memo(SettingForm)