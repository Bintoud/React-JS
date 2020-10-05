


import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

class App extends Component {
  constructor() {
    super();
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    this.state = {
      activeTab: 'add',
      items: []
    }

  }

  onClickTabAdd() {
    this.setState({
      activeTab: 'Add'
    })
  }

  onClickTabList() {
    this.setState({
      activeTab: 'List'
    })
  }

  onClickTabPay() {
    this.setState({
      activeTab: 'Pay'
    })
  }

  renderContent() {
    switch(this.state.activeTab) {
      case 'Add':
        return <Add></Add>;
      case 'List':
        return <List></List>;
      case 'Pay':
        return <Pay></Pay>;
      default :
      return Error;
      
    }
  }

  render() {
    return (
      <div className = "App">
        <Button isSelected = {this.state.activeTab === "Add"} onclick = {this.onClickTabAdd}> 
          Add{this.props.Add}</Button>

        <Button isSelected = {this.state.activeTab === "List"} onclick = {this.onClickTabList}>
          List{this.props.List}</Button>

        <Button isSelected = {this.state.activeTab === "Pay"} onClick = {this.onClickTabPay}>
          Pay{this.props.Pay}</Button>

          {this.renderContent()}
          
      </div>
    );
  }
}

export default App;
