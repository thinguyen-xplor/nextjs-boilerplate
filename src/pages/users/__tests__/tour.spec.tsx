import React from 'react';
import { shallow } from 'enzyme';

import Button from 'components/button';

import Users from '../index.page';

describe('<Users />', () => {
  const getShallowComp = () => shallow(<Users />);

  it('should render a welcome message', () => {
    const comp = getShallowComp();

    const getMoreButton = comp.find(Button);

    expect(getMoreButton).toHaveLength(1);
  });
});
