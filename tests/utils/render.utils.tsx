import { render, type RenderOptions } from '@testing-library/react-native';
import { ReactElement } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';

export function renderWithProviders(component: ReactElement, options?: RenderOptions) {
  return render(<ThemeProvider>{component}</ThemeProvider>, options);
}
