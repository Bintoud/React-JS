
import React, { Component } from 'react';
import protoTypes from 'prop-types';

class Card extends Component {
    render() {
        const {
            title,
            description,
            imgUrl
        } = this.props

        return(

            <div>
                <img src={this.props.imgUrl} alt='CD' />
                <h2>{this.props.title}</h2>
                <h3>{this.props.description}</h3>
            </div>
        )
    }
}

Card.protoTypes = {
    title: protoTypes.string,
    description: protoTypes.string,
    imgUrl: protoTypes.string
};
// protoTypes = si j'utilise ma Card et que je lui passe autre qu'un string ça ne marcheras pas comme on veut.

Card.defaultProps = { // <= au cas ou mes title, description sont undefined , alors il prend l'image du cd par défaud.
    title: '',
    description: '',
    imgUrl: './img/placeholder'
}


export default Card;

/* on peut aussi écrire comme ça entre le render et le return
const : {
    title , description, imgUrl 
    = this.props
}
et dans la div du return on simplifie
<div>
    <img src={imgUrl} alt='' /> = props qu'on déclare dans la variable(const)
    <h2> {title} </h2> 
    <h4> {description} </h4>
 </div>

 */

