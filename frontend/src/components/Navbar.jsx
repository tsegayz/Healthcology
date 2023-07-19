import image from './logo.png'
function NavBar() {
	return (
		<div className='navbar'>
			<div className='logo'>
                    <img src={image} alt='logo'/>
					<h1> H<span>ealthCology</span></h1>
			</div>
			<div>
				<ul className='menu'>
					<div className='menu-left'>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/trips'>About</a>
						</li>
                        <li>
							<a href='/trips'>Contact</a>
						</li>
					</div>
					<li>
						<a href='/login'>
							<span> Login </span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
