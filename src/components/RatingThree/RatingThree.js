import React from 'react';
import './RatingThree.css'

const RatingOne = () => {
    return (
       <div className='rating-container py-20'>
         <section className='rating-one rounded-xl'>
            <section className="rating-img">
                <img src="	https://www.boloforms.com/_next/static/media/raman.e5477e92.jpeg" alt="" className='mt-4 h-24 w-24 rounded-full'/>
            </section>
            <div className="feedback">
                <div className="rating flex">
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i> 
                </div>
                <p className='text-sm py-4'>"Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!"</p>
                <p className='font-bold'>Alaa Khaled</p>
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

      <section className='rating-one rounded-xl mt-16'>
            <section className="rating-img">
                <img src="	https://www.boloforms.com/_next/static/media/john.39efe227.jpeg" alt="" className='mt-4 h-24 w-24 rounded-full'/>
            </section>
            <div className="feedback">
                <div className="rating flex">
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i>
                <i class="text-yellow-400 fa-solid fa-star"></i> 
                </div>
                <p className='text-sm py-4'>"Easy to use interface and timely support...looking for more features"</p>
                <p className='font-bold'>Deepak S (Solero Corporation)</p>
            </div>
        </section>
      
       </div>
    );
};

export default RatingOne;