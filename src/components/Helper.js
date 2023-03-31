import React, { useEffect, useState } from 'react'
import toothB from '../images/toothBlue.png'
import lungsB from '../images/lungsBlue.png'
import brainB from '../images/brainBlue.png'
import reportB from '../images/reportBlue.png'

import axios from 'axios'

export const Helper = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        handleReviews();
    }, []);

    const handleReviews = () => {

        axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
            .then((res) => {
                console.log(res.data.data);
                setReviews(res.data.data);
            })

            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='intro'>
                <div className='left-intro' >
                    <p className='welcome' >Welcome to MediCare+ CLinic</p>
                    <h1 className='bestIntro' > Best Specialists </h1>
                    <p className='introIntro'>We are on the learning edge of cancer care. Providing the full continumm of cancer treatments and supportive care services in a single convenient location.</p>
                    <div className='btnIntro' >
                        <p style={{ backgroundColor: 'blue', color: 'aliceblue', padding: '0.7rem', borderRadius: '20px' }} >Make Appointment</p>
                        <p style={{ backgroundColor: 'aliceblue', color: 'blue', padding: '0.9rem', borderRadius: '20px' }}  >Departments</p>
                    </div>
                </div>
                <div className='right-intro'>
                    <div className='squareIntro' >

                    </div>
                </div>
            </div>

            {/* servise */}
            <div className="services">
                <div  >
                    <h1 className='headingServices'>OUR SERVICES</h1>
                </div>
                <div>
                    <p className='descServices' >We provide the most full medical services, so every person could have the oppurtunity to recieve qualitative medical help.</p>
                </div>
                <div className='cardsServices' >
                    <div className='card' > <img src={toothB} alt="" /> <p>Dental Care</p> </div>
                    <div className='card' > <img src={lungsB} alt="" /> <p>Pulmonary</p> </div>
                    <div className='card' > <img src={brainB} alt="" /> <p>Neurological</p> </div>
                    <div className='card' > <img src={reportB} alt="" /> <p>Prediatrics</p> </div>
                </div>
            </div>

            {/* innvoation */}
            <div className="innovation">
                <div className='rightI'>
                    <h1 className='headingI' >Clinic With Innovative</h1>
                    <p className='descI' > We provide the most full medical services, so every person could have the oppurtunity to recieve qualitative medical help  </p>
                    <p className='btnI' >Learn More</p>
                </div>
                <div className="leftI">
                    <div className='cardsI' >
                        <img className='cardsImg' src={require('../images/doc.png')} height='150px' alt="" />
                        <p className='cardsDecs' >Qualified Doctors</p>
                    </div>
                    <div className='cardsI' >
                        <img className='cardsImg' src={require('../images/nurse.png')} height='150px'  alt="" />
                        <p className='cardsDecs'> Emergency Care</p>
                    </div>
                    <div className='cardsI' >
                        <img className='cardsImg' src={require('../images/ambulance.png')} height='150px' alt="" />
                        <p  className='cardsDecs' >24 Hours Service </p>
                    </div> 
                </div>
            </div>

            {/* doctors */}
            <div className="doctors">
                <h1 className='headingDoc'>We have the best Specialists</h1>
                <p className='descDoc' > We have a wide experience in experience in design and strategy, <br />with locally-rooted knowledge </p>
                <div className="docCards">
                    <div className='cardDoc' >
                        <div>

                        </div>
                        <div className="names">
                            <p style={{ fontSize: '20px', fontWeight: 'bolder' }} >Dr Awaatif Ali</p>
                            <p>Dental Care</p>
                        </div>
                    </div>
                    <div className='cardDoc' >
                        <div>

                        </div>
                        <div className="names">
                            <p style={{ fontSize: '20px', fontWeight: 'bolder' }} >Dr Filipa Gasper</p>
                            <p>Cardiology</p>
                        </div>
                    </div>
                    <div className='cardDoc' >
                        <div>

                        </div>
                        <div className="names">
                            <p style={{ fontSize: '20px', fontWeight: 'bolder' }} >Dr Sukhmeet Gorae</p>
                            <p>Neurologial</p>
                        </div>
                    </div>
                    <div className='cardDoc' >
                        <div>

                        </div>
                        <div className="names">
                            <p style={{ fontSize: '20px', fontWeight: 'bolder' }} >Dr Siri Jakocbsson</p>
                            <p>Prediatrics</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* customer reviews */}
            <div className="reviews"  >
                <h1 className='headingR'>What our customers say</h1>


                <div className='reviewBox' >
                    {
                        reviews.map((review) => {
                            return (
                                <div className='reviewCard' key={review.ID}>
                                    <div className="rev">
                                        <p >{review.Reviews}</p>
                                        <h4 style={{ paddingTop: '1rem' }} >{review.Name}</h4>
                                        <p style={{ fontSize: '15px' }} >Patient</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            {/* newletter */}
            <div className="newsletter">
                <h1 className='headingN' >Subscibe to Newsletter</h1>
                <p className='descN' >We have a wide experience in experience design and strategy</p>

                <div className='inpN' >
                    <input className='inpBox' style={{border : 'none',outline:'none'}} type="text" placeholder='Enter your email address' />
                    <button className='inpBtn' >Send Now</button>
                </div>
            </div>

            {/* footer */}
            <div className='footer'>
                <div className='icons'>
                    <img className='icon' src={require('../images/fb.png')} alt="fb" />
                    <img className='icon' src={require('../images/google.png')} alt="google" />
                    <img className='icon' src={require('../images/twitter.png')} alt="twitter" />
                </div>
                <p>©2020 PodPayment - 2020</p>
            </div>
        </div>
    )
}
