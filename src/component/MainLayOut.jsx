import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Mainlayout(){

    return <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
}
export default Mainlayout;