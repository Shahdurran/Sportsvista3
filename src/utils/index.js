import { Platform,Dimensions } from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isMWeb = Platform.OS === 'web';

export const logErrorWithMessage = (message, errorSource) => {
  if (__DEV__) {
    console.log(message, errorSource);
  }
};
