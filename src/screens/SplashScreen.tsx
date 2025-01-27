import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  useAnimatedValue,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../colors';
import {responsiveSize} from '../utils/ResponsiveSize';
import {textContent} from '../static';
import Button from '../components/Button';

const SplashScreen = ({navigation}: any) => {
  const fadeAnim = useAnimatedValue(0);
  const [loadingText, setLoadingText] = useState('Loading...');
  useEffect(() => {
    // Mounting
    const animation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    });

    animation.start();

    // Updating: setLoadingText after 1000ms
    const textTimeout = setTimeout(() => {
      setLoadingText('');
    }, 1000);

    // Unmounting: Cleanup
    return () => {
      animation.stop();
      clearTimeout(textTimeout);
    };
  }, [fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{textContent.title}</Text>
      <Text style={styles.subTitle}>{textContent.subTitle}</Text>
      <Text style={styles.loadingText}>{loadingText}</Text>
      <Animated.View style={{opacity: fadeAnim}}>
        <Button
          title="Mulai"
          onPress={() => navigation.navigate('MenuScreen')}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 191,
    height: 191,
  },
  title: {
    color: colors.text,
    fontSize: responsiveSize(30),
    lineHeight: 45,
    marginTop: 21,
    marginBottom: 21,
    fontFamily: 'Poppins-Bold',
  },
  subTitle: {
    color: colors.text,
    fontSize: responsiveSize(14),
    lineHeight: 21,
    width: 267,
    textAlign: 'center',
    marginBottom: '30%',
    fontFamily: 'Poppins-Regular',
  },
  loadingText: {
    fontSize: responsiveSize(14),
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
