import React from  'react';

// components
import Couple from '../../components/couple';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import Gallery from '../../components/gallery';
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'

import couple1 from '../../images/couple/moumita.png'
import couple2 from '../../images/couple/evan.png'
import PreviewHero from '../../components/hero';


const Homepage = () => {
    return(
       <div>
           <Navbar/>
           <PreviewHero preview={'items1'}/>
           <Couple coupleimg1={couple1} coupleimg2={couple2}/>
           <Welcome/>
           <Story/>
           <Gallery/>
           <Footer />
       </div>
    )
}

export default Homepage;