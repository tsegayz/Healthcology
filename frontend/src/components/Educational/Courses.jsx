import image from "../logo.png";
import image1 from "../assets/education/courseEdu.jpg";
import course from "../assets/education/course.png";
import dsa from "../assets/education/dsa.png";
import { Link } from "react-router-dom";
import { GiMicroscope, GiTestTubes, GiArchiveResearch } from "react-icons/gi";
import { BsPatchQuestion } from "react-icons/bs";
import { IoLogInOutline, IoLocationOutline } from "react-icons/io5";
import { RiSearch2Line, RiApps2Line } from "react-icons/ri";
import { TbLocation } from "react-icons/tb";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";

function Courses() {
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

	const category = [
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
	const footerColumnsData = [
		{
			title: "Column 1",
			links: ["Link 1", "Link 2", "Link 3", "Link 4"],
		},
		{
			title: "Column 2",
			links: ["Link 5", "Link 6", "Link 7", "Link 8"],
		},
		{
			title: "Column 3",
			links: ["Link 9", "Link 10", "Link 11", "Link 12"],
		},
		{
			title: "Column 4",
			links: ["Link 13", "Link 14", "Link 15", "Link 16"],
		},
	];
	return (
		<div className='courses'>
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
			<section className='container'>
				<div className='image-container'>
					<img src={image1} alt='logo' />
				</div>
				<div className='text'>
					<h3> Courses</h3>
					<p> Enquire topics found here look for what you need</p>
				</div>
			</section>

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
			<section className='part-two'>
				<div className='course-container' id='slider3'>
					<div className='course-grid'>
						{recommendedCourses.map((course) => (
							<div className='course-item' key={course.id}>
								<img src={course.image} alt={course.title} />
								<h3>{course.title}</h3>
								<p> Rating : {course.likes} </p>
								<Link to={`coursedetail/${course.id}`}>
									<button>View Details</button>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
			<footer>
				<div className='footer-columns'>
					{footerColumnsData.map((column, index) => (
						<div className='footer-column' key={index}>
							<h4>{column.title}</h4>
							<ul>
								{column.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<a href={column.links}>{link}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<hr className='footer-divider' style={{ margin: "20px 270px" }} />
				<div className='social-icons'>
					<div className='social-icons-row'>
						<div className='copyright-text'>
							© 2023 helthcology Inc. All rights reserved.
						</div>
						<div className='social-icons-right'>
							<Link to='link'>
								<AiOutlineInstagram />
							</Link>
							<Link to='link'>
								<BiLogoFacebook />
							</Link>
							<Link to='link'>
								<BiLogoLinkedin />
							</Link>
							<Link to='link'>
								<BiLogoTwitter />
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Courses;
