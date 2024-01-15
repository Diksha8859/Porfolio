import { useState } from 'react';
import './works.scss'

export default function Works() {
     const [currentSlide,setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nam mollitia quidem, eaque provident iure tenetur in, eligendi vel aspernatur corrupti, maiores ipsa veniam quae distinctio ratione deleniti. Doloremque, nihil.",
      img: "https://imgs.search.brave.com/cWYNw0GyHwdKk7LwbDCQvhlaU2w_81meITJGxw-VNYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nam mollitia quidem, eaque provident iure tenetur in, eligendi vel aspernatur corrupti, maiores ipsa veniam quae distinctio ratione deleniti. Doloremque, nihil.",
      img: "https://imgs.search.brave.com/cWYNw0GyHwdKk7LwbDCQvhlaU2w_81meITJGxw-VNYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Design",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nam mollitia quidem, eaque provident iure tenetur in, eligendi vel aspernatur corrupti, maiores ipsa veniam quae distinctio ratione deleniti. Doloremque, nihil.",
      img: "https://imgs.search.brave.com/cWYNw0GyHwdKk7LwbDCQvhlaU2w_81meITJGxw-VNYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"
    },
  ];

  const handleClick = (way)=> {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d)=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgcontainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src='https://imgs.search.brave.com/IA-a4lUg47kM0FW6vtr7Lz_eIaEWKTc1EHlAv1FFPVg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w' alt="" />
            </div>
          </div>
        </div>))}
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")} />
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=>handleClick()} />
    </div>
  );
}
