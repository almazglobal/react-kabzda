import React from 'react'

type AccordionType = {
    title: string
    collapsed: boolean
    onClickHandler: () => void
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.title} onClickHandler={props.onClickHandler}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitleProps = {
    title: string
    onClickHandler: () => void
}
export function AccordionTitle(props: AccordionTitleProps) {
    return (
        <h3 onClick={()=> props.onClickHandler()}>{props.title}</h3>
    )
}

export function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}