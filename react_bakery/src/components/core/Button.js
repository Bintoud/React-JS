/*
import React from 'react';

class Button extends React.Component {

    render() {
        return (
            <div>
                <button
                    type="button"
                    className={this.props.isSelected ? "btn btn-primary active " : "btn btn-outline-secondary"}
                    onClick={this.props.onClick}>
                        {this.props.children}
                </button>
            </div>
        )
    }
}

export default Button

*/

import React, { Component } from 'react';

class Button extends Component {

    render() {
        const {isSelected = true} = this.props
        const classSelected = isSelected ? 'primary' : 'outLine-secondary'
        return (
            <button type='button' className={`btn btn-${classSelected}`}
                    onClick={this.props.onClick}>
               {this.props.children} 
            </button>
        )
    }
}

export default Button;