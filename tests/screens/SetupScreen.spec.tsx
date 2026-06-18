import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import { SetupScreen } from '@/screens';

describe('SetupScreen', () => {
  it('should render and display screen', () => {
    renderWithProviders(<SetupScreen />);
    expect(screen.getByTestId('setup-screen')).toBeTruthy();
  });
});
