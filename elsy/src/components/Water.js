
import React from 'react'
import Icon from './core/Icon'

class Water extends React.Component {
    render() {
        return (

            <div className='box col-md-2 col-6'>
                <Icon Name='local_drink' color='#3A85FF'></Icon>
                <p>{this.props.water} L </p>
            </div>
        )
    }
}

export default Water;