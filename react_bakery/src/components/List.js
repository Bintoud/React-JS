

import React, { Component } from 'react'

class List extends Component {
    render() {
        return (

            <div>
                <h2> List </h2>
                <ul>
                    {this.props.items.map((elem, index) => {
                        return <li key={index}> {elem.itemName} - {elem.price}</li>

                    }
                        
                    )}
                </ul>
            </div>
        )
    }
}

export default List;



