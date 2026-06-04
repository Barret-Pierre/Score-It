import { View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LayoutDashboard, Settings } from 'lucide-react-native';
import { Divider } from '@/components/ui';
import { useTheme } from '@/context/ThemeContext';
import * as Styled from './CustomTabBar.styles';

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const { theme } = useTheme();

  const getIcon = (routeName: string, isFocused: boolean) => {
    const color = isFocused ? theme.semantic.icon.focused : theme.semantic.icon.unfocused;
    const size = theme.semantic.icon.size.md;

    switch (routeName) {
      case 'Home':
        return <LayoutDashboard color={color} size={size} />;
      case 'Settings':
        return <Settings color={color} size={size} />;
      default:
        return null;
    }
  };

  return (
    <Styled.Container>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={route.key} style={{ flex: 1, flexDirection: 'row' }}>
            <Styled.TabButton onPress={onPress} isFocused={isFocused}>
              {getIcon(route.name, isFocused)}
            </Styled.TabButton>

            {index < state.routes.length - 1 && <Divider vertical />}
          </View>
        );
      })}
    </Styled.Container>
  );
}
