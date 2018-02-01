import React, { Component } from 'react';
import $ from 'jquery';

const ProjectsList = [
    {
        id: 1,
        img: "images/proj-slide-1.png",
        title: "Project heading",
        text: "Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. fact that a reader will be distracted by the readable of a page when.",
        button: "Real estate"
    },
    {
        id: 2,
        img: "images/cosmo.png",
        title: "Project heading",
        text: "Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. fact that a reader will be distracted by the readable of a page when.",
        button: "Cosmo"
    },
    {
        id: 3,
        img: "images/ocean.jpg",
        title: "Project heading",
        text: "Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. fact that a reader will be distracted by the readable of a page when.",
        button: "Real ocean"
    }
];

class Projects extends Component {

    componentDidMount() {
        $('.slider-project').slick({
            dots: true
        });
    }

    render() {
        return(
            <section className="section-interval">
                <div className="content">
                    <h3 className="title title-section title-dark margin-bottom-30">Project</h3>
                    <ul className="project-block flex-between flex-wrap margin-bottom-60">
                        <li className="project-card">
                            <div className="project-img-block">
                                <img src="images/layer16.png" alt=""/>
                            </div>
                            <div className="project-info">
                                <h4 className="title title-cards light-text">Project heading</h4>
                                <p className="text light-text">
                                    Popularised in the 1960s with the release Letraset sheets containing Lorem
                                </p>
                            </div>
                            <button className="button button-project">Banking</button>
                        </li>

                        <li className="slider-project-li">
                            <ul className="slider-project">
                                {
                                    ProjectsList.map(item =>{
                                        return(
                                            <li key={item.id}>
                                                <div className="project-img-block">
                                                    <img src={item.img} alt=""/>
                                                </div>
                                                <div className="project-info">
                                                    <h4 className="title title-cards title-dark">{item.title}</h4>
                                                    <p className="text dark-text">{item.text}</p>
                                                    <button className="button button-project">{item.button}</button>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                    <div className="flex-center">
                        <button className="button button-brand">Full project</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;