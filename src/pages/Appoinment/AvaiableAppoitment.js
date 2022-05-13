import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Booking from './Booking';
import DentalService from './DentalService';

const AvaiableAppoitment = ({date}) => {
    const [treatments,setTretment] = useState(null)
    const formatedDate = format(date,"PP")
    const { data:services,isLoading, error, refetch } = useQuery(['available',formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`).then(res =>
      res.json()
    )
  )
  if(isLoading){
      return <Loading></Loading>
  }
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
        {treatments && <Booking date={date} treatments={treatments} setTretment={setTretment} refetch={refetch}></Booking>}
        </div>
    );
};

export default AvaiableAppoitment;