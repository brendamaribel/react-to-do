import React, { Component } from 'react';

class ToDo extends Component {

  render(){

    return (

      <li>

        <label className = "container">

         <input type = "checkbox" checked = { this.props.isCompleted } onChange = { this.props.toggleComplete }/>
         <div className = "checkmark"></div>
         <div className = "item-font"> { this.props.description } </div>
         <div className = "ion-ios7-minus" onClick = { this.props.deleteTodo }></div>

        </label>

       </li>
    );
  }
}

export default ToDo;
