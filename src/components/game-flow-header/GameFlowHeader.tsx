import { useTheme } from '@/contexts/ThemeContext';
import * as Styled from './GameFlowHeader.styles';
import { LucideIcon } from 'lucide-react-native';
import { Pressable } from 'react-native';

interface GameFlowHeaderProps {
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  title: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
  testID?: string;
}

export default function GameFlowHeader({
  iconLeft,
  iconRight,
  title,
  onIconLeftPress,
  onIconRightPress,
  testID,
}: Readonly<GameFlowHeaderProps>) {
  const { theme } = useTheme();

  const IconLeftComponent = iconLeft;
  const IconRightComponent = iconRight;
  const iconColor = theme.semantic.icon.primary;
  const iconSize = theme.semantic.icon.size.md;

  return (
    <Styled.Container testID={testID}>
      {IconLeftComponent && (
        <Pressable testID={`${testID}-icon-left`} onPress={onIconLeftPress}>
          <IconLeftComponent color={iconColor} size={iconSize} />
        </Pressable>
      )}
      <Styled.Title testID={`${testID}-title`}>{title}</Styled.Title>
      {IconRightComponent && (
        <Pressable testID={`${testID}-icon-right`} onPress={onIconRightPress}>
          <IconRightComponent color={iconColor} size={iconSize} />
        </Pressable>
      )}
    </Styled.Container>
  );
}
