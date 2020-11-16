import React from "react";
import { Menu, Icon, Button } from "semantic-ui-react";

const { Item } = Menu;

export default function SideBar({ items, vertical }) {
  const [activeItem, SetActiveItem] = React.useState("");

  return (
    <Menu vertical={vertical}>
      <Item>
        <Button>blbla</Button>
      </Item>
      {/* {items.map((menu, key) =>
        Object.keys(menu).length ? (
          <Item
            key={key}
            name={menu.name}
            active={activeItem === "inbox"}
            onClick={() => SetActiveItem("inbox")}>
            {menu.icon ? <Icon name={menu.icon}></Icon> : ""}
            {menu.label}
          </Item>
        ) : (
          ""
        )
      )} */}
    </Menu>
  );
}
