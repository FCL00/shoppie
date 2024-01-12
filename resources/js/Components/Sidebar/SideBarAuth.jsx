import React from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUser,
    faCartFlatbed,
    faMoneyBillTransfer,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";

const SideBarAuth = () => {
    return (
        <div className="sideBarContainer">
            <Link className="sideBarLink" href="/">
                <FontAwesomeIcon className="link-icon" icon={faHouse} />
                <span>Home</span>
            </Link>
            <Link className="sideBarLink" href="/product">
                <FontAwesomeIcon className="link-icon" icon={faCartFlatbed} />
                <span>Products</span>
            </Link>
            <Link className="sideBarLink" href="#">
                <FontAwesomeIcon
                    className="link-icon"
                    icon={faMoneyBillTransfer}
                />
                <span>Transactions</span>
            </Link>
            <Link className="sideBarLink" href="#">
                <FontAwesomeIcon className="link-icon" icon={faCartShopping} />
                <span>Cart</span>
            </Link>
        </div>
    );
};

export default SideBarAuth;
