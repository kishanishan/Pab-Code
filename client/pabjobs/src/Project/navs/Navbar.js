import React from "react";
import Pablogo from './pabjobs-logo.png';

function Navbar() {
    return (
        <div>
            <section className="section1 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 text-center">
                            <div className="logo-item">
                                <img src={Pablogo} alt="logo" className="img-fluid logo-item1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Navbar