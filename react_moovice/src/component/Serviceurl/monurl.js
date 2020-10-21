export const API_KEY = '1b581df285c385d7960596e721891074';

/*
function fetchAndstranformMovies(url) {
    return fetch(url)
    .then(res => res.json())
    .then(json => {
        const img = require('./img/placeholder.png');
        const movies = json.results.map((elem) => {
            return {
                id: elem.id,
                title: elem.title,
                description: elem.overview,
                imgUrl: elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : <img src={this.props.img} alt='CD' />
            }
        })
        return Promise.resolve(movies)
    })
}
  
// méthode asynchrome qui retourne une promise
export const getLatestMovies = () => {
    const TODAY = moment().toISOString();
    const NEXT_WEEK = moment().add(1, 'weeks').toISOString();
    const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=${API_KEY}`;
    return fetchAndstranformMovies(url);
}    

export const getPopularMovies = () => {
    const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=${API_KEY}`;
    return fetchAndstranformMovies(url);
}

export const getMovie = (id) => {
    const url = `http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    return fetchAndstranformMovies(url);
}

*/

