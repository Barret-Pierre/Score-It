import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import HomeScreen from '@/screens/HomeScreen';

describe('HomeScreen', () => {
  it('should render without error', () => {
    renderWithProviders(<HomeScreen />);
  });
  it('should show "Home" text', () => {
    renderWithProviders(<HomeScreen />);
    expect(screen.getAllByText('Home')).toBeTruthy();
  });
});
