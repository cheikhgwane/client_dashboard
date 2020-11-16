import SideBar from "./SideBar"
import { ThemeContext } from "../../../config/ThemeProvider";
import { theme } from "../../../config/theme";

export default {
  title: 'Common/Sidebar',
  component: SideBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

let fictures = [
  {
    label: "Overview",
    icon: "home",
    name: "overview",
  },
  {
    label: "Accounts",
    icon: "credit card",
    name: "accounts",
  },
  {
    label: "Invoices",
    icon: "copy outline",
    name: "invoices",
  },
];

const Template = (args) => <ThemeContext.Provider value={theme.light}>
  <SideBar {...args} />
</ThemeContext.Provider>

export const _Sidebar = Template.bind({})

const onClick = (item) => {
  console.log("item clicked")
}
_Sidebar.args = {
  items: fictures,
  vertical: true,
  onClick: onClick
}