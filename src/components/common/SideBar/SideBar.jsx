import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon, Image, Divider } from "semantic-ui-react";
import { ThemeContext } from "../../../config/ThemeProvider";
import logo from "../../../assets/logo.png";
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
    <Menu
      fluid
      borderless
      secondary
      inverted={sideBar.inverted}
      color={sideBar.color}
      vertical={vertical}>
      <Item style={{ display: "flex", height: 100 }}>
        <div>
          <h2 style={{ color: sideBar.headerColor }}>PentaBank</h2>
        </div>
        <div>
          <Image circular size="tiny" src={logo}></Image>
        </div>
      </Item>
      <Divider></Divider>
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

SideBar.propTypes = {
  items: PropTypes.array.isRequired,
  vertical: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
