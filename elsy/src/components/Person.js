

 
import React from'react';
import Icon from './core/Icon';
import Slider from './core/Slider';

class Person extends React.Component {

    render() {
        return (

            <div className="box col-md-2 col-6" >
                {/* <span style = {{color: "black"},{fontSize:100}}
                  class="material-icons">directions_walk</span> */}
                  <Icon Name="directions_walk" color="black"></Icon>
                  <p>{this.props.steps}steps</p>
                  <Slider
                        max={this.props.max}
                        min={this.props.min} 
                        onChange={this.props.onChange}
                        value={this.props.steps}>
                  </Slider>
            </div>
             
        )
    }

}

export default Person;

// ligne 13 
/* pour insérer un style on ouvre une 1er accolade qui signifie Js {} à l'intérieur de celle-ci 
    on ouvre une 2{}qui est un objet dans laquelle on va mettre notre css.
*/