import React from "react";
import {render} from "react-dom";
import InputLine from "./InputLine";
import TodoList from "./TodoList";

const dummyData=[{taskText:"Have Dinner",completed:true}, {taskText:"Go for a jog",completed:false}, {taskText:"Drink Water",completed:false},{taskText: "Take a shower",completed:false}];
class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todos:[]
        }
    }
    addTodo(task){
        console.log(task);
        this.setState({
            todos:this.state.todos.concat({
                taskText:task,
                completed:false
            })
        })


    }

    componentDidMount(){
        this.setState({
            todos:dummyData
        })
    }
    render(){
        return <div>
            <InputLine submit={(task)=>this.addTodo(task)}/>
        <TodoList  todoList={this.state.todos}/>
        </div>
        
    }
}

export default TodoApp;