import * as React from 'react';
import { render } from 'react-dom';

import { Application } from './Application';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Application />, div);
});
