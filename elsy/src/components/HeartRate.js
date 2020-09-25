

import React from'react';
import Icon from './core/Icon';
import Slider from './core/Slider'

class HeartRate extends React.Component {
     
    render() {
        return(
            <div className='box col-md-2 col-6'>
                {/*<span style={{fontSize:100, color:"red"}}
                class="material-icons">favorite</span> */}
                <Icon Name="favorite" color="red"></Icon>
                <p>{this.props.heart} BPM </p> 
                <Slider min={this.props.min} 
                        max={this.props.max}
                        onchange={this.props.onchange}
                        value={this.props.heart}>
                </Slider>         
            </div>
        )
    }
}

export default HeartRate;

// ligne 12 this.props.<nom_de_la_prop> syntaxe pour accéder a la valeur d'une prop