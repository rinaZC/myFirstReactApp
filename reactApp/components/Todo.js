import React from "react";
import {render} from "react-dom";

class Todo extends React.Component{
    render(){
        let value=this.props.completed ?<strike>{this.props.task}</strike>  :this.props.task;
        return <form>
            <li><input type="submit" value="X"></input>
            {value}
            </li>
            </form>
    }
}

export default Todo;