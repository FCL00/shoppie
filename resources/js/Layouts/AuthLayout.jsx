import React from "react";
import "./GuestLayout.css";
import { usePage } from "@inertiajs/react";
import { Alert, AlertDescription, AlertTitle } from "@/shadcn/ui/alert";
import NavBarAuth from "@/Components/NavBar/NavBarAuth";
import SideBarAuth from "@/Components/Sidebar/SideBarAuth";
import Footer from "@/Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faQuestion,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const AuthLayout = ({ children }) => {
    const { flash } = usePage().props;

    return (
        <>
            <div className="navbar">
                <NavBarAuth />
            </div>
            <div className="main">
                <aside className="sidebar">
                    <SideBarAuth />
                </aside>
                <section className="content">
                    {/* flash message */}
                    {flash.message && (
                        <div className="container flex justify-center">
                            <Alert className="max-w-sm text-white bg-[#121212] border-blue-900">
                                <FontAwesomeIcon
                                    className="w-4 h-4"
                                    icon={faQuestion}
                                    style={{ color: "#1e3a8a" }}
                                />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                    {flash.message}
                                </AlertDescription>
                            </Alert>
                        </div>
                    )}
                    {flash.success && (
                        <div className="container flex justify-center">
                            <Alert className="max-w-sm text-white border-emerald-500 bg-[#121212]">
                                <FontAwesomeIcon
                                    className="w-4 h-4 "
                                    icon={faCircleCheck}
                                    style={{ color: "#10b981" }}
                                />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                    {flash.success}
                                </AlertDescription>
                            </Alert>
                        </div>
                    )}
                    {flash.error && (
                        <div className="container flex justify-center">
                            <Alert className="max-w-sm text-white border-red-500 bg-[#121212]">
                                <FontAwesomeIcon
                                    className="w-4 h-4 "
                                    icon={faTriangleExclamation}
                                    style={{ color: "#dc2626" }}
                                />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                    {flash.error}
                                </AlertDescription>
                            </Alert>
                        </div>
                    )}
                    {children}
                </section>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
};

export default AuthLayout;
