import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm">
				<label>Username</label>
				<input type="text" className="loginInput" placeholder="username..." />
				<label>Email</label>
				<input type="text" className="loginInput" placeholder="email..." />
				<label>Password</label>
				<input
					type="password"
					className="loginInput"
					placeholder="password..."
				/>

				<button className="registerButton">Register</button>
			</form>
			<button className="registerLoginButton">
				<Link className="link" to="/register">
					Login
				</Link>
			</button>
		</div>
	);
};

export default Register;
