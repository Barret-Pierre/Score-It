import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import Divider from '@/components/ui/divider/Divider';

describe('Divider', () => {
  it('should render correctly with default props', () => {
    renderWithProviders(<Divider />);
    expect(screen.getByTestId('divider')).toBeTruthy();
  });

  it('should render correctly with horizontal props', () => {
    renderWithProviders(<Divider vertical={true} />);
    expect(screen.getByTestId('divider')).toBeTruthy();
  });
});
