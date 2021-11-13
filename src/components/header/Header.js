import "./header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">Life & Coding</span>
				<span className="headerTitleLg">My Blog</span>
			</div>
			<img
				className="headerImg"
				src="https://source.unsplash.com/1600x900/?nature,water"
				alt=""
			/>
		</div>
	);
};

export default Header;
