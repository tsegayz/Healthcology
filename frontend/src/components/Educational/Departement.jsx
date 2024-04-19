import { IoLogInOutline, IoLocationOutline } from "react-icons/io5";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaStethoscope,
	FaTwitter,
} from "react-icons/fa";
import { BsPatchQuestion } from "react-icons/bs";
import { RiApps2Line, RiSearch2Line } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaSyringeSolid } from "react-icons/lia";
import {
	GiBrain,
	GiMicroscope,
	GiTestTubes,
	GiArchiveResearch,
} from "react-icons/gi";
import image from "../logo.png";
import dep from "../assets/education/depart.jpg";
import dep2 from "../assets/education/dep2.jpeg";
import brain from "../assets/education/brain.png";
import heart from "../assets/education/heart.png";
import lung from "../assets/education/lungs.png";
import uteres from "../assets/education/uteres.png";
import anest from "../assets/education/scissor.png";
import { TbLocation } from "react-icons/tb";
import dsa from "../assets/education/dsa.png";

import { useState } from "react";
import { Link } from "react-router-dom";

function Departement() {
	const customBlobShape = (
		<svg width='0' height='0'>
			<defs>
				<clipPath id='custom-clip-path' transform='scale(5)'>
					<path
						fill='#F2F4F8'
						d='M49.4,-49.1C55.7,-43.1,46.7,-21.5,44.4,-2.3C42.1,17,46.5,33.9,40.2,41.1C33.9,48.2,17,45.5,3.5,42C-9.9,38.4,-19.8,34.1,-30.9,26.9C-42,19.8,-54.4,9.9,-60.8,-6.4C-67.2,-22.7,-67.7,-45.5,-56.6,-51.5C-45.5,-57.5,-22.7,-46.9,-0.6,-46.3C21.5,-45.7,43.1,-55.1,49.4,-49.1Z'
						transform='translate(100 100)'
					/>
				</clipPath>
			</defs>
		</svg>
	);

	const category = [
		{ icon: <GiBrain />, title: "Neurology" },
		{ icon: <FaStethoscope />, title: "Pediatrics" },
		{ icon: <FaUserDoctor />, title: "Dermatology" },
		{ icon: <LiaSyringeSolid />, title: "Anesthesia" },
	];

	const searchCategory = [
		{
			id: 1,
			icon: <RiApps2Line />,
			name: "All",
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
	const diagnostic = [
		{ icon: brain, title: "Neurology" },
		{ icon: lung, title: "pulmonology" },
		{ icon: heart, title: "Cardilogy" },
		{ icon: uteres, title: "Gynecology" },
		{ icon: anest, title: "Orthopedic" },
		{ icon: anest, title: "Scissors" },
		{ icon: anest, title: "Scissors" },
		{ icon: anest, title: "Scissors" },
	];
	const recommendedCourses = [
		{
			id: 1,
			title: "Course 1",
			image: dsa,
			likes: 4,
		},
		{
			id: 2,
			title: "Course 1",
			image: dsa,
			likes: 4,
		},
		{
			id: 3,
			title: "Course 1",
			image: dsa,
			likes: 4,
		},
		{
			id: 4,
			title: "Course 1",
			image: dsa,
			likes: 4,
		},
		{
			id: 5,
			title: "Course 2",
			image: dsa,
			likes: 3,
		},
		{
			id: 6,
			title: "Course 2",
			image: dsa,
			likes: 3,
		},
		{
			id: 7,
			title: "Course 2",
			image: dsa,
			likes: 3,
		},
		{
			id: 8,
			title: "Course 2",
			image: dsa,
			likes: 3,
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
	return (
		<div className='department'>
			<div className='header'>
				<div className='logo'>
					<img src={image} alt='logo' />
					<h1>
						H<span>ealthCology</span>
					</h1>
				</div>
				<a href='/login'>
					<span>
						<IoLogInOutline style={{ fontSize: "25px" }} /> <p> Login </p>
					</span>
				</a>
			</div>
			<section className='sec-one'>
				<div className='first-col'>
					<h1>
						<span style={{ color: "rgb(0, 56, 127)" }}>
							Look for departements{" "}
						</span>
						and the choise of your liking
					</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
						non. Iusto optio velit deserunt quos dolor? Recusandae voluptatibus
						tempora officiis temporibus soluta laborum qui. Voluptat
					</p>
					<a href='/login'>
						<span>
							<h3> Get Started </h3>
						</span>
					</a>
				</div>
				<div className='second-col'>
					<div className='image-container'>
						<img src={dep} alt='first' className='custom-border-radius-1' />
					</div>
				</div>
			</section>
			<div className='category-container'>
				<section className='search'>
					<p>
						<h2>12 </h2> Courses
					</p>
					<div className='search-bar'>
						<input
							className={`input-field ${isSearchActive ? "active" : ""}`}
							type='text'
							onFocus={() => setIsSearchActive(true)}
							onBlur={() => setIsSearchActive(false)}
							onChange={filterHandler}
							placeholder='Search for courses'
						/>
						<button className='search-icon'>
							<RiSearch2Line
								style={{
									color: "white",
									fontSize: "38px",
									padding: "5px",
									borderRadius: "10px",
									backgroundColor: "rgb(0, 58, 109)",
								}}
							/>
						</button>
					</div>
					{isSearchActive && (
						<div className='search-results'>
							{filteredPlaces.length === 0 && (
								<span>
									<Link to='nth'>
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
								<Link
									to='nth'
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
				</section>
				<div className='category'>
					{searchCategory.map((item) => (
						<p
							className={`category-map ${
								selectedItem?.id === item.id ? "selected" : ""
							}`}
							key={item.id}
						>
							<span>{item.icon}</span>
							<p>{item.name}</p>
						</p>
					))}
				</div>
				<section className='list'>
					<div className='course-container' id='slider3'>
						<div className='course-grid'>
							{recommendedCourses.map((course) => (
								<div className='course-item' key={course.id}>
									<img src={course.image} alt={course.title} />
									<h3>{course.title}</h3>
									<p> Rating : {course.likes} </p>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
			<div className='last-section'>
				<div class='dot left'></div>
				<div class='dot right'></div>
				<hr class='horizontal-line' />
				<div className='pillar'>
					{diagnostic.slice(0, 3).map((item) => (
						<div className='container'>
							<div className='small-icon'>
								<img
									src={item.icon}
									alt='#'
									style={{ width: "55px", height: "40px" }}
								/>
							</div>
							<div className='sec'>
								<span> {item.title}</span>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									molestiae totam sed tenetur
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			
			<footer className='footer'>
				<div className='footer-column'>
					<div className='logo'>
						<img src={image} alt='logo' />
						<h1>
							H<span>ealthCology</span>
						</h1>
					</div>
					<div className='social-media'>
						<FaFacebook className='icons' />
						<FaTwitter className='icons' />
						<FaInstagram className='icons' />
						<FaLinkedin className='icons' />
					</div>
				</div>
				<div className='footer-column'>
					<ul className='footer-links'>
						<li>
							<a href='link'>Link 1</a>
						</li>
						<li>
							<a href='link'>Link 2</a>
						</li>
						<li>
							<a href='link'>Link 3</a>
						</li>
						<li>
							<a href='link'>Link 4</a>
						</li>
						<li>
							<a href='link'>Link 5</a>
						</li>
					</ul>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
						necessitatibus recusandae rerum dolorum quo cumque! Soluta cumque
						enim eos, nesciunt dolorum odit eius assumenda quibusdam quasi autem
						quas at deserunt.
					</p>
				</div>
				<div className='footer-column'>
					<div className='input-container'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatum accusantium dicta
						</p>
						<input type='text' placeholder='Your message ...' />
						<button type='submit'>Submit</button>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Departement;
