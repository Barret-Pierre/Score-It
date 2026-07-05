import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import { PlayerCard } from '@/components';
import { createPlayer } from '@tests/factories/player.factory';
import { lightTheme } from '@/themes/theme';

const mockTheme = lightTheme;

describe('PlayerCard', () => {
  const mockPlayer = createPlayer({ id: '1', name: 'Mock Player' });
  const mockOnLongPress = jest.fn();
  const mockOnRemovePress = jest.fn();
  const mockOnUpdatePlayer = jest.fn();

  it('should render correctly with default props', () => {
    renderWithProviders(
      <PlayerCard
        player={mockPlayer}
        onLongPress={mockOnLongPress}
        onRemovePress={mockOnRemovePress}
        onUpdatePlayer={mockOnUpdatePlayer}
        testID={mockPlayer.id}
      />,
    );
    expect(screen.getByTestId(`player-card:${mockPlayer.id}`)).toBeTruthy();
  });

  it('should handle long press event', () => {
    renderWithProviders(
      <PlayerCard
        player={mockPlayer}
        onLongPress={mockOnLongPress}
        onRemovePress={mockOnRemovePress}
        onUpdatePlayer={mockOnUpdatePlayer}
        testID={mockPlayer.id}
      />,
    );
    fireEvent(screen.getByTestId(`player-card:${mockPlayer.id}`), 'longPress');
    expect(mockOnLongPress).toHaveBeenCalled();
  });

  it('should handle remove player event', () => {
    renderWithProviders(
      <PlayerCard
        player={mockPlayer}
        onLongPress={mockOnLongPress}
        onRemovePress={mockOnRemovePress}
        onUpdatePlayer={mockOnUpdatePlayer}
        testID={mockPlayer.id}
      />,
    );
    fireEvent.press(screen.getByTestId(`player-card-remove:${mockPlayer.id}`));
    expect(mockOnRemovePress).toHaveBeenCalled();
  });

  it('should handle update player name event', () => {
    renderWithProviders(
      <PlayerCard
        player={mockPlayer}
        onLongPress={mockOnLongPress}
        onRemovePress={mockOnRemovePress}
        onUpdatePlayer={mockOnUpdatePlayer}
        testID={mockPlayer.id}
      />,
    );
    fireEvent.changeText(screen.getByTestId(`player-name-input:${mockPlayer.id}`), 'Updated Name');
    expect(mockOnUpdatePlayer).toHaveBeenCalled();
  });

  it('changes border color when input is focused', () => {
    renderWithProviders(
      <PlayerCard
        player={mockPlayer}
        onLongPress={mockOnLongPress}
        onRemovePress={mockOnRemovePress}
        onUpdatePlayer={mockOnUpdatePlayer}
        testID={mockPlayer.id}
      />,
    );

    const input = screen.getByTestId(`player-name-input:${mockPlayer.id}`);
    const card = screen.getByTestId(`player-card:${mockPlayer.id}`);

    fireEvent(input, 'focus');
    expect(card).toHaveStyle({ borderColor: mockTheme.semantic.cards.focused.borderColor });

    fireEvent(input, 'blur');
    expect(card).toHaveStyle({ borderColor: mockTheme.semantic.cards.common.borderColor });
  });
});
