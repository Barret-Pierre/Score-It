import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import { GameCard } from '@/components';

describe('GameCard', () => {
  const mockGame = {
    id: '1',
    title: 'Mock Game',
    image: require('../../../assets/flip-7.png'),
  };

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
