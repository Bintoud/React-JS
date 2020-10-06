
import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        this.click = this.click.bind(this);
    }

    click() {
        //console.log('[Button] click')
        this.props.onClick()
    }

    render() {
        return (

            <div onClick={this.click} className="btn btn primary">

                {this.props.children}

            </div>
        )
    }
}

export default Button;