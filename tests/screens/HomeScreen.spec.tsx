import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import HomeScreen from '@/screens/HomeScreen';

describe('HomeScreen', () => {
  it('should render and display "Home" text', () => {
    renderWithProviders(<HomeScreen />);
    expect(screen.getByText('Home')).toBeTruthy();
  });
});
