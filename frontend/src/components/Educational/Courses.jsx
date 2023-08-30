import image from "../logo.png";
import course from "../assets/course.png";
import dsa from "../assets/education/dsa.png";

import { IoLogInOutline, IoLocationOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import { TbLocation } from "react-icons/tb";
import { useState } from "react";
import { GrLike } from "react-icons/gr";

function Courses() {
	const [selectedItem, setSelectedItem] = useState(null);
	const [isSearchActive, setIsSearchActive] = useState(false);

	const data = ["balcha", "sarbet", "pharma", "tarik"];
	const courses = ["DSA", "CSS", "HTML", "JS"];
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
			<section className='search'>
				<div className='search-container'>
					<h1> What do you want to learn today?</h1>
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
									<a href='nth'>
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
									</a>
								</span>
							)}
							{filteredPlaces.map((value) => (
								<a
									href='nth'
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
								</a>
							))}
						</div>
					)}
					<div
						style={{ fontSize: "20px", textAlign: "start", marginTop: "50px" }}
					>
						Sugesstion{" "}
						<a
							href='/about'
							style={{ marginLeft: "20px", color: "rgb(0, 86, 161)" }}
						>
							learn about us
						</a>
					</div>
				</div>
				<div className='img-container'>
					<img src={course} alt='course' />
				</div>
			</section>
			<section className='part-two'>
				<div className='course-container' id='slider3'>
					<h2>Recommended Courses</h2>
					<div className='course-grid'>
						{recommendedCourses.map((course) => (
							<div className='course-item' key={course.id}>
								<img src={course.image} alt={course.title} />
								<h3>{course.title}</h3>
                <p> Rating : {course.likes} </p>
								<a href={`coursedetail/${course.id}`}>
									<button >View Details</button>
								</a>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Courses;
