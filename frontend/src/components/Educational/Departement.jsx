import { IoLogInOutline } from "react-icons/io5";
import image from "../logo.png";
import dep from "../assets/education/depart.jpg";
function Departement() {
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
						and choose of your liking
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
		</div>
	);
}

export default Departement;
