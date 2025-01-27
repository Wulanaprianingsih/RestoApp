import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveSize} from '../utils/ResponsiveSize';
import {colors} from '../../colors';
import ManageChart from './ManageChart';

interface CardListProps {
  data: {
    title: string;
    subTitle: string;
    price: string;
    img: any;
  };
  onPress: () => void;
  handleIncrease: () => void;
  handleDecrease: () => void;
  total: number;
}

const CardList: React.FC<CardListProps> = ({
  data,
  onPress,
  handleIncrease,
  handleDecrease,
  total,
}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Image source={data.img} style={styles.cardImg} />
      </TouchableOpacity>
      <View style={styles.cardTextWrapper}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.cardTitle}>{data.title}</Text>
        </TouchableOpacity>
        <Text style={styles.cardSubTitle}>{data.subTitle}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>{data.price}</Text>
          <ManageChart
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            total={total}
            type="small"
          />
        </View>
      </View>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgCard,
    flexDirection: 'row',
    display: 'flex',
    gap: 17,
    width: '100%',
    marginBottom: 49,
  },
  cardImg: {width: 147, height: 146},
  cardTextWrapper: {flex: 1, paddingTop: 11, paddingBottom: 8},
  cardTitle: {
    color: colors.text,
    fontSize: responsiveSize(16),
    lineHeight: 24,
    fontFamily: 'Poppins-Bold',
  },
  cardSubTitle: {
    color: colors.text,
    fontSize: responsiveSize(8),
    lineHeight: 12,
    fontFamily: 'Poppins-Regular',
    paddingRight: 16,
    marginTop: 5,
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 8,
    gap: 18,
  },
  cardPrice: {
    color: colors.text,
    fontSize: responsiveSize(14),
    lineHeight: 21,
    fontFamily: 'Poppins-Regular',
  },
  cardAddBtn: {
    position: 'absolute',
    right: 10,
    width: 17,
    height: 17,
    backgroundColor: colors.bgCard,
  },
  cardAddImg: {
    width: 17,
    height: 17,
  },
});
