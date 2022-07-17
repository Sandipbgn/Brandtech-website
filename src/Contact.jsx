import React from "react";

const Contact =() => {
    return(
        <>
        <div id="Head" className="my-5">
        <h1 className="text-center"> Lets work <strong className="T1"> Together! </strong> </h1>
        </div>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
                
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
        <input 
        type="text" 
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="Enter your name" />
        </div>

        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Phone number</label>
        <input 
        type="number" 
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="Enter your number" />
        </div>

        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input 
        type="email" 
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="name@example.com" />
        </div>

        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        
        <div id= "sub">
        <button className="btnnn" type="submit">Submit form</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    );
};
export default Contact;