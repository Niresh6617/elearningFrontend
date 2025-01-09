  import React from 'react'
  import { useEffect,useState } from 'react'
  import axios from 'axios'
  import { Form } from '../Components/Form'
  import { Signup } from './Signup'
import { Home } from './Home'

  export const View = () => {
      const [alldata, setAlldata] = useState([])
      const [particulardata, setParticulardata] = useState(null)

      const fetchdata = async () => {
          const data = await axios.get('https://elearningbackend-v4hk.onrender.com/get/courses')
          setAlldata(data.data)
      }
      useEffect(() => {
          fetchdata()
      }, [])
      
      const deletedata = async (id) => {
          await axios.delete(`https://elearningbackend-v4hk.onrender.com/delete/course/${id}`)
          fetchdata()
      }

      const editdata = (course) => {
          setParticulardata(course)
      }

    return (
      <div>
        <Form particulardata={particulardata} onreload={() => { setParticulardata(null); fetchdata() }}
        />
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
