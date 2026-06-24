import { ReactNode } from 'react';
import * as Styled from './Button.styles';
import { Pressable } from 'react-native';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  testID?: string;
}

export default function Button({
  children,
  disabled = false,
  onPress,
  testID,
}: Readonly<ButtonProps>) {
  return (
    <Pressable onPress={onPress} disabled={disabled} testID={testID}>
      {(state) => (
        <Styled.Button $disabled={disabled} $pressed={state.pressed}>
          <Styled.ButtonText $disabled={disabled}>{children}</Styled.ButtonText>
        </Styled.Button>
      )}
    </Pressable>
  );
}
