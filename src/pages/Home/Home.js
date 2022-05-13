import React from 'react';
import Fotter from '../Shared/Fotter/Fotter';
import Banner from './Banner';
import Contact from './Contact';
import DentalCare from './DentalCare';
import Info from './Info';
import MakeAppointment from './MakeApoitment';
import Services from './Services';
import TestiMonial from './TestiMonial';


const Home = () => {
    return (
        <div className="px-12 mx-auto" >
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <DentalCare></DentalCare>
           <MakeAppointment></MakeAppointment>
           <TestiMonial></TestiMonial>
           <Contact></Contact>
           <Fotter></Fotter>
        </div>
    );
};

export default Home;