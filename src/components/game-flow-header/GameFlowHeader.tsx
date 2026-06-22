import { useTheme } from '@/contexts/ThemeContext';
import * as Styled from './GameFlowHeader.styles';
import { LucideIcon } from 'lucide-react-native';

interface GameFlowHeaderProps {
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  title: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
}

export default function GameFlowHeader({
  iconLeft,
  iconRight,
  title,
  onIconLeftPress,
  onIconRightPress,
}: Readonly<GameFlowHeaderProps>) {
  const { theme } = useTheme();

  const IconLeftComponent = iconLeft;
  const IconRightComponent = iconRight;
  const iconColor = theme.semantic.icon.primary;
  const iconSize = theme.semantic.icon.size.md;

  return (
    <Styled.Container testID="generic-header">
      {IconLeftComponent && (
        <IconLeftComponent color={iconColor} size={iconSize} onPress={onIconLeftPress} />
      )}
      <Styled.Title>{title}</Styled.Title>
      {IconRightComponent && (
        <IconRightComponent color={iconColor} size={iconSize} onPress={onIconRightPress} />
      )}
    </Styled.Container>
  );
}
