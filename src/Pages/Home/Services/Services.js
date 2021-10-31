import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://tranquil-sierra-50909.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));

    },[])
    return (
       <div>
          <h2 className="mt-4 p-4 m-4 service-bg text-dark w-80" id="services">Our Services</h2>
           <h3>Visit Your Dream Country</h3>
            <div className="service-container">
          {
              services.map(service => <Service  key = {service.id}
              service={service}>

              </Service>)
             
          }
        </div>
       </div>
    );
};

export default Services;
