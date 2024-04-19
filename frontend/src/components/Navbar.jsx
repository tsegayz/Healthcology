/* eslint-disable jsx-a11y/anchor-is-valid */
import image from "./logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { RiSearch2Line } from "react-icons/ri";
import { IoLogInOutline, IoLocationOutline } from "react-icons/io5";

// import { TbLocation } from "react-icons/tb";
// import useGeoLocation from "./hooks/useGeoLocation";

function NavBar() {
	// const location = useGeoLocation();

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

	useEffect(() => {
		function handleDocumentClick(event) {
			if (!event.target.closest(".search-container")) {
				setIsSearchActive(false);
			}
		}
		document.addEventListener("click", handleDocumentClick);
		return () => {
			document.removeEventListener("click", handleDocumentClick);
		};
	}, []);

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
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
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
								onChange={filterHandler}
								placeholder='Search hospitals, pharmacy .....'
							/>
						</div>
						{isSearchActive && (
							<div className='search-results'>
								{filteredPlaces.length === 0 && (
									<span>
										<Link
											id='nearby-link'
											to='/near'
											style={{ textDecoration: "none" }}
										>
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
											Nearby
											{/* {location.loaded
												? JSON.stringify(location)
												: "location data not avaliable yet"} */}
										</Link>
									</span>
								)}
								{filteredPlaces.map((value) => (
									<div
										className='search-item'
										key={value}
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
											<p>{value}</p>
										</div>
									</div>
								))}
							</div>
						)}
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
	);
}

export default NavBar;
