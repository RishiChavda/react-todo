import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import AddItem from "./components/AddItem";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: "Eat",
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: "Pray",
      //   completed: false
      // },
      // {
      //   id: 3,
      //   title: "Love",
      //   completed: false
      // }
    ],
    length: 0
  };

  addItem = title => {
    console.log("new todo" + title);
    const newTodo = {
      id: this.state.length + 1,
      title,
      complete: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      length: this.state.todos.length + 1
    });
  };

  // toggle state for completeness
  toggleComplete = (id, title) => {
    console.log("Here in App");
    console.log("ID", id);

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delete = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header count={this.state.length} />
        <AddItem addItem={this.addItem} />
        <div>
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            delete={this.delete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
