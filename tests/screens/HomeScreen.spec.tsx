import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithThemeProvider } from '@tests/utils/render.utils';
import HomeScreen from '@/screens/home/HomeScreen';

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('@/screens/home/constantes', () => ({
  GAMES: [
    { id: '1', title: 'Game 1', image: require('../../assets/flip-7.png') },
    { id: '2', title: 'Game 2', image: require('../../assets/flip-7.png') },
    { id: '3', title: 'Game 3', image: require('../../assets/flip-7.png') },
  ],
}));

jest.mock('@/context/GameContext', () => ({
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
    expect(gameCards.length).toBe(3);
  });

  it('sélectionne un jeu et navigue vers Setup au clic sur une carte', () => {
    renderWithThemeProvider(<HomeScreen />);

    fireEvent.press(screen.getByTestId(`game-card-1`));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SELECT_GAME',
      payload: { id: '1', title: 'Game 1', image: require('../../assets/flip-7.png') },
    });

    expect(mockNavigate).toHaveBeenCalledWith('Setup');
  });
});
