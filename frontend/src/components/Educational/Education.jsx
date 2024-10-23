/* eslint-disable jsx-a11y/anchor-is-valid */
import image from "../logo.png";
import student from "../assets/education/student.png";
import edu from "../assets/education/edu.png";
import { useState } from "react";
import { Link } from "react-router-dom";

import { RiSearch2Line } from "react-icons/ri";
import {
	IoBookOutline,
	IoLogInOutline,
	IoStarHalfSharp,
	IoPlanetSharp,
	IoLocationOutline,
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
	BsPatchQuestion,
	BsQuestionCircleFill,
} from "react-icons/bs";
import { VscNotebook } from "react-icons/vsc";
import { TbLocation } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { FaGraduationCap, FaResearchgate } from "react-icons/fa";
import { AiFillExperiment } from "react-icons/ai";
import { GiBookshelf, GiMicroscope, GiTestTubes, GiArchiveResearch } from "react-icons/gi";
import { SiGitbook } from "react-icons/si";

function Education() {
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

	const offer = [
		{
			icon: <IoMdPerson />,
			title: "lab Exercises",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ad! Possimus, dolorum. Amet debitis aspernatur aliquam temporibus quidem unde asperior",
			link: '/lab'
		},
		{
			icon: <BsQuestionCircleFill />,
			title: "Exam questions",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ad! Possimus, dolorum. Amet debitis aspernatur aliquam temporibus quidem unde asperior",
			link: '/exam'
		},
		{
			icon: <VscNotebook />,
			title: "Course material",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ad! Possimus, dolorum. Amet debitis aspernatur aliquam temporibus quidem unde asperior",
			link: '/courses'
		},
		{
			icon: <FaResearchgate />,
			title: "Researches ",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ad! Possimus, dolorum. Amet debitis aspernatur aliquam temporibus quidem unde asperior",
			link: 'research'
		},
	];

	const [selectedItem, setSelectedItem] = useState(null);
	const [isSearchActive, setIsSearchActive] = useState(false);

	const data = ["balcha", "sarbet", "pharma", "tarik"];

	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const filterHandler = (e) => {
		const searchWord = e.target.value;

		if (searchWord === "") {
			setFilteredPlaces([]);
		} else {
			setFilteredPlaces(data);
		}
	};
	const handleItemClick = (item) => {
		setSelectedItem(item);
	};

	const education = [
		{
			id: 1,
			icon: <SiGitbook />,
			name: "Departements",
			link: "/departements",
		},
		{
			id: 2,
			icon: <GiMicroscope />,
			name: "Courses",
			link: "/courses",
		},
		{
			id: 3,
			icon: <GiTestTubes />,
			name: "Lab experiments",
			link: "/experiments",
		},
		{
			id: 4,
			icon: <BsPatchQuestion />,
			name: "Questions",
			link: "/questions",
		},
		{
			id: 5,
			icon: <GiArchiveResearch />,
			name: "Researches",
			link: "/researches",
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
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
							<li>
								<Link to='/contact'>Contact</Link>
							</li>
						</div>
						<li>
							<Link to='/login'>
								<span>
									<IoLogInOutline style={{ fontSize: "25px" }} /> <p> Login </p>
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className='search-container'>
				<h1> What do you need?</h1>
				<div className='category-container'>
					{education.map((item) => (
						<p
							className={`category-map ${
								selectedItem?.id === item.id ? "selected" : ""
							}`}
							key={item.id}
							onClick={() => handleItemClick(item)}
						>
							<span>{item.icon}</span>
							<p>{item.name}</p>
						</p>
					))}
				</div>
				<div className='search-bar'>
					<button className='search-icon'>
						<RiSearch2Line style={{ color: "black", fontSize: "20px" }} />
					</button>
					<input
						className={`input-field ${isSearchActive ? "active" : ""}`}
						type='text'
						onFocus={() => setIsSearchActive(true)}
						onBlur={() => setIsSearchActive(false)}
						onChange={filterHandler}
						placeholder={selectedItem ? selectedItem.name : "Departements"}
					/>
				</div>
				{isSearchActive && (
					<div className='search-results'>
						{filteredPlaces.length === 0 && (
							<span>
								<Link to='/near'>
									<TbLocation
										style={{
											fontSize: "30px",
											padding: "5px",
											border: "rgb(51, 51, 51) 1px solid",
											borderRadius: "50%",
											color: "black",
											marginRight: "10px",
										}}
									/>
									Nearby
								</Link>
							</span>
						)}
						{filteredPlaces.map((value) => (
							<Link to='/course'
								className='search-item'
								target=''
								key={value._id}
								onClick={() => handleItemClick(value)}
							>
								<div className='result-name'>
									<span>
										<IoLocationOutline
											style={{
												fontSize: "30px",
												padding: "5px",
												border: "rgb(51, 51, 51) 1px solid",
												borderRadius: "50%",
												color: "black",
												marginRight: "10px",
											}}
										/>
									</span>
									<p> {value} </p>
								</div>
							</Link>
						))}
					</div>
				)}
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
						<Link to='/departements'>
							<span>
								<h3> Departements </h3>
								<BsArrowRight
									style={{ fontSize: "26px", marginLeft: "15px" }}
								/>
							</span>
						</Link>
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
											marginTop: "-20px",
											marginLeft: "0px",
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

			<section className='section-five'>
				<h2> What we offer </h2>
				<div className='grid-container'>
					{offer.map((item, index) => {
						return (
							<Link className='offer-item' key={index} to = {item.link}>
								<span> {item.icon} </span>
								<div className='offer'>
									<h3> {item.title} </h3>
									<p> {item.desc} </p>
								</div>
							</Link>
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
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/courses'>Courses</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
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

export default Education;
