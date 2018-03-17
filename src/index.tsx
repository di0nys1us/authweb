import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Application } from './Application';
import { register } from './registerServiceWorker';

const client = new ApolloClient({
  uri: '/graphql'
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);

register();
