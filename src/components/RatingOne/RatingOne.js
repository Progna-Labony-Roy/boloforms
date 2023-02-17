import React from 'react';
import './RatingOne.css'

const RatingOne = () => {
    return (
        <div className='rating-one rounded-xl'>
            <section className="rating-img">
                <img src="https://www.boloforms.com/_next/static/media/repa.483a1471.jpeg" alt="" className='mt-4 h-24 w-24 rounded-full'/>
            </section>
            <div className="feedback">
                <div className="rating flex">
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i> 
                </div>
                <p className='text-sm py-4'>"Boloforms has been an absolute lifesaver for me. It makes workflow tasks much easier and helps to ensure that everything runs smoothly. I love how it automates tasks and eliminates manual processes, saving me time and effort. It's a great Google Workflow software and is well worth the money!"</p>
                <p className='font-bold'>Repa Mandala</p>
            </div>
        </div>
    );
};

export default RatingOne;