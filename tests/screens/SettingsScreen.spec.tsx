import { render, screen } from '@testing-library/react-native';
import SettingsScreen from '@/screens/SettingsScreen';

describe('SettingsScreen', () => {
  it('should render without error', () => {
    render(<SettingsScreen />);
  });
  it('should show "Home" test', () => {
    render(<SettingsScreen />);
    expect(screen.getAllByText('Settings')).toBeTruthy();
  });
});
