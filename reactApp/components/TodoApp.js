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
    componentDidMount(){
        this.setState({
            todos:dummyData
        })
    }
    render(){
        return <div>
            <InputLine/>
        <TodoList todoList={this.state.todos}/>
        </div>
        
    }
}

export default TodoApp;