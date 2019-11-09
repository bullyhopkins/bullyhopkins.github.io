import React from "react"
import { NavLink } from "react-router-dom"

import "styles/components/header"

export default
class Header
extends React.Component {
    render() {
        return <>
            <header className="head-main">
                <div className="container">
                    <div className="head-flex">
                        <div className="logo-animation-wrap">
                            <NavLink
                                to="/"
                                exact
                                className="logo-head"
                            >
                                <div>
                                    <div className="bold-cube logo-cube cube1"></div>
                                    <div className="bold-cube logo-cube cube2"></div>
                                    <div className="thin-cube logo-cube cube3"></div>
                                    <div className="thin-cube logo-cube cube4"></div>
                                    M
                                </div>
                            </NavLink>
                        </div>
                        <div className="open-menu">
                            <div className="menu-line1 menu-line"></div>
                            <div className="menu-line2 menu-line"></div>
                            <div className="menu-line3 menu-line"></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    }
}