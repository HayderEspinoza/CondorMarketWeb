import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from './views/ProductDetail';
import NoMatch from './views/NoMatch';
import Home from './views/Home';
import { Container, Row } from 'reactstrap';
import ShoppingCart from './views/ShoppingCart';
import MyOrders from './views/MyOrders';
import { connect } from 'react-redux';
import './App.scss';
import LoginForm from './forms/LoginForm';
import { hideLoginModal, login, getSession } from './actions/users';

class App extends PureComponent {

	
	componentDidMount() {
		this.props.getSession()
	}
	
	_login = (data) => {
		this.props.login(data)
	}

	render() {
		const { loginModal, hideLoginModal } = this.props
		return (
			<Container>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/products/:id" component={ProductDetail} />
						<Route exact path="/shopping-cart" component={ShoppingCart} />
						<Route exact path="/my-orders" component={MyOrders} />
						<Route component={NoMatch} />
					</Switch>
				</Router>
				<Row>
					<LoginForm 
						isOpen={loginModal} 
						cancel={hideLoginModal} 
						submitLogin={this._login}
					/>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		loginModal: state.UserReducer.loginModal,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		hideLoginModal: () => dispatch(hideLoginModal),
		login: (data) => dispatch(login(data)),
		getSession: () => dispatch(getSession)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
