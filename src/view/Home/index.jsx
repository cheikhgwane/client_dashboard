import React from "react";
import { Divider, Grid, Menu } from "semantic-ui-react";
import SideBar from "../../components/common/SideBar/SideBar";
import NavBar from "../../components/common/NavBar/NavBar";
import menu from "../../config/menu";

const { Row, Column } = Grid;
export default function HomeView() {
  return (
    <Grid celled>
      <Row>
        <Column tablet={4} mobile={2} computer={4}>
          <SideBar
            vertical={true}
            items={menu}
            onClick={() => console.log("clicked")}></SideBar>
        </Column>
        <Column tablet={12} mobile={14} computer={12}>
          <Row>
            <Menu secondary>
              <Menu.Menu position="right">
                <NavBar></NavBar>
              </Menu.Menu>
            </Menu>
            <Divider></Divider>
          </Row>
          <Row columns={11}>blabla</Row>
        </Column>
      </Row>
    </Grid>
  );
}
