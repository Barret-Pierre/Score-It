import { screen } from '@testing-library/react-native';
import { renderWithThemeProvider } from '@tests/utils/render.utils';
import HomeScreen from '@/screens/home/HomeScreen';

describe('HomeScreen', () => {
  it('should render and display "Home" text', () => {
    renderWithThemeProvider(<HomeScreen />);
    expect(screen.getByText('Home')).toBeTruthy();
  });
});
