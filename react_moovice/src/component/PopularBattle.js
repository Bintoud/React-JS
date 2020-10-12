

import React, { Component } from 'react'
//import placeholder from './img/placeholder';
import Card from './Movie/Card';


class PopularBattle extends Component {

    constructor() {
        super();
       // this.componentDidMount=this.componentDidMount.bind(this);
        this.Fileschoix=this.Fileschoix.bind(this);

        this.state = {
            movies: [],
            currentPage: 1,
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=$<1b581df285c385d7960596e721891074>`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                const movies = json.results.map((elem) => {
                    return {
                        id: elem.id,
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: `https://image.tmdb.org/t/p/w300/${elem.poster_path}` 
                    }
                })
                this.setState({
                    movies
                })
            })
        
        }  

        Fileschoix(id) {
            this.setState({
                currentPage: this.state.currentPage + 1 
            })

        }

    render() {

        const firstIndex = secondIndex -1
        const secondIndex = firstIndex * 2 - 1
        const FirstMovie = this.state.movies[0];
        const SecondMovie = this.state.movies[1];

        return (
            <div className='row'>
                <div className='col-6'>
                    <button onClick=  {() => this.Fileschoix(FirstMovie.id)}>
                <Card title={FirstMovie} description={FirstMovie.description} imgUrl={FirstMovie.imgUrl} />
                    </button>
                </div>
                <div className='col-6'>
                    <button onClick={() => this.Fileschoix(SecondMovie.id)}>
                <Card title={SecondMovie.title} description={SecondMovie.description} imgUrl={SecondMovie.imgUrl} />
                    </button>
                </div>
            </div>
        )
    }
}

export default PopularBattle;


// ligne 53
// =  <Card {...FirstMovie} />}