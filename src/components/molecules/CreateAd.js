import React, { useState } from 'react';
import {Component} from 'react';
import ProductListDropdown from "../atoms/ProductListDropdown";
//import PageButton from "../atoms/PageButton";
import QuantityDropdown from "../atoms/QuantityDrowdown";
import axios from 'axios';
import AdType from "../atoms/AdType";


export default class CreateAd extends Component {

  constructor(props) {
      super(props);
      debugger;
    
      this.state = {
        productList: props.ProductList,
        userToken: props.userToken,
        productID:'',
        productName: '',
        productother: '',
        quantity:'',
        category:'',
        subcategory:'',
        amount:  '',
        postcode:  '',
        location: '',
        userDBID:props.userDBID,
        status:'',
        notes: '',
        adType: ''
                 
      }

      this.onChangeProduct = this.onChangeProduct.bind(this);
      this.onChangeQuantity = this.onChangeQuantity.bind(this);
      this.onChangeNotes = this.onChangeNotes.bind(this);
      this.onChangeAdType = this.onChangeAdType.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onAdAdded = this.onAdAdded.bind(this);
  }

  onChangeProduct(e) {
      console.log("changing product to " + e.target.value);
      debugger;
      this.setState({
          productID: e.target.value,
          productName: e.target.value
      });
  }

  onChangeQuantity(e) {
    console.log("changing quantity to " + e.target.value);
    debugger;
    this.setState({
        quantity: e.target.value
    });
  }

  onChangeNotes(e) {
    console.log("changing notes to " + e.target.value);
    debugger;
    this.setState({
        notes: e.target.value
    });
}

  onChangeAdType(e) {
    console.log("changing ad type to " + e.target.value);
    debugger;
    this.setState({
        adType: e.target.value
    });
  }
  








 onSubmit(e) {
    debugger;
    alert("hello");
    var tokenNew = "[Basic " + this.state.userToken + "]";
    const newData = {
        product: this.state.product,
        productother: this.state.productother,
        amount:  this.state.amount,
        postcode:  this.state.postcode,
        adType: '',
        location: '',
        userid: this.state.userid,
        enddate: this.state.enddate,
        startdate: this.state.startdate,
        status:this.state.status,
        notes: this.state.notes,
        userToken: this.state.userToken, // we should put this as bearer cookie?
    }
      
    axios.post('https://data.mongodb-api.com/app/plantlifemt-fiueo/endpoint/CreateAd',
        newData,
      {
    headers: {
      'Accept': ['application/json']
    }
    })
    .then((res) => {
        debugger;
      var data = res.data
      console.log(res.data);
      var id = '';
      try{
        id = (data.length === 1)?data.insertedId:data._id;
      }
      catch(e)
      {
        debugger;
          id="";
      }
     
      
  
    })
    .catch((error) => {
        debugger;
    console.error(error);
    });
    return false;
}

onAdAdded(data) {

}

componentDidMount() {
  this.getData();
}

getData() {
}




render() {

    return (
        <div name="createAd">
   
        <input type="hidden" name="userID" value={this.state.userDBID} />
        <input type="hidden" name="userToken" value={this.state.userToken} />
       Ad Type:
       <AdType onChangeAdType={this.onChangeAdType} />
        Crop:<br />
        <ProductListDropdown onChangeProduct={this.onChangeProduct} ProductList={this.props.ProductList} />
        Quantity:<br />
       <QuantityDropdown onChangeQuantity = {this.onChangeQuantity} />
        <br />
        Notes:<br /> <textarea name="Notes" rows="6" cols="40" onChange={this.onChangeNotes} /><br />

        <input id="submit" type="button" value="Create ad" onClick={this.onSubmit} />

    </div>
    )

}
}

