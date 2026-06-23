import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import { GameFlowBottomBar } from '@/components';

describe('GameFlowBottomBar', () => {
  const mockButtonTitle = 'Mock Button';
  const mockOnButtonPress = jest.fn();

  it('should render correctly with default props', () => {
    renderWithProviders(
      <GameFlowBottomBar
        buttonTitle={mockButtonTitle}
        onButtonPress={mockOnButtonPress}
        testID="game-flow-bottom-bar"
      />,
    );
    expect(screen.getByTestId('game-flow-bottom-bar')).toBeTruthy();
  });
});
