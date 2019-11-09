import React from "react"

import "styles/views/homepage-sections/section1"

import { NavLink } from "react-router-dom"

export interface Section1Props {
    
}

export interface Section1State {
    
}

export default
class Section1
extends React.Component<Section1Props, Section1State> {
    render() {
        return <>
            <section className="section1 section">
                <div className="container">
                    <h1 className="sect1-title">
                        <p>
                            <span>M</span>odern
                        </p>
                        <p className="sect1-descr">
                            Digital Agency
                        </p>
                    </h1>
                    <div className="scroll-down">
                        <img 
                            src="/static/images/mainpage/down-arrow.svg" 
                            alt="arrow"
                        />
                    </div>
                </div>
            </section>
        </>
    }
}