import React from "react";
import image from "./logo.png";
import back from "./assets/about.jpg";

import { IoLogInOutline, IoPersonCircleOutline } from "react-icons/io5";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { TbMicroscope } from "react-icons/tb";

function About() {
	const services = [
		{ icon: <IoPersonCircleOutline />, title: "Research" },
		{ icon: <BsFillPatchQuestionFill />, title: "Questions" },
		{ icon: <TbMicroscope />, title: "Courses" },
	];

	return (
		<div className='about-page'>
			<div className='background'>
				<img src={back} alt='about' />
			</div>
			<div className='navbar'>
				<div className='logo'>
					<img src={image} alt='logo' />
					<h1>
						H<span>ealthCology</span>
					</h1>
				</div>
				<div>
					<ul className='menu'>
						<div className='menu-left'>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>
								<a href='/about'>About</a>
							</li>
							<li>
								<a href='/contact'>Contact</a>
							</li>
						</div>
						<li>
							<a href='/login'>
								<span>
									<IoLogInOutline style={{ fontSize: "25px" }} /> <p> Login </p>
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='content'>
				<h1> Welcome! </h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vero
					labore optio neque!v Lorem ipsum dolor sit amet consectetur
					consequuntur impedit. 
				</p>
				<div className='list'>
					{services.map((item) => (
						<div className='container'>
							<span style={{fontSize:'40px'}}> {item.icon} </span>
							<p> {item.title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default About;
