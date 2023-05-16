import React, { Fragment,useState,useRef } from 'react'
import './home.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Plans from '../../components/Plans'
import Popups from '../../components/Popups'
import Accordion from '../../components/Accordion'
import Modal from 'react-modal'
Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'36.4583vw',
    borderRadius:'1vw'
  },
};
const questionsAnswers = [
  {
    question: "Should I log in to all the OTTs separately?",
    answer:
      `Different apps will have different usage level. Please see the list below \n  Hoichoi - 2 screens Disney+ Hotstar - 4 screens   \n Zee5 - 3 screens     Sonyliv - 1 screens     Lionsgate - 6 screens`,
  },
  {
    question: "How many users can watch the content at one time?",
    answer:
    "Different apps will have different usage level. Please see the list below  Hoichoi - 2 screens Disney+ Hotstar - 4 screens    Zee5 - 3 screens     Sonyliv - 1 screens     Lionsgate - 6 screens",
  },
  {
    question: "Can I upgrade my plan mid-month?",
    answer:       "Different apps will have different usage level. Please see the list below  Hoichoi - 2 screens Disney+ Hotstar - 4 screens    Zee5 - 3 screens     Sonyliv - 1 screens     Lionsgate - 6 screens",
  },
  {
    question: "Do I need to have a different login id and password for all OTTs?",
    answer:       "Different apps will have different usage level. Please see the list below  Hoichoi - 2 screens Disney+ Hotstar - 4 screens    Zee5 - 3 screens     Sonyliv - 1 screens     Lionsgate - 6 screens",
  },
];

const Index = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false)
  const [expanPlan,setIsExpan] = useState(false)
  const [showPopup, setIsShow] = useState(false)
  
  const plansRef = useRef(null)
  const scrollTo = () => plansRef.current.scrollIntoView() 
  const openModal=()=> {
    setIsOpen(true);
  }
  const afterOpenModal=()=> {
    //
  }
  const closeModal=()=> {
    setIsOpen(false);
  }
  const toggleExpand=()=> {
    if(expanPlan) {
      setIsExpan(false)
    }else{
      setIsExpan(true)
    }
  }
  const showSubsPopup = ()=> {
    setIsShow(true)
  }
  const closePopup =()=> {
    setIsShow(false)
  }


  return (
    <Fragment>
      <Header />
      <Banner />
      <div className='wrapper'>
        <div className='cardWrapper' ref={plansRef}>
          <Card handleClick={openModal} showSubsPopup={showSubsPopup} bestBuy={true} />
          <Card handleClick={openModal} showSubsPopup={showSubsPopup} bestBuy={false}/>  
          <Card handleClick={openModal} showSubsPopup={showSubsPopup} bestBuy={false}/>  
          <Card handleClick={openModal} showSubsPopup={showSubsPopup} bestBuy={false}/>  
          <Card handleClick={openModal} showSubsPopup={showSubsPopup} bestBuy={false}/>         
        </div>
        <section className='subsSteps'>
          <h2 className='sub-heading'>How to Buy Watcho Subscription</h2>
          <div className='stepWrap'>
          <div className='setpBox'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className='setpBoxTet'>
            <span>Select a plan</span>
            <span>Verify your number</span>
            <span>Make payment</span>
          </div>
          </div>
          <butoon className='subsplan-btn' onClick={showSubsPopup}>Subscribe A Plan</butoon>
        </section>
        <section className='compareSec'>
          <h3 className='expand-txt'>
            Need Help!  
            <button className='expand-btn' onClick={toggleExpand}>Compare & Make A Choice <i className="fa fa-angle-down"></i></button>
          </h3>
          <div className='plansCmpr'>
            <Plans expanPlan={expanPlan} handleClick={openModal} showSubsPopup={showSubsPopup} />
          </div>
        </section>
        <section className='faqsSec'>
          <h2 className='sub-heading'>FAQ's</h2>
          <Accordion questionsAnswers={questionsAnswers} />          
        </section>
        <div className='scrollto'>
          <button onClick={scrollTo}>Back to plans</button>
        </div>
      </div>      
      <Footer />

      <Popups showPopup={showPopup} closePopup={closePopup} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='modal-content'>
          <button onClick={closeModal} className='btn-close'><img src={require('../../assets/images/close.png')} alt='close'/></button>
          <h2 className='modal-heading'>Individual OTTs Market Price</h2>
          <ul className='ott-list'>
            <li>
              <div className='platformname'>Sony LIV</div>
              <img src={require('../../assets/images/logos/logos-1.png')} alt='logo-1' />
              <div className='platformprice'>&#8377; 999</div>
              <div className='platformTerm'>per year</div>
            </li>
            <li>
              <div className='platformname'>Sony LIV</div>
              <img src={require('../../assets/images/logos/logos-1.png')} alt='logo-1' />
              <div className='platformprice'>&#8377; 999</div>
              <div className='platformTerm'>per year</div>
            </li>
            <li>
              <div className='platformname'>Sony LIV</div>
              <img src={require('../../assets/images/logos/logos-1.png')} alt='logo-1' />
              <div className='platformprice'>&#8377; 999</div>
              <div className='platformTerm'>per year</div>
            </li>
            <li>
              <div className='platformname'>Sony LIV</div>
              <img src={require('../../assets/images/logos/logos-1.png')} alt='logo-1' />
              <div className='platformprice'>&#8377; 999</div>
              <div className='platformTerm'>per year</div>
            </li>
            <li>
              <div className='platformname'>Sony LIV</div>
              <img src={require('../../assets/images/logos/logos-1.png')} alt='logo-1' />
              <div className='platformprice'>&#8377; 999</div>
              <div className='platformTerm'>per year</div>
            </li>
            <li>
              <div className='platformname'>Sony LIV</div>
              <img src={require('../../assets/images/logos/logos-1.png')} alt='logo-1' />
              <div className='platformprice'>&#8377; 999</div>
              <div className='platformTerm'>per year</div>
            </li>
            <li>
              <div className='platformname'>Sony LIV</div>
              <img src={require('../../assets/images/logos/logos-1.png')} alt='logo-1' />
              <div className='platformprice'>&#8377; 999</div>
              <div className='platformTerm'>per year</div>
            </li>
            <li>
              <div className='platformname'>Sony LIV</div>
              <img src={require('../../assets/images/logos/logos-1.png')} alt='logo-1' />
              <div className='platformprice'>&#8377; 999</div>
              <div className='platformTerm'>per year</div>
            </li>
          </ul>
          <div className='modal-footer'>
            <div className='totalCast'>Total Cost &#8377; 7469</div>
            <div className='saveUpto'>Save upto &#8377; 4470</div>
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}

export default Index
