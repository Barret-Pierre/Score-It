import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithThemeProvider } from '@tests/utils/render.utils';
import Button from '@/components/ui/button/Button';

const mockOnPress = jest.fn();

describe('Button', () => {
  it('should render correctly with default props', () => {
    renderWithThemeProvider(<Button testID="button">Click me</Button>);
    expect(screen.getByTestId('button')).toBeTruthy();
  });

  it('should render correctly when disabled', () => {
    renderWithThemeProvider(
      <Button disabled testID="button">
        Click me
      </Button>,
    );
    expect(screen.getByTestId('button')).toBeTruthy();
  });

  it('should handle press correctly when pressed', () => {
    renderWithThemeProvider(
      <Button onPress={mockOnPress} testID="button">
        Click me
      </Button>,
    );
    const button = screen.getByTestId('button');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
