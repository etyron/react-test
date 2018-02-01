import React, { Component } from 'react';

const AboutList = [
    {
        id: 1,
        title: "About us",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing."
    },
    {
        id: 2,
        title: "Vision",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
    },
    {
        id: 3,
        title: "Mission",
        text: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
    }
];

class AboutInfo extends Component {
    render() {
        return(
            <section className="section-interval">
                <div className="content row">
                    <div className="col-sm-12 col-lg-7 col-xl-7">
                        <ul className="flex-column-center about-text-li">
                            {
                                AboutList.map(item =>{
                                    return(
                                        <li>
                                            <h3 className="title title-section title-dark text-left margin-bottom-30">{item.title}</h3>
                                            <p className="text dark-text">{item.text}</p>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-5 col-xl-5">
                        <div className="video-block margin-bottom-30">
                            <div className="video-block-img">
                                <img src="images/video-about.png" alt=""/>
                            </div>
                            <button className="button button-video"></button>
                        </div>
                        <div className="consultation-block">
                            <h3 className="title title-cards light-text margin-bottom-30">Free Consultation</h3>
                            <form method="post">
                                <div className="input-consultation margin-bottom-30">
                                    <input type="text" placeholder="Name"/>
                                    <input type="email" placeholder="Email"/>
                                </div>
                                <textarea placeholder="Comment" className="margin-bottom-30"></textarea>
                                <button type="submit" className="button button-brand">Submit now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutInfo;
