import React, { Component } from 'react';

const TeamList = [
    {
        id: 1,
        img: "images/layer70.png",
        title: "Our team",
        text: "Dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        button: "Our team"
    },
    {
        id: 2,
        img: "images/layer71.png",
        title: "Career",
        text: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        button: "Career"
    },
    {
        id: 3,
        img: "images/Layer72.png",
        title: "Services",
        text: "Dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        button: "Services"
    },
];

class OurTeam extends Component {
    render() {
        return(
            <section className="section-interval about-us-bg2">
                <div className="content">
                    <ul className="flex-between about-cards flex-wrap">
                        {
                            TeamList.map(item =>{
                                return(
                                  <li key={item.id}>
                                      <div className="about-img-block">
                                          <img src={item.img} alt=""/>
                                      </div>
                                      <div className="about-card-info">
                                          <h4 className="title title-section">{item.title}</h4>
                                          <p className="text dark-text">{item.text}</p>
                                          <button className="button button-brand">{item.button}</button>
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

export default OurTeam;