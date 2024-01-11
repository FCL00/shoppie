import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";
import "./NavBar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1 className="">Shoppie</h1>
            </div>
            <div>
                <Link href="/login">
                    <FontAwesomeIcon
                        icon={faRightToBracket}
                        className="w-[32px] h-[16px]"
                    />
                    <span>Login</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
