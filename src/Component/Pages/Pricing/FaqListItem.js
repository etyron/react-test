import React, { Component } from 'react';

class FaqListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false,
        };
    }
    toggleState = () => {
        this.setState({
            isOpened: !this.state.isOpened
        });
        console.log(this.props.items.text);
    };

    render() {
        let DropText;
        if (this.state.isOpened) {
            DropText = <p className="text">{this.props.items.text}</p>
        }

        return (
            <li>
                <h4 className="title title-cards title-dark margin-bottom-30">{this.props.items.title}</h4>
                <button class="btn-js" onClick={this.toggleState}></button>
                {DropText}
            </li>
        )
    };
}


export default FaqListItem;