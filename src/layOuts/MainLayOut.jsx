import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/homeComponent/Navbar";
import Footer from "../component/homeComponent/Footer";

function Mainlayout() {

    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
}
export default Mainlayout;