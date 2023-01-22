import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const setWidth = (number: any) => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const setHeight = (number: any) => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

export { setWidth, setHeight };

export const Colors = {
  black: '#333',
  white: '#FFFFFF',
  red: '#E63950',
  green: '#4CB452',
  brown: '#C29431',
  lightBrown: '#E2C052',
  grey: '#222222',
  yellow: '#FFB300',
  purple: '#7804dc',
  blue: '#0000FF',
  lightBlue: '#edf1fb',
  sky: '#35B2E6',
  light: {
    text: '#000',
    background: '#fff',
    tint: '#2f95dc',
    tabIconDefault: '#ccc',
    tabIconSelected: '#2f95dc',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: '#fff',
    tabIconDefault: '#ccc',
    tabIconSelected: '#fff',
  },
  AppBg: '#EDF1FB',
  Light_Blue: '#c9dafa',
  Dark_Blue: '#335580',
  DEFAULT_BLACK: '#0E122B',
  DEFAULT_GREEN: '#0A8791',
  DEFAULT_YELLOW: '#FBA83C',
  DEFAULT_GREY: '#C2C2CB',
  DEFAULT_WHITE: '#FFFFFF',
  DEFAULT_RED: '#F53920',
  SECONDARY_RED: '#FF6F59',
  SECONDARY_WHITE: '#F8F8F8',
  SECONDARY_GREEN: '#24C869',
  SECONDARY_BLACK: '#191d35',
  LIGHT_GREEN: '#CEE8E7',
  LIGHT_GREY: '#F8F7F7',
  LIGHT_GREY2: '#EAEAEA',
  LIGHT_YELLOW: '#FCE6CD',
  LIGHT_RED: '#FFC8BF',
  FABEBOOK_BLUE: '#4A61A8',
  GOOGLE_BLUE: '#53A0F4',
  INACTIVE_GREY: '#A3A3A3',
  Button_Blue: '#35B2E6',
  primary: '#003153',
  searchIcon: '#999',
  searchText: '#444',
  searchBackground: '#f0f0f0',
  title: '#000',
  subTitle: '#555',
  storyBorder: '#00f',
  description: '#9f9f9f',
  inputBackground: '#f0f0f0',
  inputText: '#000',
  messageBackground: '#1B5583',
  danger: '#df4759',
  success: '#4b0',
  halfOpacitySecondary: 'rgba(240, 149, 17, 0.5)',
  halfOpacityPrimary: 'rgba(0, 132, 255, 0.5)',
};

export const Images = {
  splashScreenImage: require('../Assets/Images/settings.png'),
};
