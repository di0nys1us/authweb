import * as React from 'react';
import { render } from 'react-dom';

import { Application } from './Application';
import { register } from './registerServiceWorker';

import './index.css';

render(
  <Application />,
  document.getElementById('root') as HTMLElement
);

register();
