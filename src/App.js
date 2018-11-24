import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from './views/NoMatch';
import Home from './views/Home';
import './App.scss';

class App extends PureComponent {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={NoMatch} />
				</Switch>
			</Router>
		);
	}
}

export default App;
