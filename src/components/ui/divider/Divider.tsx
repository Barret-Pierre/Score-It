import * as Styled from './Divider.styles';

interface DividerProps {
  vertical?: boolean;
}

export default function Divider({ vertical = false }: DividerProps) {
  return <Styled.Line testID="divider" vertical={vertical} />;
}
