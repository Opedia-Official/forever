import React, { Component} from 'react'
import './banner.css'


export default class index extends Component {
    render() {
        return (
            <>
                <div className="banner-area wow fadeIn" >
                <div className="banner-play">
                    <video width="100%" muted loop={true}  autoPlay={true}>
                    <source src={require('../../images/banner/Forevernow_Banner.mp4')} type="video/mp4" />
                        </video>
                        
                    </div>
                </div>
                
            </>
        )
    }
}
