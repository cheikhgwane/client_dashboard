import CreditCard from "./Card";


export default {
    title: "Cards/color",
    component: CreditCard,
    args: {

    }
}

const Template = args => <CreditCard {...args}></CreditCard>

export const blue_rose_dark = Template.bind({})
blue_rose_dark.args = {
    className: "blue_rose_dark",
    type: 0
}

export const blue_card = Template.bind({})
blue_card.args = {
    className: "blue_card",
    type: 1
}

export const rose_red = Template.bind({})
rose_red.args = {
    className: "rose_red",
    type: 2
}

export const green = Template.bind({})
green.args = {
    className: "green",
    type: 3
}

export const blue_rose_light = Template.bind({})
blue_rose_light.args = {
    className: "blue_rose_light",
    type: 4
}

export const gold = Template.bind({})
gold.args = {
    className: "gold",
    type: 5
}

export const black = Template.bind({})
black.args = {
    className: "black",
    type: 6
}
