
import React, { Component } from 'react';

class Card extends Component {
    render() {
        return(

            <div>
                <img src={this.props.imgUrl} alt='CD' />
                <h2>{this.props.title}</h2>
                <h3>{this.props.description}</h3>
            </div>
        )
    }
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

