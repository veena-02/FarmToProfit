import React from 'react';
import './../EquipmentOfSameType/SameTypeEquip.css';
import img1 from './../../Assets/images/equipment/mt1.png';
import { NavLink } from 'react-router-dom';

const BookingCard=(props)=>{
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
                        {/* Requests:{props.request}<br/> */}
                        <NavLink to={`/myEquipment/:${props.equipType}/:${props.vin}`}>Show Details</NavLink>

                    </div>
                    <div className="equipment_details"></div>
                </div>
        </>
    )
}
export default BookingCard;