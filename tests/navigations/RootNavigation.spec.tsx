import React from 'react';
import { RootNavigator } from '@/navigations';
import { renderWithProviders } from '@tests/utils/render.utils';

describe('RootNavigator', () => {
  it('should render correctly with default props', () => {
    expect(() => {
      renderWithProviders(<RootNavigator />);
    }).not.toThrow();
  });
});
