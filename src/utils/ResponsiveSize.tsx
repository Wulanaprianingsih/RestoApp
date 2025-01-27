import {Dimensions} from 'react-native';

const scaleFactor = Dimensions.get('window').width / 393;

export function responsiveSize(sizeInFigma: number) {
  return sizeInFigma * scaleFactor;
}
