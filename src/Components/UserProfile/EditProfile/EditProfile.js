import React,{Component} from 'react';
import axios from 'axios';
import {FormGroup, Label, Input, Form, FormText, Button} from 'reactstrap'
import "./../../FarmerRegistration/FarmerRegistration.css";
import ToolsNavbar from '../../toolsNavbar/ToolsNavbar.js';

export default class EditProfile extends Component {
    constructor(props) {
      super(props);
  
    //   this.call = this.call.bind(this);
    //   this.onChangePnumber = this.onChangePnumber.bind(this);
    //   this.onChangeStreetNo = this.onChangeStreetNo.bind(this);
    //   this.onChangeStreetName = this.onChangeStreetName.bind(this);
    //   this.onChangeCity=this.onChangeCity.bind(this);
    //   this.onChangePincode=this.onChangePincode.bind(this);
    //   this.onChangeAadhar= this.onChangeAadhar.bind(this);
    //   this.onChangeEmail=this.onChangeEmail.bind(this);
    //   this.onChangeHaveAccount=this.onChangeHaveAccount.bind(this);
    //   this.onChangePassword=this.onChangePassword.bind(this);
    //   this.onChangeConfirmPassword=this.onChangeConfirmPassword.bind(this);
    //   this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        name: '',
        pnumber: 0,
        streetNo:0,
        streetName: '',
        city:'',
        pincode:0,
        aadhar:0,
        email:'',
        haveAccount: true,
        password:'',
        confirmPassword:'',
        msg:(<span className="small"></span>)
      }
    }
    componentDidMount() {
            axios.get('http://localhost:5000/editProfile/')
              .then(response => {
                if (response.data.length > 0) {
                  this.setState({
                    name: response.data.fullname,
                    pnumber: response.data.pnumber,
                    streetNo:response.data.streetnumber ,
                    streetName: response.data.streetname,
                    city:response.data.city,
                    pincode:response.data.pincode,
                    aadhar:response.data.aadhar,
                    email:response.data.email,
                    haveAccount: response.data.account,
                    password:response.data.password,
                    confirmPassword:response.data.password,
                    // users: response.data.map(user => user.username),
                    // username: response.data[0].username
                  })
                }
              })
              .catch((error) => {
                console.log(error);
              })
              }
  
//     call(){
//           axios.get('http://localhost:5000/editProfile/')
//     this.setState({name: axios.get('http://localhost:5000/editProfile/').then(res=>res.data)
//     })
//     // .then(res => this.setState({ 
//     //     name :res
//     //   }));
// }

onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangePnumber(e){
      this.setState({
          pnumber: e.target.value
      })
  }

  onChangeStreetNo (e) {
    this.setState({
      streetNo: e.target.value
    })
  }

  onChangeStreetName (e) {
    this.setState({
      streetName: e.target.value
    })
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }
  onChangePincode (e) {
    this.setState({
      pincode: e.target.value
    })
  } onChangeAadhar (e) {
    this.setState({
      aadhar: e.target.value
    })
  } onChangeEmail (e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeHaveAccount(e) {
    this.setState({
      haveAccount: e.target.value
    })
  } onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onChangeConfirmPassword(e) {
    this.setState({ 
      confirmPassword : e.target.value
    })
    // if (this.state.password===this.state.confirmPassword){
    //   this.setState({msg:(<span className="small text-success">Password Matches!</span>)})
    // }
    // else{
    //   this.setState({msg:(<span className="small text-danger">Password does not Matches!</span>)})
    // }
    
  }
  onSubmit(e) {
    e.preventDefault();

    const farmer = {
      name: this.state.name,
      pnumber: this.state.pnumber,
      streetNo: this.state.streetNo,
      streetName: this.state.streetName,
      city: this.state.city,
      pincode: this.state.pincode,
      aadhar: this.state.aadhar,
      email:this.state.email,
      haveAccount: this.state.haveAccount,
      password: this.state.password
    }

    console.log(farmer);
    if (this.state.password===this.state.confirmPassword){
    axios.post('http://localhost:5000/editProfile/save', farmer)
      .then(res => console.log(res.data));

    window.location = '/';
    }
    else{
      this.setState({msg:(<span className="small text-danger">Password does not Matches!</span>)})
    }
    
  }

render(){
    return (
        <>
        <ToolsNavbar />
        <div className="register_background" style={{marginBottom: "400px"}}>
            
            <Form className="register_us">
            <h3 className="text-center">Edit Profile</h3>
            <FormGroup>
                <Label for="name">
                Full Name  
                </Label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    type="text"
                    value={this.state.name}
                    onChange={this.onChangeName}
                />
            </FormGroup>    
            <FormGroup>
                <Label for="pnumber">
                Phone Number
                </Label>
                <Input
                    id="phone_no"
                    name="pnumber"
                    placeholder="Phone Number"
                    type="number"
                    
                   // onChange={this.onChangePnumber}
                />
            </FormGroup>
            <FormGroup>
                <Label for="address">
                Address
                </Label>
                <Input
                    id="streetNo"
                    name="streetNo"
                    placeholder="Street number"
                    type="number"
                    value={this.state.streetNo}
                    onChange={this.onChangeStreetNo}
                />
                <Input
                    className="mt-4"
                    id="streetName"
                    name="streetName"
                    placeholder="Street Name"
                    type="text"
                    value={this.state.streetName}
                    onChange={this.onChangeStreetName}
                />
                <Input
                    className="mt-4"
                    id="city"
                    name="city"
                    placeholder="City"
                    type="text"
                    value={this.state.city}
                    onChange={this.onChangeCity}
                />
                <Input
                    className="mt-4"
                    id="pincode"
                    name="pincode"
                    placeholder="Pincode"
                    type="text"
                    value={this.state.pincode}
                    onChange={this.onChangePincode}
                />
            </FormGroup>
            <FormGroup>
                <Label for="adhar_no">
                Aadhar Number
                </Label>
                <Input
                    id="adhar_no"
                    name="aadhar"
                    placeholder=""
                    type="Number"
                    value={this.state.aadhar}
                   // onChange={this.onChangeAadhar}

                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">
                Email
                </Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder=""
                    type="email"
                    value={this.state.email}
                   // onChange={this.onChangeEmail}
                />
        <FormGroup>
            <br />
            <Label for="exampleSelect">
                Do you have a bank account?   
            </Label>
            <Input
                id="exampleSelect"
                name="haveAccount"
                type="select"
                value={this.state.haveAccount}
                onChange={this.onChangeHaveAccount}
            >
                <option>
                    Yes
                </option>
                <option>
                    No
                </option>
            </Input>
            
        </FormGroup>
      
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">
                Password
            </Label>
            <Input
                id="examplePassword"
                name="password"
                placeholder=""
                type="password"
                value={this.state.password}
                onChange={this.onChangePassword}
            />
        </FormGroup>
        <FormGroup>
            <Label for="confirmPassword">
                Confirm Password
            </Label>
            <Input
                id="confirmPassword"
                name="confirmPassword"
                placeholder=""
                type="password"
                value={this.state.confirmPassword}
                onChange={this.onChangeConfirmPassword}
            />
            <Label className="small small"></Label>
        </FormGroup>
        
        <input type="submit" value="Register" className="btn btn-primary" />
    
        </Form>
        </div>
    </>
    );
}

}