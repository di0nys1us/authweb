import * as React from 'react';
import { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

class MenuBar extends Component {

    public render(): ReactNode {
        return (
            <Menu as="nav">
                <Container>
                    <NavLink
                        to="/"
                        className="item"
                        activeClassName="active"
                        exact={true}
                    >
                        authweb
                    </NavLink>
                    <NavLink
                        to="/users"
                        className="item"
                        activeClassName="active"
                        exact={true}
                    >
                        Users
                    </NavLink>
                </Container>
            </Menu>
        );
    }
}

export { MenuBar };
