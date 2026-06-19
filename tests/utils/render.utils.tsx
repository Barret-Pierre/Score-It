import { render, type RenderOptions } from '@testing-library/react-native';
import { ReactElement } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { GameProvider } from '@/contexts/GameContext';

export function renderWithThemeProvider(component: ReactElement, options?: RenderOptions) {
  return render(<ThemeProvider>{component}</ThemeProvider>, options);
}

export function renderWithProviders(component: ReactElement, options?: RenderOptions) {
  return render(
    <ThemeProvider>
      <GameProvider>
        <NavigationContainer>{component}</NavigationContainer>
      </GameProvider>
    </ThemeProvider>,
    options,
  );
}
