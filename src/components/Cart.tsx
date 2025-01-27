import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../colors';
import {responsiveSize} from '../utils/ResponsiveSize';
interface CartProps {
  totalChart: number;
}

const Cart: React.FC<CartProps> = ({totalChart}) => {
  return (
    <View>
      <Image
        source={require('../assets/images/checklist.png')}
        style={styles.logo}
      />
      <View style={styles.badge}>
        <Text style={styles.totalChart}>{totalChart}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
  },
  badge: {
    backgroundColor: colors.button,
    width: 25,
    height: 25,
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 20,
  },
  totalChart: {
    fontSize: responsiveSize(16),
    fontFamily: 'Poppins-Medium',
  },
});
