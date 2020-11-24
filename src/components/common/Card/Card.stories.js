import Card from "./Card";


export default {
    title: "Cards/Card",
    component: Card,
    args: {

    }
}

const Template = args => <Card {...args}></Card>

export const blue_rose_dark = Template.bind({})
blue_rose_dark.args = {
    className: "blue_rose_dark"
}

export const blue_card = Template.bind({})
blue_card.args = {
    className: "blue"
}

export const rose_red = Template.bind({})
rose_red.args = {
    className: "rose_red"
}

export const green = Template.bind({})
green.args = {
    className: "green"
}

export const blue_rose_light = Template.bind({})
blue_rose_light.args = {
    className: "blue_rose_light"
}

export const gold = Template.bind({})
gold.args = {
    className: "gold"
}

export const black = Template.bind({})
black.args = {
    className: "black"
}
