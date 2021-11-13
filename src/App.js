import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	const user = false;
	return (
		<div className="App">
			<Router>
				<Topbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/register">{user ? <Home /> : <Register />}</Route>
					<Route path="/login">{user ? <Home /> : <Login />}</Route>
					<Route path="/write">{user ? <Write /> : <Login />}</Route>
					<Route path="/settings">{user ? <Settings /> : <Register />}</Route>
					<Route path="/post/:postId">
						<Single />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
