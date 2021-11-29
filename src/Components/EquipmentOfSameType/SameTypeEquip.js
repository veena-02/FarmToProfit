import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './SameTypeEquip.css';
import ToolsNavbar from '../toolsNavbar/ToolsNavbar.js'
import EquipmentCard from './../EquipmentCard/EquipmentCard';
import Loading from './../Loading';

const SameTypeEquip=({match})=>{
    
    let {equipType} = useParams();
    const [equipList, setEquipList] = useState([]); //equipList is array of objects
    const [loading,setLoading] = useState(true);
    //cdm-post-lh:5000/showdetails/,equiptype -res.price, name, vin
    
    const getEquipList = async ()=>{
        try{
            const res=await axios.get(
                `http://localhost:5000/showdetails/`
                );
            setEquipList(res.data);  
            console.log(equipList);
            console.log(res.data);


        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        getEquipList();
    },[])

    if(loading){
        return <Loading />
    }

    return(
        <>
        <ToolsNavbar />
        <div>
            <h2 className="equipment_type_heading">{equipType.split("$").join(" ").toUpperCase()}</h2>
            <div className="equipment_list_parent">
            {
                equipList.map((equip)=>{
                    return (<EquipmentCard
                                name={equip.name}
                                price={equip.price}
                                vin = {equip.vin}
                                equiptype={equipType}
                            />); 
                })
            }              
            </div>
        </div>
        </>
    );
}

export default SameTypeEquip;