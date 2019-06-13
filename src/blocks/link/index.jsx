import React from 'react';
import {Link} from 'react-router-dom';
import "./link.css"

const CustomLink = ({children, path}) => <Link to={path} className="link">{children}</Link>;

export default CustomLink;
