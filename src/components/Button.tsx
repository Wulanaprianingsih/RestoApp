import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../colors';

interface IButton {
  title?: string;
  onPress?: () => void;
  style?: any;
}
const Button = ({onPress, title, style}: IButton) => {
  return (
    <TouchableOpacity style={[styles.bntContainer, style]} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  bntContainer: {
    backgroundColor: colors.button,
    borderRadius: 30,
    width: 168,
    height: 37,
  },
  btnText: {
    color: 'white',
    paddingVertical: 8,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
export default Button;
