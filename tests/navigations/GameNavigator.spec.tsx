import React from 'react';
import { GameNavigator } from '@/navigations';
import { renderWithProviders } from '@tests/utils/render.utils';

describe('GameNavigator', () => {
  it('should render correctly with default props', () => {
    expect(() => {
      renderWithProviders(<GameNavigator />);
    }).not.toThrow();
  });
});
