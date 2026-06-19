import { Divider } from '@/components/ui';
import { useTheme } from '@/contexts/ThemeContext';
import * as Styled from './TabItem.styles';
import { TabItemProps } from './types';
import { TabIcon } from './TabIcon';
import { DefaultTheme } from 'styled-components/native';

export function TabItem({ route, isFocused, isLastItem, onPress }: Readonly<TabItemProps>) {
  const { theme } = useTheme();

  const iconColor = getIconColor(isFocused, theme);

  const iconSize = theme.semantic.icon.size.md;

  return (
    <Styled.Container key={route.key}>
      <Styled.TabButton testID="tab-button" onPress={onPress} isFocused={isFocused}>
        <TabIcon routeName={route.name} color={iconColor} size={iconSize} />
      </Styled.TabButton>

      {!isLastItem && <Divider vertical />}
    </Styled.Container>
  );
}

export function getIconColor(isFocused: boolean, theme: DefaultTheme) {
  return isFocused ? theme.semantic.icon.focused : theme.semantic.icon.unfocused;
}
