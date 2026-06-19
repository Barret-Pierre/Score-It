import React from 'react';
import { TabNavigator } from '@/navigations';
import { renderWithProviders } from '@tests/utils/render.utils';

describe('TabNavigator', () => {
  it('should render correctly with default props', () => {
    expect(() => {
      renderWithProviders(<TabNavigator />);
    }).not.toThrow();
  });
});
