import React from 'react'

type ItemType = {
    title: string
    value: any
}

type AccordionType = {
    title: string
    collapsed: boolean
    onClickHandler: () => void
    item: ItemType[]
    onClick: (value: any)=> void
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.title}
                            onClickHandler={props.onClickHandler} />
            {!props.collapsed && <AccordionBody item={props.item} onClick={props.onClick}/>}
        </div>
    )
}


type AccordionTitleProps = {
    title: string
    onClickHandler: () => void
}

export function AccordionTitle(props: AccordionTitleProps) {
    return (
        <h3 onClick={() => props.onClickHandler()}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    item: ItemType[]
    onClick: (value: any)=> void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.item.map((item, index) => <li onClick={()=> props.onClick(item.value)} key={index}>{item.title}</li>)}
        </ul>
    )
}