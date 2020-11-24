import CreditCard from "./Card";

export default {
    title: "Cards/data",
    component: CreditCard,
    args: {

    }
}

const Template = args => <CreditCard {...args}></CreditCard>
export const _CreditCard = Template.bind({})

_CreditCard.args = {
    className: "gold",
    type: 0
}