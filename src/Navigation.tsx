import * as React from 'react';
import { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, MenuItem } from 'semantic-ui-react';

class Navigation extends Component {

    public render(): ReactNode {
        return (
            <Menu as="nav">
                <Container>
                    <MenuItem as={NavLink} to="/" exact={true}>
                        authweb
                    </MenuItem>
                    <MenuItem as={NavLink} to="/users" exact={true}>
                        Users
                    </MenuItem>
                </Container>
            </Menu>
        );
    }
}

export { Navigation };
