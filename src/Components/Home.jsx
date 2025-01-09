import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/Home.css'
export const Home = () => {
    const [alldata, setAlldata] = useState([])

    const fetchdata = async () => {
        const data = await axios.get('https://elearningbackend-v4hk.onrender.com/get/courses')
        setAlldata(data.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div className='homeContainer' >
            <div className='main'>
                <div className='mainText'>
                    <h5>e-Learning Online</h5>
                    <h1>Web Design & Development(Full Stack) </h1>
                    <p>A complete course that covers all of the basics to the advanced level.</p>
                </div>
                <div className=''>
                <form action="">
                    <h2>Enquire Now</h2>
                    <input type="text" placeholder='Enter Applicant Name*' />
                    <input type="number" placeholder='Enter Phone Number*' />
                    <input type="email" placeholder='Enter Email*' />
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select The Mode*</option>
                        <option value="AnnaNagar">CLASSROOM TRAINING @ ANNA NAGAR</option>
                        <option value="Vadapalani">CLASSROOM TRAINING @ VADAPALANI</option>
                        <option value="Velechery">CLASSROOM TRAINING @ VELECHERY</option>
                        <option value="OnlineClass">ONLINE TRAING</option>
                    </select>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select  Course*</option>
                        <option value="WebDesign">Web Design And Development</option>
                        <option value="UIUX">UI/UX</option>
                        <option value="GraphicDesining">Graphic Desining</option>
                        <option value="FlimEditing">Flim Editing</option>
                    </select>
                    <button class="btn btn-primary" type="submit">Submit</button>
                </form>
                </div>
            </div>
            {/* <div className='Hero_Setion'>
                <div className='Hero_Content'>
                    
                </div>
            </div>
            <div className='Enquire_Form'>
                
            </div> */}
            <div className='toolscovered_section'>
                <div className='toolsCovered_text'>
                    <h2>Softwares</h2>
                    <h3>Tools Covered</h3>
                    <h4>We teach industrial standard tools  through  the course</h4>
                </div>
                <div className='toolsCovered_icons'>
                    <div className='toolsIconContainer'>
                        <div className='toolsIconInsideContainer1'>
                            <div className='toolsIcon1'>
                                <div className='toolsIcon '>
                                    
                                </div>
                                <div className='toolsIconText'>
                                    <h3>PhotoShop</h3>
                                </div>
                            </div>
                            <div className='toolsIcon1'>
                                <div className='toolsIcon12'>
                                                
                                </div>
                                <div className='toolsIconText'>
                                    <h3>Figma</h3>
                                </div>
                            </div>
                            <div className='toolsIcon1'>
                                <div className='toolsIcon13 '>
                                    
                                </div>
                                <div className='toolsIconText'>
                                    <h3>Html5</h3>
                                </div>
                            </div>
                            <div className='toolsIcon1'>
                                <div className='toolsIcon14 '>

                                </div>
                                <div className='toolsIconText'>
                                    <h3>css3</h3>
                                </div>
                            </div>
                            <div className='toolsIcon1'>
                                <div className='toolsIcon15 '>

                                </div>
                                <div className='toolsIconText'>
                                    <h3>Bootstrap</h3>
                                </div>
                            </div>
                            <div className='toolsIcon1'>
                                <div className='toolsIcon16 '>

                                </div>
                                <div className='toolsIconText'>
                                    <h3>Javascript</h3>
                                </div>
                            </div>
                        </div>
                        <div className='toolsIconInsideContainer1'>
                            <div className='toolsIcon2'>
                                <div className='toolsIcon21 '>
                                    
                                </div>
                                <div className='toolsIconText'>
                                    <h3>Jquery</h3>
                                </div>
                            </div>
                            <div className='toolsIcon2'>
                                <div className='toolsIcon22'>
                                                
                                </div>
                                <div className='toolsIconText'>
                                    <h3>React</h3>
                                </div>
                            </div>
                            <div className='toolsIcon2'>
                                <div className='toolsIcon23 '>
                                    
                                </div>
                                <div className='toolsIconText'>
                                    <h3>Wordpress</h3>
                                </div>
                            </div>
                            <div className='toolsIcon2'>
                                <div className='toolsIcon24 '>

                                </div>
                                <div className='toolsIconText'>
                                    <h3>Node js</h3>
                                </div>
                            </div>
                            <div className='toolsIcon2'>
                                <div className='toolsIcon25 '>

                                </div>
                                <div className='toolsIconText'>
                                    <h3>Python</h3>
                                </div>
                            </div>
                            

                        </div>
                        <div className='toolsIconInsideContainer1'>
                            <div className='toolsIcon3'>
                                <div className='toolsIcon31 '>
                                        
                                </div>
                                <div className='toolsIconText'>
                                    <h3>Mongo DB</h3>
                                </div>
                            </div>
                            <div className='toolsIcon3'>
                                <div className='toolsIcon32'>

                                </div>
                                <div className='toolsIconText'>
                                    <h3>AWS</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="course_details">
                <h2>Course Details</h2>
            </div>
            <div className="course-list">
                {alldata.map((course, index) => (
                    <div key={index} className="course-card">
                        <div className='course-title-contianer'>
                            <h2 className="course-title">Course Title: {course.title}</h2>
                        </div>
                        <div className='course-description-container'>
                            <p className="course-description "><b>Course Description: </b>{course.description}</p>
                        </div>
                        <div className='course-duration-container'>
                            <p className="course-duration"><b>Duration:</b> {course.duration} hours</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
