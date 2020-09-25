

import React from'react';

class Icon extends React.Component {
    render() {
        return(
            <div >
                <span style={{fontSize:100, color:this.props.color}} class="material-icons">
                {this.props.Name}</span>
            </div>
        )
    }
}

export default Icon;