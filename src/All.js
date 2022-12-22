import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsTelephone} from 'react-icons/bs';
import { AiOutlineMail} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import image from './about-7.jpg';
import { Link } from "react-router-dom";

const Body = () => {
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
        <div className="theBody">
          <div className="growBusiness">
              <div style={{background:"rgb(50, 145, 50)", width:"290px" , height:"50px",position:"absolute",marginLeft:"80px",paddingLeft:"15px",marginTop:"30px",borderRadius:"3px"}}><h3 style={{color:"#fff",marginTop:"12px", position:"absolute"}}>WELCOME TO OURS MAGPRO !</h3></div>
                <h1>GROW YOUR BUSINESS</h1>
                <h4>We get you the max REFUND GUARANTEE and we also offering virtual appointments all season. Leaders and business owners should seek accurate, timely and relevant financial information to ensure your team is on the right path through all the twists and turns you’ll encounter.
                <br/><br/>
                </h4>
                <h4 style={{marginLeft:"500px", marginTop:"300px"}}>Bonus: Refer a friend and get <b>$50</b> !!!</h4>
              </div>
              <img style={{width:"500px"}} src={image} alt='workers'/>
              <div className="services">
                 <h1>---- OUR SERVICES ----</h1>
                  <div className="group1">
                        <div className="plan">
                           <h2>Tax Planning</h2>
                           <h5>Tax planning is the analysis of a financial situation or plan to ensure that all elements work together to allow you to pay the lowest taxes possible. Considerations of tax planning include the timing of income, size, the timing of purchases, and planning for expenditures</h5>
                        </div>
                        <div className="preparation">
                          <h2>Tax Preparation</h2>
                          <h5>We will prepare you to be confident in preparing your own taxes and the taxes of others, and we will also visually and logically explain the Tax Law and its applications through scenarios and examples.</h5>
                        </div>
                  </div>

          <div className="group2">
            <div className="payroll">
              <h2>Payroll Services</h2>
              <h5>Calculating & Paying your team wages accurately should not be a pain. Take the stress out of payroll processing, reduce paperwork, and access accurate reports for quicker decision making.</h5>
            </div>
            <div className="record">
              <h2>Record Keeping</h2>
              <h5>Keeping accurate and up-to-date records is vital to the success of your business. Good records help you to minimise losses, manage cash, meet any legal, regulatory and taxation authority requirements and improve financial analytics</h5>
            </div>
          </div>

        </div>
            <div className='footer'>
               <h1>"Our goal is to be at the heart of the Financial Services as businesses expand across"</h1>
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

export default Body;