import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Setting = () => {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img src="https://source.unsplash.com/1600x900/?meetings" alt="" />
						<label htmlFor="fileInput">
							<i className=" settingsPPIcon fas fa-user-circle" />
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="Ahror" />
					<label>Email</label>
					<input type="email" placeholder="ahror.valiev@gmail.com" />
					<label>Password</label>
					<input type="password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Setting;
