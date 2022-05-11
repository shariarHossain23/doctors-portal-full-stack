import { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvaiableAppoitment from './AvaiableAppoitment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></ AppoinmentBanner>
            <AvaiableAppoitment date={date}></AvaiableAppoitment>
        </div>
    );
};

export default Appoinment;