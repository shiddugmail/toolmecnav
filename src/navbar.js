import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from './image/logo.png';
import './css/carousel.css';
import './css/bootstrap.min.css';
import './css/navbar.css';

class NavbarMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style : {
                "width": "0%"
            }
        };
        this.OpenNav = this.OpenNav.bind(this);
        this.CloseNav = this.CloseNav.bind(this);
    }

    OpenNav = (style = this.state.style) => {
        style = { "width": "100%"};
        this.setState({ style }, ()=> console.log('OpenNav Set: ', this.state.style ));
        console.log('Get: ', this.state.style);
    }

    CloseNav = (style = this.state.style) => {
        style = { "width": "0%"};
        this.setState({ style }, ()=> console.log('CloseNav Set: ', this.state.style ));
        console.log('Get: ', this.state.style);
    }
    render() {
    const LiFontSize = { 
        "fontSize":"10px"
    }
    return (
        <>
            <Navbar className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" 
                    // style={{ "z-index": "-1" }}
                    ></span>
                </button>
                <Nav className="collapse navbar-collapse nav-align" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto" id="myUL">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" style = {{cursor: "pointer"}} onClick={ this.OpenNav }>Product <i className="arrow right"></i></span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className="form-inline mt-2 mt-md-0 text-white">
                        <i className="fa fa-phone" style={{ "fontSize":"20px"}}></i>&emsp;+91 96868 23433&emsp;<br/>
                        <i className="fa fa-envelope" style={{ "fontSize":"20px"}}></i>&emsp;vinoth@toolmec.in
                    </div>
                    </Nav>
                    <Nav>
                    <div id="myNav" className="overlay" style = { this.state.style }>
                        <span className="closebtn" style = {{cursor: "pointer"}} onClick={ this.CloseNav }>&times;</span>
                        <div className="row">
                            <div className="col-md-4">
                                <ul className="navBarUL" id="myUL1">
                                    <h4><strong> Torque Tools</strong></h4>
                                    <ul className="nested">
                                        <li><span className="caret"></span><span className="product">Torque wrenches</span></li>
                                        <ul className="nested">
                                            <li><a href="torquetools.html#ratchet-interchangeable"><i className='fas fa-dot-circle' style={LiFontSize}></i> Rachet/Interchangable</a></li>
                                            <li><a href="torquetools.html#mini-size-torque-wrenches"><i className='fas fa-dot-circle' style={LiFontSize}></i> Mini Size Torque Wrench</a></li>
                                        </ul>
                                        <li><a href="torquetools.html#torque-wrenches(Pre-set)"><span className="caret"></span><span className="product"> Torque wrenches(pre-set)</span></a></li>
                                        <li><a href="torquetools.html#torque-screw-driver"><span className="caret"></span><span className="product"></span> Torque Screw driver</a></li>
                                        <li><a href="torquetools.html#dial-torch-wrench"><span className="caret"></span><span className="product"></span> Dial Torch Wrenche</a></li>
                                        <li><a href="torquetools.html#signaling-torque-wrench"><span className="caret"></span><span className="product"></span> Signaling Torque Wrenche</a></li>
                                        <li><span className="caret"></span><span className="product">Digital Torque wrenches</span></li>
                                        <ul>
                                            <li><a href="torquetools.html#novaTork-EEMH-series"><i className='fas fa-dot-circle' style={LiFontSize}></i> Nova Tork EEMH Series</a></li>
                                            <li><a href="torquetools.html#techni-Gi-7000-series"><i className='fas fa-dot-circle' style={LiFontSize}></i> Techni-Gi 7000 Series</a></li>
                                            <li><a href="torquetools.html#crane-IQ-wrenches"><i className='fas fa-dot-circle' style={LiFontSize}></i> Crane IQ-Wrenches</a></li>
                                            <li><a href="torquetools.html#eclatorq-digital-torque-wrench"><i className='fas fa-dot-circle' style={LiFontSize}></i> Eclatorq Digital Torque Wrenche</a></li>
                                            <li><span className="caret"></span>
                                            <span className="product">Interchangable Head</span></li>
                                                <ul>
                                                    <li><a href="torquetools.html#ratchet-reversible"><i className='fas fa-dot-circle' style={LiFontSize}></i> Rachet Reversible</a></li>
                                                    <li><a href="torquetools.html#ratchet-single-direction"><i className='fas fa-dot-circle' style={LiFontSize}></i> Rachet Single Direction</a></li>
                                                    <li><a href="torquetools.html#open-ended"><i className='fas fa-dot-circle' style={LiFontSize}></i> Open Ended</a></li>
                                                    <li><a href="torquetools.html#ring-spanner"><i className='fas fa-dot-circle' style={LiFontSize}></i> Ring Spanner</a></li>
                                                    <li><a href="torquetools.html#open-ended-ratchet"><i className='fas fa-dot-circle' style={LiFontSize}></i> Open Ended Rachet </a></li>
                                                    <li><a href="torquetools.html#ring-ratchet"><i className='fas fa-dot-circle' style={LiFontSize}></i> Ring Rachet</a></li>
                                                </ul>
                                        </ul>
                                        <li><span className="caret"></span><span className="product">Torque calibration Unit</span></li>
                                        <ul>
                                            <li><a href="torquetools.html#kilews-torque-meters"><i className='fas fa-dot-circle' style={LiFontSize}></i> Kilews Torque Meters</a></li>
                                            <li><a href="torquetools.html#nextech-DTS-series"><i className='fas fa-dot-circle' style={LiFontSize}></i> Nextech DTS Series</a></li>
                                        </ul>
                                        <li><a href="torquetools.html#bottle-cap-torque-tester"><i className='fas fa-dot-circle' style={LiFontSize}></i> Bottle Cap Torque Tester</a></li>
                                        <li><span className="caret"></span>
                                        <span className="product">Crane Torque Calibration System</span>
                                        </li>
                                        <ul>
                                            <li><a href="torquetools.html#torque-display-unit"><i className='fas fa-dot-circle' style={LiFontSize}></i> Torque Display Unit</a></li>
                                            <li><a href="torquetools.html#rotary-torque-transducer"><i className='fas fa-dot-circle' style={LiFontSize}></i> Rotary Torque Transduser</a></li>
                                            <li><a href="torquetools.html#static-torque-transducer"><i className='fas fa-dot-circle' style={LiFontSize}></i> Static Torque Transduser</a></li>
                                            <li><a href="torquetools.html#joint-kits"><i className='fas fa-dot-circle' style={LiFontSize}></i> Joint Kits</a></li>
                                        </ul>
                                        
                                    </ul>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="navBarUL" id="myUL2">
                                    <h4><strong>Pneumatic Tools</strong></h4>
                                    <ul>
                                        <li><span className="caret"></span><span className="product">Air Tools</span></li>
                                        <ul>
                                            <li><a href="pneumatictools.html#Impact-Wrenches" id="demo" ><i className='fas fa-dot-circle' style={LiFontSize}></i> Impact wrenches</a></li>
                                            <li><a href="pneumatictools.html#Du-Pas-Industrial-Impact-Wrenche"><i className='fas fa-dot-circle' style={LiFontSize}></i> Du-Pas Industrial Impact Wrenche</a></li>
                                            <li><a href="pneumatictools.html#Shut-off-Screw-Driver"><i className='fas fa-dot-circle' style={LiFontSize}></i> Shut off Screw Driver</a></li>
                                            <li><a href="pneumatictools.html#Rachet-Wrenche"><i className='fas fa-dot-circle' style={LiFontSize}></i> Rachet Wrenche</a></li>
                                            <li><a href="pneumatictools.html#Sander-Polisher"><i className='fas fa-dot-circle' style={LiFontSize}></i> Sander / Polisher</a></li>
                                            <li><a href="pneumatictools.html#Pneumatic-Die-Grinder"><i className='fas fa-dot-circle' style={LiFontSize}></i> Pneumatic Die Grinder</a></li>
                                            <li><a href="pneumatictools.html#Pneumatic-Air-Drill"><i className='fas fa-dot-circle' style={LiFontSize}></i> Pneumatic Air Drill</a></li>
                                            <li><a href="pneumatictools.html#Pneumaneumatic-Air-Hammer"><i className='fas fa-dot-circle' style={LiFontSize}></i> Pneumatic Air Hammer</a></li>
                                            <li><a href="pneumatictools.html#Pneumatic-Air-Screwdriver"><i className='fas fa-dot-circle' style={LiFontSize}></i> Pneumatic Air Screwdriver</a></li>
                                            <li><a href="pneumatictools.html#Pneumatic-Special-Tool"><i className='fas fa-dot-circle' style={LiFontSize}></i> Pneumatic Special Tool</a></li>
                                        </ul>
                                        <li><a href="pneumatictools.html#Pneumatic-Riveter/Nut-insert-Tool"><i className='fas fa-dot-circle' style={LiFontSize}></i> Pneumatic Riveter/Nut insert Tool</a></li>
                                        <li><span className="caret"></span><span className="product">Torque Controlled Pulse Tool </span></li>
                                        <ul>
                                            <li><a href="pneumatictools.html#Pistol-Type-Pulse-Tool"><i className='fas fa-dot-circle' style={LiFontSize}></i> Pistol Type Pulse Tool</a></li>
                                            <li><a href="pneumatictools.html#Straight-Type-Pulse-Tool"><i className='fas fa-dot-circle' style={LiFontSize}></i> Straight Type Pulse Tool</a></li>
                                            <li><a href="pneumatictools.html#Angle-Type-Pulse-Tool"><i className='fas fa-dot-circle' style={LiFontSize}></i> Angle Type Pulse Tool</a></li>
                                            <li><a href="pneumatictools.html#Special-Head-Pulse-Tool"><i className='fas fa-dot-circle' style={LiFontSize}></i> Special Head Pulse Tool</a></li>
                                            <li><a href="pneumatictools.html#Bosch-Air-Tools"><i className='fas fa-dot-circle' style={LiFontSize}></i> Bosch Air Tools </a></li>
                                        </ul>
                                    </ul>                        
                                </ul>
                                <ul className="navBarUL" id="myUL4">
                                    <h4><strong>Drive Bits/Impact Socket</strong></h4>
                                    <ul>
                                        <li><a href="dbis.html#power-drive-bits"><i className='fas fa-dot-circle' style={LiFontSize}></i> Power Drive Bits</a></li>
                                        <li><a href="dbis.html#impact-sockets"><i className='fas fa-dot-circle' style={LiFontSize}></i> Impact Sockets</a></li>
                                    </ul>
                                </ul>
                                <ul className="navBarUL" id="myUL4">
                                    <li>
                                        <a href="spdu.html#samoa-air-pumps&dispensing-unit">
                                            <h4><strong> Samoa Air Pumps & Dispensing Unit</strong></h4>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="navBarUL" id="myUL3">
                                    <h4><strong>Material Handling Tools</strong></h4>
                                    <ul>
                                        <li><span className="caret"></span><span className="product"> Spring Balancer</span></li>
                                        <ul>
                                            <li><a href="materialhandling.html#clean-room-spring-balancer"><i className='fas fa-dot-circle' style={LiFontSize}></i> Clean Room Spring Balancer</a></li>
                                            <li><a href="materialhandling.html#torque-reel"><i className='fas fa-dot-circle' style={LiFontSize}></i> Torque Reel</a></li>
                                            <li><a href="materialhandling.html#air-tool-balancer"><i className='fas fa-dot-circle' style={LiFontSize}></i> Air Tool Balancer</a></li>
                                            <li><a href="materialhandling.html#tool-hose-balancer"><i className='fas fa-dot-circle' style={LiFontSize}></i> Tool Hose Balancer</a></li>
                                            <li><a href="materialhandling.html#air-tool-reel"><i className='fas fa-dot-circle' style={LiFontSize}></i> Air Tool Reel</a></li>
                                            <li><a href="materialhandling.html#self-lock"><i className='fas fa-dot-circle' style={LiFontSize}></i> Self-Lock</a></li>
                                        </ul>
                                        <li><span className="caret"></span><span className="product">Air Hoist</span></li>
                                        <ul>
                                            <li><a href="materialhandling.html#wire-rope-type"><i className='fas fa-dot-circle' style={LiFontSize}></i> Wire Rope Type</a></li>
                                            <li><a href="materialhandling.html#chain-type"><i className='fas fa-dot-circle' style={LiFontSize}></i> Chain Type</a></li>
                                        </ul>
                                        <li><span className="caret"></span><span className="product">Air Balancer</span></li>
                                        <ul>
                                            <li><a href="materialhandling.html#lift-control-module"><i className='fas fa-dot-circle' style={LiFontSize}></i> Lift Control Module</a></li>
                                            <li><a href="materialhandling.html#balance-control-module"><i className='fas fa-dot-circle' style={LiFontSize}></i> Balance Control Module</a></li>
                                            <li><a href="materialhandling.html#kensui"><i className='fas fa-dot-circle' style={LiFontSize}></i> Kensui</a></li>
                                        </ul>
                                        <li><span className="caret"></span><span className="product">Others</span></li>
                                        <ul>
                                            <li><a href="materialhandling.html#plain-trolley"><i className='fas fa-dot-circle' style={LiFontSize}></i> Plain Trolley</a></li>
                                            <li><a href="materialhandling.html#air-motor-trolley"><i className='fas fa-dot-circle' style={LiFontSize}></i> Air Motor Trolley</a></li>
                                            <li><a href="materialhandling.html#rail-system"><i className='fas fa-dot-circle' style={LiFontSize}></i> Rail System</a></li>
                                        </ul>
                                    </ul>
                                </ul>
                                <ul className="navBarUL" id="myUL5">
                                    <h4><strong>KilewsBSD Electrical Screwdriver</strong></h4>
                                    <ul>
                                        <li><a href="kilews-bsd.html#high-torque-electrical-screwdriver"><i className='fas fa-dot-circle' style={LiFontSize}></i> High Torque Electrical Screwdriver</a></li>
                                        <li><a href="kilews-bsd.html#low-torque-electrical-screwdriver"><i className='fas fa-dot-circle' style={LiFontSize}></i> Low Torque Electrical Screwdriver</a></li>
                                        <li><a href="kilews-bsd.html#screw-feeder"><i className='fas fa-dot-circle' style={LiFontSize}></i> Screw Feeder</a></li>
                                    </ul>
                                </ul>
                            </div>
                            {/* <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                            </div> */}
                        </div>
                    </div>
                </Nav>
            </Navbar>
        </>
        );
    }
}
 
export default NavbarMain;
