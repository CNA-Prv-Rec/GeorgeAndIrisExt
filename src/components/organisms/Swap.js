import React, {Component} from 'react';
import CreateSwap from "./CreateSwap";
import SwapList from "./SwapList";
import ProductListDropdown from "../atoms/ProductListDropdown";
import DistanceDropdown from "../atoms/DistanceDropdown";
import PageButton from "../atoms/PageButton";
import SwapSearchResults from './SwapSearchResults';


export default class Swap extends Component {

  constructor(props) {
      super(props);

      this.onChangeProduct = this.onChangeProduct.bind(this);
      this.getSwapList = this.getSwapList.bind(this);

      this.state = {
          product: '',
          userToken: props.userToken,
          userDBID:props.userDBID,
          productList: this.props.ProductList,
          data:null
               
      }
  }

  onChangeProduct(e) {
    console.log("changing value to " + e.target.value);
    this.setState({product: e.target.value});
  
  }
  getSwapList(e) {
    this.setState({data:null});
  }

  render() {
    return (
        <div>
          <h3>Swaps</h3>
            <span className="paddedSpan">Product: <ProductListDropdown ProductList={this.state.productList} onChangeProduct={(value)=>{this.onChangeProduct(value);}} /></span>
            <span>SelectedProduct: {this.state.product}</span>
            <span className="paddedSpan">Max Distance: <DistanceDropdown /></span>
            <span className="paddedSpan"><PageButton Title="Search" onclick={this.getBuyList} className="actionButton" /></span>
        <br />
        <SwapSearchResults />
        </div>
    );
  }

}

