import React from "react";
import { Card, Image } from "semantic-ui-react";
import cardConfig from "../../../config/card.config.js";
import "./Card.css";

const { Content, Description } = Card;

export default function CreditCard({
  type,
  cardNumber,
  expirationDate,
  className,
}) {
  const config = cardConfig.filter((val) => val.type == type)[0];
  console.log(config);
  return (
    <div className={`card ${config.color}`}>
      <div className="card_header">
        <h3>Penta Bank</h3>
      </div>
      <div className="card_content">
        <div>
          <img width={40} alt="" src={`/${config.chip}`}></img>
        </div>
        <div style={{ marginTop: 15 }}>5495 7381 3759 2321</div>
      </div>
      <div className="footer">
        <div style={{ marginLeft: "auto", order: 2 }}>
          <Image src={`/${config.vendor}`} size="mini"></Image>
        </div>
        <div className="exp_date">04/2025</div>
      </div>
    </div>
  );
}
