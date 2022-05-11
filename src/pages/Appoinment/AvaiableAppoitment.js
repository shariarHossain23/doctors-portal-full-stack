import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import DentalService from './DentalService';

const AvaiableAppoitment = ({date}) => {
    const [services,setServices] = useState([])
    const [treatments,setTretment] = useState(null)
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(res => setServices(res))
    },[])
    return (
        <div>
        <div>
            <h3 className='text-center text-secondary text-xl'>Available Appointments on {format(date,"PP")}</h3>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
            {services.map(service => <DentalService 
            key={service._id} 
            service={service}
            setTretment={setTretment}
            ></DentalService>)}
        </div>
        {treatments && <Booking date={date} treatments={treatments} setTretment={setTretment}></Booking>}
        </div>
    );
};

export default AvaiableAppoitment;