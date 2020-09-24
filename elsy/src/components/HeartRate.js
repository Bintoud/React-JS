

import React from 'react';

class HeartRate extends React.Component {
     
    render() {
        return(
            <div className='box col-md-2 col-6'>
                <span style={{fontSize:100, color:"red"}}
                class="material-icons">favorite</span>
                <p>{this.props.MIN_HEART}</p>
            </div>
        )
    }
}

export default HeartRate;