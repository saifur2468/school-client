import React from 'react';
import Hero from './Hero';
import Aboutus from './Aboutus';
import EventsSection from './EventsSection';
import WhyChooseUs from './WhyChoose';
// import Testimonials from './TestimonialSlider';


const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <Aboutus></Aboutus>
             <WhyChooseUs></WhyChooseUs>
            <EventsSection></EventsSection>
            {/* <Testimonials></Testimonials> */}
           
           
        </div>
    );
};

export default HomePage;