import { IoLogInOutline } from "react-icons/io5";
import image from "./logo.png";
import login from "./assets/login.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");
	const [error, setError] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const submit = async (e) => {
		e.preventDefault();

		setError("");
		setResponseMessage("");

		if (!email || !password) {
			setError("Please fill in all the fields");
			return;
		}
		try {
			const response = await axios.post(
				"http://localhost:5000/api/v1/users/login",
				{
					email,
					password,
				}
			);

			const userData = response.data.user;
			const token = response.data.token;
			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(userData));

			setResponseMessage(response.data.status);
			if (userData.role_id === 1) {
				history.push("/dashboard");
			} else {
				setShowModal(true);
			}
		} catch (error) {
			if (error.response && error.response.status === 401) {
				setError("Incorrect username or password!");
			} else {
				setError("An error occurred");
			}
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
				<Link to='/signup'>
					<span>
						<IoLogInOutline style={{ fontSize: "23px", paddingRight: "4px" }} />{" "}
						<p> Sign Up </p>
					</span>
				</Link>
			</div>

			<div className='login'>
				<section className='part-two'>
					<div className='content'>
						<h1>Login</h1>
						<form className='form' onSubmit={submit}>
							<div className='user-input-container'>
								<input
									id='email'
									type='email'
									autoComplete='off'
									placeholder='Email'
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
										setError(""); // Clear error on input change
									}}
								/>
								<label htmlFor='email'>Email</label>
							</div>

							<div className='password-input-container'>
								<div className='password-input-wrapper'>
									<input
										id='password-input'
										type='password'
										autoComplete='off'
										placeholder='Password'
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
											setError(""); // Clear error on input change
										}}
									/>
									<label htmlFor='password-input'>Password</label>
								</div>
							</div>
							<h3> Forgot password?</h3>
							<button type='submit' onClick={submit}>
								Login
							</button>
						</form>
						<div className='signup'>
							<p>
								Don't have an account?<Link to='/signup'>Register now</Link>
							</p>
						</div>
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
					<h2>Log in Confirmation</h2>
					<p>You have successfully logged in</p>
					<button className='modal-button' onClick={closeModal}>
						Close
					</button>
				</div>
			</Modal>
		</div>
	);
}

export default Login;
