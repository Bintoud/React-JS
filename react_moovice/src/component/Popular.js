
import React, { Component } from 'react';
//import placeholder from './img/placeholder';
import { API_KEY } from './Serviceurl/monurl';
import Card from './Movie/Card'; // popular est le parent de Card



class Popular extends Component {

    constructor() {
        super();

        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)

                const img = require('./img/placeholder.png');
                const movies = json.results.map((elem) => { //pour construire un array de chaque film contenant le titre la description et l'image;
                    return {
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : <img src={this.props.img} alt='CD' />

                    }
                })

                this.setState({ movies }) // = movies : movies/ pour enregistrer ma var qui contient chaque film; 

            /*    this.setState({  // j'enregistre la valeur d'un attribut d'une state;
                    movies: json.results
                })
            */})//.catch(err => console.error(err));

    }


    render() {
        return (

            <div className='row'>
                {this.state.movies.map((elem, index) => {
                    //console.log('Popular render map', elem)
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

export default Popular;
