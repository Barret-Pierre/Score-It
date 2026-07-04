import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import { PlayerCard } from '@/components';
import { createPlayer } from '@tests/factories/player.factory';

describe('PlayerCard', () => {
  const mockPlayer = createPlayer({ id: '1', name: 'Mock Player' });

  const mockOnPress = jest.fn();
  const mockOnRemovePress = jest.fn();

  it('should render correctly with default props', () => {
    renderWithProviders(
      <PlayerCard
        player={mockPlayer}
        onPress={mockOnPress}
        onRemovePress={mockOnRemovePress}
        testID={mockPlayer.id}
      />,
    );
    expect(screen.getByTestId(`player-card:${mockPlayer.id}`)).toBeTruthy();
  });
});
