import React, { Component } from 'react';

const clientList = [
    {
        id: 1,
        photo: "images/happy-client1.png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        name: "Client Name",
        position: "Designation"
    },
    {
        id:2,
        photo: "images/happy-client2.png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        name: "Client Name",
        position: "Designation"
    },
    {
        id: 3,
        photo: "images/happy-client3.png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        name: "Client Name",
        position: "Designation"
    },
    {
        id: 4,
        photo: "images/happy-client4.png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        name: "Client Name",
        position: "Designation"
    }
];

class ClientCard extends Component {
    render() {
        return(
            <section className="section-interval">
                <div className="content">
                    <h3 className="title title-section title-dark text-left margin-bottom-50">Happy clients</h3>
                    <ul className="flex-between flex-wrap happy-client-list">
                        {
                            clientList.map(item => {
                                 return(
                                     <li key={item.id}>
                                         <div className="comments-img-block">
                                             <img src={item.photo} alt=""/>
                                         </div>
                                         <div className="comments-info">
                                             <p className="text dark-text">{item.text}</p>
                                             <h4 className="title title-cards title-dark margin-bottom-20 testimonials-text-icon">{item.name}</h4>
                                             <h5 className="title title-small dark-text text-left">{item.position}</h5>
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

export default ClientCard;