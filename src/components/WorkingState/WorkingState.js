import React from 'react';
import './WorkingState.css';

const WorkingState = () => {
    return (
       <div className="workingState">
        <div className="workingState-text flex text-center justify-center">
            <h1 className='font-bold text-2xl'>How does BoloForms work?</h1>
            <p className='text-sm'>Set up your first workflow in just 3 easy steps.</p>
        </div>
         <div class="flex flex-col md:flex-row mt-8">
        <div class="flex flex-col-reverse md:flex-col">
            <div><img src="https://www.boloforms.com/_next/static/media/2.2709e204.svg" alt=""
                    class="hover:-translate-y-3 transition-transform duration-300 ease-out" loading="lazy"/></div>
            <div class="text-center mt-6 mb-4">
                <h2 class="text-xl xs:text-2xl font-bold mb-2">Step 1:</h2>
                <p class="text-sm xs:text-base">Choose a template or add questions to create your Google Form.</p>
            </div>
        </div>
        <div class="flex flex-col-reverse md:flex-col">
            <div><img src="https://www.boloforms.com/_next/static/media/1.b2cc23b0.svg" alt=""
                    class="hover:-translate-y-3 transition-transform duration-300 ease-out" loading="lazy"/></div>
            <div class="text-center mt-6 mb-4">
                <h2 class="text-xl xs:text-2xl font-bold mb-2">Step 2:</h2>
                <p class="text-sm xs:text-base">Enable Single/Multi Step approval and add necessary approvers!</p>
            </div>
        </div>
        <div class="flex flex-col-reverse md:flex-col">
            <div><img src="https://www.boloforms.com/_next/static/media/3.1a7ec00e.svg" alt=""
                    class="hover:-translate-y-3 transition-transform duration-300 ease-out" loading="lazy"/></div>
            <div class="text-center mt-6 mb-4">
                <h2 class="text-xl xs:text-2xl font-bold mb-2">Step 3:</h2>
                <p class="text-sm xs:text-base">Now you can enable the workflow and share the Google Form.</p>
            </div>
        </div>
    </div>
       </div>
    )
};

export default WorkingState;