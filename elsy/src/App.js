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
import '../public/css/style.css';
import '../public/css/bootstrap.min.css';
import HeartRate from './components/HeartRate';
import Person from './components/Person';


/*
class App extends React.Component {  // Class App qui hérite de React.Component;
  render() {                         // Méthode render ajouter à la class qui retourne une div(texte bonjour);
    return (
      <div className="App">
        <header className="App.header">
          <h1>Bonjour</h1>
          <p>Bienvenue Btou d Lovelace</p>
        </header>
      </div>
    );
  };
};

export default App;   // Exportation du module App;


//////////////////////////////////////////// */ 

//step two;


var MIN_TEMPERATURE = -20
var MAX_TEMPERATURE = 40
var MIN_HEART = 80
var MAX_HEART = 180
var MIN_STEPS = 0
var MAX_STEPS = 50000  

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
            <p>{MIN_HEART}</p>
            <p>{MIN_TEMERATURE}</p>
            <p>{MIN_STEPS}</p>
            <Person></Person>
          <HeartRate ></HeartRate>
      </div>
    );
  };
};

///////////////////////////////////////////

//step Three;

/*
class App extends React.Component {
  render() {
    return (
      <div> 
          <Person></Person>
          <HeartRate ></HeartRate>
      </div>
    )
  }
}
export default App; 

*/