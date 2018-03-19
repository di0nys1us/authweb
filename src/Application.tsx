import * as React from 'react';
import { Component, ReactNode, SFC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';

import { Navigation } from './Navigation';
import { UserDetailsWithData } from './UserDetails';
import { UserFormWithData } from './UserForm';
import { UsersTableWithData } from './UsersTable';

const Home: SFC = () => (
  <>
    <Header as="h1" size="huge">
      What is authweb?
    </Header>
    <p>
      authweb is a user management and authentication system written in Go and TypeScript.
    </p>
  </>
);

class Application extends Component {

  public render(): ReactNode {
    return (
      <>
        <Navigation />
        <Container>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/users" exact={true} component={UsersTableWithData} />
            <Route path="/users/new" exact={true} component={UserFormWithData} />
            <Route path="/users/:userId" exact={true} component={UserDetailsWithData} />
          </Switch>
        </Container>
      </>
    );
  }
}

export { Application };
