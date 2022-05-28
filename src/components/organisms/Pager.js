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
import axios from 'axios';


class Pager extends Component {

    state={"currentPage":"Main",
        "destination":ContentMain,
        "productList":[]
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
            case "Help":
                this.setState({"destination": Help});
                break;
            case "About Us":
                this.setState({"destination": About});
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
            <div>
                <MenuBar onclick={this.handlePageChange.bind(this)} />
                <br />
                <ContentPage Destination={this.state.destination} ProductList={this.state.productList} />
            </div>

        );
    }
}

export default Pager;