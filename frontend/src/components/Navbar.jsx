/* eslint-disable jsx-a11y/anchor-is-valid */
import image from "./logo.png";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { RiSearch2Line } from "react-icons/ri";
import { IoLogInOutline, IoLocationOutline } from "react-icons/io5";
import { TbLocation } from "react-icons/tb";

function NavBar() {
	const [isSearchActive, setIsSearchActive] = useState(false);
	const data = ["balcha", "sarbet", "pharma", "tarik"];
	const history = useHistory();

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
		// Navigate to the location page and pass the selected item's data
		history.push(`/courses/${item._id}`, { itemData: item });
	};
	return (
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
					<div className='search-container'>
						<div className='search-bar'>
							<button className='search-icon'>
								<RiSearch2Line style={{ color: "black", fontSize: "20px" }} />
							</button>
							<input
								className='input-field'
								type='text'
								onFocus={() => setIsSearchActive(true)}
								onBlur={() => setIsSearchActive(false)}
								onChange={filterHandler}
								placeholder='Search hospitals, pharmacy .....'
							/>
						</div>
						<hr
							className={`horizontal-line ${isSearchActive ? "active" : ""}`}
						/>
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
	);
}

export default NavBar;
