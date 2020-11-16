import React from "react";
import { Menu, Icon, Image } from "semantic-ui-react";
import logo from "../../../assets/logo.png";
import { ThemeContext } from "../../../config/ThemeProvider";

import "./Sidebar.css";

const { Item } = Menu;

export default function SideBar({ items, vertical, onClick }) {
  const [activeItem, setActiveItem] = React.useState("");
  const { sideBar } = React.useContext(ThemeContext);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    //onClick
  };

  return (
    <Menu inverted={sideBar.inverted} color={sideBar.color} vertical={vertical}>
      <Item style={{ display: "flex" }}>
        <div>
          <h2>PentaBank</h2>
        </div>
        <div>
          <Image circular size="mini" src={logo}></Image>
        </div>
      </Item>
      {items.map((menu, key) =>
        Object.keys(menu).length ? (
          <Item
            key={key}
            name={menu.name}
            color={sideBar.itemColor ? sideBar.itemColor : "blue"}
            active={activeItem === menu.name}
            onClick={handleItemClick}>
            {menu.icon ? (
              <Icon name={menu.icon} color={sideBar.iconColor}></Icon>
            ) : (
              ""
            )}
            {menu.label}
          </Item>
        ) : (
          ""
        )
      )}
    </Menu>
  );
}
