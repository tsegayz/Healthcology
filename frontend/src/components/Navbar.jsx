import image from "./logo.png";
import { RiSearch2Line } from "react-icons/ri";
import { IoLogInOutline } from "react-icons/io5";

function NavBar() {
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
					<li>
						<div className='search-bar'>
							<input
								className='input-field'
								type='text'
								placeholder='Search .....'
							/>
							<button className='search-icon'>
								<RiSearch2Line style={{ color: "white", fontSize: "25px" }} />
							</button>
						</div>
					</li>
					<li>
						<a href='/login'>
							<span> <IoLogInOutline style={{ fontSize: "25px"}}/> <p> Login </p></span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
