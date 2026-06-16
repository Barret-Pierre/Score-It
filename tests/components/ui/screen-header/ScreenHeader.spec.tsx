import { screen } from '@testing-library/react-native';
import { renderWithThemeProvider } from '@tests/utils/render.utils';
import { ScreenHeader } from '@/components/ui';

describe('ScreenHeader', () => {
  const mockProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    testIDPrefix: 'test',
  };

  it('should render correctly with default props', () => {
    renderWithThemeProvider(<ScreenHeader {...mockProps} />);
    expect(screen.getByTestId('test-title')).toBeTruthy();
    expect(screen.getByTestId('test-subtitle')).toBeTruthy();
  });

  it('should pass title and subtitle correctly', () => {
    renderWithThemeProvider(<ScreenHeader {...mockProps} />);
    expect(screen.getByTestId('test-title')).toHaveTextContent('Test Title');
    expect(screen.getByTestId('test-subtitle')).toHaveTextContent('Test Subtitle');
  });
});
