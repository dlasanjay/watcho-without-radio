import React, { useRef, useState } from 'react'
import Confetti from 'react-confetti'
import './popups.css'
import OtpInput from 'react-otp-input';

const getCurrentDimension=()=>{
    return {
          width: window.innerWidth,
          height: window.innerHeight
    }
}

const Subscription = ({showPopup,closePopup}) => {
    const [otp, setOtp] = useState('');
    const [showForm,setIsShowForm] = useState(false);
    const [isDisabled,setIsDisabled]=useState(true);
    const [otpErroe,setIsOtpError] = useState(null);
    const [isCouponApplied,setIsCouponApplied] = useState(false);
    const [isCouponAppliedPopup,setIsCouponAppliedPopup] = useState(false);
    const [couponError,setCouponError] = useState(null);
    const [checkoutStep, setCheckoutStep] = useState(1);
    const [coupon,setCoupon] = useState('');
    const [verificationData, setVerificationData] = useState({mobile : null, otp : null, term_condition : false, auto_renew : false});
    const [verificationError, setVerificationError] = useState({mobile : null, otp : null});
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const screeRef = useRef(null)
     
    const nextStep =(steps)=> {
        console.log(steps)
    }
    const setFormData = (value, type) => {

       
        let updatedValue = {};
        if(type == 'mobile') {

            updatedValue = {mobile:value};
        }
        else if(type == 'otp') {
            updatedValue = {otp:value};
            if(value.length === 4){
                setIsDisabled(false)

            }else {
                setIsDisabled(true); 
            }

        }
        setVerificationData(verificationData => ({
            ...verificationData,
            ...updatedValue
            }));


    }
    const getOtp = () => {
        var error = {mobile : ''}
        if(verificationData.mobile == null ) {
            error = {mobile : 'Please enter mobile number'}
        }
        else if(verificationData.mobile.length != 10) {
            error = {mobile : 'Mobile number is invalid'}

        }
        else {
            error = {mobile : null}
            setCheckoutStep(2)

        }
        setVerificationError(verificationData => ({
            ...verificationData,
            ...error
          }));
        // else {
        //     var re = new RegExp("^([a-z0-9]{5,})$");
        //     if (re.test(verificationData.mobile)) {
        //         setVerificationError(verificationData => ({
        //             ...verificationData,
        //             ...{mobile : 'Mobile number is invalid1'}
        //           }));
        //     } else {
        //         setVerificationError(verificationData => ({
        //             ...verificationData,
        //             ...{mobile : 'Mobile number valid'}
        //           }));
        //     }
        // }
    }
    const verifyOtp =()=> {
        var error = {};
        let testOtp = 1234;
        if(verificationData.otp==testOtp) {
            error = {otp : null}
            setCheckoutStep(3)
        }else {
            error = {otp : 'Please enter correct otp'}
        }
        setVerificationError(verificationData => ({
            ...verificationData,
            ...error
            }));
    }

    const applyCoupon = () => {
        if(coupon.toLowerCase() == 'watcho20') {
            setIsCouponApplied(true)
            setIsCouponAppliedPopup(true)
            setCouponError(null)
            const getData = setTimeout(() => {
                setIsCouponAppliedPopup(false)
      
            }, 2000);
            // clearTimeout(getData)
        }
        else {
            setCouponError('Coupon is invalid')
        }
        
    }
    const removeCoupon = () => {
        setIsCouponApplied(false)
        setCoupon('')
        
    }
  return (
    <div className={showPopup?'popupWrap show': 'popupWrap'}>
        
        <div className='popupbody'>
            <button onClick={closePopup} className='close-button'><i className='fa fa-close'></i></button>  
            <div className='popleftSec' ref={screeRef}>
                
                <div className='summaryBox'>
                    <p>Order Summary</p>
                    <h3>You are Paying for Watcho Max</h3>
                    <div className='subsprc'>
                        <span>&#8377; 2999</span>
                        <del>&#8377; 5999</del>
                        <dd>(Yearly Subscription)</dd>
                    </div>
                    <div className='allpacks'>All 11 OTTs in one magnificent pack.</div>
                </div>
                <div className='summaryBox'>
                    <p>Coupon Code</p>
                    <form className='coupon-form'>
                       
                        {
                            isCouponApplied ? 
                            <div className='with-code'>
                                <span className='success-check'>
                                    <i className='fa fa-check'></i>
                                </span>
                                <input type='text' disabled className='' value={coupon} autoComplete='off' />
                                <button type='button' onClick={removeCoupon}>Remove Code</button>
                            </div> 
                        :
                        
                        <div className='without-code'>
                            <img src={require('../../assets/images/icons/coupon-icon.png')} alt='%' />
                            <input type='text' className=''placeholder='Enter Coupon Code' value={coupon} onChange={(e)=>setCoupon(e.target.value)} autoComplete='off' />
                            <button type='button' onClick={applyCoupon}>Apply</button>
                        </div>
                        }
                        
                    </form>
                        {couponError!==null?<div className='errormsg'>{couponError}</div>:null}
                </div>
                <div className='summaryBox'>
                    <p>Payment Summary</p>
                    <div className='paymemtsmr'>
                        <div className='row'>
                            <span>Package Amount</span>
                            <span>&#8377; 7499</span>
                        </div>
                        <div className='row'>
                            <span>Discount (-)</span>
                            <span>&#8377; 5048</span>
                        </div>
                        <div className='row'>
                            <span>Tax (+)</span>
                            <span>&#8377; 548</span>
                        </div>
                        <div className='row total'>
                            <span>Total Payment</span>
                            <span>&#8377; 2999</span>
                        </div>
                    </div>
                </div>

                <div className={isCouponAppliedPopup ? 'success-popup show' : 'success-popup'}>
                    <div className='success-inner'>
                        <div className='success-container'>
                            <div className='success-imgbox'>
                                <img src={require('../../assets/images/success-pop.png')} alt="succes" />
                            </div>

                            
                            <h3>{coupon}</h3>
                            <div className='success-subtext'>Successfully Applied!</div>
                            <div className='success-upto'>you save upto 20% off on the selected plan</div>
                        </div>
                    </div>
                    <Confetti width={screenSize.width} height={screenSize.height}/>
                </div>
            </div>
            <div className='poprightSec'>
                <div className='subscriptionForm'>
                    <h2>Smart Choice!</h2>
                    <p>The World Of Watcho Shall Be Yours Shortly</p>
                    <div className='paysteps'>
                        <ul className='step-two'>
                            <li>
                                <span className='dots fill'></span>
                                <div>Select<br /> a plan</div>
                            </li>
                            <li>
                                <span className='dots fill'></span>
                                <div>Verify your<br />  number</div>
                            </li>
                            <li>
                                <span className='dots empty'></span>
                                <div>Make<br />  payment</div>
                            </li>
                        </ul>
                    </div>
                    
                    
                    <form className={checkoutStep == 1 ? 'watchform ' : 'watchform stepOne' }>
                        <h3 className='form-subheading'>
                            Enter your mobile number to receive OTP
                        </h3>
                        <div className='fieldsWrap'>
                            <fieldset>
                                <legend>Country Code</legend>
                                <div className='drop-list'>
                                    <img src={require('../../assets/images/flags/flag-in.png')} alt='IN' />
                                    <span>+91</span>
                                    {/* <i className='fa fa-angle-down'></i> */}
                                </div>
                            </fieldset>
                            <fieldset >
                                <legend>Mobile Number</legend>
                                <input type='text' placeholder='Enter Mobile Number' className='input-field' value={verificationData.mobile} onChange={e => {setFormData(e.target.value, 'mobile')}}/>
                            
                                    {verificationError.mobile!==null?<div className='errormsg'>{verificationError.mobile}</div>:null}
                            </fieldset>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' value='' id='terms' checked/>
                            <label htmlFor='terms'>I am over 18, and I agree to the above conditions and the<br/>
                             <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy</a></label>
                        </div>
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' value='' id='renewsubs' />
                            <label htmlFor='renewsubs'>Auto Renew Your Subscription</label>
                        </div>

                        <button type='button' className='site-btn-default form-btn' onClick={getOtp}>Get OTP</button>
                    </form>

                    <form className={checkoutStep == 2 ? 'watchform stepTwo' : 'watchform stepTwo hide' }>

                        <h3 className='form-subheading'>
                            Verify the OTP
                        </h3>
                        <span className='subtext'>The code has been sent to you on your mobile number (+91) {verificationData.mobile}</span>
                        <div className='otpContainerWrap'>
                            <OtpInput

                                value={verificationData.otp}
                                onChange={e => {setFormData(e, 'otp')}}

                                inputStyle={(otpErroe===null)?'otpbox' : otpErroe+' otpbox'}
                                containerStyle='otpContainer'
                                numInputs={4}
                                onKey
                                // renderSeparator={<span>-</span>
                                renderInput={(props) => <input {...props} />}
                            />
                            {verificationError.otp!==null?(<div className='errormsg'>
                                {verificationError.otp}
                            </div>):null}
                            
                        </div>
                        <div className='mb-30'>
                            <span className='subtext'>Haven't received the verification code? <button className='inline-btn' type='button' onClick={getOtp}>Resend OTP</button> or <button className='inline-btn' type='button' onClick={() => setCheckoutStep(1)}>Re-Enter Mobile Number</button></span>
                        </div>
                        <button disabled={isDisabled?true:false} type='button' className='site-btn-default form-btn' onClick={verifyOtp}>Verify OTP</button>
                    </form>
                    <form className={checkoutStep == 3 ? 'watchform stepThree' : 'watchform stepThree hide' }>
                        <h3 className='form-subheading'>
                            Number Verified
                        </h3>
                        <span className='subtext'>Your mobile number (+91) {verificationData.mobile} is verified</span>
                        <div className='otpContainerWrap'>
                            <div className='otpContainer'>
                                <span className='otpbox'>1</span>
                                <span className='otpbox'>2</span>
                                <span className='otpbox'>3</span>
                                <span className='otpbox'>4</span>
                            </div>
                            <div className=''>
                                <span className='success-check'>
                                    <i className='fa fa-check'></i>
                                </span>
                            </div>
                            
                        </div>
                        <div className='mb-30'>
                            <span className='subtext white'>Hello Again!<br/> It’s good to have you back! You have already availed the complimentary offer on this number. Please complete your payment before you get started. Happy Streaming!</span>
                        </div>
                        <button type='submit' className='site-btn-default form-btn' onClick={()=>nextStep('stepTwo')}>Make Payment</button>
                    </form>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Subscription
