import React, {Component} from 'react';
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
        this.onChangeSubcat=this.onChangeSubcat.bind(this);
        this.onChangeCat = this.onChangeCat.bind(this);
        this.onChangeVin = this.onChangeVin.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.state = {
            name: "",
            brand: "",
            purchaseDate: "",
            purchasePrice: "",
            cat: "Tractor",
            subcat:[],
            vinNo: "",
            // description: [""],
            // subtypeCat: ["Mini Tractor","wd4 "],
        }

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
    onChangeVin(e){
       this.setState({
      vinNo: e.target.value
    }) 
    }
    onChangeDescription(e){
       this.setState({
      description: e.target.value
    }) 
    }
    onChangeSubcat(e){
        this.setState({subcat:e.target.value})
        if (this.state.cat==='Tractor'){
            this.setState({subcat:["mini tractor","wd4 tractor","ac cabin tractor"]})
        }
        else if(this.state.cat==='Implements'){
            this.setState({subcat:["rotary tiller","cultivator", "plough", "harrow", "trailer","sprayer"]})
        }
        else if(this.state.cat==='Harvest'){
            this.setState({subcat:["self propelled", "tractor mounted"]})
        }
        else if(this.state.cat==='Tools'){
            this.setState({subcat:["tarpaulin","brush cutter","power weeder","power tiller","power reaper","earth auger","mowers and trimmers","accessories"]})
        }
    }
    onChangeCat(e){
       this.setState({
      cat: e.target.value
    }) 
    }

    onSubmit(e){
        e.preventDefault();
        const equipment = {
            name: this.state.name,
            brand: this.state.brand,
            purchaseDate: this.state.purchaseDate,
            purchasePrice: this.state.purchasePrice,
            cat: this.state.cat,
            subcat:this.state.subcat,
            vinNo: this.state.vinNo,
            //description: this.state.description
        }
        axios.post('http://localhost:5000/addvehicle/add', equipment)
      .then(res => console.log(res.data));
      window.location = "/equipmentList";
    }

    render(){
    return(
             <>
            <LessorNavbar />
            <div className="register_background" style={{marginBottom: "450px"}}>
                
         <Form className="register_us" onSubmit={this.onSubmit}>
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
                        type="string"
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
                        onChange={this.onChangeVin}
    
                    />
                </FormGroup>
                {/* <FormGroup>
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
                </FormGroup> */}
                <FormGroup>
                <Label for="equipmentType">Category</Label>
                <Input
                    id="equipmentType"
                    name="cat"
                    type="select"
                    onChange={this.onChangeCat}
                >
                <option>Tractor</option>
                <option>Harvestor</option>
                <option>Implements</option>
                <option>Tools</option>
              </Input>
            </FormGroup>
            <FormGroup>
                <Label for="equipmentType">Sub Category</Label>
                <Input
                    id="equipmentType"
                    name="subcat"
                    type="select"
                    onChange={this.onChangeSubcat}>
                        {
                            this.state.subcat.map(function(subcat) {
                            return <option 
                              key={subcat}
                              value={subcat}>{subcat}
                              </option>;
                            
                          })
                    }
                </Input>
            </FormGroup>
                {/* <FormGroup>
                <Label for="equipmentSubType">Equipment Sub Type</Label>
                <Input
                    id="equipmentSubType"
                    name="equipmentSubType"
                    type="select"
                    onChange={this.onChangeEquipmentType}
                >

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
                </FormGroup> */}
            
            <input type="submit" value="Add Equipment" className="btn btn-primary" />
        
            </Form>
            </div>
        </>
    );
}
}
export default AddVehicle;
