import React from "react"

import "styles/views/homepage-sections/section2"

export interface Section2State {
    counter: number
}

export default
class Section2
extends React.Component<any, Section2State> {

    state = {
        counter: 0
    }

    interval: number

    componentDidMount() {
        let { counter } = this.state

        this.interval = window.setInterval(() => {
            if(this.state.counter < 100) {
                this.setState({
                    counter: this.state.counter + 1
                })
            } else {
                window.clearInterval(this.interval)
            }
        }, 30)
    }

    render() {
        return <>
            <section className="section2 section">
                <div className="container">
                    <div className="sect2-flex">
                        <div className="sect2-title">
                            На каких <span>3</span> слонах
                            <p>стоит наша студия</p>
                        </div>
                        <div className="sect2-bottom">
                            <div className="sect2-counter-wrap">
                                <p className="sect2-count-title">Время</p>
                                <span className="sect2-counter">
                                    { this.state.counter }
                                </span>%
                            </div>
                            <div className="sect2-counter-wrap">
                                <p className="sect2-count-title">Качество</p>
                                <span className="sect2-counter">
                                    { this.state.counter }
                                </span>%
                            </div>
                            <div className="sect2-counter-wrap">
                                <p className="sect2-count-title">Результат</p>
                                <span className="sect2-counter">
                                    { this.state.counter }
                                </span>%
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}