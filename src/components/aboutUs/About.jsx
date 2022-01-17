import React from 'react'
import './about.css';
import Img from "../../images/logo/logo-2.jpg"
export default function Footer() {
    return (
        <div className="about-area mt-5 pb-5 pt-80 wow fadeInUp" id='AboutUs'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                            <div className="about-img">
                                <img width="100%" src={Img} alt="" />
                            </div>
                    </div>
                    <div className="col-md-8">
                       <div className="about-right-wrap mt-5 mt-md-0">
                       <div className="about-us-info text-center">
                        <h2 style={{color:"#1C8FDE"}}>About Us</h2>
                            <p style={{color:"#2ED9AC"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit similique vitae illum soluta necessitatibus dolor et pariatur numquam quis? Aspernatur eos eum commodi earum! Non ratione saepe vitae eveniet possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque unde impedit obcaecati similique fugiat molestias magnam dolorum libero eaque ratione iusto tempora eum non, culpa dolorem odio qui labore.
                            </p>
                        </div>
                        <div className="about-right-info">
                                <ul>
                                    <li><a href="#"> <i className="fab fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram-square"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-google"></i></a></li>
                                    
                                </ul>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}
