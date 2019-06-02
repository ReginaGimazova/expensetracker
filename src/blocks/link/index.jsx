import React from "react";
import "./link.css";

const Link = ({link, text}) =>
    <a href={link} className="link">{text}</a>;

export default Link;
