import React from 'react';
import img2 from '../../assets/images/cavity.png';
import img1 from '../../assets/images/fluoride.png';
import img3 from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id:1,
            img:img1,
            title:"Fluoride Treatment",
            desc:"Fluoride treatments are typically professional treatments"
        },
        {
            _id:2,
            img:img2,
            title:"Cavity Filling",
            desc:"Amalgam Fillings: Amalgam has been used by dental"
        },
        {
            _id:3,
            img:img3,
            title:"Teeth Whitening",
            desc:"whitening gels are clear, peroxide-based gels applied"
        }
    ]
    return (
        <div className='mt-28'>
            <div className='text-center'>
                <h1 className='text-primary text-xl font-bold'>OUR SERVICES</h1>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid  lg:grid-cols-3 mt-8 mx-auto gap-5'>
                {
                    services.map(service => <Service key={service._id} service ={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;