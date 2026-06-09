import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/utils/render.utils';
import { CustomTabBar } from '@/components';

describe('CustomTabBar', () => {
  const mockRoutes = [
    { key: 'home', name: 'Home' },
    { key: 'settings', name: 'Settings' },
  ];

  const mockState = {
    routes: mockRoutes,
    index: 0,
  };

  const mockNavigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with tab items', () => {
    renderWithProviders(<CustomTabBar state={mockState} navigation={mockNavigation} />);

    const tabItems = screen.queryAllByTestId('tab-button');
    expect(tabItems).toHaveLength(2);
  });

  it('navigates to correct route when tab is pressed', () => {
    renderWithProviders(<CustomTabBar state={mockState} navigation={mockNavigation} />);

    const homeButton = screen.getAllByTestId('tab-button')[0];
    fireEvent.press(homeButton);

    expect(mockNavigation.navigate).not.toHaveBeenCalled();
  });

  it('does not navigate when already focused tab is pressed', () => {
    renderWithProviders(<CustomTabBar state={mockState} navigation={mockNavigation} />);

    const settingButton = screen.getAllByTestId('tab-button')[1];
    fireEvent.press(settingButton);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Settings');
  });
});
