import CheckboxWithText from "../atoms/CheckboxWithText";
import ProductListDropdown from "../atoms/ProductListDropdown";
import React, {Component} from 'react';
import PageButton from "../atoms/PageButton";
import axios from 'axios';

import CreateAd from "./CreateAd";


export default class MySwapGiveAds extends Component {

    constructor(props) {
        super(props);
        debugger;

    //    this.onChangeProduct = this.onChangeProduct.bind(this);
      //  this.getBuyAds = this.getBuyList.bind(this);
     //   this.handleViewChange= this.handleViewChange.bind(this);
        

        this.state = {
            myGiveAds:[],
            userDBID:props.userDBID,
            userToken: props.userToken,
            productID: '',
            quantity:'',
            productName:'',
            Notes:'',
            productList: props.productList
                 
        }
        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.getData = this.getData.bind(this);
        this.onSubmitAd = this.onSubmitAd.bind(this);
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
        this.setState({
            quantity: e.target.value
        });
    }

    onSubmitAd(e) {
        var tokenNew = "[Basic " + this.props.userDBIDToken + "]";
      
        axios.post('https://data.mongodb-api.com/app/plantlifemt-fiueo/endpoint/CreateSwapAd',
          {token: tokenNew},
          {
        headers: {
          'Accept': ['application/json']
        }
        })
        .then((res) => {
          var data = res.data
          console.log(res.data);
          var id = '';
          try{
            id = (data.length === 1)?data.insertedId:data._id;
          }
          catch(e)
          {
              id="";
          }
        
          
      
        })
        .catch((error) => {
        console.error(error);
        });

    }


    onAdAdded(data) {

    }

    componentDidMount() {
     /*  if ((this.props.userDBID!=undefined)&&(this.props.userDBID!==""))
       {
        debugger;
        const config = {
            headers: { Authorization: `Basic ${this.state.userToken}` }
        };
        
        axios.get('https://data.mongodb-api.com/app/plantlifemt-fiueo/endpoint/getMyGiveAds?u='+ this.props.userDBID + "&token="+this.props.userToken, config)
            .then(response => {
                debugger;
                this.setState({myGiveAds: response.data});
            })
            .catch(function (error) {
                debugger;
                console.log(error);
            })
        }
        */
       this.getData();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("running comonent update on MySwapGiveAds");
        debugger;
        if (this.props.userDBID !== prevProps.userDBID) {
            this.setState({userDBID: this.props.userDBID})
            this.getData();
        }
      
    }

    getData() {
     
        if ((this.props.userDBID!=undefined)&&(this.props.userDBID!==""))
        {
         debugger;
         const config = {
             headers: { Authorization: `Basic ${this.state.userToken}` }
         };
         
         axios.get('https://data.mongodb-api.com/app/plantlifemt-fiueo/endpoint/getMyGiveAds?u='+ this.props.userDBID + "&token="+this.props.userToken, config)
             .then(response => {
                 debugger;
                 this.setState({myGiveAds: response.data});
             })
             .catch(function (error) {
                 debugger;
                 console.log(error);
             })
         }
    }
   
  
    render() {
     
        {
            if (this.state.myGiveAds.length!=0)
            {
                return (
                    <div>
                        <h5>To give:</h5>
                       <CreateAd AdType="Swap_Give" userDBID={this.props.userDBID} ProductList={this.props.ProductList} postURL="https://data.mongodb-api.com/app/plantlifemt-fiueo/endpoint/CreateSwapAd" userToken={this.props.userToken} />
                        {
                           // (this.state.myGiveAds !=null)?
                            this.state.myGiveAds.map(function (object) {
                                return (
                                    <div>
                                        <CheckboxWithText Title={object.productName} checked ={object.active} key={object._id} onChange={null}/> {object.quantity}
                                    </div>                     
                                );

                            },this)

                        }
                    </div>
                );
            }
            else
            {
                return (
                    <div>
                        <h5>To Give blank:</h5>
                       <CreateAd AdType="Give" userDBID={this.props.userDBID} userToken={this.props.userToken} />
                    
                    </div>
                );
            }
        }


     }
    

}




/*
const MySwapAds = (props) => (
    <div>
        <h5>Want to swap:</h5>
        <div name="AddSwap">Product: <ProductListDropdown ProductList={props.ProductList} onChangeProduct = {null} />
        </div><br />
        <div name="swapList">
            {
              props.data.length >0 ?
                    props.data.map(function (object) {
                        return (
                            <div>
                                <CheckboxWithText Title={object.productName} checked ={object.active} key={object._id} onChange={null}/> {object.quantity}
                            </div>                     
                        );
                
                    },this)
               :
                    <div>You don't have any swap ads yet, click the button above to add one</div>
               
            }
            
                
        </div>
    </div>
)
*/


//export default MySwapAds;