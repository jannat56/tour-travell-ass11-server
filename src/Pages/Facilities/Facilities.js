import React from 'react';
import facilities1 from '../../images/facilities/facilities1.jpg'
import facilities2 from '../../images/facilities/facilities2.jpg'
import facilities3 from '../../images/facilities/facilities3.jpg'
import facilities4 from '../../images/facilities/facilities4.jpg'
import facilities5 from '../../images/facilities/facilities5.jpg'
import facilities6 from '../../images/facilities/facilities6.jpg'
import facilities7 from '../../images/facilities/facilities7.jpg'
import facilities8 from '../../images/facilities/facilities8.png'
import facilities9 from '../../images/facilities/facilities9.jpg'
import './Facilities.css'


const Facilities = () => {
    return (
        <section className="facility mt-4 p-4 mb-4" id="facilities">

<div className="container mt-4">

<h1 className="heading expert-card facility-bg p-4"><span>'</span> Our Facilities <span>'</span></h1>

<div className="box-container mt-4">

    <div className="box" data-aos="zoom-in">
        {/* <a href="images/img1.jpg" title="our team"> */}
            <img src={facilities1} alt=""/>
        {/* </a> */}
    </div>

    <div className="box" data-aos="zoom-in">
        {/* <a href="images/img2.jpg" title="our lab"> */}
            <img src={facilities2} alt=""/>
        {/* </a> */}
    </div>

    <div className="box" data-aos="zoom-in">
        {/* <a href="images/img3.jpg" title="emergency rooms"> */}
            <img src={facilities3} alt=""/>
        {/* </a> */}
    </div>

    <div className="box" data-aos="zoom-in">
        {/* <a href="images/img4.jpg" title="expert doctors"> */}
            <img src={facilities4} alt=""/>
        {/* </a> */}
    </div>

    <div className="box" data-aos="zoom-in">
        {/* <a href="images/img5.jpg" title="expert doctors"> */}
            <img src={facilities5} alt=""/>
        {/* </a> */}
    </div>

    <div className="box" data-aos="zoom-in">
        {/* <a href="images/img6.jpg" title="emergency rooms"> */}
            <img src={facilities6} alt=""/>
        {/* </a> */}
    </div>

    <div className="box" data-aos="zoom-in">
        {/* <a href="images/img7.jpg" title="expert doctors"> */}
            <img src={facilities7} alt=""/>
        {/* </a> */}
    </div>

    <div className="box" data-aos="zoom-in">
        {/* <a href="images/img8.jpg" title="emergency rooms"> */}
            <img src={facilities8} alt=""/>
        {/* </a> */}
    </div>

    <div className="box" data-aos="zoom-in">
        {/* <a href="images/img9.jpg" title="enough beds"> */}
            <img src={facilities9} alt=""/>
        {/* </a> */}
    </div>

</div>

</div>

</section>

    );
};

export default Facilities;