import { renderHook, render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { GameProvider, useGame } from '@/contexts/GameContext';

describe('GameProvider', () => {
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
    expect(result.current.state).toEqual({ selectedGame: null });
  });
});

describe('useGame', () => {
  it('should return context when inside GameProvider', () => {
    const { result } = renderHook(() => useGame(), {
      wrapper: GameProvider,
    });
    expect(result.current).toBeDefined();
    expect(result.current.state).toEqual({ selectedGame: null });
    expect(result.current.dispatch).toBeDefined();
  });

  it('should throw when used outside ThemeProvider', () => {
    expect(() => renderHook(() => useGame())).toThrow('useGame must be used within a GameProvider');
  });
});
