import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from './views/ProductDetail';
import NoMatch from './views/NoMatch';
import Home from './views/Home';
import { Container } from 'reactstrap';
import './App.scss';

class App extends PureComponent {
	render() {
		return (
			<Container>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/products/:id" component={ProductDetail} />
						<Route component={NoMatch} />
					</Switch>
				</Router>
			</Container>
		);
	}
}

export default App;
