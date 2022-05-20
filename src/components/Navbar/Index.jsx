import React from "react";
import Logo from "../../assets/logo.png";
import "./style.css";


export default function Navbar(params) {
    return (
        <>
        <div className="Navbar">
                <div className="container">
                    <img src={Logo} alt="Logo" />
                    <ul className="links">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Properties</a>
                        </li>
                        <li>
                            <a>Contacts</a>
                        </li>
                    </ul>
                    <button>sign in</button>
                </div>
            </div>
        </>
    )
}