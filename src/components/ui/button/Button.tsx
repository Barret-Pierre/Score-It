import { ReactNode } from 'react';
import * as Styled from './Button.styles';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
}

export default function Button({ children, disabled = false, onPress }: Readonly<ButtonProps>) {
  return (
    <Styled.Button disabled={disabled} onPress={onPress}>
      <Styled.ButtonText $disabled={disabled}>{children}</Styled.ButtonText>
    </Styled.Button>
  );
}
