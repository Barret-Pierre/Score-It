import { ReactNode } from 'react';
import * as Styled from './Button.styles';
import { Pressable } from 'react-native';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
}

export default function Button({ children, disabled = false, onPress }: Readonly<ButtonProps>) {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      {(state) => (
        <Styled.Button $disabled={disabled} $pressed={state.pressed}>
          <Styled.ButtonText $disabled={disabled}>{children}</Styled.ButtonText>
        </Styled.Button>
      )}
    </Pressable>
  );
}
