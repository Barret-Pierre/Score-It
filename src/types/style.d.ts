import 'styled-components/native';
import type {
  Primitives,
  Text,
  Typography,
  Screen,
  Icon,
  Divider,
  Header,
  Bottom,
  Cards,
} from '@/theme/tokens';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    primitives: Primitives;
    semantic: {
      text: Text;
      typography: Typography;
      screen: Screen;
      icon: Icon;
      divider: Divider;
      header: Header;
      bottom: Bottom;
      cards: Cards;
    };
  }
}
