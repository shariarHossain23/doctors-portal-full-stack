import React from 'react';
import quote from '../../assets/icons/quote.svg';
import image1 from '../../assets/images/people1.png';
import image2 from '../../assets/images/people2.png';
import image3 from '../../assets/images/people3.png';
import Review from './Review';

const TestiMonial = () => {
    const reviews = [
       {
           _id:1,
           name:"john",
           reviews:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
           img:image1
       },
       {
           _id:2,
           name:"carry",
           reviews:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
           img:image2
       },
       {
           _id:3,
           name:"marry",
           reviews:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
           img:image3
       }
    ]
    return (
        <section className="mt-20">
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-28" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 mx-auto'>
                {
                    reviews.map(review => <Review key={review._id} review ={review}></Review>)
                }
            </div>
        </section>
    );
};

export default TestiMonial;