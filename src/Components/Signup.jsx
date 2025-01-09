import React, { useState } from 'react'
import '../Styles/Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const datapass = async (e) => {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }
    try {
      const createuser = await createUserWithEmailAndPassword(auth, email, password)
      console.log(createuser)
      navigate('/login')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={datapass}>
        <h2>Sign-Up</h2>
        {error && <p className='error-message'>{error}</p>}
        <input 
          type='text' 
          placeholder='Enter your email address' 
          onChange={(event) => setEmail(event.target.value)} 
        />
        <input 
          type='password' 
          placeholder='Enter your password' 
          onChange={(event) => setPassword(event.target.value)} 
        />
        <input type="submit" value="Signup" />  
        <Link to="/login">Already have an account? Login</Link>
      </form>
    </div>
  )
}
