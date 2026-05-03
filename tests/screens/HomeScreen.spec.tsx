import { render, screen } from '@testing-library/react-native';
import HomeScreen from '@/screens/HomeScreen';

describe('HomeScreen', () => {
  it('should render without error', () => {
    render(<HomeScreen />);
  });
  it('should show "Home" test', () => {
    render(<HomeScreen />);
    expect(screen.getAllByText('Home')).toBeTruthy();
  });
});
