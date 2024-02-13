import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/Contact.css'

const Contact = () => {
  const { register, handleSubmit, watch } = useForm()
  const [ check, isCheck ] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleCheck = () => {
    isCheck(!check)
  }

  console.log(watch('message'))

  return (
    <>
      <div className="contactme-container">
        <h1>Contact Me</h1>
          <div className="card-info">
            <div id="address">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
              </svg>
              <p>Address: <i>2341 A-2 Leveriza St, Barangay 32, Pasay City</i></p>
            </div>
            <div id="email">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
              </svg>
              <p>Email: <i>robertabon0414@gmail.com</i></p>
            </div>
            <div id="phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
              </svg>
              <p>Phone No.: <i>09913688280</i></p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-form-container">
              <label>
                Reach me and lets have a Coffee
              </label>
                <textarea type="text" {...register('message')} cols="50" rows="10" />
              <label>
                Check:
                <input type="checkbox" onChange={handleCheck} {...register('isCheck')}/>
              </label>
              <input type="submit" id='submitBtn'/>
            </div>
          </form>
      </div>
    </>
  )
}

export default Contact