import image from "../logo.png";
import student from "../assets/student.png";

import { RiSearch2Line } from "react-icons/ri";
import { IoLogInOutline } from "react-icons/io5";
import { BsArrowRight, BsFillPersonFill } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { VscNotebook } from "react-icons/vsc";
import { SlBadge } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa";

function education() {
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
									color: "rgb(0, 50, 157)",
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
										marginTop: "150px",
                                        marginLeft: '50px',
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
                                        right: '3em',
										marginTop: "5.5em",
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
		</div>
	);
}

export default education;
