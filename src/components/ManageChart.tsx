import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../colors';
import {responsiveSize} from '../utils/ResponsiveSize';

type ManageBtnType = 'small' | 'big';

interface ManageChartProps {
  handleDecrease: () => void;
  total: number;
  handleIncrease: () => void;
  type: ManageBtnType;
}

const ManageChart: React.FC<ManageChartProps> = ({
  handleDecrease,
  total,
  handleIncrease,
  type = 'small',
}) => {
  const getCardAddImgStyle = () => ({
    width: type === 'big' ? 38.05 : 17,
    height: type === 'big' ? 38.05 : 17,
  });

  const getTotalFontSize = () => ({
    fontSize: responsiveSize(type === 'big' ? 16 : 13),
    lineHeight: type === 'big' ? 24 : 18,
    height: type === 'big' ? 38 : 17,
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrease}>
        <Image
          source={require('../assets/images/min.png')}
          style={getCardAddImgStyle()}
        />
      </TouchableOpacity>
      <View style={[getCardAddImgStyle(), styles.totalChartContainer]}>
        <Text style={[getTotalFontSize(), styles.totalChart]}>{total}</Text>
      </View>
      <TouchableOpacity onPress={handleIncrease}>
        <Image
          source={require('../assets/images/AddBtn.png')}
          style={getCardAddImgStyle()}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ManageChart;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  totalChartContainer: {
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  totalChart: {
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'center',
  },
});
