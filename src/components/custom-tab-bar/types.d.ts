import type { LucideIcon } from 'lucide-react-native';

export type TabRouteName = 'Home' | 'Settings';

export type TabIconMap = Record<TabRouteName, LucideIcon>;

export interface TabItemProps {
  route: Route;
  isFocused: boolean;
  isLastItem: boolean;
  onPress: () => void;
}

export interface TabButtonProps {
  isFocused: boolean;
}

export interface TabIconProps {
  routeName: string;
  color: string;
  size: number;
}

export type Route = {
  key: string;
  name: string;
};

export type CustomTabBarProps = {
  state: {
    routes: Route[];
    index: number;
  };
  navigation: {
    navigate: (name: string) => void;
  };
};
