import React from "react"

import "styles/views/homepage-sections/section6"

export interface Section6Props {

}

export interface Section6State {

}

export type WorksData = {
    projName: string,
    descr: string
}

export default
class Section6
extends React.Component<Section6Props, Section6State> {

    ourWorksData: WorksData[] = [
        {
            projName: "<span>C</span>leaning",
            descr: "<p><span>К</span>лининговая компания</p> - основанная в 2007 году осовободившая людей от изнурительной уборки"
        },
        {
            projName: "<span>C</span>leaning1",
            descr: "<p><span>К</span>лининговая компания1</p> - основанная в 2007 году осовободившая людей от изнурительной уборки"
        },
        {
            projName: "<span>C</span>leaning2",
            descr: "<p><span>К</span>лининговая компания2</p> - основанная в 2007 году осовободившая людей от изнурительной уборки"
        },
    ] 

    render() {
        return <>
            <section className="section6 section">
                <div className="container-fluid">
                    <div className="sect6-head">
                        <span className="sect6-title">Кейсы</span>
                        <img src="/static/images/mainpage/cases-cube.svg" alt="cube"/>
                    </div>
                    <div className="sect6-content">
                        <div 
                            className="sect6-project-name"
                            dangerouslySetInnerHTML={{__html: this.ourWorksData[0].projName}}
                        />
                        <div 
                            className="sect6-proj-descr"
                            dangerouslySetInnerHTML={{__html: this.ourWorksData[0].descr}}
                        />
                    </div>
                </div>
            </section>
        </>
    }
}