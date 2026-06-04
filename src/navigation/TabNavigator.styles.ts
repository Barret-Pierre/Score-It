import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { DefaultTheme } from 'styled-components/native';

export const getTabBarStyles = (theme: DefaultTheme): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarLabelVisibilityMode: 'unlabeled',
  tabBarStyle: {
    backgroundColor: theme.semantic.bottom.bg,
    borderTopWidth: theme.semantic.bottom.borderWeight,
    borderTopColor: theme.primitives.colors.graphite[50],
    paddingBottom: theme.semantic.bottom.padding,
    paddingTop: theme.semantic.bottom.padding,
  },
  tabBarItemStyle: {
    borderRightWidth: theme.primitives.border.weight[2],
    borderRightColor: theme.primitives.colors.graphite[50],
    height: theme.semantic.icon.size.md,
  },
  tabBarActiveTintColor: theme.semantic.icon.focused,
  tabBarInactiveTintColor: theme.semantic.icon.unfocused,
  tabBarIconStyle: {
    lineHeight: theme.semantic.icon.size.md,
    height: theme.semantic.icon.size.md,
  },
});
