
import React, { Component } from 'react';
import Card from './Movie/Card';
import { API_KEY } from './Serviceurl/monurl';
import moment from 'moment';

class DiscoverBattle extends Component {

    constructor() {
        super()
        this.cardClick = this.cardClick.bind(this)

        this.state = {
            currentPage: 0,
            movies: [],
            battleList: []
        }
    }

    componentDidMount() {
        const TODAY = moment().toISOString();
        const NEXT_WEEK = moment().add(1, 'weeks').toISOString();
        const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=${API_KEY}`
        fetch(url)
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
                this.setState({
                    battleList: movies,
                    movies: [movies[0], movies[1]] // je prend les 2 premier film
                })
            })
    }

    cardClick(id) {
        console.log('[DiscoverBattle] cardClick')
        // je rajoute +1 à mon currentpage
        this.setState({
            currentPage: this.state.currentPage + 1
        }, () => {
            // j'enregistre le film cliqué
            const mylist = JSON.parse(localStorage.getItem('my-list'));
            if (!mylist.includes(id)) {
                mylist.push(id)
                localStorage.setItem('my-list', JSON.stringify(mylist)) // trasnforme ma list en string
            }
            //je remplace les 2anciens films par les suivants
            const secondIndex = this.state.currentPage * 2 - 1
            const firstIndex = secondIndex - 1
            this.setState({
                movies: [this.state.battleList[firstIndex], this.state.battleList[secondIndex]]
            })
        })
    }

    render() {
        return (

            <div className='row'>
                {this.state.movies.map((one, index) => (
                    <div key={`battle_${index}`} className='col-5' onClick={() => this.cardClick(one.id)}>
                        <Card {...one}></Card>
                    </div>
                ))}
            </div>
        )
    }
}

export default DiscoverBattle;

// id se trouve ds one c pour ça que je fait one.id
