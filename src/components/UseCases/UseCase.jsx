import React from 'react'
import Typewriter from "typewriter-effect";
import './usecase.css'




export default function UseCase() {
    
    return (
        <>
            <div className="useCase-area pt-80 " id='useCase'>
               <div className="container">
                   <div className="row align-items-center">
                       <div className="col-md-6">
                            <div className="forever-types wow fadeInLeft">
                                   <h2>
                                   <Typewriter
                                        onInit={(typewriter)=>{
                                            typewriter
                                                .typeString("Forever!")
                                                .pauseFor(2000)
                                                .deleteAll()  
                                                .typeString("Love!")
                                                .deleteAll()  
                                                .typeString('Memory!')
                                                .deleteAll()
                                                .typeString('History!')
                                                .deleteAll()
                                                .typeString('Knowledge!')
                                                .deleteAll()
                                                .typeString('Expression!')
                                                .deleteAll()
                                                .typeString('Digital Estate!')
                                                .deleteAll()
                                                .typeString('Lagacy!')
                                                .deleteAll()
                                                .typeString('Games, Movies, Music!')
                                                .deleteAll()
                                                .typeString('Metaverse!')
                                                .deleteAll()
                                                .start();
                                        }}
                                    />
                                   </h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                                <div className="usecase-righ wow  fadeInRight">
                                <video width="100%" muted loop={true}  autoPlay={true}>
                                    <source src={require('../../images/useCase/Side_Animation.mp4')} type="video/mp4" />
                                </video>
                                </div>
                        </div>
                       </div>
                   </div>
               </div>
   
        </>
    )
}
