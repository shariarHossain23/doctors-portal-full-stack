import React from 'react';
import appoitment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import Button from '../Shared/Button/Button';

const MakeAppointment = () => {
    return (
        <div className='flex items-center mt-20 '
        style={{background:`url(${appoitment})`}}
        >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-90px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl text-primary mb-4'>Appointment</h3>
                <h2 className='text-2xl text-white'>Make an appointment Today</h2>
                <p className='text-white my-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>get started</Button>
            </div>
        </div>
    );
};

export default MakeAppointment;