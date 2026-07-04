import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithThemeProvider } from '@tests/utils/render.utils';
import { SetupScreen } from '@/screens';
import { createPlayer } from '@tests/factories/player.factory';
import { createEmptyPlayer } from '@/domains/models/player.model';
import { mockGameState } from '@tests/utils/state.utils';

const mockDispatch = jest.fn();
const mockPlayer = createPlayer();

jest.mock('@/domains/models/player.model', () => ({
  createEmptyPlayer: jest.fn(),
}));

jest.mock('@/contexts/GameContext', () => ({
  useGame: jest.fn(),
}));

describe('SetupScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGameState({ selectedGame: null, players: [] }, mockDispatch);
  });

  it('should render and display screen', () => {
    renderWithThemeProvider(<SetupScreen />);
    expect(screen.getByTestId('setup-screen')).toBeTruthy();
  });

  it('should render the title and subtitle', () => {
    renderWithThemeProvider(<SetupScreen />);
    expect(screen.getByTestId('screen-header-title')).toBeTruthy();
    expect(screen.getByTestId('screen-header-custom-subtitle')).toBeTruthy();
  });

  it('should initiate render with no player card', () => {
    renderWithThemeProvider(<SetupScreen />);
    const playerCards = screen.queryAllByTestId(/^player-card:[\w-]+$/);
    expect(playerCards).toHaveLength(0);
  });

  it('should handle player card press', () => {
    mockGameState({ selectedGame: null, players: [mockPlayer] }, mockDispatch);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    renderWithThemeProvider(<SetupScreen />);

    fireEvent.press(screen.getByTestId(`player-card:${mockPlayer.id}`));

    expect(consoleSpy).toHaveBeenCalledWith(`pressed player card ${mockPlayer.id}`);
  });

  it('should handle add player button press', () => {
    (createEmptyPlayer as jest.Mock).mockReturnValue(mockPlayer);
    renderWithThemeProvider(<SetupScreen />);

    expect(screen.queryAllByTestId(/^player-card:[\w-]+$/)).toHaveLength(0);

    fireEvent.press(screen.getByTestId('add-player-button'));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_PLAYER',
      payload: mockPlayer,
    });
  });

  it('should handle remove player button press', () => {
    mockGameState({ selectedGame: null, players: [mockPlayer] }, mockDispatch);

    renderWithThemeProvider(<SetupScreen />);

    expect(screen.queryAllByTestId(/^player-card:[\w-]+$/)).toHaveLength(1);

    fireEvent.press(screen.getByTestId(`player-card-remove:${mockPlayer.id}`));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_PLAYER',
      payload: mockPlayer.id,
    });
  });
});
