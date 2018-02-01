import React, { Component } from 'react';

const PricingPlansList = [
    {
        id: 1,
        class: "price-block price-basic-bg",
        price: "100$",
        plan: "Basic plan",
        options1: "Duis commodo mollis",
        options2: "Nam aliquet sagittis",
        options3: "Fusce eleifend lectus",
        options4: "Nam aliquet sagittis"
    },
    {
        id: 2,
        class: "price-block price-silver-bg",
        price: "150$",
        plan: "Silver plan",
        options1: "Duis commodo mollis",
        options2: "Nam aliquet sagittis",
        options3: "Fusce eleifend lectus",
        options4: "Etiam pulvinar elementum"
    },
    {
        id: 3,
        class: "price-block price-gold-bg",
        price: "200$",
        plan: "Gold plan",
        options1: "Duis commodo mollis",
        options2: "Nam aliquet sagittis",
        options3: "Fusce eleifend lectus",
        options4: "Etiam pulvinar elementum"
    },
];

class PricingPlans extends  Component {
    render() {
        return(
            <section className="section-interval">
                <div className="content">
                    <h3 className="title title-section title-dark text-left margin-bottom-30">Pricing Plans</h3>
                    <ul className="plans-list flex-between flex-wrap">
                        {
                           PricingPlansList.map(item =>{
                               return(
                                   <li key={item.id}>
                                       <div className={item.class}>
                                           <h4 className="title title-price light-text text-left">{item.price}<span className="price-period-text">/month</span></h4>
                                           <p className="text text-price light-text">{item.plan}</p>
                                       </div>
                                       <div className="price-info">
                                           <ul className="flex-column plans-optional">
                                               <li><p className="text dark-text text-accept">{item.options1}</p></li>
                                               <li><p className="text dark-text text-accept">{item.options2}</p></li>
                                               <li><p className="text dark-text text-accept">{item.options3}</p></li>
                                               <li><p className="text dark-text text-accept">{item.options4}</p></li>
                                           </ul>
                                           <button className="button button-brand">Choose plan</button>
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

export default PricingPlans;