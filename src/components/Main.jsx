import {useEffect} from 'react'

import Navbar from "../components/navigation/index"
import Banner from '../components/Banner/index';
import Scrolling from '../components/Scrolling-img/index'
import UseCase from '../components/UseCases/UseCase';
import RoadToMap from '../components/RoadToMap/RoadToMap';
import ParticleSettings from '../components/particleSettings';
import Partnar from '../components/Partnar/Partnar';
import About from '../components/aboutUs/About';

import WOW from 'wowjs';

export default function Main() {
    useEffect(()=>{
        new WOW.WOW({
            live: false
        }).init();
      })
    
    return (
        <div style={{position:"relative"}}>
              {/* <div style={{position:"absolute",zIndex:"-1"}}>
            <ParticleSettings/>
        </div> */}
        <Navbar/>
        <Banner/>
        <Scrolling/>
        <UseCase/>
        <RoadToMap/>
        <Partnar/>
        <About/>
            
        </div>
    )
}
