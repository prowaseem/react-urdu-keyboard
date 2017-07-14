import React from "react";
import "./style.css";
import "font-awesome/css/font-awesome.min.css"
import KeyboardMap from "./KeyboardMap";
import UnicodeMap from "./UnicodeMap";
import EngToUrdu from "./EnglishToUrduMap";

export default class UrduKeyboard extends React.Component{
    constructor(props){
        super();
        this.state = {
            value: props.content,
            font_size: 12
        };
        this.areaStyle = {
            display: 'none'
        };
        this.keyboardSpecialKeys = {
            16 : "shift"
        };
        this.fontSizes = [8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50];
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    }
    handleChange(event){
        event.preventDefault();
        console.log(event.target.value);
        /*this.setState({
            value: event.target.value
        });*/
    }
    handleKeyDown(event){
        event.preventDefault();
        let content = '';
        let keyboard = {};
        this.setState({
            value: event.target.value
        });
        console.log(event.keyCode);
        console.log(EngToUrdu);
        console.log(KeyboardMap);
        /*Object.keys(KeyboardMap).some(key=>{
            if(parseInt(key) === event.keyCode){
                keyboard = KeyboardMap[key];
                return false;
            }
        });
        console.log(keyboard);*/
    }
    handleFontSizeChange(event){
        this.setState({
            font_size: event.target.value
        });
    }
    render(){
        return(
            <div className="form-control" id="urduKeyboard">
                <textarea style={this.areaStyle} value={this.state.value} onChange={this.handleChange}> </textarea>
                <div id="editor" className="container-fluid">
                    <div className="row header">
                        <div className="col-3 group ">
                            <div className="row justify-content-around">
                                <button className="btn btn-default" title="Center">
                                    <i className="fa fa-align-center" />
                                </button>
                                <button className="btn btn-default" title="Justify">
                                    <i className="fa fa-align-justify" />
                                </button>
                                <button className="btn btn-default" title="Left">
                                    <i className="fa fa-align-left" />
                                </button>
                                <button className="btn btn-default" title="Right">
                                    <i className="fa fa-align-right" />
                                </button>
                            </div>
                        </div>
                        <div className="col-3 group ">
                            <div className="row justify-content-around">
                                <button className="btn btn-default" title="Bold">
                                    <i className="fa fa-bold" />
                                </button>
                                <button className="btn btn-default" title="Italic">
                                    <i className="fa fa-italic" />
                                </button>
                                <button className="btn btn-default" title="Strike through">
                                    <i className="fa fa-strikethrough" />
                                </button>
                                <button className="btn btn-default" title="Underline">
                                    <i className="fa fa-underline" />
                                </button>
                            </div>
                        </div>
                        <div className="col-3 group ">
                            <div className="row justify-content-around">
                                <button className="btn btn-default" title="Copy">
                                    <i className="fa fa-files-o" />
                                </button>
                                <button className="btn btn-default" title="Cut">
                                    <i className="fa fa-scissors" />
                                </button>
                                <button className="btn btn-default" title="Paste">
                                    <i className="fa fa-clipboard" />
                                </button>
                                <button className="btn btn-default" title="Underline">
                                    <i className="fa fa-underline" />
                                </button>
                            </div>
                        </div>
                        <div className="col-3 group ">
                            <div className="row justify-content-around">
                                <div className="col-4">
                                    <select name="font-size" id="font-size" className="form-control" value={this.state.font_size} onChange={this.handleFontSizeChange}>
                                        {this.fontSizes.map((x, key)=>{
                                            return <option key={key} value={x}>{x}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className="col-8">
                                    <select name="font-family" id="font-family" className="form-control">
                                        <option value="adobe-arabic">Adobe Arabic</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row body" style={{fontSize: this.state.font_size + 'px'}}contentEditable={true} onKeyDown={this.handleKeyDown}>

                    </div>
                </div>
            </div>
        );
    }
}