import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Share,
  Alert,
} from 'react-native';
import React, {useContext} from 'react';
import {colors} from '../../colors';
import {responsiveSize} from '../utils/ResponsiveSize';
import ManageChart from '../components/ManageChart';
import Cart from '../components/Cart';
import AppContext from '../context/AppContext';

const DetailScreen = ({navigation, route}: any) => {
  const {
    params: {menu},
  } = route;
  const {totalChart, updateTotalChart, data} = useContext(AppContext);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Ayo beli ${menu.title} dengan harga ${menu.price}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  //  get updated data
  const updatedData = data.find(x => x.id === menu.id);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/back.png')}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={onShare}>
            <Image
              source={require('../assets/images/share.png')}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <Cart totalChart={totalChart} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={menu.img} style={styles.img} />
        <View style={styles.body}>
          <Text style={styles.title}>{menu.title}</Text>
          <Text style={styles.title}>{menu.price}</Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={styles.desc}>{menu.description}</Text>
          <View style={styles.manageChartContainer}>
            <ManageChart
              handleIncrease={() => updateTotalChart(menu.id, 'Add')}
              handleDecrease={
                menu.totalChart > 0
                  ? () => updateTotalChart(menu.id, 'Min')
                  : () => {}
              }
              total={updatedData?.totalChart ?? 0}
              type="big"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 56,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 55,
  },
  headerIcon: {width: 35, height: 35},
  img: {
    width: 277,
    height: 277,
    marginTop: 61,
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 27,
  },
  title: {
    color: colors.text,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  desc: {
    color: colors.text,
    fontSize: responsiveSize(16),
    fontFamily: 'Poppins-Regular',
    lineHeight: 24,
  },
  manageChartContainer: {width: 141, alignSelf: 'flex-end', marginTop: 31},
  headerRightContainer: {display: 'flex', flexDirection: 'row', gap: 21},
});
