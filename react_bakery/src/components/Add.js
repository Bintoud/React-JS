
/*
import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../css/App.css'


class Add extends React.Component {
    constructor() {
        super()
        this.updateItemName = this.updateItemName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.state = {
            itemName:"",
            price: 1
        }
        
    }

    updateItemName(evt) {
       this.setState({itemName:evt.target.value})
    }

    updatePrice(val) {
        this.setState({price:val})
       
    }

    submitForm() {
        console.log(this.state.itemName,this.state.price);
    }

    render() {
        return (

            <div>
                <title> Add </title>

                <input type="text" onChange={this.updateItemName()} >
                </input>
                <RCSlider min = {1}
                          max = {10}
                          onChange={this.updatePrice()}>
                </RCSlider>
                <button class="btn btn-primary"
                        type="submit" 
                        value="Add"
                        onClick={this.submitForm()}>   
                </button>
            </div>
        )
    }
}

export default Add
*/


import React, { Component } from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../css/App.css'
import Button from '../components/core/Button'

class Add extends Component {

    constructor() {
        super()

        this.updateItemName = this.updateItemName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    state = {
        itemName:"",
        price: 1
    }

    updateItemName(evt) {
        this.setState({
            itemName : evt.target.value
        })
     }

     updatePrice(val) {
         this.setState({
            price:val
        })
        
     }

     submitForm() {
        // console.log('',this.state);
        this.props.addItem(this.state.itemName, this.state.price);
     }

    render() {
        return (

            <div>
                <h2> Add </h2>
                <input type="text" onChange={this.updateItemName} >
                </input>
                <Button onClick={this.submitForm}>Add</Button>
                <RCSlider min = {1}
                          max = {10}
                          onChange={this.updatePrice}
                          value={this.state.price}>
                </RCSlider>
            </div>
        )
    }
}

export default Add;

  