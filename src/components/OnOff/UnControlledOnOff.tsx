import React, {useState} from 'react'

type PropsType = {
    on: boolean
}

function UnControlledOnnOff() {
    const [statusOnOff, setStatusOnOff] = useState(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: statusOnOff ? "lightgreen" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: statusOnOff ? "white" : "red",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: statusOnOff ? "green" : "red",
    }
    return (
        <div>
            <div onClick={() => setStatusOnOff(true)} style={onStyle}>On</div>
            <div onClick={() => setStatusOnOff(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}

export default UnControlledOnnOff

