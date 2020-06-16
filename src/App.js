import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/layout/Header";
import AddItem from "./components/AddItem";
import Todos from "./components/Todos";
import About from "./components/pages/About";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
    length: 0
  };

  // loading TODO items from JSONPlaceholder
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  // adding a new TODO item to the state
  addItem = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        complete: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));

    // const newTodo = {
    //   id: this.state.length + 1,
    //   title,
    //   complete: false
    // };
    // this.setState({
    //   todos: [...this.state.todos, newTodo],
    //   length: this.state.todos.length + 1
    // });
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

    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div>
          <Header count={this.state.length} />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddItem addItem={this.addItem} />
                <Todos
                  todos={this.state.todos}
                  toggleComplete={this.toggleComplete}
                  delete={this.delete}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
