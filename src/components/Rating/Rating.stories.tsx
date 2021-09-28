import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating, StarType} from './Rating';


export default {
    title: 'Components/Rating stories',
    component: Rating,
} ;


const Template: ComponentStory<typeof Rating> = (args) => {
    const [values, setValue] = useState<StarType>(0)
    return <Rating {...args} />;
}

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0,
    setStatus: (values)=> values,
};
export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    setStatus: (values)=> values,
};

export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    setStatus: (values)=> values,
};

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    setStatus: (values)=> values,
};

export const RatingChange: ComponentStory<typeof Rating> = (args) => {
    const [values, setValue] = useState<StarType>(0)
    return <Rating value={values} setStatus={setValue} />
}

