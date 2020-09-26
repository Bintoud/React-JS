

import React from 'react'
import Icon from './core/Icon'
import Slider from './core/Slider'

class Temperature extends React.Component {

    render () {
        return (

            <div className='box col-md-2 col-6'>
                <Icon Name='wb_sunny' color='yellow'></Icon>
                <p>{this.props.temperature} °C</p>
                <Slider
                        max={this.props.max}
                        min={this.props.min} 
                        onChange={this.props.onChange}
                        value={this.props.temperature}>
                  </Slider>
            </div>
        )
    }
}

export default Temperature