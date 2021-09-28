import React, {ChangeEvent, useRef, useState} from 'react'

export default {
    title: 'input',

}

export const UncontrolledInput = () => <input />

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (<>
            <input value={value}
                   onChange={onChangeHandler} />
            --- {value}
        </>

    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const saveValueHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (<>
            <input ref={inputRef} />
            <button onClick={saveValueHandler}>save</button>
            --- actual value: {value}
        </>

    )
}

export const ControlledInputWithFixedValue = () => <input value={"FIX"} />

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <input value={parentValue}
               onChange={onChangeHandler} />
    )

}

export const ControlledCheckbox = () => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input type="checkbox"
               onChange={onChangeHandler} />
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
       <select value={parentValue} onChange={onChangeHandler}>
           <option>none</option>
           <option value={"1"}>JS</option>
           <option value={"2"}>React</option>
           <option value={"3"}>CSS</option>
       </select>
    )
}