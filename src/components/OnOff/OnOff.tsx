import React, {useState} from 'react'

type PropsType = {
    onClickOnOff: (on: boolean) => void
    statusOnOff: boolean
}

function OnOff(props: PropsType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.statusOnOff ? "lightgreen" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.statusOnOff ? "white" : "red",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.statusOnOff ? "green" : "red",
    }
    return (
        <div>
            <div onClick={() => props.onClickOnOff(true)} style={onStyle}>On</div>
            <div onClick={() => props.onClickOnOff(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}

export default OnOff

