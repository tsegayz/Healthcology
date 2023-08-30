import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import footerList from "./components/db.json";

import Home from "./components/Home";
import Login from "./components/Login";
import Education from "./components/Educational/Education"
import Near from "./components/Health/Near";
import Courses from "./components/Educational/Courses";

function App() {
	return (
		<div className='App'>
			<Router>
				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<Home footer={footerList} />
						</Route>
						<Route exact path='/login'>
							<Login />
						</Route>
						<Route exact path='/near'>
							<Near/>
						</Route>
						<Route exact path='/education'>
							<Education/>
						</Route>
						<Route exact path='/courses'>
							<Courses/>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
