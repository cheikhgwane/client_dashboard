import HomeView from ".";


export default {
    title: "View/common",
    component: HomeView,
    args: {

    }
}

const Template = args => <HomeView {...args}></HomeView>

export const index = Template.bind({})