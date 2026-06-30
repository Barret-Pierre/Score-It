import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithThemeProvider } from '@tests/utils/render.utils';
import Button from '@/components/ui/button/Button';
import { SquarePlus } from 'lucide-react-native';

const mockOnPress = jest.fn();

describe('Button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with default props', () => {
    renderWithThemeProvider(<Button title="Click me" testID="button" />);
    expect(screen.getByTestId('button')).toBeTruthy();
  });

  it('should render title when provided', () => {
    renderWithThemeProvider(<Button title="Click me" testID="button" />);
    expect(screen.getByTestId('button')).toBeTruthy();
    expect(screen.getByTestId('button-title')).toBeTruthy();
  });

  it('should not render title when omitted', () => {
    renderWithThemeProvider(<Button testID="button" />);
    expect(screen.getByTestId('button')).toBeTruthy();
    expect(screen.queryByTestId('button-title')).toBeNull();
  });

  it('should render correctly when only icon is provided', () => {
    renderWithThemeProvider(<Button icon={SquarePlus} testID="button" />);
    expect(screen.getByTestId('button')).toBeTruthy();
    expect(screen.getByTestId('button-icon')).toBeTruthy();
  });

  it('should not render correctly when only icon is omitted', () => {
    renderWithThemeProvider(<Button title="Click me" testID="button" />);
    expect(screen.getByTestId('button')).toBeTruthy();
    expect(screen.queryByTestId('button-icon')).toBeNull();
  });

  it('should handle press correctly when pressed', () => {
    renderWithThemeProvider(<Button title="Click me" onPress={mockOnPress} testID="button" />);
    const button = screen.getByTestId('button');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('should not call onPress when disabled', () => {
    renderWithThemeProvider(
      <Button title="Click me" onPress={mockOnPress} disabled testID="button" />,
    );
    const button = screen.getByTestId('button');
    fireEvent.press(button);
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
