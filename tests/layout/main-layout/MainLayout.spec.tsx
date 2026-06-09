import React from 'react';
import { MainLayout } from '@/layouts';
import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';

describe('MainLayout', () => {
  const mockChildren = React.createElement('Text', null, 'Test Content');

  it('should render correctly with default props and children', () => {
    renderWithProviders(<MainLayout>{mockChildren}</MainLayout>);
    expect(screen.getByTestId('main-layout')).toBeTruthy();
    expect(screen.getByText('Test Content')).toBeTruthy();
  });
});
