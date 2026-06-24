import { View } from 'react-native';
import * as Styled from './ScreenHeader.styles';

interface ScreenHeaderProps {
  title: string;
  subtitle: string;
  testID: string;
}

export default function ScreenHeader({ title, subtitle, testID }: Readonly<ScreenHeaderProps>) {
  return (
    <View>
      <Styled.Title testID={`${testID}-title`}>{title}</Styled.Title>
      <Styled.Subtitle testID={`${testID}-subtitle`}>{subtitle}</Styled.Subtitle>
    </View>
  );
}
