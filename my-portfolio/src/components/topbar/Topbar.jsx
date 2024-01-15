import './topbar.scss'
import { Person, Mail } from '@mui/icons-material';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
       <div className='wrapper'>
         <div className="left">
           <a href='#intro' className='logo' >Diksha.</a>
           <div className='itemContainer'> 
            <Person /> 
            <span>+91 8825258079</span>
           </div>
           <div className='itemContainer'>
            <Mail /> 
            <span>diksha2021128@gmail.com</span>
           </div>
         </div>
        
         <div className="right">
           <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
           </div>
         </div>
       </div>
        </div>
  )
}
