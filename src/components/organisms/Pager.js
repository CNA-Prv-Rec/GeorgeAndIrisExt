//import "./PageButton.css";
import { React,Component } from "react";
import FeatureList from "./FeatureList";
import ContentMain from "./ContentMain";
import MenuBar from "../molecules/MenuBar";
import ContentPage from "../molecules/ContentPage";
import Buy from"./Buy"
import Sell from "./Sell";
import Swap from "./Swap";
import Help from "./Help";
import About from "./About";
import Contact from "./Contact";
import MyAds from "./MyAds";
import axios from 'axios';


class Pager extends Component {
    /*constructor(props) {
        super(props);
    }*/

    state={"currentPage":"Main",
        "destination":ContentMain,
        "productList":[],
        "userToken":this.props.userToken
    };

 

    handlePageChange = (e) => {
        this.setState({"currentPage":e.target.value,});
        switch(e.target.value)
        {
            case "Main":
                this.setState({"destination": ContentMain });
                break;
            case "FeatureList":
                this.setState({"destination": FeatureList});
                break;
            case "Buy":
                this.setState({"destination": Buy});
                break;
            case "Sell":
                this.setState({"destination": Sell});
                break;
            case "Swap":
                this.setState({"destination": Swap});
                break;
            case "My Ads":
                this.setState({"destination": MyAds});
                break;
            case "Help":
                this.setState({"destination": Help});
                break;
            case "About":
                this.setState({"destination": About});
                break;
            case "Contact Us":
                this.setState({"destination": Contact});
                break;
            default:
                this.setState({"destination": ContentMain} )
        }
    }

    componentDidMount() {
        axios.get('https://data.mongodb-api.com/app/plantlifemt-fiueo/endpoint/getGIProductList')
            .then(response => {
                this.setState({productList: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="Menu-Pager">
                <MenuBar onclick={this.handlePageChange.bind(this)} />
                <br />
                <ContentPage Destination={this.state.destination} ProductList={this.state.productList} onPageChange={this.handlePageChange.bind(this)} userToken={this.state.userToken} />
            </div>

        );
    }
}

export default Pager;