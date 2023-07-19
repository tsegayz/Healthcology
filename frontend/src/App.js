import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
	return (
		<div className='App'>
			<Router>
				<div className='content'>
					<Switch>
						<Route exact path='/'>
              <Navbar/>
              <Home/>
						</Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
