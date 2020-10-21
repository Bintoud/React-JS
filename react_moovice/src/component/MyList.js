
import React, { Component } from 'react';
import Card from './Movie/Card';
import { API_KEY } from './Serviceurl/monurl';

class MyList extends Component {
    
    constructor() {
        super();
        this.state = {
            movies: [],
            moviesIds: this.getYourFreackOn()
            // dans moviesIds je veux récupérer la valeur de ma list donc je rajoute les parenthèse,
            // ainsi ça me retourne un array d'id 
        };
    }

    componentDidMount() {

        //  this.getYourFreackOn(); // j'apelle ma méthode getYourFreackOn
        // je récupère l'id de chaque film grace à la méthode map qui contient l'url ou il y a tous les films
        const arrFetch = this.state.moviesIds.map(elem => {
            const url = `http://api.themoviedb.org/3/movie/${elem}?api_key=${API_KEY}`;
            return fetch(url).then(res => res.json())
        })

        Promise.all(arrFetch)
            .then(results => {
                console.log('[MyList] results', results);
                const newArr = results.map(elem => {
                    return {
                        title: elem.title,
                        description: elem.overview,
                        imgUrl: `https://image.tmdb.org/t/p/w300/${elem.poster_path}`
                    }
                })
                this.setState({
                    movies: newArr
                })
            })      
            .catch(err => console.error(err))
            

        /*
        const myFilm = (moviesIds) =>
            fetch(`http://api.themoviedb.org/3/movie/${moviesIds}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(json => json); // retour array des éléments

        const promiseAll = this.state.moviesIds.map(moviesIds => myFilm(moviesIds));
        console.log('state here', this.state.moviesIds)

        Promise.all(promiseAll)
        .then((myFilm) => {
            
        });

        this.setState({movies: myFilm})  */
    }

    getYourFreackOn() {
        // pour transformer en objet ou array on fait JSON.parse + le résultat qui est localStorage.getItem('my-list'));
        // il y a 2 méthodes ci-dessous
        const myList = JSON.parse(localStorage.getItem('my-list')) // return une string
        // const myListArray = JSON.parse(myList);
        //console.log('(MyList) myList', typeof myListArray);
        //console.log('(MyList) myList', myListArray);
        return myList; // return mon array d’ID préenregistrés
    }

    render() {
        return (

            <div>
                {/* quand on affiche une liste on utilise le map dans le render */}
                {this.state.movies.map((elem, index) => {
                    return (
                        <Card key={`card_${index}`} // pour enlever le warning dans la console

                            //  title={elem.title}
                            // description={elem.description}
                            // </div> imgUrl={elem.imgUrl} 
                            {...elem}>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default MyList;

// dans Card il me faut les props title , description et imgUrl
// donc pour les récupérés je fais title = title={elem.title}......
// elem contient state movies qui va enregistrer tous les objets movies qui correspond au id
// astuce pour récupéré le premier Id on fait: const url =
//(`http://api.themoviedb.org/3/movie/${this.state.movieIds[0]}?api_key=${API_KEY}`)
//fetch(url).then(results => results.json{}).then(json => {}) etc
// const newObj = { title: json.title, description: json.overview, imgUrl: `https://image.tmdb.org/t/p/w300/${json.poster_path}`}
// this.setState({movies: [newObj]})
//.catch(err => console.error(err))