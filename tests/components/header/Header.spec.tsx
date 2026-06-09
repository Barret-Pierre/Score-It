import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import Header from '@/components/header/Header';

describe('Header', () => {
  it('should render correctly with default props', () => {
    renderWithProviders(<Header />);
    expect(screen.getByTestId('header')).toBeTruthy();
  });
});
