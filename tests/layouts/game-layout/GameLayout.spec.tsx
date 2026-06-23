import React from 'react';
import { GameLayout } from '@/layouts';
import { renderWithThemeProvider } from '@tests/utils/render.utils';
import { fireEvent } from '@testing-library/react-native';

const mockGoBack = jest.fn();
const mockDispatch = jest.fn();

jest.mock('@/contexts/GameContext', () => ({
  useGame: () => ({
    state: {
      selectedGame: {
        title: 'Test Game',
      },
    },
    dispatch: mockDispatch,
  }),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: mockGoBack,
  }),
}));

describe('GameLayout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockChildren = React.createElement('Text', null, 'Test Content');

  it('should render correctly with default props and children', () => {
    const { getByTestId, getByText } = renderWithThemeProvider(
      <GameLayout>{mockChildren}</GameLayout>,
    );
    renderWithThemeProvider(<GameLayout>{mockChildren}</GameLayout>);
    expect(getByTestId('game-layout')).toBeTruthy();
    expect(getByText('Test Content')).toBeTruthy();
  });

  it('should handle go back action', () => {
    const { getByTestId } = renderWithThemeProvider(<GameLayout>{mockChildren}</GameLayout>);

    fireEvent.press(getByTestId('game-flow-header-icon-left'));

    expect(mockGoBack).toHaveBeenCalled();
  });

  it('should handle button press action', () => {
    const consoleSpy = jest.spyOn(console, 'info').mockImplementation(() => {});

    const { getByTestId } = renderWithThemeProvider(<GameLayout>{mockChildren}</GameLayout>);

    fireEvent.press(getByTestId('button'));
    expect(consoleSpy).toHaveBeenCalledWith('Button pressed!');
    consoleSpy.mockRestore();
  });
});
