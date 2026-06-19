import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import { GameCard } from '@/components';
import { createGame } from '@tests/factories/game.factory';

describe('GameCard', () => {
  const mockGame = createGame({ id: '1', title: 'Mock Game' });

  const mockOnPress = jest.fn();

  it('should render correctly with default props', () => {
    renderWithProviders(
      <GameCard game={mockGame} onPress={mockOnPress} testID={`game-card-${mockGame.id}`} />,
    );
    expect(screen.getByTestId(`game-card-${mockGame.id}`)).toBeTruthy();
  });

  it('should render the game title and image correctly', () => {
    renderWithProviders(
      <GameCard game={mockGame} onPress={mockOnPress} testID={`game-card-${mockGame.id}`} />,
    );
    expect(screen.getByTestId(`game-card-title-${mockGame.id}`)).toBeTruthy();
    expect(screen.getByTestId(`game-card-image-${mockGame.id}`)).toBeTruthy();
  });
});
