import { screen, fireEvent } from '@testing-library/react-native';
import SettingsScreen from '@/screens/settings/SettingsScreen';
import { renderWithThemeProvider } from '@tests/utils/render.utils';

describe('SettingsScreen', () => {
  it('should render and display screen', () => {
    renderWithThemeProvider(<SettingsScreen />);
    expect(screen.getByTestId('settings-screen')).toBeTruthy();
  });

  it('should display light theme by default', () => {
    renderWithThemeProvider(<SettingsScreen />);
    expect(screen.getByText(/Thème actuel : ☀️ Light/)).toBeTruthy();
    expect(screen.getByText(/Basculer vers Dark/)).toBeTruthy();
  });

  it('should toggle to dark theme when button is pressed', () => {
    renderWithThemeProvider(<SettingsScreen />);

    expect(screen.getByText(/Thème actuel : ☀️ Light/)).toBeTruthy();

    const button = screen.getByText(/Basculer vers Dark/);
    fireEvent.press(button);

    expect(screen.getByText(/Thème actuel : 🌙 Dark/)).toBeTruthy();
    expect(screen.getByText(/Basculer vers Light/)).toBeTruthy();
  });

  it('should toggle back to light theme', () => {
    renderWithThemeProvider(<SettingsScreen />);

    const button = screen.getByText(/Basculer vers Dark/);

    fireEvent.press(button);
    expect(screen.getByText(/🌙 Dark/)).toBeTruthy();

    fireEvent.press(screen.getByText(/Basculer vers Light/));
    expect(screen.getByText(/☀️ Light/)).toBeTruthy();
  });
});
