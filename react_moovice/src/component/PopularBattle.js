

import React, { Component } from 'react'
import placeholder from './img/placeholder';
import Card from './Movie/Card';


class PopularBattle extends Component {

    constructor() {
        super();
       // this.componentDidMount=this.componentDidMount.bind(this);
       // this.infoClick=this.infoClick.bind(this);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=$<1b581df285c385d7960596e721891074>`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                const movies = json.results.map((elem) => {
                    return {
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

    render() {
        return(

            <div>
                <h1>PopularBattle</h1>
                {this.state.movies.map((elem, index) => {
                return <Card title={elem.title} description={elem.description}
                        imgUrl={elem.imgUrl} />
                    })}
            </div>
        )
    }
}

export default PopularBattle;