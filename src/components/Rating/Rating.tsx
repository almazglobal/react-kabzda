import React, {useState} from "react";

export type StarType =  0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    value: StarType
    setStatus: (idStar: StarType) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0}  setStatus={()=> props.setStatus(1)}/>
            <Star selected={props.value > 1}  setStatus={()=> props.setStatus(2)}/>
            <Star selected={props.value > 2}  setStatus={()=> props.setStatus(3)}/>
            <Star selected={props.value > 3}  setStatus={()=> props.setStatus(4)}/>
            <Star selected={props.value > 4}  setStatus={()=> props.setStatus(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setStatus: () => void

}

function Star(props: StarPropsType) {
    return <span
        onClick={()=> props.setStatus()}>{props.selected ? <b>star </b> : "star "}
    </span>

}
