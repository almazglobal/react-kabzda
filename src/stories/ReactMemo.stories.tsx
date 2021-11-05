import React, {ChangeEvent, useMemo, useState} from 'react'

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    let resultA = 1
    let resultB = 1
useMemo(() => {
    for (let i = 1; i <= a; i++) {
        let a = 0
        while (a < 1000000000) {
            a++
        }
        resultA *= i
    }
}, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    const onChangeValueA = (e: ChangeEvent<HTMLInputElement>) => {
        setA(Number(e.currentTarget.value))
    }
    const onChangeValueB = (e: ChangeEvent<HTMLInputElement>) => {
        setB(Number(e.currentTarget.value))
    }
    return <>
        <input type="text" value={a} onChange={onChangeValueA} />
        <input type="text" value={b} onChange={onChangeValueB} />
        <hr />
        <div>
            Result for a : {resultA}
        </div>
        <div>
            Result for b : {resultB}
        </div>
    </>
}