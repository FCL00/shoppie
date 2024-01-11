import React from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUser,
    faCartFlatbed,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";
const SideBar = () => {
    return (
        <div className="sideBarContainer">
            <Link className="sideBarLink" href="/">
                <FontAwesomeIcon className="link-icon" icon={faHouse} />
                <span>Home</span>
            </Link>
            <Link className="sideBarLink" href="/profile">
                <FontAwesomeIcon className="link-icon" icon={faUser} />
                <span>Profile</span>
            </Link>
            <Link className="sideBarLink" href="/product">
                <FontAwesomeIcon className="link-icon" icon={faCartFlatbed} />
                <span>Products</span>
            </Link>
        </div>
    );
};

export default SideBar;
