import React, { Component } from 'react';

import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state = {
      greeting: ""
    }
  }

updateBasicText(val){
  this.setState({greeting: val});
}



  render() {
    return (
      <div className="App">
        <input onChange={ (e) => this.updateBasicText( e.target.value )} type ="text"/>
        <p>{ this.state.greeting } </p>

        </div>
        
      
    );
  }
}

export default App;
