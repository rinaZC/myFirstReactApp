import React from "react";
import axios from "axios";
import InputLine from "./InputLine";
import TodoList from "./TodoList";
const dbUrl = "http://localhost:3000/db";

// const dummyData = [
//   { taskText: "Have Dinner", completed: true },
//   { taskText: "Go for a jog", completed: false },
//   { taskText: "Drink Water", completed: false },
//   { taskText: "Take a shower", completed: false }
// ];
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    //this.addTodo = this.addTodo.bind(this);
  }
  addTodo(task) {
    //console.log(task);
    let self = this;
    axios
      .post(dbUrl + "/add", { task: task })
      .then(response => {
        //console.log(response.data);

        self.setState({
          todos: self.state.todos.concat(response.data)
        });
        //console.log(this.state.todos);
      })
      .catch(function(error) {
        console.log("something went wrong", error);
      });
    // this.setState({
    //   todos: this.state.todos.concat({
    //     taskText: task,
    //     completed: false
    //   })
    // });
  }

  toggleTodo(index, completed) {
    let self = this;
    axios
      .post(dbUrl + "/toggle", { index: index, completed: completed })
      .then(function(response) {
        //console.log(response);
        self.setState({
          todos: response.data
        });
      })
      .catch(function(err) {
        console.log(err);
      });

    // let copied = this.state.todos;
    // copied[index].completed = !copied[index].completed;
    // this.setState({
    //   todos: copied
    // });
  }

  removeTodo(index) {
    let self = this;
    axios
      .post(dbUrl + "/remove", { index: index })
      .then(function(response) {
        //console.log(response);
        self.setState({
          todos: response.data
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  componentDidMount() {
    let self = this;
    axios
      .get(dbUrl + "/all")
      .then(function(response) {
        //console.log("hi");
        //console.log(response);
        self.setState({
          todos: response.data
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <InputLine submit={task => this.addTodo(task)} />
        <TodoList
          toggleTodo={(i, b) => {
            this.toggleTodo(i, b);
          }}
          todoXClick={i => {
            this.removeTodo(i);
          }}
          todoList={this.state.todos}
        />
      </div>
    );
  }
}

export default TodoApp;
