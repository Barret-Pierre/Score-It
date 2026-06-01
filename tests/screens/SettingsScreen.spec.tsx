import { screen, fireEvent } from '@testing-library/react-native';
import SettingsScreen from '@/screens/SettingsScreen';
import { renderWithProviders } from '@tests/utils/render.utils';

describe('SettingsScreen', () => {
  it('should render and display "Settings" text', () => {
    renderWithProviders(<SettingsScreen />);
    expect(screen.getByText('Settings')).toBeTruthy();
  });

  it('should display light theme by default', () => {
    renderWithProviders(<SettingsScreen />);
    expect(screen.getByText(/Thème actuel : ☀️ Light/)).toBeTruthy();
    expect(screen.getByText(/Basculer vers Dark/)).toBeTruthy();
  });

  it('should toggle to dark theme when button is pressed', () => {
    renderWithProviders(<SettingsScreen />);

    expect(screen.getByText(/Thème actuel : ☀️ Light/)).toBeTruthy();

    const button = screen.getByText(/Basculer vers Dark/);
    fireEvent.press(button);

    expect(screen.getByText(/Thème actuel : 🌙 Dark/)).toBeTruthy();
    expect(screen.getByText(/Basculer vers Light/)).toBeTruthy();
  });

  it('should toggle back to light theme', () => {
    renderWithProviders(<SettingsScreen />);

    const button = screen.getByText(/Basculer vers Dark/);

    fireEvent.press(button);
    expect(screen.getByText(/🌙 Dark/)).toBeTruthy();

    fireEvent.press(screen.getByText(/Basculer vers Light/));
    expect(screen.getByText(/☀️ Light/)).toBeTruthy();
  });
});
