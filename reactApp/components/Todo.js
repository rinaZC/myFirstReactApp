import React from "react";
import { render } from "react-dom";

class Todo extends React.Component {
  render() {
    let value = this.props.completed ? (
      <strike>{this.props.task}</strike>
    ) : (
      this.props.task
    );

    return (
      <form>
        <li>
          <input
            onClick={e => {
              e.preventDefault();
              //console.log("todo", this.props);

              this.props.xClick(this.props.k);
            }}
            type="submit"
            value="X"
          />
          <span
            onClick={e => {
              e.preventDefault();
              this.props.toggleClick(this.props.k, this.props.completed);
            }}
          >
            {value}
          </span>
        </li>
      </form>
    );
  }
}

export default Todo;
