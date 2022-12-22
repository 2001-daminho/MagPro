import React from 'react'
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import image from './images (1).jpeg';
import image2 from './about-bg1-1.jpg';
import { BsTelephone} from 'react-icons/bs';
import { AiOutlineMail} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import { Link } from "react-router-dom";

const About = () => {
  const [nav , setnav]= useState(false);
  return (
    <div>
         <div className='nav-bar'>
            <div className="logo"><h1>MAG </h1><h1 className="pro">PRO.</h1></div>
            <div type='button' onClick={()=>setnav((prev)=> !prev)} style={{cursor:"pointer",marginTop:"23px" , fontSize:"35px" , marginLeft:"240px" , fontWeight:"300"}}><RxHamburgerMenu/></div>
                <div className={nav ? "mylinks" : null}>
                    <div className='links'>
                    <Link to="/"><h3><a>HOME</a></h3></Link>
                    <Link to="/about"><h3><a>ABOUT US</a></h3></Link>
                    <Link to="/contact"><h3><a>CONTACT US</a></h3></Link>
                    </div>
              </div>
          </div>
          <div>
            <h2 style={{color:"rgb(50, 145, 50)" , marginLeft:"150px", fontWeight:"450"}}>---- About Us ----</h2>
            {/* <img style={{width:"500px" , marginTop:"10px"}} src={image} alt="taxImage"/> */}
             <h1 style={{marginLeft:"40px" , width:"280px"}}>We Provide the Business Financial Solutions</h1>
             <div className='aboutGroup1'>
               <div>
                   <h3>Our Mission</h3>
                   <p>To enchance the potential of our clients' business to operate at optimum levels while building relationships of mutual respect.</p>           
               </div>
               <div>
                   <h3>Our Vision</h3>
                   <p>To be a leading professional firm providing exceptional services and timely solutions to our clients' Tax.</p>           
               </div>
        
               <div>
                   <h3>Philosophy</h3>
                   <p>...Vision , Character , Assurance.</p>           
               </div>
              </div> 
              <img style={{width:"500px"}} src={image2} alt="person"/> 
               <div className='aboutGroup2'>
                   <h3>Our Core Values</h3>
                   <h5>Best-In-Class</h5>  
                   <p>We aim to be the benchmark for quality in our industry.</p>    
                   <h5>Stewardship</h5>     
                   <p>We hire the best and the brightest and we invest in our people to ensure that legacy.</p>
                   <h5>Independence</h5>
                   <p>Our platform allows us to objectively serve as our client's advocate; the advice and solutions we offer are those that are in the best interest of our client.</p>
                   <h5>Transparency</h5>
                   <p>We value open communication, information sharing and inclusive decision making.</p>
               </div>
               <div className='footerContent'>
                 <div><BsTelephone style={{color:"rgb(90, 196, 90)" , fontWeight:"bold"}}/><h4>469-875-3872</h4></div>
                 <div><AiOutlineMail style={{color:"rgb(75, 75, 224)"}}/><h4> magdispatch01@gmail.com</h4></div>
                 <div><GoLocation style={{color:"rgb(235, 66, 66)" , }}/><h4> 1221 W Airport Fwy Ste 115, Irving, Tx 75062</h4></div>
            </div>
          </div>
    </div>
  )
}

export default About;