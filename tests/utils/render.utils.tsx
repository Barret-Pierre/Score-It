import { render, type RenderOptions } from '@testing-library/react-native';
import { ReactElement } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';

export function renderWithThemeProvider(component: ReactElement, options?: RenderOptions) {
  return render(<ThemeProvider>{component}</ThemeProvider>, options);
}

export function renderWithProviders(component: ReactElement, options?: RenderOptions) {
  return render(
    <ThemeProvider>
      <NavigationContainer>{component}</NavigationContainer>
    </ThemeProvider>,
    options,
  );
}
