
import React, { Component } from 'react'


class Card extends Component {

    render() {
        return (
            <div className='card'>
            <img className="card-img" src={this.props.info.flag}></img>
               <p>{this.props.info.name}</p>
               <p>{this.props.info.capital}</p>
               <p>{this.props.info.flag}</p>
               <p>{this.props.info.population}</p>
               <p>{this.props.info.region}</p>
            </div>
        )
    }
}

export default Card;

// on récupère l'atribut parent dans l'enfant avec this.props.info.name ....