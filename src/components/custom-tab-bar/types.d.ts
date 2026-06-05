import type { LucideIcon } from 'lucide-react-native';

export type TabRouteName = 'Home' | 'Settings';

export type TabIconMap = Record<TabRouteName, LucideIcon>;

export interface TabItemProps {
  route: { name: string; key: string };
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
