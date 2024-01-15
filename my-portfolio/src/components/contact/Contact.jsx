import './contact.scss'
import { useState } from 'react';
import { YouTube, LinkedIn,Person, Mail } from '@mui/icons-material';

export default function Contact() {
  const [message,setMessage] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
     <div className="left">
     <div className='itemContainer'> 
            <Person /> 
            <span>+91 8825258079</span>
           </div>
           <div className='itemContainer'>
            <Mail /> 
            <span>diksha2021128@gmail.com</span>
           </div>
           <div className='itemContainer'>
            <LinkedIn /> 
            <span><a href='https://www.linkedin.com/in/diksha-shashwat-a054ba228/'>LinkedIn</a></span>
           </div>
           <div className='itemContainer'>
            <YouTube /> 
            <span><a>?YouTube</a></span>
           </div>
     </div>
     <div className="right">
      <h2>CONTACT</h2>
      <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Email'/>
        <textarea placeholder='Message'></textarea>
        <button type='submit'>Send</button>
        {message && <span>Thanks, I'll reply ASAP</span>}
      </form>
      </div> 
    </div>
  )
}
