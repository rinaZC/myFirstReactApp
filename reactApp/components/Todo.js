import React from "react";
import {render} from "react-dom";

class Todo extends React.Component{
    render(){
        let value=this.props.completed ?<strike>{this.props.task}</strike>  :this.props.task;
        let x=this.props.k;
        //console.log(x);
        return <form>
            <li><input onClick={(e)=>{
                
                e.preventDefault();

                this.props.xClick(x);
                
            }} type="submit" value="X"></input>
            <span onClick={(e)=>{
                e.preventDefault();
                this.props.toggleClick(x);
            }}>{value}</span>
            </li>
            </form>
    }
}

export default Todo;