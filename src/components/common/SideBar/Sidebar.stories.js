import SideBar from "./SideBar"

export default {
    title: 'Common/Sidebar',
    component: SideBar,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  let fictures = [
    {
      label: "Home",
      icon: "home",
      name: "home",
    },
    {},
  ];

  const Template = (args) => <SideBar {...args} />;

  export const _Sidebar = Template.bind({})

  _Sidebar.args ={
      items:fictures,
      vertical:true
  }