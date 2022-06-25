import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';

const SwapListItem = props => (
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
)

export default class SwapList extends Component {

    constructor(props) {
        super(props);
        this.state = {results: []};
    }
/*
    componentDidMount() {
        axios.get('https://webhooks.mongodb-realm.com/api/client/v2.0/app/plantlifemt-fiueo/service/Plantlife/incoming_webhook/Todos')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('https://webhooks.mongodb-realm.com/api/client/v2.0/app/plantlifemt-fiueo/service/Plantlife/incoming_webhook/Todos')
        .then(response => {
            this.setState({todos: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }
    */

    resultsList() {
        return this.state.results.map(function(currentItem, i) {
            return <SwapListItem Item={currentItem} key={i} />;
        });
    }
  

    render() {
        return (
            <div>
               Under construction - check back in a week or so...
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Location</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.resultsList() }
                    </tbody>
                </table>
            </div>
        )
    }
}