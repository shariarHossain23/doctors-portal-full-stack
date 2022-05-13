import { useState } from 'react';
import Fotter from '../Shared/Fotter/Fotter';
import AppoinmentBanner from './AppoinmentBanner';
import AvaiableAppoitment from './AvaiableAppoitment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='px-12 mx-auto'>
            <AppoinmentBanner date={date} setDate={setDate}></ AppoinmentBanner>
            <AvaiableAppoitment date={date}></AvaiableAppoitment>
            <Fotter></Fotter>
        </div>
    );
};

export default Appoinment;