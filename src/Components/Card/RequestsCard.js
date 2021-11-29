import React from 'react';
import './../EquipmentOfSameType/SameTypeEquip.css';
import img1 from './../../Assets/images/equipment/mt1.png';
import { NavLink } from 'react-router-dom';

const RequestsCard=(props)=>{
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
                        <NavLink to={`/myEquipment/${props.vin}/${props.email}`}>Accept</NavLink>

                    </div>
                    <div className="equipment_details"></div>
                </div>
        </>
    )
}
export default RequestsCard;