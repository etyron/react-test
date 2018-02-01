import React, { Component } from 'react';
const FreaturesList = [
    {
        id: 1,
        title: "24 hours support",
        text: "containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus"
    },
    {
        id: 2,
        title: "Business boosting",
        text: "established fact that a reader will be distracted by the readable content of a page when looking"
    },
    {
        id: 3,
        title: "FUll security",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
        id: 4,
        title: "Creative process",
        text: "There are many variations of passages of Ipsum available, but the majority have suffered alteration."
    }
];

class FeaturesHome extends Component {
    render() {
        return(
            <section className="features-interval features-section">
                <div className="content">
                    <h3 className="title title-section title-dark margin-bottom-60">Our Features</h3>
                    <ul className="features-cards flex-between flex-wrap">
                        {
                            FreaturesList.map(item =>{
                                return(
                                    <li key={item.id}>
                                        <h4 className="title title-cards title-dark">{item.title}</h4>
                                        <p className="text dark-text">{item.text}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className="features-circle">
                        <img src="images/logo_icon.png" alt=""/>
                    </div>
                    <div className="boost-business-block boost-bg flex-between">
                        <p className="text text-boost light-text">If you want to boost your business Contact us</p>
                        <button className="button button-boost">Boost your business</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default FeaturesHome;