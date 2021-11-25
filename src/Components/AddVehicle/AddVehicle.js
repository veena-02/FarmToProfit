import React, {useState} from 'react';
import LessorNavbar from './../LessorNavbar/LessorNavbar';
import { Form,FormGroup,Input, Label, Col, FormText } from 'reactstrap';
import axios from 'axios';

class AddVehicle extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangePurchaseDate = this.onChangePurchaseDate.bind(this);
        this.onChangePurchasePrice = this.onChangePurchasePrice.bind(this);
        this.onChangeEquipmentType = this.onChangeEquipmentType.bind(this);
        this.onChangeVinNo = this.onChangeVinNo.bind(this);
        this.onChangeDescription = this.Description.bind(this);
        this.state = {
            name: "",
            brand: "",
            purchaseDate: "",
            purchasePrice: "",
            equipmentType: "",
            vinNo: "",
            description: ""
          };

    }
    onChangeName(e){
       this.setState({
      name: e.target.value
    }) 
    }
    onChangeBrand(e){
       this.setState({
      brand: e.target.value
    }) 
    }
    onChangePurchaseDate(e){
       this.setState({
      purchaseDate: e.target.value
    }) 
    }
    onChangePurchasePrice(e){
       this.setState({
      purchasePrice: e.target.value
    }) 
    }
    onChangeVinNo(e){
       this.setState({
      vinNo: e.target.value
    }) 
    }
    onChangeDescription(e){
       this.setState({
      description: e.target.value
    }) 
    }
    onChangeEquipmentType(e){
       this.setState({
      equipmentType: e.target.value
    }) 
    }

    onSubmit(e){
        e.preventDefault();
        const equipment = {
            name: this.state.name,
            brand: this.state.brand,
            purchaseDate: this.state.purchaseDate,
            purchasePrice: this.state.purchasePrice,
            equipmentType: this.state.equipmentType,
            vinNo: this.state.vinNo,
            description: this.state.description
        }
        axios.post('http://localhost:5000/addvehicle', equipment)
      .then(res => console.log(res.data));
      window.location = "/equipmentList";
    }

    render(){
    return(
             <>
            <LessorNavbar />
            <div className="register_background" style={{marginBottom: "450px"}}>
                
         <Form className="register_us">
                <h3 className="text-center">Add Equipment</h3>
                   
                <FormGroup>
                    <Label for="name">
                        Product Name
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Product Name"
                        type="text"
                        onChange={this.onChangeName}
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
                        onChange={this.onChangeBrand}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="purchaseDate">
                    Purchase Date
                    </Label>
                    <Input
                        id="purchaseDate"
                        name="purchaseDate"
                        placeholder="Purchase Date"
                        type="number"
                        onChange={this.onChangePurchaseDate}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="purchasePrice">
                    Purchase Price
                    </Label>
                    <Input
                        id="purchasePrice"
                        name="purchasePrice"
                        placeholder="Purchase Price"
                        type="number"
                        onChange={this.onChangePurchasePrice}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="vinNo">
                    VIN Number
                    </Label>
                    <Input
                        id="vinNo"
                        name="vinNo"
                        placeholder="vinNo"
                        type="Number"
                        onChange={this.onChangeVinNo}
    
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">
                    Description Tags
                    </Label>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Description should be seperated by commas e.g. 250cc engine, 6 forward gear, 45kmph milege"
                        type="text"
                        onChange={this.onChangeDescription}
    
                    />
                </FormGroup>
                <FormGroup>
                <Label for="equipmentType">Equipment Type</Label>
                <Input
                    id="equipmentType"
                    name="equipmentType"
                    type="select"
                    onChange={this.onChangeEquipmentType}

                >
                <option>Tractor</option>
                <option>Harvestor</option>
                <option>Implements</option>
                <option>Tools</option>
              </Input>
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
                    <Label for="billpdf" sm={2}>Legal Documents</Label>
                        <Col sm={10}>
                            <Input type="file" name="billpdf" id="billpdf" />
                            <FormText color="muted">
                             .pdf format only
                            </FormText>
                        </Col>
                </FormGroup>
            
            <input type="submit" value="Add Equipment" className="btn btn-primary" />
        
            </Form>
            </div>
        </>
    );
}
}
export default AddVehicle;
