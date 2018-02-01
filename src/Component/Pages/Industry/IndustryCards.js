import React, { Component } from 'react';

const CardsList = [
    {
        id: 1,
        img: "images/industry/1.png",
        title: "Business",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
    },
    {
        id: 2,
        img: "images/industry/2.png",
        title: "Education",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
    },
    {
        id: 3,
        img: "images/industry/3.png",
        title: "Technology",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
    },
    {
        id: 4,
        img: "images/industry/4.png",
        title: "Real Estate",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
    },
    {
        id: 5,
        img: "images/industry/5.png",
        title: "telecommunication",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
    },
    {
        id: 6,
        img: "images/industry/6.png",
        title: "BANKING & FINANCIAL",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
    },
    {
        id: 7,
        img: "images/industry/7.png",
        title: "Low",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
    },
    {
        id: 8,
        img: "images/industry/8.png",
        title: "Construction",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
    }
];

class IndustryCards extends Component {
    render() {
        return(
            <section className="section-interval">
                <div className="content">
                    <h3 className="title title-section title-dark margin-bottom-30 text-left">choose your industry</h3>
                    <ul className="flex-between industry-card-list flex-wrap">
                        {
                            CardsList.map(item =>{
                                return(
                                    <li key={item.id}>
                                        <div className="industry-block-img">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className="industry-card-info">
                                            <h4 className="title title-cards title-dark margin-bottom-20">{item.title}</h4>
                                            <p className="text dark-text margin-bottom-30">{item.text}</p>
                                            <button className="button button-brand">Choose your services</button>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

export default IndustryCards;