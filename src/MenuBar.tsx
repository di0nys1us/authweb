import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Container, Menu, MenuItem } from 'semantic-ui-react';

class MenuBar extends Component {

    public render(): ReactNode {
        return (
            <Menu as="nav" color="olive" inverted={true}>
                <Container>
                    <MenuItem as="a" link={true}>authweb</MenuItem>
                </Container>
            </Menu>
        );
    }
}

export { MenuBar };
