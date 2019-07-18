import React from "react";
import {render} from "react-dom";

class InputLine extends React.Component{
    constructor(props){
        super(props);
        this.state={
            typedText:""
        }
    }
    handleTyping(event){

        this.setState({
            typedText:event.target.value
        })
    }
    handleSubmit(e){
        this.props.submit(this.state.typedText);
        this.setState({
            typedText:""
        })
    }
    render(){
        return <div>
            <input onChange={(e)=>{
                this.handleTyping(e);
            }}type="text" placeholder="task" value={this.state.typedText}></input>
            <input onClick={(e)=>{
                this.handleSubmit(e);
            }} type="submit" value="Add Todo"></input>
        </div>
    }
}

export default InputLine;