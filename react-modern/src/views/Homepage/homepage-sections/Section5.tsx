import React from "react"
import { Link } from "react-router-dom"

import "styles/views/homepage-sections/section5"

export interface Section5Props {

}

export interface Section5State {

}

export default
class Section5
extends React.Component<Section5Props, Section5State> {
    render() {
        return <>
            <section className="section5 section">
                <div className="container">
                    <div className="sect5-flex">
                        <div className="sect5-left">
                            <img src="/static/images/mainpage/sect3-slide1.jpg" alt="image"/>
                        </div>
                        <div className="sect5-right">
                            <div className="sect5-title">
                                <span>Что вы получите</span>
                                <br/>
                                работая с нами?
                            </div>
                            <p className="sect5-descr">
                                Вы будете обеспечены всем вниманием с нашей стороны, и тем самым почувствуете себя в комфорте.
                            </p>
                            <Link
                                to="/"
                                className="detailed-link"
                            >
                                Узнать больше
                            </Link>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    }
}