
import React from 'react'
import RCSlider from 'rc-slider'
import 'rc_slider/assets/index.css'

class Slider extends React.Component {
    render() {
        return(
            <div className='container'>
                <RCSlider 

                    max={this.props.max}
                    min={this.props.min} 
                    onChange={this.props.onChange}
                    value={this.props.value}>

                </RCSlider>
            </div>
        )
    }
}

export default Slider