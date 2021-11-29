import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import LessorNavbar from '../LessorNavbar/LessorNavbar';
import RequestsCard from './../Card/RequestsCard';
import Loading from './../Loading';

const BookingRequest=({match})=>{
    
    let {vin} = useParams();


//  const call=async()=>{
//         const details={email:, vin:vin}
//         try{
//             const res=await axios.post(
//                 `http://localhost:5000/showdetails/done`,details
//                 );
//             setEquipDetails(res.data);  
//             console.log(equipDetails);
//             console.log(res.data);


//         }
//         catch(err){
//             console.log(err);
//         }
//         finally{
//             setLoading(false);
//         }
    
//         //book button

//     }

    const [bookingList, setBookingList] = useState([]); //equipList is array of objects
    const [loading,setLoading] = useState(true);
    //cdm-post-lh:5000/showdetails/,equiptype -res.price, name, vin
    
    const getBookingList = async ()=>{
        try{
            const res=await axios.get(
                `http://localhost:5000/showdetails/bookingrequest/${vin}`
                );
            setBookingList(res.data);  
            console.log(bookingList);
            console.log(vin);


        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        getBookingList();
    },[])

    if(loading){
        return <Loading />
    }

    return(
        <>
        <LessorNavbar />
        <div>
            <h2 className="equipment_type_heading">{vin }</h2>
            <div className="equipment_list_parent">
            {
                bookingList.map((farmer)=>{
                    return (<RequestsCard
                                fullname={farmer.fullname}
                                pnumber={farmer.pnumber}
                                city={farmer.city}
                                vin = {vin}
                                email={farmer.email}
                                // request={equip.bookingreq.lenght}
                                // equiptype={equip.subcat}
                            />); 
                })
            }              
            </div>
        </div>
        </>
    );
}

export default BookingRequest;