import React from "react";
import {render} from "react-dom";

class InputLine extends React.Component{
    render(){
        return <div>
            <input type="text" placeholder="task"></input>
            <input type="submit" value="Add Todo"></input>
        </div>
    }
}

export default InputLine;