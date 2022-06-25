import React, {Component} from 'react';
import PageButton from "../atoms/PageButton";
import axios from 'axios';

export default class MyAds extends Component {

    constructor(props) {
        super(props);

    //    this.onChangeProduct = this.onChangeProduct.bind(this);
      //  this.getBuyAds = this.getBuyList.bind(this);
        this.handleViewChange= this.handleViewChange.bind(this);
        

        this.state = {
            myAds:null,
            userToken: props.userToken,
            productList: this.props.ProductList,
            currentView:''
                 
        }
    }

    componentDidMount() {

        const config = {
            headers: { Authorization: `Bearer ${this.state.userToken}` }
        };
        axios.get('https://data.mongodb-api.com/app/plantlifemt-fiueo/endpoint/getMyAds', config)
            .then(response => {
                this.setState({myAds: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleViewChange = (e) => {
        this.setState({"currentView":e.target.value,});
    }

  
    render() {
        return (
            
            <div>
                <PageButton  className="pageButton tabButton" Title="Sell Ads" onclick={this.handleViewChange} />
                <PageButton  className="pageButton tabButton" Title="Swap Ads" onclick={this.handleViewChange} />
                <PageButton  className="pageButton tabButton" Title="Buy Ads" onclick={this.handleViewChange} />
                  <br />


          
                
            
            </div>
        );
    }

}