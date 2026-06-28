import * as Styled from './Button.styles';
import { Pressable } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  onPress?: () => void;
  testID?: string;
  variant?: 'default' | 'outlined' | 'dashed';
  icon?: LucideIcon;
}

export default function Button({
  title,
  disabled = false,
  onPress,
  testID,
  variant = 'default',
  icon: Icon,
}: Readonly<ButtonProps>) {
  const { theme } = useTheme();

  const iconColor = (() => {
    if (variant === 'outlined') {
      return disabled ? theme.semantic.icon.disabled : theme.semantic.icon.focused;
    }
    if (variant === 'dashed') {
      return disabled ? theme.semantic.icon.disabled : theme.semantic.icon.enabled;
    }
    return disabled ? theme.semantic.icon.disabled : theme.semantic.icon.onPrimary;
  })();

  return (
    <Pressable onPress={onPress} disabled={disabled} testID={testID}>
      {(state) => (
        <Styled.Button $disabled={disabled} $pressed={state.pressed} $variant={variant}>
          {Icon && <Icon size={24} color={iconColor} />}
          {title !== undefined && (
            <Styled.ButtonTitle $disabled={disabled} $variant={variant}>
              {title}
            </Styled.ButtonTitle>
          )}
        </Styled.Button>
      )}
    </Pressable>
  );
}
