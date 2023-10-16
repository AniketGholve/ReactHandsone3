/* eslint-disable react/no-direct-mutation-state */
import { Component } from "react";
import DataView from "./DataView";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      error: {
        name: false,
        depart: false,
        rating: false
      },
      toggle:false
    }
  }
  addData = (e) => {
    e.preventDefault()
    this.validateData(e)
  }
  validateData = (e) => {
    const updatedError = { ...this.state.error };
    if (e.target.name.value.trim() === "") {
      updatedError.name = true;
    }
    else {
      updatedError.name = false;
    }
    if (e.target.depart.value.trim() === "" || e.target.depart.value.length > 5) {
      updatedError.depart = true;
    }
    else {
      updatedError.depart = false;
    }
    if (e.target.rating.value > 5 || e.target.rating.value.trim() === "") {
      updatedError.rating = true;
    }
    else {
      updatedError.rating = false;
    }
    this.setState({ error: updatedError }, () => {
      let finaldata = {
        name: e.target.name.value,
        depart: e.target.depart.value,
        rating: parseInt(e.target.rating.value),
      }
      if (this.state.error.name || this.state.error.depart || this.state.error.rating) {
        return;
      }
      else {
        this.setState({ data: [...this.state.data, finaldata] });
        this.setState({toggle:true})
      }
    });
  }
  toggleComp=()=>{
    this.setState({toggle:false})
  }
  render() {
    return (
      <>
        {!this.state.toggle && <form onSubmit={this.addData}>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" />
            {this.state.error.name && <p style={{ color: 'red' }}>Please Enter Correct Name</p>}
          </div>
          <div>
            <label htmlFor="depart">Department: </label>
            <input type="text" name="depart" id="depart" />
            {this.state.error.depart && <p style={{ color: 'red' }}>Please Enter Correct Department</p>}
          </div>
          <div>
            <label htmlFor="rating">Rating: </label>
            <input type="number" name="rating" id="rating" />
            {this.state.error.rating && <p style={{ color: 'red' }}>Please Enter Correct Rating</p>}
          </div>
          <input type="submit" />
        </form>}
        {this.state.toggle && <DataView data={this.state.data} toggleComp={this.toggleComp}/>}
      </>
    )
  }
}
export default Form;