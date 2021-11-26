import React from 'react';
import {useParams} from 'react-router-dom';
import './SameTypeEquip.css';
import ToolsNavbar from '../toolsNavbar/ToolsNavbar.js'
import img1 from './../../Assets/images/equipment/mt1.png'
import img2 from './../../Assets/images/equipment/mt2.png'
import img3 from './../../Assets/images/equipment/mt3.png'
import img4 from './../../Assets/images/equipment/mt4.png'
import { NavLink } from 'react-router-dom';

const SameTypeEquip=({match})=>{
    
    let {equipType} = useParams();
    return(
        <>
        <ToolsNavbar />
        <div>
            <h2 className="equipment_type_heading">{equipType.split("$").join(" ").toUpperCase()}</h2>
            <div className="equipment_list_parent">
                
                <div className="equipment_card">
                    <div>
                    <button className="add_icon">+</button>
                    </div>
                    <div className="equipment_card_img">
                        <img src={img1} height="200px" width="300px"/>
                    </div>
                    <div className="brand_model"> 
                        Product Name: Swaraj 717<br/>
                        Daily Rent : 1 eth<br/>
                        <NavLink to={`/equipmentList/:${equipType}/swaraj`}>Show Details</NavLink>
                        
                    </div>
                    <div className="equipment_details"></div>
                </div>
                <div className="equipment_card">
                    <div>
                    <button className="add_icon">+</button>
                    </div>
                    <div className="equipment_card_img">
                    <img src={img2} height="200px" width="300px"/>
                    </div>
                    <div className="brand_model"> 
                        Product Name:  Force Motors Abhiman<br/>
                        Daily Rent : 1 eth<br/>
                        <button>Show Details</button>
                        
                    </div>
                    <div className="equipment_details"></div>
                </div>
                <div className="equipment_card">
                    <div>
                    <button className="add_icon">+</button>
                    </div>
                    <div className="equipment_card_img">
                    <img src={img3} height="200px" width="300px"/>
                    </div>
                    <div className="brand_model"> 
                        Product Name:  Captain 200 DI<br/>
                        Daily Rent : 1 eth<br/>
                        <button>Show Details</button>
                        
                    </div>
                    <div className="equipment_details"></div>
                </div>
                
                <div className="equipment_card">
                    <div>
                    <button className="add_icon">+</button>
                    </div>
                    <div className="equipment_card_img">
                    <img src={img4} height="200px" width="300px"/>
                    </div>
                    <div className="brand_model"> 
                        Product Name:  Massey Ferguson 6028<br/>
                        Daily Rent : 1 eth<br/>
                        <button>Show Details</button>
                        
                    </div>
                    <div className="equipment_details"></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SameTypeEquip;