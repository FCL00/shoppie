import React from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faCartShopping,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const NavBarAuth = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1 className="">Shoppie</h1>
            </div>
            <div className="nav-link">
                <Link href="#">
                    <FontAwesomeIcon
                        className="w-[32px] h-[16px]"
                        icon={faMagnifyingGlass}
                    />
                    <span>Search</span>
                </Link>
                <Link href="#">
                    <FontAwesomeIcon
                        className="w-[32px] h-[16px]"
                        icon={faCartShopping}
                    />
                    <span>Cart</span>
                </Link>
                <Link href="#">
                    <FontAwesomeIcon
                        className="w-[32px] h-[16px]"
                        icon={faUser}
                    />
                    <span>Profile</span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBarAuth;
