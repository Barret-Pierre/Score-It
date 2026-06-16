import { View } from 'react-native';
import * as Styled from './ScreenHeader.styles';

interface ScreenHeaderProps {
  title: string;
  subtitle: string;
  testIDPrefix: string;
}

export default function ScreenHeader({
  title,
  subtitle,
  testIDPrefix,
}: Readonly<ScreenHeaderProps>) {
  return (
    <View>
      <Styled.Title testID={`${testIDPrefix}-title`}>{title}</Styled.Title>
      <Styled.Subtitle testID={`${testIDPrefix}-subtitle`}>{subtitle}</Styled.Subtitle>
    </View>
  );
}
