import React from "react";
import "./Card.css";

export default function Card({ cardNumber, expirationDate, type, className }) {
  return <div className={`card ${className}`}></div>;
}
