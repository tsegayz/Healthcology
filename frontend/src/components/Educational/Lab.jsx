import lab from "../assets/education/lab2.jpeg";
import flask from "../assets/education/flask.png";
import image from "../logo.png";
import { FaArrowRight } from "react-icons/fa";

function Lab() {
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

			<section className='two'></section>
		</div>
	);
}

export default Lab;
