/** @format */

import React, { Component } from "react";
import axios from "axios";
import { FormGroup, Label, Input, Form, FormText, Button } from "reactstrap";
//import DatePicker from 'react-datepicker';
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRegistrationType = this.onChangeRegistrationType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loginUser = this.loginUser.bind(this);

    this.state = {
      user: "",
      password: "",
      registrationType: "Farmer",
      msg: <span className="small"></span>,
    };
  }

  //   componentDidMount() {
  //     axios.get('http://localhost:5000/farmerRegistration/')
  //       .then(response => {
  //         if (response.data.length > 0) {
  //           this.setState({
  //             users: response.data.map(user => user.username),
  //             username: response.data[0].username
  //           })
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })

  //   }

  onChangeUser(e) {
    this.setState({
      user: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeRegistrationType(e) {
    this.setState({
      registrationType: e.target.value,
    });
    // if (this.state.password===this.state.confirmPassword){
    //   this.setState({msg:(<span className="small text-success">Password Matches!</span>)})
    // }
    // else{
    //   this.setState({msg:(<span className="small text-danger">Password does not Matches!</span>)})
    // }
  }
  onSubmit(e) {
    e.preventDefault();

    const userdetails = {
      user: this.state.user,
      password: this.state.password,
      registrationType: this.state.registrationType,
    };
    this.loginUser(userdetails);
    console.log("ok");
  }

  async loginUser(users) {
   await axios.post("http://localhost:5000/login/login", users) 
    .then( response=>{ console.log(response); window.location='/equipmentList';})
    .catch(err=>{console.log(err);});
  }
      
  

  render() {
    return (
      <>
        <div className="register_background">
          <Form className="register_us" onSubmit={this.onSubmit}>
            <h3 className="text-center">LOGIN</h3>

            <FormGroup>
              <Label for="name">Email</Label>
              <Input
                id="name"
                name="user"
                placeholder=""
                type="text"
                //value={this.state.name}
                onChange={this.onChangeUser}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder=""
                type="password"
                // value={this.state.password}
                onChange={this.onChangePassword}
              />
            </FormGroup>

            <FormGroup>
              <br />
              <Label for="exampleSelect">Registration Type</Label>
              <Input
                id="exampleSelect"
                name="registrstionType"
                type="select"
                value={this.state.registrationType}
                onChange={this.onChangeRegistrationType}
              >
                <option>Farmer</option>
                <option>Lessor</option>
              </Input>
            </FormGroup>

            <input
              type="submit"
              value="Login"
              className="btn btn-primary"
              onClick={this.onSubmit}
            />
          </Form>
        </div>
      </>
    );
  }
}
