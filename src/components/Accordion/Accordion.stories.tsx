import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'Components/Accordion stories',
    component: Accordion,
} ;

const arrObj = [{title: 'JS', value: 1}, {title: 'React', value: 2}, {title: 'CSS', value: 3}]

const Template: ComponentStory<typeof Accordion> = (args) => {
    return <Accordion {...args} />;
}

export const AccordionDefault = Template.bind({});
AccordionDefault.args = {
    title: 'Name',
    collapsed: false,
    item: arrObj,
};

const onClick = (id: any) => {
    alert(`look - ${id}`)
}
export const AccordionCollapsed = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion onClick={onClick} item={arrObj} title={"Name"} collapsed={collapsed} onClickHandler={() => setCollapsed(!collapsed)} />
    )
}