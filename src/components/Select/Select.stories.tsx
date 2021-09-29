import React from 'react';
import {ComponentStory} from '@storybook/react';
import {Select} from "./Select";

export default {
    title: 'Components/Select',
    component: Select,
} ;


const Template: ComponentStory<typeof Select> = (args) => {
     return <Select {...args} />;
}

export const SelectChanging = Template.bind({});
SelectChanging.args = {
    item: [{title: 'none', value: '0'},{title: 'JS', value: '1'}, {title: 'React', value: '2'}, {title: 'CSS', value: '3'}],
}
;