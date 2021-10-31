import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const element = <FontAwesomeIcon icon={faPlane} />
   
    return (
        <section>
            <div className="mt-4 bg-primary text-white p-4">
           <h5>BestTravell Agency || Dream Travell || Tales of Time Travel</h5>
           <p>Home  | About | Services | Facilities | Login | Orders</p>
           <p>copyright@2021 | Travell Agency | Happy Tour {element}</p>
           
           
        </div>
        </section>
    );
};

export default Footer;