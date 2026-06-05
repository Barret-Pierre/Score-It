import { LayoutDashboard, Settings } from 'lucide-react-native';
import type { TabIconMap } from './types';

export const TAB_ICONS: TabIconMap = {
  Home: LayoutDashboard,
  Settings: Settings,
} as const;
