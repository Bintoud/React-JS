
import React, { Component } from 'react'


class Card extends Component {

    render() {
        return (

            <div className='card'>
            <img className="card-img-top" src={this.props.info.flag}></img>
               <p>{this.state.name}</p>
               <p>{this.state.capital}</p>
               <p>{this.state.flag}</p>
               <p>{this.state.population}</p>
               <p>{this.state.region}</p>
               <p>{this.state.error}</p>
            </div>
        )
    }
}

export default Card;