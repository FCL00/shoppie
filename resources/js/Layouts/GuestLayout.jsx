import React, { useState } from "react";
import "./GuestLayout.css";
import { usePage } from "@inertiajs/react";
import { Alert, AlertDescription, AlertTitle } from "@/shadcn/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";
import Navbar from "@/Components/NavBar/Navbar";
import SideBar from "@/Components/Sidebar/SideBar";
import Footer from "@/Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faQuestion,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
const GuestLayout = ({ children }) => {
    const { flash } = usePage().props;
    const [close, setClose] = useState();
    return (
        <>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <aside className="sidebar">
                    <SideBar />
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

export default GuestLayout;
