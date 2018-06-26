import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
  
  this.state = {
    list: [
      'Sperghertti', 
      'Ice Crame', 
      'Sooshee', 
      'Balog-knee', 
      'Kimchi'
  ],
    input: ""
   }
  }

  display(val) {
    this.setState({
      input: val
    })
  };
  

  render() {
    // we can do this because of destructuring
    const {list, input} = this.state;
    let newList = list.filter (elem => elem.includes(input)).map((elem, i) => {
      return (
        <div key={i}>
          <h2>{elem}</h2>
        </div>
      )
    });

    return (
      <div className="App">
        <div className="App-header">
        <input onChange={ e => this.display( e.target.value )} type ="text"/>
       
        </div>
      {newList}
      </div>
    );
  }
}

export default App;
