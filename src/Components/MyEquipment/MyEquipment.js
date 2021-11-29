import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import LessorNavbar from '../LessorNavbar/LessorNavbar';
import BookingCard from './../Card/BookingCard';
import Loading from './../Loading';

const MyEquipment=({match})=>{
    
    const [equipList, setEquipList] = useState([]); //equipList is array of objects
    const [loading,setLoading] = useState(true);
    //cdm-post-lh:5000/showdetails/,equiptype -res.price, name, vin
    
    const getEquipList = async ()=>{
        try{
            const user={email:localStorage.getItem('email')}
            const res=await axios.post(
                `http://localhost:5000/showdetails/bookingrequest`, user
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
        <LessorNavbar />
        <div>
            <h2 className="equipment_type_heading">My Equipment </h2>
            <div className="equipment_list_parent">
            {
                equipList.map((equip)=>{
                    return (<BookingCard
                                name={equip.name}
                                price={equip.price}
                                vin = {equip.vin}
                                // request={equip.bookingreq.lenght}
                                equiptype={equip.subcat}
                            />); 
                })
            }              
            </div>
        </div>
        </>
    );
}

export default MyEquipment;