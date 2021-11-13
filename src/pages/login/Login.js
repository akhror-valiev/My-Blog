import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="login">
			<span className="loginTitle"></span>
			<form className="loginForm">
				<label>Email</label>
				<input type="text" className="loginInput" placeholder="email" />
				<label>Password</label>
				<input type="password" className="loginInput" placeholder="password" />

				<button className="loginButton">Login</button>
			</form>
			<button className="loginRegisterButton">Register</button>
			<Link className="link" to="/login">
				Register
			</Link>
		</div>
	);
};

export default Login;
