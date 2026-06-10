import { TAB_ICONS } from './constants';
import { TabIconProps, TabRouteName } from './types';

export function TabIcon({ routeName, color, size }: Readonly<TabIconProps>) {
  const IconComponent = TAB_ICONS[routeName as TabRouteName];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent color={color} size={size} />;
}
