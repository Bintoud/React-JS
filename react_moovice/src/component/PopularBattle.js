

import React, { Component } from 'react'
//import placeholder from './img/placeholder';
import { API_KEY } from './Serviceurl/monurl';
import Card from './Movie/Card';


class PopularBattle extends Component {

    constructor() {
        super();
        // this.componentDidMount=this.componentDidMount.bind(this);
        this.Fileschoix = this.Fileschoix.bind(this);

        this.state = {
            movies: [],
            currentPage: 1,
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)

                const img = require('./img/placeholder.png');
                const movies = json.results.map((elem) => {
                    return {
                        id: elem.id,
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : <img src={this.props.img} alt='CD' />
                    }
                })
                this.setState({ movies })
            })

    }

    Fileschoix(id) {
        //  let mylist = [] 
        // if (JSON.parse(localStorage.getItem('my-list'))) {
        //    mylist = JSON.parse(localStorage.getItem('my-list'))
        // }

        let mylist = JSON.parse(localStorage.getItem('my-list')) || []

        if (mylist.includes(id)) {
            mylist.push(id)
            localStorage.setItem('my-list', JSON.stringify(mylist))

        }

        this.setState({
            currentPage: this.state.currentPage + 1
        })

    }

    render() {
        const {
            movies,
            currentPage
        } = this.state

        const secondIndex = currentPage * 2 - 1
        const firstIndex = secondIndex - 1
        const FirstMovie = movies[firstIndex];
        const SecondMovie = movies[secondIndex];

        return (
            <div className='row'>
                <div className='col-6'>
                    <button onClick={() => this.Fileschoix(FirstMovie.id)}>
                        <Card {...FirstMovie} />
                    </button>
                </div>
                <div className='col-6'>
                    <button onClick={() => this.Fileschoix(SecondMovie.id)}>
                        <Card  {...SecondMovie} />
                    </button>
                    <img src={this.props.img} alt='CD' />
                </div>
            </div>
        )
    }
}

export default PopularBattle;


// ligne 53
// =  <Card {...FirstMovie} />}title={FirstMovie.title} description={FirstMovie.description} imgUrl={FirstMovie.imgUrl}
// pour que les film soit l'un à coter de l'autre on fait un row col-6;