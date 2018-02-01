import React, { Component} from 'react';

class OurBlogHome extends Component {
    render() {
        return(
            <section className="section-interval our-blog-bg">
                <div className="content">
                    <h3 className="title title-section title-dark margin-bottom-40">Our Blog</h3>
                    <ul className="flex-center blog-block flex-wrap margin-bottom-60">
                        <li>
                            <div className="flex-between">
                                <div className="blog-img-block">
                                    <img src="images/blog-img.png" alt=""/>
                                </div>
                                <div className="card-blog-info">
                                    <h4 className="title title-date-blog">February 22, 2016 </h4>
                                    <h4 className="title title-cards title-dark margin-bottom-30">Blog Heading here</h4>
                                    <p className="text dark-text">
                                        Established fact that a reader will be distracted by the readable of a page when looking at its layout...
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex-between">
                                <div className="card-blog-info">
                                    <h4 className="title title-date-blog">February 22, 2016 </h4>
                                    <h4 className="title title-cards title-dark margin-bottom-30">Blog Heading here</h4>
                                    <p className="text dark-text">
                                        Popularised in the 1960s with the release of Letraset sheets
                                        containing Lorem Ipsum passages. fact that a reader will be distracted by the readable of a page when...
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="flex-center">
                        <button className="button button-brand">Full blog</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurBlogHome;