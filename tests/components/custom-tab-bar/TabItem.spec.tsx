import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import { TabItem, getIconColor } from '@/components/custom-tab-bar/TabItem';
import { lightTheme } from '@/theme/theme';

describe('TabItem', () => {
  const mockRoute = { key: 'home', name: 'Home' };
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with default props', () => {
    renderWithProviders(
      <TabItem route={mockRoute} isFocused={false} isLastItem={true} onPress={mockOnPress} />,
    );

    expect(screen.getByTestId('tab-button')).toBeTruthy();
  });

  it('should call onPress when TabButton is pressed', () => {
    renderWithProviders(
      <TabItem route={mockRoute} isFocused={false} isLastItem={true} onPress={mockOnPress} />,
    );

    const tabButtonElement = screen.getByTestId('tab-button');
    fireEvent.press(tabButtonElement);

    expect(mockOnPress).toHaveBeenCalled();
  });

  it('should render Divider when this is not the last item', () => {
    renderWithProviders(
      <TabItem route={mockRoute} isFocused={false} isLastItem={false} onPress={mockOnPress} />,
    );

    expect(screen.queryByTestId('divider')).toBeTruthy();
  });

  it('should not render Divider when this is the last item', () => {
    renderWithProviders(
      <TabItem route={mockRoute} isFocused={false} isLastItem={true} onPress={mockOnPress} />,
    );

    expect(screen.queryByTestId('divider')).toBeNull();
  });
});

describe('getIconColor', () => {
  const mockTheme = lightTheme;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return focused color when isFocused is true', () => {
    const color = getIconColor(true, mockTheme);
    expect(color).toBe(mockTheme.semantic.icon.focused);
  });

  it('should return unfocused color when isFocused is false', () => {
    const color = getIconColor(false, mockTheme);
    expect(color).toBe(mockTheme.semantic.icon.unfocused);
  });
});
