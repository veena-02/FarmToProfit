import React from 'react';
import MyNavbar from './../MyNavbar/MyNavbar';
import { Form,FormGroup,Input, Label, Col, FormText } from 'reactstrap';

const AddVehicle=()=>{
    return(
            <>
            <MyNavbar />
            <div className="register_background">
                
                <Form className="register_us">
                <h3 className="text-center">Add Equipment</h3>
                   
                <FormGroup>
                    <Label for="name">
                        Product Name
                    </Label>
                    <Input
                        id="productname"
                        name="productname"
                        placeholder="Product Name"
                        type="text"
                    />
                </FormGroup>    
                <FormGroup>
                    <Label for="type">
                        Product Type
                    </Label>
                    <Input
                        id="producttype"
                        name="producttype"
                        placeholder="Product Type"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="brand">
                        Brand
                    </Label>
                    <Input
                        id="brand"
                        name="brand"
                        placeholder="Brand"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="model">
                        Model Number
                    </Label>
                    <Input
                        id="modelnumber"
                        name="modelnumber"
                        placeholder="Model No."
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="purchasedate">
                    Purchase Date
                    </Label>
                    <Input
                        id="purchasedate"
                        name="purchasedate"
                        placeholder="Purchase Date"
                        type="number"
                    
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="purchaseprice">
                    Purchase Price
                    </Label>
                    <Input
                        id="purchaseprice"
                        name="purchaseprice"
                        placeholder=""
                        type="number"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="vin_no">
                    VIN Number
                    </Label>
                    <Input
                        id="vin_no"
                        name="vin_no"
                        placeholder=""
                        type="Number"
    
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="images" sm={2}>Images</Label>
                        <Col sm={10}>
                            <Input type="file" name="images" id="images" />
                            <Input type="file" name="images" id="images" />
                            <Input type="file" name="images" id="images" />
                            <FormText color="muted">
                            Upload atleast 3 images of the equipment in .jpg format
                            </FormText>
                        </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="billpdf" sm={2}>Purchase Reciept</Label>
                        <Col sm={10}>
                            <Input type="file" name="billpdf" id="billpdf" />
                            <FormText color="muted">
                             .pdf format only
                            </FormText>
                        </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="pdf" sm={2}>Insurance Papers</Label>
                        <Col sm={10}>
                            <Input type="file" name="pdf" id="pdf" />
                            <FormText color="muted">
                             .pdf format only
                            </FormText>
                        </Col>
                </FormGroup>
            
            <input type="submit" value="Register" className="btn btn-primary" />
        
            </Form>
            </div>
        </>
    );
}
export default AddVehicle;
