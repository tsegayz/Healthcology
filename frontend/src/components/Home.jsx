import first from "./assets/first.jpeg";
import second from "./assets/second.jpeg";
import back from "./assets/back.jpeg";

import { BsArrowRight } from "react-icons/bs";
import NavBar from "./Navbar";

function Home() {
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

			<div className='main-content'></div>
			<div className='footer'></div>
		</div>
	);
}

export default Home;
