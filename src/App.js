import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos: [
        {description: 'Walk the cat', isCompleted: true},
        {description: 'Throw the dishes away', isCompleted: false},
        {description: 'Buy new dishes', isCompleted: false}
      ],
      newTodoDescription: ''
    };
  }

  handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
   }

  handleSubmit(e) {

       e.preventDefault();
       if (!this.state.newTodoDescription) { return }
       const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
       this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });

     }

  toggleComplete(index) {

    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });

  }

  deleteTodo(index) {
    const arrCopy = this.state.todos.slice();
    var filteredArr = arrCopy.filter((todo, i) => {
      return i !== index;
    });

    this.setState({ todos: filteredArr });
  }


  render() {

    return (

    <div className="App">

          <div className= "nav">
            <h1>Check <span className = "ion-ios7-checkmark"></span> Mate</h1>
          </div>

          <ul>
            { this.state.todos.map( (todo, index) =>
            <ToDo
              key = { index }
              description = { todo.description }
              isCompleted = { todo.isCompleted }
              toggleComplete = { () => this.toggleComplete(index) }
              deleteTodo = { () => this.deleteTodo(index)}
              />
            )}
          </ul>

          <div className = "bottom-bar">
            <input
              className = "add-item-bar"
              placeholder = " add item..."
              type="text"
              value={ this.state.newTodoDescription }
              onChange={ (e) => this.handleChange(e) }
              />
            <div onClick = { (e) => this.handleSubmit(e) } className = "ion-plus-circled"></div>
          </div>

      </div>

    );
  }
}




export default App;
