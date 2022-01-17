import React from 'react'
import './introVideo.css'

export default function Intro_video({removeIntros}) {

    return (
        <div className='Intro-video'>
            <div className='Intro_video_wrap'>
                <video width="100%" muted loop={true}  autoPlay={true}>
                    <source src={require("./Web_Intro.mp4")} type="video/mp4" />
                </video>
                <span onClick={removeIntros} className='skip'>Skip</span>
            </div>
        </div>
    )
}
