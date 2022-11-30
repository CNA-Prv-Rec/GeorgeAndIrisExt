import React, {Component} from 'react';
import PageButton from "../atoms/PageButton";
import axios from 'axios';
import MySwapGiveAds from '../molecules/MySwapGiveAds';

export default class MyAds extends Component {

    constructor(props) {
        super(props);


    //    this.onChangeProduct = this.onChangeProduct.bind(this);
      //  this.getBuyAds = this.getBuyList.bind(this);
        this.handleViewChange= this.handleViewChange.bind(this);
        

        this.state = {
          //  myAds:[],
            userDBID: props.userDBID,
            userToken: props.userToken,
          //  productList: props.ProductList,
            currentView:''
                 
        }
    }

    
    componentDidMount() {
       /*
        const config = {
            headers: { Authorization: `Bearer ${this.state.userToken}` }
        };
        axios.get('https://data.mongodb-api.com/app/plantlifemt-fiueo/endpoint/getMyAds?u='+ this.props.userDBID, config)
            .then(response => {
                debugger;
                this.setState({myAds: response.data});
            })
            .catch(function (error) {
                debugger;
                console.log(error);
            })
            */
    }

    handleViewChange = (e) => {
        this.setState({"currentView":e.target.value,});
    }

    componentDidUpdate(prevProps, prevState) {
        debugger;
        console.log("running comonent update on MyAds");
        if (this.props.userDBID !== prevProps.userDBID) {
            this.setState({userDBID: this.props.userDBID})
        }
        if (this.props.userToken !== prevProps.userToken) {
            this.setState({userToken: this.props.userToken})
        }
    }

    componentWillReceiveProps(nextProps) {
        debugger;
        console.log("running component will receive props on MyAds");
        if (this.props.userDBID !== nextProps.userDBID) {
            this.setState({userDBID: nextProps.userDBID})
        }
        if (this.props.userToken !== nextProps.userToken) {
            this.setState({userToken: nextProps.userToken})
        }
       // this.setState({ data: nextProps.data });  
      }
  
    render() {
        return (
            
            <div>
                <h5>My Swap Ads:</h5>
                <MySwapGiveAds userDBID={this.state.userDBID} userToken = {this.state.userToken} ProductList={this.props.ProductList} />

            </div>
        );
    }

}