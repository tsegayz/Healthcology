import { IoLogInOutline } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";
import image from "./logo.png";
import login from "./assets/login.png";
import { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

function SignUp() {
	const history = useHistory();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [isValid, setIsValid] = useState(true);

	const handlePasswordChange = (event) => {
		const { id, value } = event.target;
		if (id === "password-input") {
			setPassword(value);
		} else if (id === "confirm-password") {
			setConfirmPassword(value);
		}
	};

	const validatePasswordMatch = () => {
		setIsValid(password === confirmPassword);
	};

	const handleChange = (event) => {
		setEmail(event.target.value);
		setIsValidEmail(validateEmail(event.target.value));
	};

	function validateEmail(email) {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	const submit = async (e) => {
		e.preventDefault();

		if (!name || !email || !password || !confirmPassword) {
			setResponseMessage("Please fill in all the fields");
			return;
		}
		if (password !== confirmPassword) {
			setResponseMessage("Password and confirm password do not match!");
			return;
		}

		try {
			// const response = await axios.post(
			// 	"http://localhost:5000/api/v1/users/signup",
			// 	{
			// 		name,
			// 		email,
			// 		password,
			// 		passwordConfirm,
			// 	}
			// );
			// const userData = response.data.data.user;
			// const token = response.data.token; // Extract the JWT token from the response
			// localStorage.setItem("token", token); // Store the token in local storage
			// localStorage.setItem("user", JSON.stringify(userData));
			// setResponseMessage(response.data.status);
			// setShowModal(true);
		} catch (error) {
			setResponseMessage("An error occurred");
		}
	};

	const closeModal = () => {
		setShowModal(false);
		history.push(`/`);
	};
	return (
		<div className='login-page'>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${login})` }}
			></div>
			<div className='header'>
				<div className='logo'>
					<img src={image} alt='logo' />
					<h1>
						H<span>ealthCology</span>
					</h1>
				</div>
				<Link to='/login'>
					<span>
						<IoLogInOutline style={{ fontSize: "23px", paddingRight: "4px" }} />{" "}
						<p> Log In </p>
					</span>
				</Link>
			</div>

			<div className='login sign'>
				<section className='part-two'>
					<div className='content'>
						<h1>Sign Up</h1>
						<form className='form' onSubmit={submit}>
							<div className='user-input-container'>
								<input
									id='text'
									type='text'
									autoComplete='off'
									placeholder='Username'
								/>
								<label htmlFor='text'>Username</label>
							</div>

							<div className='email-input-container'>
								<input
									id='email'
									type='email'
									value={email}
									onChange={handleChange}
									autoComplete='off'
									placeholder='Email'
								/>
								<label htmlFor='email' className={email ? "active" : ""}>
									Email
								</label>
								{isValidEmail ? null : <p className='error'>Invalid!</p>}
							</div>
							<div className='password-input-container'>
								<input
									id='password-input'
									type='password'
									value={password}
									onChange={handlePasswordChange}
									placeholder='Password'
								/>
								<label htmlFor='password-input'>Password</label>
							</div>

							<div className='password-input-container'>
								<input
									id='confirm-password'
									type='password'
									value={confirmPassword}
									onChange={handlePasswordChange}
									onBlur={validatePasswordMatch} 
									placeholder='Confirm Password'
								/>
								<label htmlFor='confirm-password'>Confirm Password</label>
							</div>

							{!isValid && <p className='errorPassword'>Passwords do not match</p>}
							<button type='submit' onClick={submit}>
								Sign Up
							</button>
						</form>
					</div>
				</section>
			</div>
			<Modal
				isOpen={showModal}
				onRequestClose={closeModal}
				contentLabel='Booking Confirmation'
				className='modal'
				overlayClassName='modal-overlay'
			>
				<div className='modal-content'>
					<h2>Sign up Confirmation</h2>
					<p>You have successfully signed up</p>
					<button className='modal-button' onClick={closeModal}>
						Close
					</button>
				</div>
			</Modal>
		</div>
	);
}

export default SignUp;
