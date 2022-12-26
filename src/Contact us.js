import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsTelephone} from 'react-icons/bs';
import { AiOutlineMail} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import { useState } from 'react';
import image from './inzo_service4-1-1170x694.jpg';
import { Link } from "react-router-dom";

const Contact = () => {
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
          <h2 style={{color:"rgb(50, 145, 50)" , marginLeft:"150px", fontWeight:"450"}}>---- Contact Us ----</h2>
          <img style={{width:"500px", marginTop:"30px"}} src={image} alt='people'/>
          <h2 style={{textAlign:"center",marginTop:"25px", fontWeight:"bold", fontSize:"32px", width:"500px"}}>Give Us A Call</h2>
          <div style={{padding:"30px" , border:"1px solid rgb(243, 243, 243)" , width:"350px", margin:"20px", marginLeft:"30px"}}>
            <div style={{width:"50px" , height:"50px" , borderRadius:"100px", background:"rgb(50, 145, 50)"}}><GoLocation style={{color:"rgb(243, 243, 243)" , fontWeight:"bold", marginLeft:"17px",marginTop:"17px"}}/></div>
            <h2>Our Location</h2>
            <p>1221 W Airport Fwy Ste 115, Irving, Tx 75062</p>
          </div>
          <div style={{padding:"30px" , border:"1px solid rgb(243, 243, 243)" , width:"350px", margin:"20px", marginLeft:"30px"}}>
          <div style={{width:"50px" , height:"50px" , borderRadius:"100px", background:"rgb(50, 145, 50)"}}><BsTelephone style={{color:"rgb(243, 243, 243)" , fontWeight:"bold", marginLeft:"17px",marginTop:"17px"}}/></div>
            <h2>Call Anytime</h2>
            <p>469-875-3872</p>
          </div>
          <div style={{padding:"30px" , border:"1px solid rgb(243, 243, 243)" , width:"350px", margin:"20px", marginLeft:"30px"}}>
          <div style={{width:"50px" , height:"50px" , borderRadius:"100px", background:"rgb(50, 145, 50)"}}><AiOutlineMail style={{color:"rgb(243, 243, 243)" , fontWeight:"bold", marginLeft:"17px",marginTop:"17px"}}/></div>
            <h2>Send Email</h2>
            <p> magdispatch01@gmail.com</p>
          </div>
          <div className='footerContent2'>
                 <div><BsTelephone style={{color:"rgb(90, 196, 90)" , fontWeight:"bold"}}/><h4>469-875-3872</h4></div>
                 <div><AiOutlineMail style={{color:"rgb(75, 75, 224)"}}/><h4> magdispatch01@gmail.com</h4></div>
                 <div><GoLocation style={{color:"rgb(235, 66, 66)" , }}/><h4> 1221 W Airport Fwy Ste 115, Irving, Tx 75062</h4></div>
            </div>
  </div>
  )
}

export default Contact;