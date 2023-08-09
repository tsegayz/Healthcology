import { useState } from "react";

import first from "./assets/home/first.jpeg";
import second from "./assets/home/second.jpeg";
import back from "./assets/home/back.jpeg";
import image from "./logo.png";
import lab from "./assets/home/pharma.jpg";
import medica from "./assets/home/medica.jpg";

import { BsArrowRight, BsPatchQuestion } from "react-icons/bs";
import {
	GiMicroscope,
	GiStethoscope,
	GiMedicinePills,
	GiTestTubes,
	GiArchiveResearch,
} from "react-icons/gi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { SiGitbook, SiWpexplorer } from "react-icons/si";
import NavBar from "./Navbar";

import dep from "./assets/home/dep.jpeg";
import dep1 from "./assets/home/dep1.png";
import cour from "./assets/home/cour.png";
import cour1 from "./assets/home/cour1.jpeg";
import lab1 from "./assets/home/lab.jpeg";
import lab2 from "./assets/home/lab1.jpeg";
import ques from "./assets/home/ques.jpeg";
import ques1 from "./assets/home/ques1.png";
import res from "./assets/home/research.jpeg";
import res1 from "./assets/home/research1.jpeg";

function Home({ footer }) {
	const services = [
		{
			icon: <GiMicroscope />,
			title: "Learning page",
			link: "./education",
			desc: "Login/Signup as a student and exploit all the benefits you encounter",
		},
		{
			icon: <FaClockRotateLeft />,
			title: "Access near",
			link: "./near",
			desc: "Login/Signup as a normal user and access search for the nearby hospitals and pharmacy",
		},
		{
			icon: <SiWpexplorer />,
			title: "Explore about us",
			link: "./about",
			desc: "Any questions? Then find out more about us on our page ",
		},
	];
	const selection = [
		{
			icon: <GiStethoscope />,
			title: "Hospital",
			desc: "look for the hospital/ health care institution and the services they provide",
		},
		{
			icon: <GiMedicinePills />,
			title: "Pharmacy",
			desc: "look for the pharmacies and the services they provide in a convenient way as possible",
		},
	];

	const education = [
		{
			id: 1,
			icon: <SiGitbook />,
			name: "Departements",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum consequatur sequi soluta sunt maxime deserunt, blanditiis eaque non quod ex accusamus voluptatem praesentium, recusandae voluptas.",
			image1: dep,
			image2: dep1,
		},
		{
			id: 2,
			icon: <GiMicroscope />,
			name: "Courses",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum consequatur sequi soluta sunt maxime deserunt, blanditiis eaque non quod ex accusamus voluptatem praesentium, recusandae voluptas.",
			image1: cour,
			image2: cour1,
		},
		{
			id: 3,
			icon: <GiTestTubes />,
			name: "Lab experiments",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum consequatur sequi soluta sunt maxime deserunt, blanditiis eaque non quod ex accusamus voluptatem praesentium, recusandae voluptas.",
			image1: lab1,
			image2: lab2,
		},
		{
			id: 4,
			icon: <BsPatchQuestion />,
			name: "Questions",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum consequatur sequi soluta sunt maxime deserunt, blanditiis eaque non quod ex accusamus voluptatem praesentium, recusandae voluptas.",
			image1: ques,
			image2: ques1,
		},
		{
			id: 5,
			icon: <GiArchiveResearch />,
			name: "Researches",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum consequatur sequi soluta sunt maxime deserunt, blanditiis eaque non quod ex accusamus voluptatem praesentium, recusandae voluptas.",
			image1: res,
			image2: res1,
		},
	];
	const [selectedItem, setSelectedItem] = useState(education[0]); // Set the first item as default

	const handleItemClick = (item) => {
		setSelectedItem(item);
	};

	return (
		<div className='home'>
			<div className='start'>
				<img src={back} alt='back' className='background-image' />
				<div className='overlay'></div>
				<NavBar />
				<div className='home-header'>
					<div className='first-col'>
						<h1> A Place Where your problems are solved. </h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Pariatur, non. Iusto optio velit deserunt quos dolor? Recusandae
							voluptatibus tempora officiis temporibus soluta laborum qui.
							Voluptat
						</p>
						<a href='/login'>
							<span>
								<h3> Get Started </h3>{" "}
								<BsArrowRight
									style={{ fontSize: "20px", marginLeft: "10px" }}
								/>{" "}
							</span>
						</a>
					</div>
					<div className='second-col'>
						<div className='first'>
							<div className='image-container'>
								<img
									src={first}
									alt='first'
									className='custom-border-radius-1'
								/>
							</div>
						</div>
						<div className='second'>
							<div className='image-container-sec'>
								<img
									src={second}
									alt='second'
									className='custom-border-radius-2'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='main-content'>
				<div className='services'>
					{services.map((value) => {
						return (
							<a href={value.link}>
								<div className='list-container'>
									<div className='icon-container'> {value.icon}</div>
									<h2> {value.title} </h2>
									<p> {value.desc} </p>
								</div>
							</a>
						);
					})}
				</div>
				<section className='section-two'>
					<div class='part-one'>
						<div class='image-container'>
							<img src={lab} alt='medica' />
						</div>
						<div class='image-container-two'>
							<img src={medica} alt='medica' />
						</div>
					</div>
					<div className='part-two'>
						<p className='first-para'> easy access </p>
						<h3>Reliable and fast acces to nearby healthcare centers.</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
							reiciendis perspiciatis rerum maxime veniam, libero consequuntur
							debitis accusamus, nihil ipsa a possimus aperiam? Enim cum esse
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
							magni dolore vel pariatur culpa magnam asperiores aliquid corporis
							fugit laborum aspernatur sapiente cum voluptas perspiciatis, iste
						</p>
						<div className='services-item'>
							{selection.map((value) => {
								return (
									<div className='item-container'>
										<div className='icon-container'> {value.icon}</div>
										<h2> {value.title} </h2>
										<p> {value.desc} </p>
									</div>
								);
							})}
						</div>
					</div>
				</section>
				<section className='section-three'>
					<p> what are the benefits of joining </p>
					<h2> High quality Educational & Labratory experience </h2>
					<div className='education'>
						{education.map((value, index) => {
							const isSelected = selectedItem && selectedItem.id === value.id;
							const containerClasses = `education-container ${
								isSelected ? "selected" : ""
							}`;
							return (
								<div
									className={containerClasses}
									key={value.id}
									onClick={() => handleItemClick(value)}
								>
									<p className='icon'>{value.icon}</p>
									<h5 className='name'>{value.name}</h5>
								</div>
							);
						})}
					</div>
					<div className='part-two'>
						<div className='first-col'>
							{selectedItem && (
								<>
									<h3> {selectedItem.name} </h3>
									<p> {selectedItem.description} </p>
									<a href='/login'>
										<span>
											<h3> Get Started </h3>
											<BsArrowRight
												style={{ fontSize: "55px", marginLeft: "10px" }}
											/>{" "}
										</span>
									</a>
								</>
							)}
						</div>
						<div className='second-col'>
							{selectedItem && (
								<div className='container'>
									<div className='cont-one'>
										<img src={selectedItem.image2} alt={selectedItem.name} />
									</div>
									<div className='cont-two'>
										<img src={selectedItem.image1} alt={selectedItem.name} />
									</div>
								</div>
							)}
						</div>
					</div>
				</section>
			</div>

			<div className='footer'>
				<img src={back} alt='back' className='footer-back' />
				<div className='logo-bottom'>
					<div className='logo-one'>
						<div className='logo-bottom-one'>
							<img src={image} alt='logo' />
							<h1>
								H<span>ealthCology</span>
							</h1>
						</div>
						<div className='input-container'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatum accusantium dicta
							</p>
							<input type='text' placeholder='Your message ...' />
							<button type='submit'>Submit</button>
						</div>
					</div>
					{footer.map((value, key) => {
						return (
							<div key={value.id} className='mapped'>
								<h6> {value.title} </h6>
								<p> {value.list}</p>
								<p> {value.listT}</p>
								<p> {value.listTh}</p>
								<p> {value.listF}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
