
import React, { Component } from 'react'

class DiscoverBattle extends Component {

    constructor() {
        super()
            this.state ={
                currentPage:0,
                movies: []
            }       
        }

     //   componentDidMount () {
     //       const TODAY = moment(). ToIString()
      //  }


    render() {
        return(

            <div className='row'>
               {this.state.movies.map((one, index) => {
                    
               })}
            </div>
        )
    }
}

export default DiscoverBattle;