import { motion } from 'framer-motion'
import '../css/AboutUs.css'
import TopComponent from './TopComponent'

export default function AboutUs() {
  return (
	<div>
		<TopComponent head={"SCHOOL NEST"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
	<div className="aboutUs container">
		<section className='aboutUs-1'>
			<motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="aboutUs-1-image">
				<img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
			</motion.div>
			<div className="aboutUs-1-info">
				<h1>OUR EXPERTS</h1>
				<span></span>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam rerum quam illum, possimus omnis dolores dicta vero, quo impedit sed modi ab numquam quas dignissimos? Provident odio quae suscipit sed.</p>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit accusantium non blanditiis repudiandae neque veritatis saepe eligendi! Saepe eos aliquam deleniti officia dignissimos. Saepe quis ullam eos unde iusto quae.
				Accusantium quis voluptate quibusdam quasi quaerat earum aliquam, vel, quos blanditiis iusto consequuntur perferendis maxime. Facilis consequatur quibusdam illo ipsam, impedit rem odit magni, atque quas, voluptates sapiente! Sint, deleniti.
				Natus suscipit facilis, fugiat rem tempore saepe adipisci quo. Doloribus ratione, labore dolorum, officiis, fugit eligendi nostrum ut et exercitationem id tempore. Magnam dolorem praesentium nesciunt at repellat! Quam, sequi.
				Laudantium consequatur, in facere hic placeat vero velit voluptatum temporibus ducimus harum totam architecto et saepe necessitatibus quia odio eaque adipisci similique corrupti dolor inventore. Aliquam voluptatem corporis culpa magnam.
				Dicta explicabo, voluptates praesentium velit similique maxime. Cupiditate illo perferendis veritatis mollitia corporis numquam ipsam ratione minus, iusto necessitatibus cum doloribus, nobis nam pariatur ipsa blanditiis consectetur, quas amet praesentium.</p>
				<button>Read More</button>
			</div>
		</section>
	</div>
	</div>
  )
}
