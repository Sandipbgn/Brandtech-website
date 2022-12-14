import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/back.png";


const Home =() => {
    return(
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                    Start your journey with
                     <strong className="brand-name"> BrandTech</strong>
                </h1>
                <h22 className="my-3"> 
                We are the team of tallented developers in Nepal
                </h22>

                <div className="mt-3">
                <NavLink to="services" className="btn-get-started"> Get started </NavLink>

                </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animate" alt="home-img" />

                </div>
                </div>
                </div>
            </div>
        </div>

        </section>
    );
};
export default Home;