

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

