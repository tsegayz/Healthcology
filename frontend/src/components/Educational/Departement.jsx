import { IoLogInOutline, IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaUserDoctor, FaXRay } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";
import { Link, useHistory } from "react-router-dom";
import {
	RiApps2Line,
	RiSearch2Line,
	RiNurseLine,
	RiPsychotherapyLine,
} from "react-icons/ri";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import image from "../logo.png";
import dep from "../assets/education/depart.jpg";
import brain from "../assets/education/brain.png";
import heart from "../assets/education/heart.png";
import lung from "../assets/education/lungs.png";
import uteres from "../assets/education/uteres.png";
import anest from "../assets/education/scissor.png";
import { TbLocation } from "react-icons/tb";
import dsa from "../assets/education/dsa.png";

import { useState } from "react";

function Departement() {
	const searchCategory = [
		{
			id: 1,
			icon: <RiApps2Line />,
			name: "All",
		},
		{
			id: 2,
			icon: <FaUserDoctor />,
			name: "Medical doctor",
		},
		{
			id: 3,
			icon: <FaXRay />,
			name: "Radiology",
		},
		{
			id: 4,
			icon: <MdOutlineLocalPharmacy />,
			name: "Pharmacy",
		},
		{
			id: 5,
			icon: <RiNurseLine />,
			name: "Nursing",
		},
		{
			id: 6,
			icon: <TbDental />,
			name: "Dental doctor",
		},
		{
			id: 7,
			icon: <RiPsychotherapyLine />,
			name: "Therapy",
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
	const Courses = [
		{
			id: 1,
			title: "Course title 1",
			image: dsa,
			likes: 4,
			dep: 1,
		},
		{
			id: 2,
			title: "Course title 2",
			image: dsa,
			likes: 4,
			dep: 2,
		},
		{
			id: 3,
			title: "Course title 3",
			image: dsa,
			likes: 4,
			dep: 3,
		},
		{
			id: 4,
			title: "Course title 4",
			image: dsa,
			likes: 4,
			dep: 4,
		},
		{
			id: 5,
			title: "Course title 5",
			image: dsa,
			likes: 3,
			dep: 5,
		},
		{
			id: 6,
			title: "Course title 6",
			image: dsa,
			likes: 3,
			dep: 6,
		},
		{
			id: 7,
			title: "Course title 7",
			image: dsa,
			likes: 3,
			dep: 7,
		},
		{
			id: 8,
			title: "Course title 8",
			image: dsa,
			likes: 3,
			dep: 8,
		},
	];
	const [selectedItem, setSelectedItem] = useState(null);
	const [filteredCourse, setFilteredCourse] = useState(null);
	const [isSearchActive, setIsSearchActive] = useState(false);

	const data = ["balcha", "sarbet", "pharma", "tarik"];
	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const history = useHistory();

	const filterHandler = (e) => {
		const searchWord = e.target.value;

		if (searchWord === "") {
			setFilteredPlaces([]);
		} else {
			setFilteredPlaces(data);
		}
	};
	const handleCourseClick = (course) => {
		history.push(`/course/${course.id}`, { course: course });
	};
	const filterdepartement = (value) => {
		if (value === 1) {
			setFilteredCourse(null);
			setSelectedItem(value);
		} else {
			const filteredCourses = Courses.filter((course) => course.dep === value);
			setFilteredCourse(filteredCourses);
			setSelectedItem(value);
		}
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
							Look for departements
						</span>
						and the choise of your liking
					</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
						non. Iusto optio velit deserunt quos dolor? Recusandae voluptatibus
						tempora officiis temporibus soluta laborum qui. Voluptat
					</p>
					<a href='/courses'>
						<span>
							<h3> Get Started</h3>
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
						<h2>112 </h2> Courses
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
									<Link to='near'>
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
						<div
							className={`category-map ${selectedItem === item.id ? "selected" : ""
							}`}
							key={item.id}
							onClick={() => filterdepartement(item.id)}
						>
							<span>{item.icon}</span>
							<p>{item.name}</p>
						</div>
					))}
				</div>
				<section className='list'>
					<div className='course-container' id='slider3'>
						<div className='course-grid'>
							{filteredCourse === null
								? Courses.map((course) => (
										<div
											className='course-item'
											key={course.id}
											onClick={() => handleCourseClick(course)}
										>
											<img src={course.image} alt={course.title} />
											<h3>{course.title}</h3>
											<p> Rating : {course.likes} </p>
										</div>
								  ))
								: filteredCourse.map((course) => (
										<div
											className='course-item'
											key={course.id}
											onClick={() => handleCourseClick(course)}
										>
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
