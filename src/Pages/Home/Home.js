import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
// import Services from '../Services/Services';
import './Home.css';
import Services from './Services/Services';

const Home = () => {
	return (
		<div id='home'>
			<Banner></Banner>
			<Services></Services>
			<About></About>
			<Facilities></Facilities>
		</div>
	);
};

export default Home;
