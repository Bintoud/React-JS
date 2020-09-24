

import React from'react';

class Icon extends React.Component {
    render() {
        return(
            <div >
                <span style={{fontSize:100, color:"red"}}
                class="material-icons">favorite</span>
                <p>{this.props.heart}</p>
            </div>
        )
    }
}

export default Icon;