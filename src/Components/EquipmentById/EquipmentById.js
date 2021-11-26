import React from 'react';
import {useParams} from 'react-router-dom';
import './EquipmentById.css';
import './../EquipmentOfSameType/SameTypeEquip.css'

const EquipmentById = () => {
    const {equip} = useParams();
    return (
        <>
            <h2 className="equipment_type_heading">{equip}</h2>
            <div className="eq_parent">
            <div className="equipment_body">
                <img src="" className="equipment_img"/>
                <div className="center_equipment_desc">
                <div src="equi_description">
                    Name:<br/>  
                    Brand:<br/>  
                    Rent:<br/>  
                    Purchase Date:<br/>  
                    Owner Name:<br/>  
                    VIN No.:<br/>  
                </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default EquipmentById;