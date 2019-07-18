import React from "react";
import {render} from "react-dom";

const dummyData=[{taskText:"Have Dinner",completed:true}, {taskText:"Go for a jog",completed:false}, {taskText:"Drink Water",completed:false},{taskText: "Take a shower",completed:false}];
class TodoList extends React.Component{
    render(){
        return <ul>
            {this.props.todoList.map(d=><Todo task={d.taskText} completed={d.completed}></Todo>)}
        </ul>
    }

}
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

class InputLine extends React.Component{
    render(){
        return <div>
            <input type="text" placeholder="task"></input>
            <input type="submit" value="Add Todo"></input>
        </div>
    }
}

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



render(<TodoApp/>,
    document.getElementById('root'));