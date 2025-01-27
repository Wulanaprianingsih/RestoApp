import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {colors} from '../../colors';
import {responsiveSize} from '../utils/ResponsiveSize';
import CardList from '../components/CardList';
import Cart from '../components/Cart';
import AppContext, {IData} from '../context/AppContext';

const MenuScreen = ({navigation}: any) => {
  const {data, totalChart, updateTotalChart} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/user.png')}
            style={styles.logo}
          />
          <Text style={styles.greeting}>Hello. Users!</Text>
        </View>
        <Cart totalChart={totalChart} />
      </View>
      <ScrollView>
        {data.map((menu: IData) => (
          <CardList
            key={menu.id}
            data={menu}
            onPress={() => navigation.navigate('DetailScreen', {menu})}
            handleIncrease={() => updateTotalChart(menu.id, 'Add')}
            handleDecrease={
              menu.totalChart > 0
                ? () => updateTotalChart(menu.id, 'Min')
                : () => {}
            }
            total={menu.totalChart}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 30,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 35,
    height: 35,
  },
  greeting: {
    color: colors.text,
    fontWeight: '400',
    fontSize: responsiveSize(16),
    lineHeight: 24,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 40,
  },
});
