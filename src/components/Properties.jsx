import '../css/Properties.css'
import TopComponent from './TopComponent'
import location from '../assets/location.svg'
import heart from '../assets/heart.svg'
import tub from '../assets/tub.svg'
import bed from '../assets/bed.svg'
import measure from '../assets/measure.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom'


export default function Properties() {
	const navigate=useNavigate();
	const [data,setData]=useState();
	const [loading,setLoading]=useState(false);
	const [accessToken,setAccessToken]=useState("");
	useEffect(()=>{
		setLoading(true)
		setAccessToken(localStorage.getItem("access_token"))
		axios
			.get("https://studentnest-eb6a68a9526b.herokuapp.com/listing/get-listing/",{
				headers: {
				'Authorization':`Bearer ${accessToken}`
				}
			})
			.then((response)=>{
				setData(response.data);
				setLoading(false)
			})
			.catch((error)=>{
				console.log(error.response.data)
				setLoading(false)
			})
	},[accessToken])
  return (
	<div>
	<TopComponent head={"PROPERTIES"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
	<div className="properties container">
		{loading?<ClipLoader className='loader'
		color="#000000"
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
		/>:data && data.map((data)=>{
			return(
		<motion.div initial="hidden"
		whileInView="visible"
		viewport={{ once: true }}
		transition={{ duration: 0.3 }}
		variants={{
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.7 }
		}} key={data.id} className="properties-main" onClick={()=>navigate('/property',{state:data})}>
			<div  className="properties-main-top">
				<img src={data.photo_main} alt="" />
				<div className="properties-main-top-info">
					<h3>${data.price}</h3>
					<p><img src={location} alt=""/>{data.address},{data.city}</p>
				</div>
			</div>
			<div className="properties-main-bottom">
				<div className="properties-main-bottom-fav">
					<img src={heart} alt="" />
				</div>
				<div className="properties-main-bottom-info">
					<p>{data.title},{data.state}</p>
					<span></span>
					<div className="properties-main-bottom-info-main">
						<div className="properties-main-bottom-info-main-left">
							<div className="properties-main-bottom-info-main-box">
								<img src={tub} alt="" />
								<p>{data.bathrooms}</p>
							</div>
							<div className="properties-main-bottom-info-main-box">
								<img src={bed} alt="" />
								<p>{data.bedrooms}</p>
							</div>
						</div>
						<div className="properties-main-bottom-info-main-right">
									<img src={measure} alt="" />
									<p>{data.houseSquareYard} sqyd</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
			)
		})}
		
	</div>
	</div>
  )
}
