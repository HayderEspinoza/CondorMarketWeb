import React, { PureComponent } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import Products from './Products/index';
import { Route } from 'react-router-dom';
import Categories from './Categories/index';

class Admin extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { match } = this.props
        
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Condor Market Admin</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href={`${match.path}/products`}>Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={`${match.path}/categories`}>Categories</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Route exact path={`${match.path}/products`} component={Products} />
                <Route exact path={`${match.path}/categories`} component={Categories} />
            </div>
        );
    }
}


export default Admin;