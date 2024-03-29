import React from 'react';
import './RatingOne.css'

const RatingOne = () => {
    return (
       <div className='rating-container'>
         <section className='rating-one rounded-xl'>
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
        </section>

        <section className="flex justify-center text-center pt-10">
             <button className="btn-sm font-semibold rounded-md btn-outline border-violet-400 text-violet-400 border-2 hover:bg-violet-400 hover:border-violet-400 px-4 mr-5">Install for FREE</button>
      <button className="btn-sm font-semibold rounded-md btn-outline border-violet-400 text-white bg-violet-400 border-2 hover:bg-violet-500 hover:border-violet-500 px-4">BoloForms Premium</button>
      </section>
      <section className='flex justify-center text-center py-4'>
        <div className='flex mx-3'><i class="fa-solid fa-check mt-1 mx-1 text-green-600"></i><p className='text-sm'>Trusted by 50000+ Businesses</p></div>
        <div className='flex mx-3'><i class="fa-solid fa-check mt-1 mx-1 text-green-600"></i><p className='text-sm'>30 Days Money Back Guarantee</p></div>
        <div className='flex mx-3'><i class="fa-solid fa-check mt-1 mx-1 text-green-600"></i><p className='text-sm'>1-1 Zoom & WhatsApp Onboarding</p></div>
      </section>
      
       </div>
    );
};

export default RatingOne;