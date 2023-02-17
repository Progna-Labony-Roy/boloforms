import React from "react";

const Feedback = () => {
  return (
    <div className="bg-violet-400">
      <section className="rounded-xl my-16 flex flex-col justify-center text-center px-24 py-16">
        <p className="text-sm py-4 font-bold text-white">
          “ Boloforms has completely revolutionized our form approval process.
          It is incredibly easy to use and simple to set up, saving us countless
          hours of work. We can now easily manage all of our form approvals,
          assign tasks to different team members and track progress all in one
          place. Boloforms is a must-have for any business looking for an
          efficient Form Approval Workflow Software! "
        </p>
        <div className="feedback my-3">
          <div className="rating flex justify-center text-center">
            <i class="text-yellow-400 fa-solid fa-star mx-1"></i>
            <i class="text-yellow-400 fa-solid fa-star mx-1"></i>
            <i class="text-yellow-400 fa-solid fa-star mx-1"></i>
            <i class="text-yellow-400 fa-solid fa-star mx-1"></i>
            <i class="text-yellow-400 fa-solid fa-star mx-1"></i>
          </div>
        </div>
        <section className="flex justify-center mt-2">
          <img
            src="https://www.boloforms.com/_next/static/media/patrick.4de6d5b1.jpeg"
            alt=""
            className=" mr-3 mt-4 h-24 w-24 rounded-full"
          />
          <div className="flex flex-col mt-8">
            <p className="font-bold text-white">Patrick Nyama,</p>
            <p className="text-sm text-white">Edmonton CA</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Feedback;
