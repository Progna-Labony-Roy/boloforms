import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <section className="header-text">
                <h1 className='header-title'>Transform Google Forms Into Interactive Workflows</h1>
                <p className='py-5'>BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.</p>
                <button className="btn-sm font-semibold rounded-md btn-outline border-violet-400 text-white bg-violet-400 border-2 hover:bg-violet-500 hover:border-violet-500 px-4">BoloForms Premium</button>
            </section>
            <section className="header-video">
            <iframe width="420" height="260" className='border-violet-400 border-2 rounded-lg' src="https://www.youtube.com/embed/riiUkCRpIio" title="How to create BoloForms Approvals Single Level Workflow ?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
        </div>
    );
};

export default Header;