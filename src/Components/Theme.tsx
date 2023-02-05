import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const setWidth = (number: number) => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const setHeight = (number: number) => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

export { setWidth, setHeight };

export const Colors = {
  black: '#333',
  white: '#FFFFFF',
  red: '#E63950',
  brown: '#C29431',
  grey: '#222222',
  yellow: '#FFB300',
  purple: '#7804dc',
  blue: '#0000FF',
  lightBlue: '#edf1fb',
  sky: '#35B2E6',
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
  danger: '#df4759',
  success: '#4b0',
  //required in this project
  buttonGreen: '#2EC331',
  textColor: '#2CC070',
  lightGrey: '#D9D9D9',
  darkGrey: '#C4C4C4',
  backgroudColor: '#E5E5E5',
  LightGreen: '2CC070',
  MediumGray: '999999',
};

export const Images = {
  splashScreenImage: require('../Assets/Images/settings.png'),
  appLogo: require('../Assets/Images/logo.png'),
  IndianFlag: require('../Assets/Images/india.png'),
  handymanImg: require('../Assets/Images/handymanImg.png'),
  AppLogo: require('../Assets/Images/app.png'),
};

export const Fonts = {
  Sevillana: 'Sevillana-Regular',
  DMSans: 'DMSans-Regular',
  Poppins: 'Poppins-Black',
  Abril: 'AbrilFatface-Regular',
};
