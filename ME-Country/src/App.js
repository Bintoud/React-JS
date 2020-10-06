
import React, { Component } from 'react';
import './css/App.css';
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './component/Button';
import Card from './component/Card'


class App extends Component{

      constructor() {
        super()
        this.componentDidMount = this.componentDidMount.bind(this)
        this.buttonClick = this.buttonClick.bind(this)
        this.buttonSearch = this.buttonSearch.bind(this)
        this.inputChange = this.inputChange.bind(this)
       /* this.buttonFrance = this.buttonFrance.bind(this)
        this.buttonBrazil = this.buttonBrazil.bind(this)
        this.buttonCroatia = this.buttonCroatia.bind(this) */

        this.state = {
          name : '',
          capital : '',
          flag : '',
          population : 0,
          region : '',
          error : false
        }
      }

      
      componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/name/france')
        .then(res => res.json())
        .then(json => { 
    // code     
      this.setState({
        name : json[0].name,
        capital : json[0].capital,
        flag : json[0].flag,
        population : json[0].population,
        region : json[0].region
      })         
  }) .catch(err => console.error(err));
      }
        
      buttonClick(country) {
        //console.log('[app] buttonClick:', country)
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(res => res.json())
        .then(json => { 
    // code
      
      this.setState({
        name : json[0].name,
        capital : json[0].capital,
        flag : json[0].flag,
        population : json[0].population,
        region : json[0].region,
      })         
  }) .catch(err => console.error(err));
      }

      inputChange(evt) {
        console.log(evt.target.value)
        this.setState({
          search: evt.target.value
        })
      }
      
      buttonSearch() {
        fetch(`https://restcountries.eu/rest/v2/name/${this.state.search}`)
          .then(res => res.json())
          .then(json => {
            // code
            this.setState({
              name:json[0].name,
              capital : json[0].capital,
              flag : json[0].flag,
              population : json[0].population,
              region : json[0].region,

            })
          }).catch(err => 
            {console.error(err)
              this.setState({
                error: true
              })
          }); 
      }

  /*   
      buttonFrance() {
        fetch('https://restcountries.eu/rest/v2/name/france')
        .then(res => res.json())
        .then(json => { 
    // code
      
      this.setState({
        name : json[0].name,
        capital : json[0].capital,
        flag : json[0].flag,
        population : json[0].population,
        region : json[0].region,
      })         
  }) .catch(err => console.error(err));
      }

      buttonBrazil() {
        fetch('https://restcountries.eu/rest/v2/name/brazil')
        .then(res => res.json())
        .then(json => { 
    // code
      
      this.setState({
        name : json[0].name,
        capital : json[0].capital,
        flag : json[0].flag,
        population : json[0].population,
        region : json[0].region,
      })         
  }) .catch(err => console.error(err));
      }

      buttonCroatia() {
        fetch('https://restcountries.eu/rest/v2/name/croatia')
        .then(res => res.json())
        .then(json => { 
    // code
      
      this.setState({
        name : json[0].name,
        capital : json[0].capital,
        flag : json[0].flag,
        population : json[0].population,
        region : json[0].region,
      })         
  }) .catch(err => console.error(err));
      } 
  */      

      render() {
        return (
          <div className='App'>
            <input type='text' onChange={this.inputChange}></input>
            <Button onClick={this.buttonSearch}> Search </Button>

           {/* <Button onclick={this.state.click}>Send</Button> */}
           {/* <Button onclick={this.buttonFrance}>France</Button>
            <Button onclick={this.buttonBrazil}>Brazil</Button>
        <Button onclick={this.buttonCroatia}>Croatia</Button> */}

           {/* <Button onClick={() => this.buttonClick('france')}> France </Button>
            <Button onClick={() => this.buttonClick('brazil')}> Brazil </Button>
      <Button onClick={() => this.buttonClick('croatia')}> Croatia </Button> */}

            {this.state.error ?
            <h1>Not a country</h1>
             : <Card info={this.state}></Card> }

          </div>
        )
      }
}

export default App;





















































































































