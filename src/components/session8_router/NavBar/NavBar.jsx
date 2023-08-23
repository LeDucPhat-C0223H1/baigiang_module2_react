import { Padding } from "@mui/icons-material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    const navlinkstyle = ({ isActive }) => ({
        color: isActive ? "yellow" : "black"
    });
    return (
        <div
            style={{
                width: "full",
                display: "flex",
                gap: "40px",
                padding: "0 64px",
                fontWeight: "bold",
                height: "64px",
                backgroundColor: "pink",
                fontSize: "24px",
            }}
        >
            <NavLink style={navlinkstyle} to={"/"}>Home</NavLink>
            <NavLink style={navlinkstyle} to={"/shop"}>Shop</NavLink>

            <Link to={"/about"}>About</Link>
            <Link to={"/about/aboutRA"}>AboutRA</Link>
            <Link to={"/about/aboutRS"}>AboutRs</Link>

            {/* <select name="" id="">
          <option value="0" disabled selected ><Link to={'/about'} >About</Link></option>
          <option value="1"><Link to={'/about'} >AboutRA</Link></option>
          <option value="2"><Link to={'/about'} >AboutRS</Link></option>
        </select> */}
        </div>
    );
}
