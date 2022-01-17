import React from 'react'
import { Card } from 'react-bootstrap'
import './partnar.css'

export default function Partnar() {
    return (
        <div className='partnar-area pb-80 wow fadeInUp' id='Partners'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 ">
                        <Card style={{ width: "100%",color:'#000' }}>
                            <Card.Img style={{width:'200px'}} src={require('../../images/partners/pic-1.png')} />
                            <Card.Body>
                                <Card.Title style={{color:"#fff"}} >Dalwar Hasan</Card.Title>
                                <Card.Text style={{color:"#fff"}} >
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                               
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt-3 mt-sm-0">
                        <Card style={{ width: "100%",color:'#000' }}>
                            <Card.Img style={{width:'200px'}} src={require('../../images/partners/pic-1.png')} />
                            <Card.Body>
                                <Card.Title style={{color:"#fff"}} >Dalwar Hasan</Card.Title>
                                <Card.Text style={{color:"#fff"}} >
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                               
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                        <Card style={{ width: "100%",color:'#000' }}>
                            <Card.Img style={{width:'200px'}} src={require('../../images/partners/pic-1.png')} />
                            <Card.Body>
                                <Card.Title style={{color:"#fff"}} >Dalwar Hasan</Card.Title>
                                <Card.Text style={{color:"#fff"}} >
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                               
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt-3 mt-lg-0">
                        <Card style={{ width: "100%",color:'#000' }}>
                            <Card.Img style={{width:'200px'}} src={require('../../images/partners/pic-1.png')} />
                            <Card.Body>
                                <Card.Title style={{color:"#fff"}} >John</Card.Title>
                                <Card.Text style={{color:"#fff"}} >
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                               
                            </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
        </div>
    )
}
