import React from "react";
import './Workflows.css';


const Workflows = () => {
  return (
 <div className="workflow">
       <div className="workflow-container">
    <div className="flex">
    <section className="one w-[350px] p-5 flex flex-col justify-center rounded-xl relative">
        <div className="flex py-3">
            <img 
            className="mr-3" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" />
            <p className="font-semibold text-gray-400">Leave Application</p>
        </div>
        <div className="flex py-3">
            <img 
            className="mr-3" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" />
            <p className="font-semibold text-gray-400">Purchase Order</p>
        </div>
        <div className="flex py-3">
            <img 
            className="mr-3" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" />
            <p className="font-semibold text-gray-400">Fulfilment</p>
        </div>
      </section>
      <div class="border absolute h-24 lg:h-0 lg:w-24 lg:top-1/2 lg:right-0 -mr-24 bottom-0 left-1/2 lg:left-full -mb-24 border-gray-400"></div>
    </div>

    
        <img className="logo-img h-28 mt-10" src="https://www.boloforms.com/_next/static/media/approvals.73c8d904.svg" alt="" />
   

      <section className="two w-[350px] p-5 flex flex-col justify-center rounded-xl relative">
        <div className="flex py-3">
            <img 
            className="mr-3" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" />
            <p className="font-semibold text-gray-400">Approve</p>
        </div>
        <div className="flex py-3">
            <img 
            className="mr-3" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" />
            <p className="font-semibold text-gray-400">Reject</p>
        </div>
        <div className="flex py-3">
            <img 
            className="mr-3" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" alt="" />
            <p className="font-semibold text-gray-400">Send Pdf</p>
        </div>
      </section>
    </div>
    <p className="py-12 flex justify-center">BoloForms workflows acts as a glue holding together all your approval processes.</p>
 </div>
  );
};

export default Workflows;
