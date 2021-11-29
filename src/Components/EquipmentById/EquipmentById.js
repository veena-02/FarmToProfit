import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './EquipmentById.css';
import './../EquipmentOfSameType/SameTypeEquip.css';
import img1 from './../../Assets/images/equipment/mt1.png';
import axios from 'axios';
import Loading from './../Loading';



const EquipmentById = () => {
    let button=(<></>);
    
    let {vin} = useParams();
    const call=async()=>{
        const details={email:localStorage.getItem('email'), vin:vin}
        try{
            const res=await axios.post(
                `http://localhost:5000/showdetails/book`,details
                );
            setEquipDetails(res.data);  
            console.log(equipDetails);
            console.log(res.data);


        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    
        //book button

    }



    const [equipDetails, setEquipDetails] = useState({}); //equipList is array of objects
    const [loading,setLoading] = useState(true);
    //cdm-post-lh:5000/showdetails/,equiptype -res.price, name, vin
    
    const getEquipDetails = async ()=>{
        try{
            const res=await axios.get(
                `http://localhost:5000/showdetails/details/${vin}`
                );
            setEquipDetails(res.data);  
            console.log(equipDetails);
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
        getEquipDetails();
    },[])

    if(loading){
        return <Loading />
    }
    if(localStorage.getItem('rt')==='Farmer'){
        button=(<input type="submit" value="Request for Booking" className="btn btn-primary" onClick={call}  />);
                    
                }

    return (
        <>
            <h2 className="equipment_type_heading">{vin}</h2>
            <div className="eq_parent">
            <div className="equipment_body">
                <img src={img1} className="equipment_img"/>
                <div className="center_equipment_desc">
                <div >
                    Name:{equipDetails.name}<br/>  
                    Brand:{equipDetails.brand}<br/>  
                    Rent:{equipDetails.price}<br/>  
                    Purchase Date:{equipDetails.purchasedate}<br/>  
                    Owner Name:{equipDetails.subcat}<br/>  
                VIN No.:{equipDetails.vin}<br/>  
                </div>
                {button}
                </div>
            </div>
            </div>
        </>
    );
}
export default EquipmentById;