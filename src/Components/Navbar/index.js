import React from "react";
import { NavbarWrapper } from "./style";
import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
        <React.Fragment>
            <NavbarWrapper>
                <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/battle">Battle</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/popular">Popular</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/search">Search</Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </NavbarWrapper>
        </React.Fragment>
    )
}
export default Navbar;