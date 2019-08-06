import React from "react";
import { render } from "react-dom";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map(d => {
          console.log(d);
          return (
            <Todo
              toggleClick={(i, b) => {
                this.props.toggleTodo(i, b);
              }}
              xClick={index => {
                this.props.todoXClick(index);
              }}
              task={d.taskText}
              completed={d.completed}
              k={d._id}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
