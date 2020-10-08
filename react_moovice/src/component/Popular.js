
import React, { Component } from 'react'

class Popular extends Component {

    constructor() {
        super()
        this.state={
            movies:[]
        }    
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=1b581df285c385d7960596e721891074`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({  // j'enregistre la valeur d'un attribut d'une state;
                movies: json.movies
            })
        }).catch(err => console.error(err));
        
    }

    render() {
        return(

            <div>
                <h1>Popular</h1>
            {/*   <section>
                    {this.state.movies.map(elem => {
                        return (
                            <div>
                                <img src={'https://www.themoviedb.org/documentation/api/wrappers-libraries'}></img>
                            </div>
                        )
                    })}
                </section> */}
            </div>
        )
    }
}

export default Popular;