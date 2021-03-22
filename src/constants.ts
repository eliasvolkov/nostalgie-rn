import {DefaultTheme} from '@react-navigation/native';

export const COLORS = {
  GREY: '#9CA6B7',
  WHITE: '#FFFFFF',
  ORANGE: '#FF8C2D',
  TRANSPARENT: 'transparent',
};

export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.WHITE,
    primary: COLORS.ORANGE,
  },
};
