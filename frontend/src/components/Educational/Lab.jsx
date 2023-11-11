/* eslint-disable jsx-a11y/anchor-is-valid */
import lab from "../assets/education/lab2.jpeg";
import flask from "../assets/education/flask.png";
import search from "../assets/education/search.jpeg";
import colorflask from "../assets/education/colorflask.png";
import image from "../logo.png";

import {
	BsTwitter,
	BsLinkedin,
	BsInstagram,
	BsFacebook,
	BsWhatsapp,
} from "react-icons/bs";
import { TbLocation } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import brain from "../assets/education/brain.png";
import heart from "../assets/education/heart.png";
import lung from "../assets/education/lungs.png";
import uteres from "../assets/education/uteres.png";
import anest from "../assets/education/scissor.png";
import { FaArrowRight } from "react-icons/fa";

function Lab() {
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
		<div className='labs'>
			<div className='start'>
				<img src={lab} alt='back' className='background-image' />
				<div className='overlay'></div>
				<div className='navbar'>
					<div className='logo'>
						<img src={image} alt='logo' />
						<h1>
							H<span>ealthCology</span>
						</h1>
					</div>
					<ul className='menu'>
						<div className='menu-left'>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>
								<a href='/about'>About</a>
							</li>
							<li>
								<a href='/contact'>Contact us</a>
							</li>
						</div>
					</ul>
				</div>

				<section className='flask'>
					<img src={flask} alt='back' className='flask-image' />
					<div className='first-col'>
						<h1>Monochrome chemicals Lorem ipsum dolor, Lorem ipsum dolor, </h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Pariatur, non. Iusto optio velit deserunt quos dolor? Recusandae
							voluptatibus tempora officiis temporibus soluta laborum qui.
							Voluptat Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Sint fugit asperiores aliquid, amet, deleniti sit cum quis eius
							recusandae magnam nam ducimus reiciendis minima eaque quidem.
							Delectus error maxime quo!
						</p>
						<a href='/login'>
							<span>
								<h3> Get Started </h3>
								<FaArrowRight
									style={{ fontSize: "20px", marginLeft: "10px" }}
								/>
							</span>
						</a>
					</div>
				</section>
			</div>

			<section className='two'>
				<div className='column-left'>
					<h2>
						Lorem ipsum dolor <span> chemical processing</span>
					</h2>
					<div className='row'>
						{diagnostic.slice(0, 3).map((value) => (
							<div className='medical'>
								<img
									src={value.icon}
									alt='#'
									style={{ width: "80px", height: "80px", padding: "10px" }}
								/>
								<p>
									<span>{value.title}</span> Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Quaerat aliquam beatae fugiat
									placeat ullam suscipit cumque! Est doloribus quis maxime
									similique hic
								</p>
							</div>
						))}
					</div>
				</div>
				<div className='column-right'>
					<div className='image-container'>
						<img src={colorflask} alt='color' />
					</div>
				</div>
			</section>

			<section className='three'>
				<img src={search} alt='back' className='background-image' />
				<div className='overlay'></div>
				<div className='content'>
					<h2> Crucial Lab Experiments </h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
						provident quos explicabo! Accusamus totam earum et ducimus laborum.
						Autem quos aperiam provident ratione quibusdam eum fuga quasi sint
						quaerat! Odio.
					</p>
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
							placeholder='Lab experiments'
						/>
					</div>
					{isSearchActive && (
						<div className='search-results'>
							{filteredPlaces.length === 0 && (
								<span>
									<a>
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

export default Lab;
