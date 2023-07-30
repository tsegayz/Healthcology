import back from "./assets/login.jpg";
import image from "./logo.png";
import login from "./assets/blob1.svg";

function Login() {
	const submit = async (e) => {};
	return (
		<div className='login-page'>
			<div className='login'>
				<img src={login} alt='logo' className='background' />
				<section className='part-one'>
					<div className='container'>
						<div className='navbar'>
							<div className='logo'>
								<img src={image} alt='logo' />
								<h1>
									H<span>ealthCology</span>
								</h1>
							</div>
						</div>
						<div className='image-container'>
							<img src={back} alt='login' />
						</div>
					</div>
				</section>
				<section className='part-two'>
					<img src={login} alt='login' />
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
					</div>
				</section>
			</div>
		</div>
	);
}

export default Login;
