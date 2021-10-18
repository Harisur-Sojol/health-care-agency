import React from 'react';
import Services from '../Services/Services'
import AboutUs from '../AboutUs/AboutUs'
import Doctors from '../Doctors/Doctors';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
           <Services></Services>
           {/* <AboutUs></AboutUs>
           <Doctors></Doctors> */}
        </div>
    );
};

export default Home;