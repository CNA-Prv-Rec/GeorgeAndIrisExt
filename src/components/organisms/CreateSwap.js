import React, {Component} from 'react';
import axios from 'axios';
import ProductListDropdown from '../atoms/ProductListDropdown';

export default class CreateSwap extends Component {

    constructor(props) {
        super(props);
        //passing in a productList hopefully?

        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.onChangeProductOther = this.onChangeProductOther.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangePostcode = this.onChangePostcode.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product: '',
            productother:'',
            amount: '',
            postcode: '',
            location: '',
            userid:'',
            userToken:this.props.userToken,//no change method
            enddate:'',
            startdate:'',
            status:'inactive',//no change method
            notes:''   ,
            productList: props.productList   
        }
    }

    onChangeProduct(e) {
        this.setState({
            product: e.target.value
        });
    }

    onChangeProductOther(e) {
        this.setState({
            productother: e.target.value
        });
    }

    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        });
    }

    onChangePostcode(e) {
        this.setState({
            postcode: e.target.value
        });
    }

    /* we dont need this one? */
    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }
    onChangeEndDate(e) {
        this.setState({
            enddate: e.target.value // todo check if they entered a valid date
        });
    }
    onChangeStartDate(e) {
        this.setState({
            startdate: e.target.value // todo check if they entered a valid date
        });
    }

    onChangeNotese(e) {
        this.setState({
            notes: e.target.value // todo check for dodgy content?
        });
    }
  

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`product: ${this.state.product}`);
        console.log(`productother: ${this.state.productother}`);
        console.log(`amount: ${this.state.amount}`);
        console.log(`postcode: ${this.state.postcode}`);
        console.log(`location: ${this.state.location}`);
        console.log(`userid: ${this.state.userid}`);
        console.log(`userid: ${this.state.userToken}`);
        console.log(`startdate: ${this.state.startdate}`);
        console.log(`enddate: ${this.state.enddate}`);
        console.log(`status: ${this.state.status}`);
        console.log(`notes: ${this.state.notes}`);



        const newData = {
            product: this.state.product,
            productother: this.state.productother,
            amount:  this.state.amount,
            postcode:  this.state.postcode,
            location: '',
            userid: this.state.userid,
            enddate: this.state.enddate,
            startdate: this.state.startdate,
            status:this.state.status,
            notes: this.state.notes,
            userToken: this.state.userToken, // we should put this as bearer cookie?
        }

        axios.post('https://webhooks.mongodb-realm.com/api/client/v2.0/app/plantlifemt-fiueo/service/Plantlife/incoming_webhook/add', newData)
            .then(res => console.log(res.data));

        this.setState({
            product: '',
            productother: '',
            amount:  '',
            postcode:  '',
            location: '',
           // userid: context.userid,
            enddate: '',
            startdate:'',
            status:'inactive',
            notes: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Swap Ad</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Product: </label>
                        <ProductListDropdown ProductList={this.state.productList} Value={this.state.product} onChange={this.onChangeProduct} />
                       
                    </div>
                    <div className="form-group">
                        <label>Other: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.productother}
                                onChange={this.onChangeProductOther}
                                />
                    </div>
                    <div className="form-group">
                    <label>Quantity: </label>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="amountOptions"
                                    id="amountLow"
                                    value="Small amount"
                                    checked={this.state.amount==='Small amount'}
                                    onChange={this.onChangeAmount}
                                    />
                            <label className="form-check-label">Small amount</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="amountOptions"
                                    id="amountMedium"
                                    value="A fair bit"
                                    checked={this.state.amount==='A fair bit'}
                                    onChange={this.onChangeAmount}
                                    />
                            <label className="form-check-label">A fair bit</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="amountOptions"
                                    id="amountHigh"
                                    value="Oodles"
                                    checked={this.state.amount==='I have oodles to spare'}
                                    onChange={this.onChangeAmount}
                                    />
                            <label className="form-check-label">Oodles</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Ad" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}