import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    
    return (
        <div className='grid  grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardBody=" the time during which " cardTitle="Opening Hours"  bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardBody="Brooklyn, NY 10036, United States" cardTitle="Visit our location" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardBody="+000 123 456789" cardTitle="Contact us now" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;