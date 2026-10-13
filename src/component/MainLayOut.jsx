import React from "react";
import Footer from "./Footer";
import Navexample from "./Navexample";
import { Outlet } from "react-router";

function Mainlayout(){

    return <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
}
export default Mainlayout;