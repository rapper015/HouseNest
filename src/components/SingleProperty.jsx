import { useLocation } from 'react-router-dom'
import '../css/SingleProperty.css'
import TopComponent from './TopComponent'

export default function SingleProperty() {
	const location=useLocation();
	console.log(location)
  return (
	<div>
		<TopComponent />
		<div className="singleProperty container">
			<div className="singleProperty-media">
				<img src={location.state.photo_main} alt="" />
				<img src={location.state.photo_1} alt="" />
				<img src={location.state.photo_2} alt="" />
				<img src={location.state.photo_3} alt="" />
				<img src={location.state.photo_4} alt="" />
				<img src={location.state.photo_5} alt="" />
				<img src={location.state.photo_6} alt=''/>
 				{/* <iframe src="" frameborder="0"></iframe> */}
			</div>
			<div className="singleProperty-info">
				<h1>{location.state.title}</h1>
				<h3>{location.state.address},{location.state.city},{location.state.state}</h3>
				<h4><img src="" alt=""/>Bedroom:{location.state.bedrooms}</h4>
				<h4><img src="" alt=""/>Bathroom:{location.state.bathrooms}</h4>
				<h4><img src="" alt=""/>House Square Yard:{location.state.houseSquareYard}</h4>
				<h4>Garden: {location.state.gardern?"YES":"NO"} Garage:{location.state.garage?"YES":"NO"}</h4>
				<p>{location.state.description}</p>
				<h1>${location.state.price}</h1>

			</div>
		</div>
	</div>
  )
}
