import { IoLogInOutline } from "react-icons/io5";
import { FaStethoscope } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaSyringeSolid } from "react-icons/lia";
import { GiBrain } from "react-icons/gi";

import image from "../logo.png";
import dep from "../assets/education/depart.jpg";
import dep2 from "../assets/education/dep2.jpeg";
import brain from "../assets/education/brain.png";
import heart from "../assets/education/heart.png";
import lung from "../assets/education/lungs.png";
import uteres from "../assets/education/uteres.png";

function Departement() {
	const customBlobShape = (
		<svg width='0' height='0'>
			<defs>
				<clipPath id='custom-clip-path' transform='scale(5)'>
					<path
						fill='#F2F4F8'
						d='M49.4,-49.1C55.7,-43.1,46.7,-21.5,44.4,-2.3C42.1,17,46.5,33.9,40.2,41.1C33.9,48.2,17,45.5,3.5,42C-9.9,38.4,-19.8,34.1,-30.9,26.9C-42,19.8,-54.4,9.9,-60.8,-6.4C-67.2,-22.7,-67.7,-45.5,-56.6,-51.5C-45.5,-57.5,-22.7,-46.9,-0.6,-46.3C21.5,-45.7,43.1,-55.1,49.4,-49.1Z'
						transform='translate(100 100)'
					/>
				</clipPath>
			</defs>
		</svg>
	);

	const category = [
		{ icon: <GiBrain />, title: "Neurology" },
		{ icon: <FaStethoscope />, title: "Pediatrics" },
		{ icon: <FaUserDoctor />, title: "Dermatology" },
		{ icon: <LiaSyringeSolid />, title: "Anesthesia" },
	];

	const diagnostic = [
		{ icon: <img src={brain} alt='#' />, title: "Cardilogy" },
		{ icon: <img src={lung} alt='#' />, title: "Orthopedic" },
		{ icon: <img src={heart} alt='#' />, title: "Dermatology" },
		{ icon: <img src={uteres} alt='#' />, title: "Anesthesia" },
		{ icon: <img src={uteres} alt='#' />, title: "Anesthesia" },
		{ icon: <img src={uteres} alt='#' />, title: "Anesthesia" },
		{ icon: <img src={uteres} alt='#' />, title: "Anesthesia" },
		{ icon: <img src={uteres} alt='#' />, title: "Anesthesia" },
	];
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
			<section className='sec-two'>
				<div className='part-one'>
					<h1>
						<p style={{ color: "rgb(0, 56, 127)" }}>Wide range of</p>
						Medical departements to join
					</h1>
					<div>
						<div className='image-container'>
							<img src={dep2} alt='first' className='custom-border-radius-1' />
						</div>
						{customBlobShape}
					</div>
				</div>
				<div className='part-two'>
					{category.map((item) => (
						<div className='items'>
							<span
								style={{
									backgroundColor: "rgb(9, 59, 133)",
									boxShadow: "0 0 10px rgba(0, 0, 0, 0.414)",
									border: "6px solid white",
									color: "white",
									borderRadius: "50%",
									fontSize: "40px",
									padding: "15px 20px",
									paddingTop: "20px",
								}}
							>
								{item.icon}
							</span>
							<p style={{ marginTop: "30px" }}> {item.title} </p>
						</div>
					))}
				</div>
			</section>
			<section className='sec-three'>
				<div className='first'>
					<h2>
						World leader <span>in diangnostic</span>
					</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
						quisquam assumenda suscipit laboriosam quod. Deserunt, rerum. Sunt
					</p>
					<button>Choose department</button>
				</div>
				<div className='second'>
					<div className='matrix'>
						{diagnostic.map((value) => (
							<div className='container'>
								{value.icon}
								{value.title}
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Departement;
