import { React,Component } from "react";

class UserControl extends Component {
    constructor(props)
    {
        super(props);
        this.state = {name: "Bill"};//modify later with this.setState({jsonvars}). do not modify state directly, wont update dom
    }

    componentDidMount() {
        //put in here anything that needs removing when element destroyed, e.g. timers
    }

    componentWillUnmount() {
        //put in here any code to remove unused resources
    }

    changeName() {//camel case event
        this.setState((state,props) => ({
            name: (state.name=="Bill"?"Bob":"Bill") // fucntion to update name beause state too async for words...
            // why do i need props here? can i drop it? an i vary the function calls?
        }));
    }

    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
                <button onClick={changeName}>Change Name</button>
            </div>
        );
    }
}