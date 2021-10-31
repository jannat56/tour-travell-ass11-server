import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        fetch(`https://tranquil-sierra-50909.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data=> setService(data));

        
    }, [])
    return (
        <div>
            <h2>booking: {service.name}</h2>
            <p>{service.description}</p>
            <h2>$ {service.Amount}</h2>
            {/* <h3>{serviceId}</h3> */}
            <img style={{height:"300px", width:"300px"}}src={service.img}></img>
          


        </div>
    );
};

export default Booking;