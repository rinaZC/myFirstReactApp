import React from "react";
import {render} from "react-dom";
import Todo from "./Todo";

class TodoList extends React.Component{
    render(){
        return <ul>
            {this.props.todoList.map((d,step)=>{
                

                return <Todo toggleClick={(i)=>{
                    this.props.toggleTodo(i)
                }} k={step} xClick={(index) => {
                    this.props.todoXClick(index);
    
                }} task={d.taskText} completed={d.completed}></Todo>
            })}
        </ul>
    }

}

export default TodoList;
