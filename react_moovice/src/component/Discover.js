
import React, { Component } from 'react';
//import placeholder from './img/placeholder';
import { API_KEY, getLatestMovies } from './Serviceurl/monurl';
import Card from './Movie/Card';
import moment from 'moment';
//import {getLatestMovies} from './Serviceurl/monurl';


class Discover extends Component {

    constructor() {
        super();

        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
       // getLatestMovies().then(movies => {
       //     this.setState({movies}) })

        const TODAY = moment().toISOString(); // avec les parenthèses je récupère la date d'aujourd'hui.
        const NEXT_WEEK = moment().add(1, 'weeks').toISOString();
        console.log('[Discover] today', TODAY)
        console.log('[Discover] next_week', NEXT_WEEK)
        const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=${API_KEY}`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)

                const img = require('./img/placeholder.png');
                const movies = json.results.map((elem) => {
                    return {
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}`
                            : <img src={this.props.img} alt='CD' />

                    }
                })

                this.setState({ movies })
            }) 

    }


    render() {
        return (

            <div className='row'>
                {this.state.movies.map((elem, index) => {
                    return (
                        <div key={index} className='col-6'>
                            <Card title={elem.title} description={elem.description} imgUrl={elem.imgUrl} />
                        </div>

                    )
                })}
            </div>
        )
    }
}

export default Discover;
