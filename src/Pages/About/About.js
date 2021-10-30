import React from 'react';
import picture from '../../../src/images/about/about.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAmbulance, faServer, faCheck } from '@fortawesome/free-solid-svg-icons'



const About = () => {
//   const element2 = <FontAwesomeIcon icon={faAmbulance} />
//   const element3 = <FontAwesomeIcon icon={faServer} />
//   const element4 = <FontAwesomeIcon icon={faCheck} />
    return (

        <div className="container row p-4 d-flex align-items-center">
        <div className="col-lg-10">
        <h3 className="bg-info p-4 text-white">About Us</h3>
      <h3> Travell services </h3>
                <p>A travel agency is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination</p>
                <h3> Ticket booking </h3>
                <p>Those fees range per agent from approximately $25 to $75 per ticket.” The other advantage of using a travel agent? They are able to provide discounted or free amenities or adventures for the trip.</p>
                <h3> Agency Fee </h3>
                <p>And while most travel agents do impose a service fee, varying from $25 to $100 depending on factors such as your desired itinerary and budget, ultimately, they can help maximize savings with exclusive promotions, perks and inventory that isn't available to the public, Richter says.</p>
      </div>
        <div className="col-lg-2">
        <img src={picture} className=""alt=""/>
        </div>
        </div>

    );
};

export default About;