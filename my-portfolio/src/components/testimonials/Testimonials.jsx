import './testimonials.scss'

export default function Testimonials() {
 const data = [
  {
    id: "1",
    name: "Diksha",
    title: "Senior Developer",
    img: "assets/diksha.jpeg",
    icon: "assets/youtubepng.png",
    desc: "Lorem ",
  },
  {
    id: "2",
    name: "Ujjwal",
    title: "Senior Developer",
    img: "assets/diksha.jpeg",
    icon: "assets/youtubepng.png",
    desc: "Lorem ",
    featured: true,
  },
  {
    id: "3",
    name: "Harsh",
    title: "Senior Developer",
    img: "assets/diksha.jpeg",
    icon: "assets/youtubepng.png",
    desc: "Lorem ",
  },
];
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img  src='assets/right-arrow.png' className='left' alt=''/>
            <img className = "user" src={d.img} alt=''/>
            <img  src={d.icon} alt='' className='right'/>
          </div>
          <div className="center">{d.desc} </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div> ))}
      </div>
    </div>
  )
}
