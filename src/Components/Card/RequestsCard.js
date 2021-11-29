import React from 'react';
import './../EquipmentOfSameType/SameTypeEquip.css';
import img1 from './../../Assets/images/equipment/mt1.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const RequestsCard=(props)=>{

    const call =  ()=>{
        try{
            const user={email:props.email,vin:props.vin}
            const res= axios.post(
                `http://localhost:5000/showdetails/done`,user
                );
            console.log(res.data);


        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <div className="equipment_card">
                    <div>
                    <button className="add_icon">+</button>
                    </div>
                    <div className="equipment_card_img">
                        <img src={img1} height="200px" width="300px"/>
                    </div>
                    <div className="brand_model"> 
                        Farmer Name: {props.fullname}<br/>
                        Phone Number:{props.pnumber}<br/>
                        City : {props.city}<br/>
                        Email:{props.email}<br/>
                        {/* Requests:{props.request}<br/> */}
                        {/* <NavLink to={`/myEquipment/${props.vin}/${props.email}`}>Accept</NavLink> */}
                        <input type= "submit" value="Accept" onClick={call}/>

                    </div>
                    <div className="equipment_details"></div>
                </div>
        </>
    )
}
export default RequestsCard;