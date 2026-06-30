import React from 'react';
import { MainLayout } from '@/layouts';
import { screen } from '@testing-library/react-native';
import { renderWithThemeProvider } from '@tests/utils/render.utils';

describe('MainLayout', () => {
  const mockChildren = React.createElement('Text', null, 'Test Content');

  it('should render correctly with default props and children', () => {
    renderWithThemeProvider(<MainLayout>{mockChildren}</MainLayout>);
    expect(screen.getByTestId('main-layout')).toBeTruthy();
    expect(screen.getByText('Test Content')).toBeTruthy();
  });
});
