import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    person:[
      {name:"Max", age:"34"},
      {name:"Kud", age:"32"},
      {name:"Venaket", age :"35"}
    ]
  }
  changeHandler=()=>{
  this.setState({
    person:[
      {name:"Maximilian", age:"35"},
      {name:"Kud", age:"34"},
      {name:"Venaket", age :"36"}

  ]
}

)
  }
  render() {
    return (
      <div className="App">
        <h1>Hi there</h1>
        <p>I am working here!!</p>
        {/* <Person name="Max" age="34"/>
        <Person  name="Kud" age="32">Enjoy!!</Person>
        <Person  name="Venkat" age="35"/> */}
        <button onClick={this.changeHandler}>Switch</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person  name={this.state.person[1].name} age={this.state.person[1].age}>Enjoy!!</Person>
        <Person  name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
