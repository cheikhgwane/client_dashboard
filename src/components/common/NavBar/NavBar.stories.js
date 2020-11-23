import NavBar from "./NavBar";
import "./NavBar.css"

export default {
    title: 'Common/Navbar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <NavBar {...args} />

export const _NavBar = Template.bind({})