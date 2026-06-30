import { render } from '@testing-library/react-native';
import { TabIcon } from '@/components/custom-tab-bar/TabIcon';
import { lightTheme } from '@/themes/theme';

describe('TabIcon', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockTheme = lightTheme;

  it('should render without throwing an error for valid routes', () => {
    expect(() => {
      render(
        <TabIcon
          routeName="Home"
          color={mockTheme.semantic.icon.focused}
          size={mockTheme.semantic.icon.size.md}
        />,
      );
    }).not.toThrow();

    expect(() => {
      render(
        <TabIcon
          routeName="Settings"
          color={mockTheme.semantic.icon.focused}
          size={mockTheme.semantic.icon.size.md}
        />,
      );
    }).not.toThrow();
  });

  it('should return null for invalid route names', () => {
    const component = render(
      <TabIcon
        routeName="InvalidRoute"
        color={mockTheme.semantic.icon.focused}
        size={mockTheme.semantic.icon.size.md}
      />,
    );
    expect(component.toJSON()).toBeNull();
  });
});
