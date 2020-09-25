

import React from 'react'
import Icon from './core/Icon'

class Temperature extends React.Component {

    render () {
        return (

            <div className='box col-md-2 col-6'>
                <Icon name='wb_sunny' color='yellow'></Icon>
            </div>
        )
    }
}

export default Temperature