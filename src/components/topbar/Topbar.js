import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
	const user = false;
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fab fa-facebook-square" />
				<i className=" topIcon fab fa-twitter-square" />
				<i className=" topIcon fab fa-pinterest-square" />
				<i className=" topIcon fab fa-instagram-square" />
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">
							HOME
						</Link>
					</li>
					<li className="topListItem"></li>
					<Link className="link" to="/about">
						ABOUT
					</Link>
					<li className="topListItem"></li>
					<Link className="link" to="/contact">
						CONTACT
					</Link>
					<li className="topListItem"></li>
					<Link className="link" to="/write">
						WRITE
					</Link>
					<li className="topListItem"></li>
					{user && "LOGOUT"}
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img
						className="topImg"
						src="https://source.unsplash.com/user/erondu/daily"
						alt=""
					/>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}

				<i className=" topSearchIcon fas fa-search" />
			</div>
		</div>
	);
};

export default Topbar;
