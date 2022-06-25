import React, {Component} from 'react';
import ProductListDropdown from "../atoms/ProductListDropdown";
import DistanceDropdown from "../atoms/DistanceDropdown";
import PageButton from "../atoms/PageButton";
import BuySearchResults from "../organisms/BuySearchResults"


export default class Buy extends Component {

    constructor(props) {
        super(props);

        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.getBuyList = this.getBuyList.bind(this);

        this.state = {
            product: '',
            userToken: props.userToken,
            productList: this.props.ProductList
                 
        }
    }

    onChangeProduct(e) {
        console.log("changing value to " + e.target.value);
        this.setState({
            product: e.target.value
        });
      
    }

    getBuyList(e) {
            var x=0;
    }

    render() {
        return (
            <div>
                <span className="paddedSpan">Product: <ProductListDropdown ProductList={this.state.productList} onChangeProduct={(value)=>{this.onChangeProduct(value);}} /></span>
               <span>SelectedProduct: {this.state.product}</span>
                <span className="paddedSpan">Max Distance: <DistanceDropdown /></span>
                <span className="paddedSpan"><PageButton Title="Search" onclick={this.getBuyList} className="actionButton" /></span>
            <br />
             <BuySearchResults />
            </div>
        );
    }

}


