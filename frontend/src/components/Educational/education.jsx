import image from "../logo.png";
import student from "../assets/student.png";
import edu from "../assets/edu.png";

import { RiSearch2Line } from "react-icons/ri";
import {
	IoBookOutline,
	IoLogInOutline,
	IoStarHalfSharp,
} from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";

import {
	BsArrowRight,
	BsFillPersonFill,
	BsStar,
	BsFillPatchQuestionFill,
	BsTwitter,
	BsLinkedin,
	BsInstagram,
	BsFacebook,
	BsWhatsapp,
} from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { VscNotebook } from "react-icons/vsc";
import { SlBadge } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa";
import { IoPlanetSharp } from "react-icons/io5";
import { AiFillExperiment } from "react-icons/ai";

function education() {
	const catagory = [
		{
			icon: <FaGraduationCap />,
			title: "Powerful Programs",
			desc: "Lorem ipsum dolor sit amet consecte adipisicing elit. all the help you can get",
		},
		{
			icon: <IoMdPerson />,
			title: "24/7 Support",
			desc: "Lorem ipsum dolor sit amet consecte adipisicing elit. all the help you can get",
		},
	];

	const services = [
		{
			icon: <BsStar />,
			title: "Plenty departements",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, distinctio pariatur! Itaque fuga voluptates alias tempore doloribus",
		},
		{
			icon: <IoPlanetSharp />,
			title: "Ranging Courses",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, distinctio pariatur! Itaque fuga voluptates alias tempore doloribus",
		},
		{
			icon: <BsFillPatchQuestionFill />,
			title: "Exciting questions",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, distinctio pariatur! Itaque fuga voluptates alias tempore doloribus",
		},
		{
			icon: <AiFillExperiment />,
			title: "Remarkable labs",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, distinctio pariatur! Itaque fuga voluptates alias tempore doloribus",
		},
	];

	const links = [
		{
			name: "Avaliable courses",
			icon: <IoBookOutline />,
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, laborum perferendis unde magnam",
		},
		{
			name: "Course questions",
			icon: <IoStarHalfSharp />,
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, laborum perferendis unde magnam",
		},
	];
	return (
		<div className='education-page'>
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
								<a href='/course'>Courses</a>
							</li>
							<li>
								<a href='/contact'>Contact</a>
							</li>
						</div>
						<li style={{ marginBottom: "10px" }}>
							<div className='search-bar'>
								<button className='search-icon'>
									<RiSearch2Line style={{ color: "white", fontSize: "25px" }} />
								</button>
							</div>
						</li>
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

			<section>
				<div className='home-header'>
					<div className='first-col'>
						<h1>
							<span style={{ color: "rgb(0, 56, 127)" }}>Take your time </span>
							and learn from anywhere
							<GiBookshelf
								style={{
									fontSize: "70px",
									color: "rgb(0, 50, 107)",
									marginLeft: "20px",
								}}
							/>
						</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Pariatur, non. Iusto optio velit deserunt quos dolor? Recusandae
							voluptatibus tempora officiis temporibus soluta laborum qui.
							Voluptat
						</p>
						<a href='/login'>
							<span>
								<h3> Get Started </h3>
								<BsArrowRight
									style={{ fontSize: "20px", marginLeft: "10px" }}
								/>
							</span>
						</a>
					</div>
					<div className='second-col'>
						<div className='first'>
							<div className='image-container'>
								<div className='circle circle-1'></div>
								<div className='circle circle-2'></div>
								<span>
									<VscNotebook
										style={{
											fontSize: "45px",
											backgroundColor: "rgb(56, 87, 133)",
											borderRadius: "50%",
											padding: "8px",
											color: "white",
										}}
									/>
									<div>
										<h4> 300k</h4>
										<p> free Courses </p>
									</div>
								</span>
								<SlBadge
									style={{
										position: "absolute",
										fontSize: "90px",
										marginTop: "-100px",
										zIndex: "5",
										marginLeft: "50px",
										backgroundColor: "white",
										boxShadow: " 0 2px 20px 15px rgba(37, 37, 37, 0.1)",
										borderRadius: "50%",
										padding: "15px",
										color: "rgb(56, 90, 153)",
									}}
								/>
								<img
									src={student}
									alt='first'
									className='custom-border-radius-1'
								/>
								<span className='span'>
									<BsFillPersonFill
										style={{
											fontSize: "45px",
											backgroundColor: "rgb(56, 87, 133)",
											borderRadius: "50%",
											padding: "8px",
											color: "white",
											marginTop: "-70px",
											marginLeft: "-10px",
											marginRight: "-17px",
										}}
									/>
									<div>
										<h4> 120k</h4>
										<p> Active Students </p>
									</div>
								</span>
								<FaGraduationCap
									style={{
										position: "absolute",
										fontSize: "90px",
										right: "3em",
										zIndex: "5",
										marginTop: "2.8em",
										backgroundColor: "white",
										boxShadow: " 0 2px 20px 15px rgba(37, 37, 37, 0.1)",
										borderRadius: "50%",
										padding: "15px",
										color: "rgb(56, 90, 153)",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='section-two'>
				<div className='part-one'>
					{catagory.map((value) => {
						return (
							<div className='card-container'>
								<span>{value.icon}</span>
								<h4> {value.title} </h4>
								<p> {value.desc} </p>
								<button href='/about'>
									<BsArrowRight />
								</button>
							</div>
						);
					})}
				</div>
				<div className='part-two'>
					<h3>
						Our Best Features
						<span style={{ color: "rgb(0, 60, 127)" }}> Special For you </span>
					</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
						quibusdam non consectetur omnis laudantium, praesentium sunt.
					</p>
					<GiBookshelf
						style={{
							fontSize: "70px",
							color: "rgb(0, 50, 107)",
							marginLeft: "10px",
							marginTop: "0",
						}}
					/>
				</div>
			</section>

			<section className='section-three'>
				{services.map((item) => {
					return (
						<div className='card-container'>
							<span
								style={{ fontSize: "45px", color: "rgba(0, 55, 127, 0.863)" }}
							>
								{item.icon}
							</span>
							<h2> {item.title} </h2>
							<p> {item.desc} </p>
						</div>
					);
				})}
			</section>
			<section className='section-four'>
				<div className='part-one'>
					<img src={edu} alt='edu' style={{ width: "60em", height: "55em" }} />
					<div className='content'>
						<h2> Other programs </h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
							ad velit eligendi esse rerum quia pariatur eos facilis, tenetur
							Possimus.
						</p>
					</div>
				</div>
				<div className='part-two'>
					{links.map((value, index) => {
						return (
							<div key={index} className={`card-container card-${index}`}>
								<h2>{value.name}</h2>
								<span>{value.icon}</span>
								<p>{value.desc}</p>
								<button className='course-button' href='/courses'>
									Get courses
								</button>
							</div>
						);
					})}
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
					<span> <BsTwitter /></span>
					<span> <BsLinkedin /></span>
					<span> <BsInstagram /></span>
					<span> <BsFacebook /></span>
					<span> <BsWhatsapp /></span>
				</div>
				<div class='copyright'>
					&copy; Copyright <span>Grace.All Rights Reserved</span>
				</div>
			</footer>
		</div>
	);
}

export default education;
