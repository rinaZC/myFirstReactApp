import React from "react";
import {render} from "react-dom";

const dummyData=["Have Dinner", "Go for a jog", "Drink Water", "Take a shower"];
class TodoList extends React.Component{
    render(){
        return <ul>
            {dummyData.map(d=><Todo task={d}></Todo>)}
        </ul>
    }

}

class Todo extends React.Component{
    render(){
        return <form><li><input type="submit" value="X"></input>{this.props.task}</li></form>
    }
}

render(<TodoList/>,
    document.getElementById('root'));