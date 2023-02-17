import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
        <div className="navbar">
      <section>
        <ul>
        <li className="mr-8">
          <img className="h-24" src="https://www.boloforms.com/_next/static/media/logo-text.e6f7617c.svg" alt="" />
        </li>
        <li className="mt-9">Products</li>
        <li className="mt-9">Pricing</li>
        <li className="mt-9">Guides</li>
        <li className="mt-9">Templates</li>
        </ul>
      </section>
      <section>
      <button className="btn-sm font-semibold rounded-md btn-outline border-violet-400 text-violet-400 border-2 hover:bg-violet-400 hover:border-violet-400 px-4 mr-5">Install Now</button>
      <button className="btn-sm font-semibold rounded-md btn-outline border-violet-400 text-white bg-violet-400 border-2 hover:bg-violet-500 hover:border-violet-500 px-4">BoloForms Premium</button>
      </section>
    </div>
    </div>
  );
};

export default Navbar;
