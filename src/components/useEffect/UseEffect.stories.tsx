import React, {useEffect, useState} from 'react'

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect( ()=> {
        console.log('tick')
        setInterval(()=> {
            setCounter((counter) => counter + 1)
        }, 1000)
    }, [])

    return <>
    hello, {counter}
        <button onClick={()=> setCounter(counter+1)}>+</button>
    </>
}