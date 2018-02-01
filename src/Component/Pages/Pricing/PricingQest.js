import React, { Component } from 'react';
//Components
import FaqListItem from "./FaqListItem";

const FaqList = [
    {
        _id: 1,
        title: "Lorem Ipsum is simply dummy text of the printing ?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        _id: 2,
        title: "Readable content of a page when looking at its layout ?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        _id: 3,
        title: "Suspendisse mattis leo non neque bibendum semper ?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        _id: 4,
        title: "Lorem Ipsum is simply dummy text of the printing ?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        _id: 5,
        title: "Mauris dictum purus ac dui efficitur, sed interdum ligula bland",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        _id: 6,
        title: "Phasellus eget erat aliquet, egestas odio eget, laoreet augue ?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        _id: 7,
        title: "Cras pharetra velit eu pretium viverra. ?",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
];

class PricingQest extends Component{

    render() {

        return(
            <section className="section-interval asked-bg">
                <div className="content">
                    <h3 className="title title-section title-dark text-left margin-bottom-60">frequently asked questions</h3>
                    <ul className="slide-text-block">
                        {
                            FaqList.map((item,id) => {
                                return(
                                    <FaqListItem items={item} key={id}/>
                                );
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

export default PricingQest;