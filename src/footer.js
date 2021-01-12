import React, { Component } from 'react';

class Footer extends Component {
  render() {
        return (
        
              <div class="fluid">
                <footer class="card-body footer-text" style="background-color: rgb(36, 35, 35);">
                  <div class="row" id="contact">
                  <div class="col-sm-4">
                        <img src="images/logo-img.png" alt="logo img" width="100" height="30"/>
                        <p class="card-text">We are the one of the leading power tools and special tool supplier in south India over a decade.</p>
                  <div class="col-sm-4">
                        <h4 id="contact" class="card-title"><b>Quick Links</b></h4>
                        <p class="card-text ">
                            <ul>
                                <li><a class="link-color" href="#about">About</a></li>
                                <li><a class="link-color" href="#productcategories">Categories</a></li>
                                <li><a class="link-color" href="torquetools.html">Torque Tools</a></li>
                                <li><a class="link-color" href="pneumatictools.html">Pneumatic tools</a></li>
                                <li><a class="link-color" href="materialhandling.html">Material Handling Tools</a></li>
                                <li><a class="link-color" href="dbis.html">Drive Bits/Impact Socket</a></li>
                                <li><a class="link-color" href="kilews-bsd.html">KilewsBSD Electrical Screwdriver</a></li>
                                <li><a class="link-color" href="spdu.html">Samoa Air Pumps & Dispensing Unit</a></li>
                            </ul>
                        </p>
                    </div>
                    <div class="col-sm-4">
                        <h4><b>Contact</b></h4>
                        <p class="card-text">No. 92, F1 – Eshwar Heights 1st Block, Narayanagar, Bank Officers Layout Doddakalsandra, Ring Road, 1st Stage, Bengaluru, Karnataka 560062</p>
                        <p><a class="link-color" href="#"><i class="fa fa-facebook" style="font-size:36px"></i></a>&emsp;
                            <a class="link-color" href="#"><i class="fa fa-linkedin" style="font-size:36px"></i></a>&emsp;
                            <a class="link-color" href="#"><i class="fa fa-twitter" style="font-size:36px"></i></a>&emsp;
                        </p>
                    </div>
                    </div>
                        <p>&copy; Tool Mec &middot; <a class="link-color" href="#">Privacy</a> &middot; <a class="link-color" href="#">Terms</a></p>
                        <p class="float-right">made by <a class="link-color" href="www.anyonecancode.in">anyonecancode.in</a></p>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                  </div>
                </footer>
              </div>
        );
    }
  }
  export default Footer;
