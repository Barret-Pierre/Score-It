import { screen } from '@testing-library/react-native';
import { renderWithThemeProvider } from '@tests/utils/render.utils';
import GameCard from '@/components/game-card/GameCard';

describe('GameCard', () => {
  const mockGame = {
    id: '1',
    title: 'Mock Game',
    image: require('../../../assets/flip-7.png'),
  };

  it('should render correctly with default props', () => {
    renderWithThemeProvider(<GameCard game={mockGame} />);
    expect(screen.getByTestId('game-card')).toBeTruthy();
  });

  it('should render the game title and image correctly', () => {
    renderWithThemeProvider(<GameCard game={mockGame} />);
    expect(screen.getByTestId('game-card-title')).toBeTruthy();
    expect(screen.getByTestId('game-card-image')).toBeTruthy();
  });
});
