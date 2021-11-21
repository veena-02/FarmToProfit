import React from 'react';
import {FormGroup, Label, Input, Form, FormText, Button} from 'reactstrap'
import './ContactUs.css'
import MyNavbar from './../MyNavbar/MyNavbar';

const ContactUs=()=>{
    return(
        <>
           <MyNavbar />
            <div className="contact_background">
                <Form className="contact_us">
                <h3 className="text-center">Contact Us</h3>
                    <FormGroup>
                    <Label for="exampleEmail">
                    Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder=""
                        type="email"
                    />
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
                />
            </FormGroup>
  
            <FormGroup>
                <Label for="exampleText">
                    Message
                </Label>
                <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                />
            </FormGroup>
  
            <Button>
                Submit
            </Button>
            </Form>
            </div>
        </>
    );
}

export default ContactUs;
