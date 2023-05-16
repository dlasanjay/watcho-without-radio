import React, { useState,useRef } from 'react'
import './plans.css'

const Index = ({expanPlan,handleClick, showSubsPopup}) => {

    const annulaRef = useRef(null);
    const monthlyRef = useRef(null);

    
    const swtchPlans = (e, tab) => {
        if (tab === "Annual") {
            annulaRef.current.classList.add("active");
            monthlyRef.current.classList.remove("active");
        }
        if (tab === "Monthly") {
            annulaRef.current.classList.remove("active");
            monthlyRef.current.classList.add("active");
        }
      };
  
  return (
    <div className={expanPlan?'plansWap show':'plansWap hide'} >
      <div className='headRow'>
        <div className='rowLeft'>
            <span className=''>Our<br /> Plans</span>
        </div>
        <div className='rowRight'>
            <div className='planClms'>Max</div>
            <div className='planClms'>Dhamaal</div>
            <div className='planClms'>Masti</div>
            <div className='planClms'>Mirchi</div>
            <div className='planClms'>Exclusive</div>
        </div>
      </div>
      <div className='contRow'>
        <div className='rowLeft'>
            <img className='ottLogo' src={require('../../assets/images/logos/logos-2.png')} alt='logos' />
        </div>
        <div className='rowRight'>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                                
            </div>
            <div className='checkmark'>
                          
            </div>
            <div className='checkmark'>
                              
            </div>
            <div className='checkmark'>
                              
            </div>            
        </div>
      </div>
      <div className='contRow'>
        <div className='rowLeft'>
            <img className='ottLogo' src={require('../../assets/images/logos/logos-3.png')} alt='logos' />
        </div>
        <div className='rowRight'>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                               
            </div>
            <div className='checkmark'>
                               
            </div>
            <div className='checkmark'>
                               
            </div>
        </div>
      </div>
      <div className='contRow'>
        <div className='rowLeft'>
            <img className='ottLogo' src={require('../../assets/images/logos/logos-5.png')} alt='logos' />
        </div>
        <div className='rowRight'>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                               
            </div>
            <div className='checkmark'>
                               
            </div>

        </div>
      </div>

      <div className='contRow'>
        <div className='rowLeft'>
            <img className='ottLogo' src={require('../../assets/images/logos/logos-4.png')} alt='logos' />
        </div>
        <div className='rowRight'>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
            <span><i className='fa fa-check'></i></span>              
            </div>
            <div className='checkmark'>
                             
            </div>
            <div className='checkmark'>
                              
            </div>            
        </div>
      </div>
      <div className='contRow'>
        <div className='rowLeft'>
            <img className='ottLogo' src={require('../../assets/images/logos/logos-7.png')} alt='logos' />
        </div>
        <div className='rowRight'>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                               
            </div>
        </div>
      </div>
      <div className='contRow'>
        <div className='rowLeft'>
            <img className='ottLogo' src={require('../../assets/images/logos/logos-1.png')} alt='logos' />
        </div>
        <div className='rowRight'>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>

        </div>
      </div>


      <div className='contRow'>
        <div className='rowLeft'>
            <img className='ottLogo' src={require('../../assets/images/logos/logos-8.png')} alt='logos' />
        </div>
        <div className='rowRight'>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
            <span><i className='fa fa-check'></i></span>              
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>            
        </div>
      </div>
      <div className='contRow'>
        <div className='rowLeft'>
            <img className='ottLogo' src={require('../../assets/images/logos/logos-9.png')} alt='logos' />
        </div>
        <div className='rowRight'>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                               
            </div>
        </div>
      </div>
      <div className='contRow'>
        <div className='rowLeft'>
            <img className='ottLogo' src={require('../../assets/images/logos/logos-10.png')} alt='logos' />
        </div>
        <div className='rowRight'>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>

        </div>
      </div>

      <div className='contRow'>
        <div className='rowLeft'>
            <img className='ottLogo' src={require('../../assets/images/logos/logos-11.png')} alt='logos' />
        </div>
        <div className='rowRight'>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
            <span><i className='fa fa-check'></i></span>              
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>            
        </div>
      </div>
      <div className='contRow'>
        <div className='rowLeft'>
            <img className='ottLogo' src={require('../../assets/images/logos/logos-6.png')} alt='logos' />
        </div>
        <div className='rowRight'>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                <span><i className='fa fa-check'></i></span>                
            </div>
            <div className='checkmark'>
                               
            </div>
        </div>
      </div>
      


      <div className='contRow dashed'>
        <div className='rowLeft'>
            <span className=''>Apps Worth</span>
        </div>
        <div className='rowRight'>            
           <div className='realPrice'>
            <span>&#8377; 7489</span>
           </div>
           <div className='realPrice'>
            <span>&#8377; 5489</span>
           </div>
           <div className='realPrice'>
            <span>&#8377; 17489</span>
           </div>
           <div className='realPrice'>
            <span>&#8377; 3489</span>
           </div>
           <div className='realPrice'>
            <span>&#8377; 4489</span>
           </div> 
        </div>
      </div>
      <div className='contRow dashed'>
        <div className='rowLeft switch-tab'>
            <span className=''>You Pay</span>
            {/* <div className='stabs'>
                <button value='Annual' ref={annulaRef} className='switch-btn active' onClick={(e)=>swtchPlans(e,'Annual')}>Yearly</button>
                <button value='Monthly' ref={monthlyRef} className='switch-btn' onClick={(e)=>swtchPlans(e,'Monthly')}>Monthly</button>
            </div> */}
        </div>
        <div className='rowRight'>            
           <div className='reducedPrice'>
            <span>&#8377; 7489</span>
            <i className='info' onClick={handleClick}>i</i>
           </div>
           <div className='reducedPrice'>
            <span>&#8377; 4489</span>
            <i className='info' onClick={handleClick}>i</i>
           </div>
           <div className='reducedPrice'>
            <span>&#8377; 8489</span>
            <i className='info' onClick={handleClick}>i</i>
           </div>
           <div className='reducedPrice'>
            <span>&#8377; 3489</span>
            <i className='info' onClick={handleClick}>i</i>
           </div>
           <div className='reducedPrice'>
            <span>&#8377; 11489</span>
            <i className='info' onClick={handleClick}>i</i>
           </div>
        </div>
      </div>

      <div className='contRow dashed border-0'>
        <div className='rowLeft'>
            <span className=''>You Save</span>
        </div>
        <div className='rowRight prcent'>            
           <div>72%</div> 
           <div>74%</div>
           <div>72%</div>
           <div>62%</div>
           <div>81%</div>
        </div>
      </div>
      <div className='contRow dashed border-0'>
        <div className='rowLeft'>
            
        </div>
        <div className='rowRight'>            
           <button className='site-btn-default' onClick={showSubsPopup}>Subscribe</button>
           <button className='site-btn-default' onClick={showSubsPopup}>Subscribe</button>
           <button className='site-btn-default' onClick={showSubsPopup}>Subscribe</button>
           <button className='site-btn-default' onClick={showSubsPopup}>Subscribe</button>
           <button className='site-btn-default' onClick={showSubsPopup}>Subscribe</button>
        </div>
      </div>

    </div>
  )
}

export default Index
