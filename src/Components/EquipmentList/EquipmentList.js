import React from 'react';
import ToolsNavbar from './../toolsNavbar/ToolsNavbar';
import {CardGroup, Card, CardTitle} from 'reactstrap';
import EquipListCarousel from './EquipListCarousel';
import './EquipmentList.css';
import { NavLink } from 'react-router-dom';
import getAllTools from './../../Data/allToolsData';

const EquipmentList = () => {

    const allTools = getAllTools();
    console.log(allTools);
    return (
        <>
            <ToolsNavbar />
            <div className="parent_div">
            <div className="col-12"> 
                <EquipListCarousel />
            </div>
            </div>
            <br />
            <div className="">

                <div className="title_style" id="tractors">Tractor</div>
                <div className="parent_div ">   
                {   allTools.tractor.map((name)=>{
                        return(
                            <>
                                <NavLink to={`/equipmentList/${name.split(" ").join("$")}`} className="card_style"> 
                                    {name.toUpperCase()}
                                </NavLink>
                            </>
                        );
                    })
                }   
                </div>

                <div className="title_style" id="implements">Implements</div>
                <div className="parent_div ">
                {   allTools.implements.map((name)=>{
                        return(
                            <>
                                <NavLink to={`/equipmentList/${name.split(" ").join("$")}`} className="card_style"> 
                                    {name.toUpperCase()}
                                </NavLink>
                            </>
                        );
                    })
                }    
                </div>

                <div className="title_style" id="harvester">Harvestors</div>
                <div className="parent_div ">
                    {   allTools.harvester.map((name)=>{
                        return(
                            <>
                                <NavLink to={`/equipmentList/${name.split(" ").join("$")}`} className="card_style"> 
                                    {name.toUpperCase()}
                                </NavLink>
                            </>
                        );
                    })
                }
                </div>

                <div className="title_style" id="tools">Tools</div>
                <div className="parent_div ">
                    {   allTools.tools.map((name)=>{
                        return(
                            <>
                                <NavLink to={`/equipmentList/${name.split(" ").join("$")}`} className="card_style"> 
                                    {name.toUpperCase()}
                                </NavLink>
                            </>
                        );
                    })
                }
                </div>
            </div>
        </>
    );
}
export default EquipmentList;