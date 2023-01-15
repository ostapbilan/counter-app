import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        <button onClick={this.handleOverallReset}         
          className="btn btn-secondary btn-sm m-2">
          Reset
        </button>
    
        {this.state.counters.map((counter) => (
          <Counter 
          key={counter.id}
          onDelete = {this.handleDelete}
          counter = {counter}> 
            <h4>Counter # {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }


  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({counters:counters })  // can be simplified to ({ counters })
  
  
  }

  // handleOverallReset = () => {
  //   const counters = this.state.counters.map(c => c.value = 0)
  //   this.setState({counters:counters })

  // }

}


export default Counters;
