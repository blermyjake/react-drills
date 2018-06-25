import React, { Component } from 'react';
import logo from './logo.svg';
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
  ]
}
}
// copy of list in function
// 


  render() {
    // let showList = this.state.list.map(function(elem, index){
    //   return (
    //     <div key={index}>
    //       <h2>{elem}</h2>
    //     </div>
    //   )
    // })
    
    let showList = this.state.list.map((e, i) => {
      return (
        <div key={i}>
          <h2>{e}</h2>
        </div>
      )
    })
    
    
      return (
      
      <div className="App">
          { showList }
        </div>
        // <div>
        //   <h2>{this.state.list[0]}</h2>
        //   <h2>{this.state.list[1]}</h2>
        //   <h2>{this.state.list[2]}</h2>
        //   <h2>{this.state.list[3]}</h2>
        //   <h2>{this.state.list[4]}</h2>
        
        // </div>
      
    );
  }
}

export default App;
