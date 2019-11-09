import React from "react"

import "styles/views/homepage-sections/section4"

export interface Section4Props {

}

export interface Section4State {
    
}

export default
class Section4
extends React.Component<Section4Props, Section4State> {
    render() {
        return <>
            <section className="section4 section">
                <div className="container">
                    <div className="sect4-flex">
                        <div className="sect4-left">
                            <p className="sect4-title">
                                Мы используем
                                <br/>
                                множество 
                                <br/>
                                <span>технологий</span>
                            </p>
                        </div>
                        <div className="sect4-right">
                            <div className="sect4-right-item">
                                <span className="sect4-right-title">Desing</span>
                                <p className="sect4-tech-name">Sketch</p>
                                <p className="sect4-tech-name">Figma</p>
                                <p className="sect4-tech-name">InVision</p>
                                <p className="sect4-tech-name">Photoshop</p>
                            </div>
                            <div className="sect4-right-item">
                                <span className="sect4-right-title">Front-end</span>
                                <p className="sect4-tech-name">HTML</p>
                                <p className="sect4-tech-name">CSS</p>
                                <p className="sect4-tech-name">JavaScript</p>
                                <p className="sect4-tech-name">React JS</p>
                            </div>
                            <div className="sect4-right-item">
                                <span className="sect4-right-title">Back-end</span>
                                <p className="sect4-tech-name">Python</p>
                                <p className="sect4-tech-name">Asp.net</p>
                                <p className="sect4-tech-name">Php</p>
                                <p className="sect4-tech-name">NodeJS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}