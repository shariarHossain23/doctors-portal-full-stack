import React from 'react';
import Banner from './Banner';
import DentalCare from './DentalCare';
import Info from './Info';
import MakeAppointment from './MakeApoitment';
import Services from './Services';
import TestiMonial from './TestiMonial';


const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <DentalCare></DentalCare>
           <MakeAppointment></MakeAppointment>
           <TestiMonial></TestiMonial>
        </div>
    );
};

export default Home;