import { renderHook, render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { GameProvider, useGame } from '@/contexts/GameContext';

describe('GameProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render children', () => {
    render(
      <GameProvider>
        <Text>child</Text>
      </GameProvider>,
    );
    expect(screen.getByText('child')).toBeTruthy();
  });

  it('should provide initial state by default', () => {
    const { result } = renderHook(() => useGame(), {
      wrapper: GameProvider,
    });
    expect(result.current.state).toEqual({
      selectedGame: null,
      players: [],
    });
  });
});

describe('useGame', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return context when inside GameProvider', () => {
    const { result } = renderHook(() => useGame(), {
      wrapper: GameProvider,
    });
    expect(result.current).toBeDefined();
    expect(result.current.state).toEqual({
      selectedGame: null,
      players: [],
    });
    expect(result.current.dispatch).toBeDefined();
  });

  it('should throw when used outside GameProvider', () => {
    expect(() => renderHook(() => useGame())).toThrow('useGame must be used within a GameProvider');
  });
});
