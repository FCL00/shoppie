import React from "react";
import "./MainLayout.css";
import Navbar from "@/Components/NavBar/Navbar";
import SideBar from "@/Components/Sidebar/SideBar";
import Footer from "@/Components/Footer/Footer";
const MainLayout = ({ children }) => {
    return (
        <>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <aside className="sidebar">
                    <SideBar />
                </aside>
                <section className="content">{children}</section>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
