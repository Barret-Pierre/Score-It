import { screen } from '@testing-library/react-native';
import { renderWithThemeProvider } from '@tests/utils/render.utils';
import HomeScreen from '@/screens/home/HomeScreen';

jest.mock('@/screens/home/constantes', () => ({
  GAMES: [
    { id: '1', name: 'Game 1' },
    { id: '2', name: 'Game 2' },
    { id: '3', name: 'Game 3' },
  ],
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('HomeScreen', () => {
  it('should render and display "Home" text', () => {
    renderWithThemeProvider(<HomeScreen />);
    expect(screen.getByTestId('home-screen')).toBeTruthy();
  });

  it('should render the title and subtitle', () => {
    renderWithThemeProvider(<HomeScreen />);
    expect(screen.getByTestId('home-screen-title')).toBeTruthy();
    expect(screen.getByTestId('home-screen-subtitle')).toBeTruthy();
  });

  it('should render the good number of game cards', () => {
    renderWithThemeProvider(<HomeScreen />);
    const gameCards = screen.getAllByTestId('game-card');
    expect(gameCards.length).toBe(3);
  });
});
