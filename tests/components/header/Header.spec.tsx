import { screen } from '@testing-library/react-native';
import { renderWithThemeProvider } from '@tests/utils/render.utils';
import Header from '@/components/header/Header';

describe('Header', () => {
  it('should render correctly with default props', () => {
    renderWithThemeProvider(<Header />);
    expect(screen.getByTestId('header')).toBeTruthy();
  });
});
