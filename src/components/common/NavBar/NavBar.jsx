import React from "react";
import { Icon, Label } from "semantic-ui-react";

import "./NavBar.css";

export default function NavBar({ items, onClick }) {
  return (
    <div className="navRoot">
      <div className="notif">
        <Icon style={{ marginTop: 15 }} size="large" name="bell outline"></Icon>
        <div className="notif_label">
          <Label size="mini" color="red" circular>
            10
          </Label>
        </div>
      </div>
      <div>
        <Icon style={{ marginTop: 15 }} size="large" name="user outline"></Icon>
      </div>
    </div>
  );
}
