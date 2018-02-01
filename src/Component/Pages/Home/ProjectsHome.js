import React, { Component } from 'react';
import $ from 'jquery';

class ProjectsHome extends Component {

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
                                <li>
                                    <div className="project-img-block">
                                        <img src="images/proj-slide-1.png" alt=""/>
                                    </div>
                                    <div className="project-info">
                                        <h4 className="title title-cards title-dark">Project heading</h4>
                                        <p class="text dark-text">
                                            Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                            passages. fact that a reader will be distracted by the readable of a page when.
                                        </p>
                                        <button className="button button-project">Real estate</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-img-block">
                                        <img src="images/cosmo.png" alt=""/>
                                    </div>
                                    <div className="project-info">
                                        <h4 className="title title-cards title-dark">Project heading</h4>
                                        <p className="text dark-text">
                                            Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                            passages. fact that a reader will be distracted by the readable of a page when.
                                        </p>
                                        <button className="button button-project">Cosmo</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-img-block">
                                        <img src="images/ocean.jpg" alt=""/>
                                    </div>
                                    <div className="project-info">
                                        <h4 className="title title-cards title-dark">Project heading</h4>
                                        <p className="text dark-text">
                                            Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                            passages. fact that a reader will be distracted by the readable of a page when.
                                        </p>
                                        <button className="button button-project">Real ocean</button>
                                    </div>
                                </li>
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

export default ProjectsHome;