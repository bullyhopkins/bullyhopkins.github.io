import React from "react"
// import { Swiper, Navigation, Pagination } from "swiper/dist/js/swiper.esm"
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom"

import "styles/views/homepage-sections/section3"

export interface Section3Props {

}

export interface Section3State {
    activeSlide: number,
    currentStep: number
}

export interface StepContent {
    title: string,
    descr: string
}

export default
class Section3
extends React.Component {

    state = {
        activeSlide: 0,
        currentStep: 0
    }

    stepData: StepContent[] = [
        {
            title: "Анализ ваших желаний",
            descr: "Мы создаем портрет ваших желаний, для дальнейшего решения задач, с которыми нам предстоит справится",
        },
        {
            title: "Анализ еще чего-то",
            descr: "Мы создаем портрет ваших желаний, для дальнейшего решения задач"
        },
        {
            title: "Title",
            descr: "Мы создаем портрет ваших желаний, для дальнейшего решения задачsagasgagasgsaf"
        }
    ]

    sliderImg: string[] = [
        "/static/images/mainpage/sect3-slide1.jpg",
        "/static/images/mainpage/sect3-slide2.jpg",
        "/static/images/mainpage/sect3-slide3.jpg",
    ]

    nextStep = (event: React.MouseEvent) => {

        let { currentStep } = this.state

        this.setState({
            currentStep: currentStep >= this.stepData.length - 1
            ? 0
            : currentStep + 1
        })
    }

    prevStep = (event: React.MouseEvent) => {

        let { currentStep } = this.state

        this.setState({
            currentStep: currentStep <= 0 
                ? this.stepData.length - 1
                : currentStep - 1
        })
    }

    render() {

        let { currentStep } = this.state
        let { stepData } = this

        return <>
            <section className="section3 section">
                <div className="conteiner">
                    <div className="sect3-flex">
                        <div className="sect3-left">
                            <div className="sect3-step-content">
                                <span className="sect3-step-title">
                                    { stepData[currentStep].title }
                                </span>
                                {/* <span className="sect3-step-num">
                                    { i < 10 ? `0${i+1}` : i }
                                </span> */}
                                <p className="sect3-step-descr">
                                    { stepData[currentStep].descr }
                                </p>
                            </div>
                            <div className="sect3-arrows-wrap">
                                <div
                                    className="slider-arrow-next"
                                    onClick={this.nextStep}
                                >
                                    <img 
                                        src="/static/images/mainpage/slider-arrow.svg" 
                                        alt="top-arrow"
                                    />
                                </div>
                                <div
                                    className="slider-arrow-prev"
                                    onClick={this.prevStep}
                                >
                                    <img 
                                        src="/static/images/mainpage/slider-arrow.svg" 
                                        alt="bottom-arrow"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sect3-slider-wrap">
                            <div className="sect3-slider">
                                <img 
                                    src={this.sliderImg[currentStep]} 
                                    alt="image"
                                    className="sect3-slide"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}