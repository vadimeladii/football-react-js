/**
 * Created by veladii on 3/20/17.
 */

import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class Header extends React.Component {

    render() {
        return (
            <div>
                <Navbar color="danger" light toggleable>
                    <div className="container">
                        <NavbarToggler right/>
                        <NavbarBrand href="/">Reactstrap</NavbarBrand>
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;