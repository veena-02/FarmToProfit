import React from 'react';
import './../EquipmentOfSameType/SameTypeEquip.css';
import img1 from './../../Assets/images/equipment/mt1.png';
import { NavLink } from 'react-router-dom';

const EquipmentCard=(props)=>{
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
                        Product Name: {props.name}<br/>
                        Daily Rent : {props.price}<br/>
                        <NavLink to={`/equipmentList/:${props.equiptype}/${props.vin}`}>Show Details</NavLink>
                    </div>
                    <div className="equipment_details"></div>
                </div>
        </>
    )
}
export default EquipmentCard;