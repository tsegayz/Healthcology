import { IoLogInOutline } from "react-icons/io5";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaStethoscope,
	FaTwitter,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaSyringeSolid } from "react-icons/lia";
import { GiBrain } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { HiPlusSm } from "react-icons/hi";

import image from "../logo.png";
import dep from "../assets/education/depart.jpg";
import dep2 from "../assets/education/dep2.jpeg";
import brain from "../assets/education/brain.png";
import heart from "../assets/education/heart.png";
import lung from "../assets/education/lungs.png";
import uteres from "../assets/education/uteres.png";
import anest from "../assets/education/scissor.png";
import medic from "../assets/education/medic.jpeg";
import back from "../assets/education/depb.png";

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
		{ icon: brain, title: "Neurology" },
		{ icon: lung, title: "pulmonology" },
		{ icon: heart, title: "Cardilogy" },
		{ icon: uteres, title: "Gynecology" },
		{ icon: anest, title: "Orthopedic" },
		{ icon: anest, title: "Scissors" },
		{ icon: anest, title: "Scissors" },
		{ icon: anest, title: "Scissors" },
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
									backgroundColor: "rgb(5, 39, 88)",
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
						{diagnostic.map((value, index) => (
							<div className='container' key={index}>
								<img
									src={value.icon}
									alt='#'
									style={{ height: "90px", width: "6.5em" }} // Adjust the width and height as needed
								/>
								{value.title}
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='sec-four'>
				<div className='part-one'>
					<p> Chosen fields </p>
					<h2> Best Fields For Medical students </h2>
				</div>
				<div className='part-two'>
					<img src={medic} alt='medic' />
					<div className='container'>
						{diagnostic.slice(0, 6).map((value) => (
							<div className='medical'>
								<img
									src={value.icon}
									alt='#'
									style={{ width: "120px", height: "120px" }}
								/>
								{value.title} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aperiam iste eaque nobis obcaecati sunt enim optio a harum. Sit delectus eaque voluptatibus. Numquam similique ad deserunt iure dolore necessitatibus!
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='last'>
				<div className='part-one'>
					<section className='one'>
						<img
							src={back}
							alt='back'
							style={{
								position: "absolute",
								zIndex: "1",
								height: "47em",
								width: "87em",
								marginLeft: "35em",
								marginTop: "-6em",
							}}
						/>
						<div className='circle'>
							<HiPlusSm
								style={{
									fontSize: "63px",
									color: "white",
									position: "relative",
									left: "72%",
									top: "23px",
									zIndex: "9999",
									transform: "translate(-50%, -50%)",
								}}
							/>
							<AiFillHeart
								style={{
									fontSize: "80px",
									marginTop: "10px",
									color: "rgb(88, 144, 223)",
								}}
							/>
						</div>
						<div className='text'>
							<h4>
								MEDICAL <span> INFOGRAPHIC </span>
							</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. odio?
								In nemo sapiente ipsa?
							</p>
						</div>
					</section>
					<section className='two'>
						{diagnostic.slice(0, 6).map((item, index) => (
							<div className={`container item-${index}`} key={index}>
								<div className='small-icon'>
									<img
										src={item.icon}
										alt='#'
										style={{ width: "70px", height: "55px" }}
									/>
								</div>
								<div className='sec'>
									<span> {item.title}</span>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										molestiae totam sed tenetur
									</p>
								</div>
							</div>
						))}
					</section>
				</div>

				<div className='part-two'>
					<div class='dot left'></div>
					<div class='dot right'></div>
					<hr class='horizontal-line' />
					<div className='pillar'>
						{diagnostic.slice(0, 3).map((item) => (
							<div className='container'>
								<div className='small-icon'>
									<img
										src={item.icon}
										alt='#'
										style={{ width: "55px", height: "40px" }}
									/>
								</div>
								<div className='sec'>
									<span> {item.title}</span>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										molestiae totam sed tenetur
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<footer className='footer'>
				<div className='footer-column'>
					<div className='logo'>
						<img src={image} alt='logo' />
						<h1>
							H<span>ealthCology</span>
						</h1>
					</div>
					<div className='social-media'>
						<FaFacebook className='icons' />
						<FaTwitter className='icons' />
						<FaInstagram className='icons' />
						<FaLinkedin className='icons' />
					</div>
				</div>
				<div className='footer-column'>
					<ul className='footer-links'>
						<li>
							<a href='link'>Link 1</a>
						</li>
						<li>
							<a href='link'>Link 2</a>
						</li>
						<li>
							<a href='link'>Link 3</a>
						</li>
						<li>
							<a href='link'>Link 4</a>
						</li>
						<li>
							<a href='link'>Link 5</a>
						</li>
					</ul>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
						necessitatibus recusandae rerum dolorum quo cumque! Soluta cumque
						enim eos, nesciunt dolorum odit eius assumenda quibusdam quasi autem
						quas at deserunt.
					</p>
				</div>
				<div className='footer-column'>
					<div className='input-container'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatum accusantium dicta
						</p>
						<input type='text' placeholder='Your message ...' />
						<button type='submit'>Submit</button>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Departement;
