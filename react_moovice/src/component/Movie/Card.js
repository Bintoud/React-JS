
import React, { Component } from 'react';

class Card extends Component {
    render() {
        return(

            <div>
                <img src={this.props.img} alt='CD' />
                <h2>{this.props.title}</h2>
                <h3>{this.props.description}</h3>
                <span>{this.props.imgUrl}</span>
            </div>
        )
    }
}

export default Card;