import React, { Component } from 'react';
// Components
import PricingPlans from "./PricingPlans";
import PricingQest from "./PricingQest";
import Header from "../../../Header";

class Pricing extends Component {
    render() {
        return(
            <div>
                <Header title={'Pricing'}/>
                <PricingPlans/>
                <PricingQest/>
            </div>
        )
    }
}

export default Pricing;