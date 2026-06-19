import { renderHook, render, screen, act } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';

describe('ThemeProvider', () => {
  it('should render children', () => {
    render(
      <ThemeProvider>
        <Text>child</Text>
      </ThemeProvider>,
    );
    expect(screen.getByText('child')).toBeTruthy();
  });

  it('should provide light theme by default', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });
    expect(result.current.themeMode).toBe('light');
  });
});

describe('useTheme', () => {
  it('should return context when inside ThemeProvider', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });
    expect(result.current).toBeDefined();
    expect(result.current.themeMode).toBe('light');
    expect(result.current.toggleTheme).toBeDefined();
  });

  it('should throw when used outside ThemeProvider', () => {
    expect(() => renderHook(() => useTheme())).toThrow(
      'useTheme must be used within a ThemeProvider',
    );
  });

  it('should toggle theme from light to dark', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current.themeMode).toBe('light');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.themeMode).toBe('dark');
  });

  it('should toggle theme from dark to light', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.themeMode).toBe('dark');
    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.themeMode).toBe('light');
  });
});
