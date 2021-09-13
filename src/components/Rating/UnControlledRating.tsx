import React, {useState} from "react";

type StarType =  0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    value?: StarType
}

export function UnControlledRating() {
    const [value, setValue] = useState<StarType>(0)
    const onClickHandler = (idStar: StarType) => {
        setValue(idStar)
    }
    return (
        <div>
            <Star selected={value > 0} id={1} onClickHandler={onClickHandler}/>
            <Star selected={value > 1} id={2} onClickHandler={onClickHandler}/>
            <Star selected={value > 2} id={3} onClickHandler={onClickHandler}/>
            <Star selected={value > 3} id={4} onClickHandler={onClickHandler}/>
            <Star selected={value > 4} id={5} onClickHandler={onClickHandler}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClickHandler: (value: StarType) => void
    id: StarType
}

function Star(props: StarPropsType) {
    return <span
        onClick={()=> props.onClickHandler(props.id)}>{props.selected ? <b>star </b> : "star "}
    </span>

}
