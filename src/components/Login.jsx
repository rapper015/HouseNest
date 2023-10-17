import '../css/Login.css'
import TopComponent from './TopComponent'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export default function Login() {
	const navigate=useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	
	const handleSubmit=async(e)=>{
		setLoading(true)
		e.preventDefault()
		const userData = {
			email,
			password,
		};
		axios
			.post("https://studentnest-eb6a68a9526b.herokuapp.com/account/login/",userData)
			.then((response)=>{
				setLoading(false)
				// console.log(response.data.tokens.access);
				localStorage.setItem('access_token',response.data.tokens.access)
				setEmail('');
				setPassword('');
				navigate('/properties');
			})
			.catch((error)=>{
				console.log(error.response.data.error)
				setLoading(false)
			})
	}
  return (
	<div>
		<TopComponent/>
		<div className="login">
		{loading?<ClipLoader className='loader'
		color="#ffffff"
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
		/>:
			<motion.div initial={{opacity:0,y:200}} animate={{opacity:1,y:0}} transition={{type: "spring",stiffness: 70}} className="login-main">
				<img src={logo} alt="" />
				<h1>LOGIN</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" name='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} />
					<input type="password"  name='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
					<button type='submit'>LOGIN</button>
				</form>
				<p>Don't have an Account? <span onClick={()=>navigate('/register')}>Register Now</span></p>
			</motion.div>
}
		</div>
	</div>
  )
}
