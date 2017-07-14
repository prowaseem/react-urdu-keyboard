import React from "react";
import ReactDOM from "react-dom";

//import components
import UrduKeyboard from "./UrduKeyboard/UrduKeyboard";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            content: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <h1>Urdu Keyboard</h1>
                <form onSubmit={this.handleSubmit}>
                    <UrduKeyboard content={this.state.content}/>
                    <div className="form-control">
                        <input type="submit"  value="Publish" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);