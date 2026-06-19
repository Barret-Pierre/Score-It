import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithThemeProvider } from '@tests/utils/render.utils';
import * as gameService from '@/services/game.service';
import HomeScreen from '@/screens/home/HomeScreen';
import { createGame } from '@tests/factories/game.factory';

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();
const mockGames = [
  createGame({ id: '1', title: 'Game 1' }),
  createGame({ id: '2', title: 'Game 2' }),
  createGame({ id: '3', title: 'Game 3' }),
];

jest.mock('@/contexts/GameContext', () => ({
  useGame: () => ({
    dispatch: mockDispatch,
  }),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(gameService, 'getGames').mockReturnValue(mockGames);
});

describe('HomeScreen', () => {
  it('should render and display screen', () => {
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
    const gameCards = screen.getAllByTestId(/game-card-\d+/);
    expect(gameCards).toHaveLength(mockGames.length);
  });

  it('should dispatch the correct action and navigate to Setup on game card press', () => {
    const firstGame = mockGames[0];
    renderWithThemeProvider(<HomeScreen />);

    fireEvent.press(screen.getByTestId(`game-card-${firstGame.id}`));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SELECT_GAME',
      payload: firstGame,
    });

    expect(mockNavigate).toHaveBeenCalledWith('Setup');
  });
});
