import React from 'react';
import axios from 'axios';
import {FormGroup, Label, Input, Form, FormText, Button} from 'reactstrap'
import LessorNavbar from '../LessorNavbar/LessorNavbar.js';

const EditProfileL=()=>{
    return (
        <>
        <LessorNavbar />
        <div className="register_background" style={{marginBottom: "460px"}}>
            
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
                    //value={this.state.name}
                   // onChange={this.onChangeName}
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
                    //value={this.state.streetNo}
                   // onChange={this.onChangeStreetNo}
                />
                <Input
                    className="mt-4"
                    id="streetName"
                    name="streetName"
                    placeholder="Street Name"
                    type="text"
                    //value={this.state.streetName}
                   // onChange={this.onChangeStreetName}
                />
                <Input
                    className="mt-4"
                    id="city"
                    name="city"
                    placeholder="City"
                    type="text"
                    //value={this.state.city}
                   // onChange={this.onChangeCity}
                />
                <Input
                    className="mt-4"
                    id="pincode"
                    name="pincode"
                    placeholder="Pincode"
                    type="text"
                    //value={this.state.pincode}
                   // onChange={this.onChangePincode}
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
                    //value={this.state.aadhar}
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
                    //value={this.state.email}
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
               // value={this.state.haveAccount}
               // onChange={this.onChangeHaveAccount}
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
               // value={this.state.password}
               // onChange={this.onChangePassword}
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
                //value={this.state.confirmPassword}
               // onChange={this.onChangeConfirmPassword}
            />
            <Label className="small small"></Label>
        </FormGroup>
        
        <input type="submit" value="Register" className="btn btn-primary" />
    
        </Form>
        </div>
    </>
    );
}

export default EditProfileL;