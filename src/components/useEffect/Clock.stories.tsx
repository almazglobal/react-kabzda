import React from 'react'
import {Clock} from "./Clock";

export default {
    title: 'Clock example',
    component: Clock
}

export const SimpleClock = () => {
    return <Clock isAnalog={false}/>
}