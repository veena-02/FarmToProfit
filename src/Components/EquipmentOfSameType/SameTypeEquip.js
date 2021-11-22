import React from 'react';
import {useParams} from 'react-router-dom';
import './SameTypeEquip.css';
import ToolsNavbar from '../toolsNavbar/ToolsNavbar.js'

const SameTypeEquip=({match})=>{
    
    let {equipType} = useParams();
    return(
        <>
        <ToolsNavbar />
        <div>
            <h2 className="equipment_type_heading">{equipType.split("$").join(" ").toUpperCase()}</h2>
            <div className="equipment_list_parent">
                
                <div className="equipment_card">
                    <div className="equipment_card_img">

                    </div>
                    <div className="brand_model">
                    <ul style={{listStyleType:'none'}}>
                        <li>Brand Name:</li>
                        <li>Model :</li>
                        <li><button>Show Details</button></li>
                        </ul>
                    </div>
                    <div className="equipment_details"></div>
                </div>
                
                <div className="equipment_card">
                    <div className="equipment_card_img">

                    </div>
                    <div className="brand_model">
                        <ul style={{listStyleType:'none'}}>
                        <li>Brand Name:</li>
                        <li>Model :</li>
                        <li><button>Show Details</button></li>
                        </ul>
                    </div>
                    <div className="equipment_details"></div>
                    
                </div>
                
                <div className="equipment_card">
                    <div className="equipment_card_img">

                    </div>
                    <div className="brand_model">
                    <ul style={{listStyleType:'none'}}>
                        <li>Brand Name:</li>
                        <li>Model :</li>
                        <li><button>Show Details</button></li>
                        </ul>
                    </div>
                    <div className="equipment_details"></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SameTypeEquip;