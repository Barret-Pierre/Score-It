import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import { SetupScreen } from '@/screens';

jest.mock('@/domains/models/player.model', () => ({
  createEmptyPlayer: jest.fn(() => ({ id: '1', name: '' })),
}));

describe('SetupScreen', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should render and display screen', () => {
    renderWithProviders(<SetupScreen />);
    expect(screen.getByTestId('setup-screen')).toBeTruthy();
  });

  it('should render the title and subtitle', () => {
    renderWithProviders(<SetupScreen />);
    expect(screen.getByTestId('screen-header-title')).toBeTruthy();
    expect(screen.getByTestId('screen-header-custom-subtitle')).toBeTruthy();
  });

  it('should initiate render with no player card', () => {
    renderWithProviders(<SetupScreen />);
    const playerCards = screen.queryAllByTestId(/player-card-\d+/);
    expect(playerCards).toHaveLength(0);
  });

  it('should handle player card press', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    renderWithProviders(<SetupScreen />);

    fireEvent.press(screen.getByTestId('add-player-button'));
    fireEvent.press(screen.getByTestId('player-card-1'));

    expect(consoleSpy).toHaveBeenCalledWith('pressed player card 1');
  });

  it('should handle add player button press', () => {
    renderWithProviders(<SetupScreen />);

    expect(screen.queryAllByTestId(/player-card-\d+/)).toHaveLength(0);

    fireEvent.press(screen.getByTestId('add-player-button'));

    expect(screen.getAllByTestId(/player-card-\d+/)).toHaveLength(1);
    expect(screen.getByTestId('player-card-1')).toBeTruthy();
  });
});
