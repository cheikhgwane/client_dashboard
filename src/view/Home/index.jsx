import React from "react";
import { Divider, Grid, Menu } from "semantic-ui-react";
import SideBar from "../../components/common/SideBar/SideBar";
import NavBar from "../../components/common/NavBar/NavBar";

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

const { Row, Column } = Grid;
export default function HomeView() {
  return (
    <Grid celled>
      <Row>
        <Column width={3}>
          <SideBar
            vertical={true}
            items={fictures}
            onClick={() => console.log("clicked")}></SideBar>
        </Column>
        <Column width={13}>
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
