import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import footerList from "./components/db.json";

import Home from "./components/Home";
import Login from "./components/Login";
import Education from "./components/Educational/Education"

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
						<Route exact path='/education'>
							<Education/>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
