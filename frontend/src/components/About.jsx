import React from "react";
import image from "./logo.png";
import back from "./assets/about.jpg";

import { IoLogInOutline, IoPersonCircleOutline } from "react-icons/io5";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { TbMicroscope } from "react-icons/tb";
import { LiaFlaskSolid } from "react-icons/lia";
import { FaBookOpenReader } from "react-icons/fa6";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineArrowPath } from "react-icons/hi2";
import {
	BsTwitter,
	BsLinkedin,
	BsInstagram,
	BsFacebook,
	BsWhatsapp,
} from "react-icons/bs";

function About() {
	const services = [
		{ icon: <IoPersonCircleOutline />, title: "Research" },
		{ icon: <BsFillPatchQuestionFill />, title: "Questions" },
		{ icon: <TbMicroscope />, title: "Courses" },
		{ icon: <LiaFlaskSolid />, title: "labs" },
		{ icon: <FaBookOpenReader />, title: "Departement" },
		{ icon: <BiSearchAlt />, title: "Search" },
		{ icon: <HiOutlineArrowPath />, title: "Path" },
	];

	const desc = [
		{
			number: "120",
			title: "Courses",
			descr:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vero labore optio neque!v Lorem ipsum dolor sit amet consectetur",
		},
		{
			number: "20",
			title: "Departements",
			descr:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vero labore optio neque!v Lorem ipsum dolor sit amet consectetur",
		},
		{
			number: "200",
			title: "Questions",
			descr:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vero labore optio neque!v Lorem ipsum dolor sit amet consectetur",
		},
		{
			number: "50",
			title: "Research",
			descr:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vero labore optio neque!v Lorem ipsum dolor sit amet consectetur",
		},
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
					{services.slice(0, 3).map((item) => (
						<div className='container'>
							<span style={{ fontSize: "40px" }}> {item.icon} </span>
							<p> {item.title}</p>
						</div>
					))}
				</div>
			</div>
			<section className='first'>
				<div className='top'>
					<h1> OUR SERVICES </h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. quod quos
						voluptas neque pariatur?
					</p>
				</div>
				<div className='services'>
					{services.slice(3, 7).map((item) => (
						<div className='item'>
							<span style={{ fontSize: "40px" }}> {item.icon} </span>
							<p> {item.title} </p>
						</div>
					))}
				</div>
				<div className='description'>
					<h3> Services </h3>
					<h2>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
						fugiat explicabo recusandae, maxime veritatis quia, suscipit
					</h2>
					<div className="detail">
						{desc.map( (item) => (
							<div className="row">
								<div className="col">
									<h1> {item.number} </h1>
									<span> {item.title} </span>
								</div>
								<p> {item.descr} </p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="second">
				<div className="one">
					 <h1> 7 </h1> 
					 <h2> years of Experience </h2>
				</div>
				<div className="two">
					{desc.slice(0,3).map((value)=> (
						<div className="items">
							<h2> {value.number} </h2> 
							<h3> {value.title} </h3> 
						</div>
					))}
				</div>
			</section>
			<footer>
				<div className='logo'>
					<img src={image} alt='logo' />
					<h1>
						H<span>ealthCology</span>
					</h1>
				</div>
				<div className='menu-left'>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/about'>About</a>
					</li>
					<li>
						<a href='/course'>Courses</a>
					</li>
					<li>
						<a href='/contact'>Contact</a>
					</li>
				</div>
				<div className='socials'>
					<span>
						<BsTwitter />
					</span>
					<span>
						<BsLinkedin />
					</span>
					<span>
						<BsInstagram />
					</span>
					<span>
						<BsFacebook />
					</span>
					<span>
						<BsWhatsapp />
					</span>
				</div>
				<div class='copyright'>
					&copy; Copyright <span>Grace.All Rights Reserved</span>
				</div>
			</footer>
		</div>
	);
}

export default About;
