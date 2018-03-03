import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Container, Header } from 'semantic-ui-react';

import { MenuBar } from './MenuBar';

import './Application.css';

class Application extends Component {

  public render(): ReactNode {
    return (
      <>
        <MenuBar />
        <Container>
          <Header as="h1" size="huge">
            Whis is authweb?
          </Header>
          <p>
            authweb is a user management and authentication system written in Go and TypeScript.
          </p>
        </Container>
      </>
    );
  }
}

export { Application };
