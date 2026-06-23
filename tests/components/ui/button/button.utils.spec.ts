import { getButtonBackground } from '@/components/ui/button/button.utils';
import { lightTheme } from '@/themes/theme';

const mockTheme = lightTheme;

describe('getButtonBackground', () => {
  it('should return the correct background color based on state', () => {
    expect(getButtonBackground(mockTheme, { disabled: true })).toBe('#EBEBEB');
    expect(getButtonBackground(mockTheme, { pressed: true })).toBe('#E00061');
    expect(getButtonBackground(mockTheme, {})).toBe('#FF006E');
  });
});
