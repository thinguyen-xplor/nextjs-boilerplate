import React from 'react';
import { shallow } from 'enzyme';

import Button from 'components/button';

import Tour from '../index.page';

describe('<Home />', () => {
  const getShallowComp = () => shallow(<Tour />);

  it('should render a welcome message', () => {
    const comp = getShallowComp();

    const getMoreButton = comp.find(Button);

    expect(getMoreButton).toHaveLength(1);
  });
});
