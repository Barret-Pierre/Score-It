import { renderHook, render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { AppProvider, useAppContext } from '@/context/AppContext';

describe('AppProvider', () => {
  it('should render children', () => {
    render(
      <AppProvider>
        <Text>child</Text>
      </AppProvider>,
    );
    expect(screen.getByText('child')).toBeTruthy();
  });
});

describe('useAppContext', () => {
  it('should return context when inside AppProvider', () => {
    const { result } = renderHook(() => useAppContext(), {
      wrapper: AppProvider,
    });
    expect(result.current).toBeDefined();
  });

  it('should throw when used outside AppProvider', () => {
    expect(() => renderHook(() => useAppContext())).toThrow(
      'useAppContext must be used within AppProvider',
    );
  });
});
