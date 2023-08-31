import { IoLogInOutline } from "react-icons/io5";
import image from "./logo.png";
import login from "./assets/login.png";

function Login() {
	const submit = async (e) => {};
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
				<a href='/login'>
					<span>
						<IoLogInOutline style={{ fontSize: "25px" }} /> <p> Login </p>
					</span>
				</a>
			</div>

			<div className='login'>
				<section className='part-two'>
					<div className='content'>
						<h1>Login</h1>
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

							<div className='password-input-container'>
								<div className='password-input-wrapper'>
									<input
										id='password-input'
										type='password'
										autoComplete='off'
										placeholder='Password'
									/>
									<label htmlFor='password-input'>Password</label>
								</div>
							</div>
							<h3> Forgot password?</h3>
							<button type='submit' onClick={submit}>
								Login
							</button>
						</form>
						<div className="signup">
							<p> Don't have an account? <a href="/signup"> Register now</a></p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Login;
