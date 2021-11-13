import "./sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img src="https://source.unsplash.com/weekly?person" alt="" />
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit vel
					expedita itaque fuga magni harum sapiente alias, id tempore nihil
					doloribus.
				</p>
				<div className="sidebarItem">
					<span className="sidebarTitle">CATEGORIES</span>
					<ul className="siderbarList">
						<li className="sidebarListItem">Life</li>
						<li className="sidebarListItem">Music</li>
						<li className="sidebarListItem">Style</li>
						<li className="sidebarListItem">Sport</li>
						<li className="sidebarListItem">Tech</li>
					</ul>
				</div>
				<div className="sidebarItem">
					<span className="sidebarTitle">FOLLOW US</span>
					<div className="sidebarSocial">
						<i className="sidebarIcon fab fa-facebook-square" />
						<i className=" sidebarIcon fab fa-twitter-square" />
						<i className=" sidebarIcon fab fa-pinterest-square" />
						<i className=" sidebarIcon fab fa-instagram-square" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
