import { Divider } from '@/components/ui';
import { useTheme } from '@/context/ThemeContext';
import * as Styled from './TabItem.styles';
import { useMemo } from 'react';
import { TabItemProps } from './types';
import { TabIcon } from './TabIcon';

export function TabItem({ route, isFocused, isLastItem, onPress }: TabItemProps) {
  const { theme } = useTheme();

  const iconColor = useMemo(
    () => (isFocused ? theme.semantic.icon.focused : theme.semantic.icon.unfocused),
    [isFocused, theme.semantic.icon.focused, theme.semantic.icon.unfocused],
  );

  const iconSize = theme.semantic.icon.size.md;

  return (
    <Styled.Container key={route.key}>
      <Styled.TabButton onPress={onPress} isFocused={isFocused}>
        <TabIcon routeName={route.name} color={iconColor} size={iconSize} />
      </Styled.TabButton>

      {!isLastItem && <Divider vertical />}
    </Styled.Container>
  );
}
