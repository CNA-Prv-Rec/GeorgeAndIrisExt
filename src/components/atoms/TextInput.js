import { React,Component } from "react";


class TextInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            finalName: props.defaultAnswer,
            caption: props.caption,
            tip: props.tip
        };
        this.setName = this.setName.bind(this);
    }

   setName (event)  {
        this.setState({finalName: event.target.value});
    }

    render() {
        return (
            <div>
            <h3>{this.state.caption}</h3>
            <input type='text' title={this.state.tip} value={this.state.finalName} onChange={this.setName}></input>
            <br />
           
        </div>

        );
    }


}


export default TextInput;