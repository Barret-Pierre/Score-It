import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import { GameFlowHeader } from '@/components';
import { LucideIcon, LucideProps } from 'lucide-react-native';
import { View } from 'react-native';

describe('GameFlowHeader', () => {
  const mockTitle = 'Mock Title';
  const MockIcon = ((props: LucideProps) => <View {...props} />) as unknown as LucideIcon;
  MockIcon.displayName = 'MockIcon';

  const mockIconRight = MockIcon;
  const mockIconLeft = MockIcon;

  const mockOnIconLeftPress = jest.fn();
  const mockOnIconRightPress = jest.fn();

  it('should render correctly with default props', () => {
    renderWithProviders(
      <GameFlowHeader
        title={mockTitle}
        iconLeft={mockIconLeft}
        iconRight={mockIconRight}
        onIconLeftPress={mockOnIconLeftPress}
        onIconRightPress={mockOnIconRightPress}
        testID="game-flow-header"
      />,
    );
    expect(screen.getByTestId('game-flow-header')).toBeTruthy();
  });

  it('should render correctly with only title', () => {
    renderWithProviders(<GameFlowHeader title={mockTitle} testID="game-flow-header" />);
    expect(screen.getByTestId('game-flow-header-title')).toBeTruthy();
  });

  it('should render correctly with right icon where right icon is present', () => {
    renderWithProviders(
      <GameFlowHeader
        title={mockTitle}
        iconRight={mockIconRight}
        onIconRightPress={mockOnIconRightPress}
        testID="game-flow-header"
      />,
    );
    expect(screen.getByTestId('game-flow-header-icon-right')).toBeTruthy();
  });

  it('should handle right icon press', () => {
    renderWithProviders(
      <GameFlowHeader
        title={mockTitle}
        iconRight={mockIconRight}
        onIconRightPress={mockOnIconRightPress}
        testID="game-flow-header"
      />,
    );
    const rightIcon = screen.getByTestId('game-flow-header-icon-right');
    fireEvent.press(rightIcon);
    expect(mockOnIconRightPress).toHaveBeenCalled();
  });

  it('should render correctly with left icon where left icon is present', () => {
    renderWithProviders(
      <GameFlowHeader
        title={mockTitle}
        iconLeft={mockIconLeft}
        onIconLeftPress={mockOnIconLeftPress}
        testID="game-flow-header"
      />,
    );
    expect(screen.getByTestId('game-flow-header-icon-left')).toBeTruthy();
  });

  it('should handle left icon press', () => {
    renderWithProviders(
      <GameFlowHeader
        title={mockTitle}
        iconLeft={mockIconLeft}
        onIconLeftPress={mockOnIconLeftPress}
        testID="game-flow-header"
      />,
    );
    const leftIcon = screen.getByTestId('game-flow-header-icon-left');
    fireEvent.press(leftIcon);
    expect(mockOnIconLeftPress).toHaveBeenCalled();
  });
});
