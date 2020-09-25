'use strict'


// step one;

// Pour crée le module(composant)App

/*syntaxe de react : 3 étapes => importer/nom /fichier ou package ;
  je crée ma class App qui hérite(extends) de React.Component
  j'utilise la function render() pour afficher le code HTML spécifié(div) à l'intérieur de l'élément HTML(h1).
  ATTENTION dans mon return il doit toujours y avoir un seul parent(ici c div) mais par contre il peu y avoir
  à l'intérieur de se parent plusieur enfant( ici h1, p).
  Ensuite pour utiliser mon Component , je doit exporter(export default) le nom de ma class;
*/


import React from 'react';  // j'importe le package et l'assigne à la var React;
import './css/style.css';
import './css/bootstrap.min.css';

import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Temperature from './components/Temperature'



const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000  


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water : 0,
      heart : 120,
      temperature : -10,
      steps : 3000
    };

    this.onHeartChange = this.onHeartChange.bind(this)

  }

  onHeartChange(val) {
      this.props.heart = val

      this.setState({
        heart: val
      })
  }

  render() {
    return (
      <div className="container-fluid"> 
          <Person></Person>
          <HeartRate heart={this.state.heart}
                     min={MIN_HEART}
                     max={MAX_HEART}>
                     onChange={this.onHeartChange}
          </HeartRate>
          <Temperature></Temperature>
      </div>
    )
  }
}
export default App; 



/*
class App extends React.Component {  // Class App qui hérite de React.Component;
  render() {                         // Méthode render ajouter à la class qui retourne une div(texte bonjour);
    return (
      <div>
        <header className="App.header">
          <h1>Bonjour</h1>
          <p>Bienvenue Btou d Lovelace</p>
        </header>
      </div>
    );
  };
};

export default App;   // Exportation du module App;
*/

/*
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
            <p>Battement de coeur: {MIN_HEART}</p>
            <p>Température: {MIN_TEMPERATURE}</p>
            <p>Nombre de pas: {MIN_STEPS}</p>
      </div>
    );
  };
};

export default App; 

 */