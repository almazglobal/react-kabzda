import React, {useState} from 'react'

type AccordionType = {
    title: string
    collapsed?: boolean
}

export function UnControlledAccordion(props: AccordionType) {

    const [collapsed, setCollapsed] = useState(true)
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.title} onClickHandler={onClickHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onClickHandler: () => void


}
export function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={() => props.onClickHandler()}>{props.title}</h3>
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