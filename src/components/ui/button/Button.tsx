import * as Styled from './Button.styles';
import { ButtonVariant } from './types.d';
import { Pressable, View } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  onPress?: () => void;
  testID?: string;
  variant?: ButtonVariant;
  icon?: LucideIcon;
}

export default function Button({
  title,
  disabled = false,
  onPress,
  testID,
  variant = ButtonVariant.DEFAULT,
  icon: Icon,
}: Readonly<ButtonProps>) {
  const { theme } = useTheme();

  const buttonTheme = theme.semantic.buttons[variant];

  const iconColor = disabled ? buttonTheme.iconDisabled : buttonTheme.icon;
  const iconSize = theme.semantic.icon.size.md;

  return (
    <Pressable onPress={onPress} disabled={disabled} testID={testID}>
      {(state) => (
        <Styled.Button $disabled={disabled} $pressed={state.pressed} $variant={variant}>
          {Icon && (
            <View testID={`${testID}-icon`}>
              <Icon size={iconSize} color={iconColor} />
            </View>
          )}
          {title !== undefined && (
            <Styled.ButtonTitle $disabled={disabled} $variant={variant} testID={`${testID}-title`}>
              {title}
            </Styled.ButtonTitle>
          )}
        </Styled.Button>
      )}
    </Pressable>
  );
}
