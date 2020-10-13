
import React, { Component } from 'react';
import { API_KEY } from './Serviceurl/monurl';

class MyList extends Component {
    constructor () {
        super();

        this.getYourFreackOn = this.getYourFreackOn(this)

        this.state = {
            movies : [],
            moviesIds : this.getYourFreackOn
        };
    }

    componentDidMount() {
        const myFilm = (moviesIds) =>
            fetch(`http://api.themoviedb.org/3/movie/${moviesIds}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(json => json) // retour array des éléemnts

        const promiseAll = this.state.moviesIds.map(moviesIds => myFilm(moviesIds));
        console.log('state here', this.state.moviesIds)

        Promise.all(promiseAll)
        .then((myFilm) => {

        });

        this.setState({movies: myFilm})
    }

    getYourFreackOn() {
      
    }

    render() {
        return(

            <div>
                <h1>My List</h1>
            </div>
        )
    }
}

export default MyList;