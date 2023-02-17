import React from 'react';
import './Features.css'

const Features = () => {
    return (
        <div className='features-container'>
            <section className='flex flex-col justify-center text-center py-16'>
            <h2 className="text-2xl font-bold">Features</h2>
            <p>Everything that your organisation will love, & more.</p>
            </section>
            <div className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <img src="https://www.boloforms.com/_next/static/media/pr_agiledeploy.b988c9c8.svg" alt="" />
                    <h1 className="text-lg font-semibold">Get started in less than 5 minutes.</h1>
                    <p className="py-2 pr-16">Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.</p>
                </div>
                <div>
                    <img src="https://www.boloforms.com/_next/static/media/pr_dyncaseroute.02285ff2.svg" alt="" />
                    <h1 className="text-lg font-semibold">Multi-level workflows</h1>
                    <p className="py-2 pr-16">To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes.</p>
                </div>
                <div>
                    <img src="https://www.boloforms.com/_next/static/media/pr_dynbusrules.572419de.svg" alt="" />
                    <h1 className="text-lg font-semibold">Dynamic Reciepients</h1>
                    <p className="py-2 pr-16">Approvers can be selected based on the answers to a form response or entered manually by the requestor.</p>
                </div>
                <div className='mt-10'>
                    <img src="https://www.boloforms.com/_next/static/media/pr_socialtask.06e17c13.svg" alt="" />
                    <h1 className="text-lg font-semibold">Role Based Workflows</h1>
                    <p className="py-2 pr-16">Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only.</p>
                </div>
                <div className='mt-10'>
                    <img src="https://www.boloforms.com/_next/static/media/pr_visualprcdesign.0ff90171.svg" alt="" />
                    <h1 className="text-lg font-semibold">Conditional Logic</h1>
                    <p className="py-2 pr-16">To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them.</p>
                </div>
                <div className='mt-10'>
                    <img src="https://www.boloforms.com/_next/static/media/pr_instaaccess.e822dad7.svg" alt="" />
                    <h1 className="text-lg font-semibold">One-click Approvals</h1>
                    <p className="py-2 pr-16">Notification emails are sent to users and can be approved with a single click.</p>
                </div>
                <div className='mt-10'>
                    <img src="https://www.boloforms.com/_next/static/media/pr_intuserinter.41c7f4bc.svg" alt="" />
                    <h1 className="text-lg font-semibold">Responsive design</h1>
                    <p className="py-2 pr-16">It is designed to be mobile-first, and seamlessly works on desktop and tablet as well.</p>
                </div>
                <div className='mt-10'>
                    <img src="https://www.boloforms.com/_next/static/media/pr_processoptim.f6216ec3.svg" alt="" />
                    <h1 className="text-lg font-semibold">Enterprise grade security</h1>
                    <p className="py-2 pr-16">Majority of data stored in your spreadsheet. This ensures you have the complete control of your data with end to end encryption.</p>
                </div>
                <div className='mt-10'>
                    <img src="https://www.boloforms.com/_next/static/media/pr_dashboard.64597267.svg" alt="" />
                    <h1 className="text-lg font-semibold">Custom Dashboard</h1>
                    <p className="py-2 pr-16">Track approvals of various forms from a single place! See the approval process for each request in real-time</p>
                </div>
            </div>
        </div>
    );
};

export default Features;