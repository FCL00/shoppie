import React from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUser,
    faCartFlatbed,
    faBoxesPacking,
    faCartPlus,
    faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";

import japan from "@/assets/japan.png";
import house from "@/assets/house.png";

const SideBar = () => {
    return (
        <div className="sideBarContainer space-y-4">
            <Link className="sideBarLink" href="/">
                <FontAwesomeIcon className="link-icon" icon={faHouse} />
                <span>Home</span>
            </Link>
            <Link className="sideBarLink" href="/product">
                <FontAwesomeIcon className="link-icon" icon={faCartFlatbed} />
                <span>Products</span>
            </Link>
            <Link className="sideBarLink" href="/product">
                <FontAwesomeIcon className="link-icon" icon={faCartPlus} />
                <span>Cart</span>
            </Link>
            <Link className="sideBarLink" href="/product">
                <FontAwesomeIcon className="link-icon" icon={faBoxesPacking} />
                <span>Orders</span>
            </Link>

            <Link className="sideBarLink" href="/product">
                <FontAwesomeIcon className="link-icon" icon={faReceipt} />
                <span>Transaction</span>
            </Link>
        </div>
    );
};

export default SideBar;
