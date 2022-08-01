import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';
import { Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('screen');

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/images/1.jpg')}
              style={{ height, width }}
              resizeMode="cover"
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/images/2.jpg')}
              style={{ height, width }}
              resizeMode="stretch"
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/images/3.jpg')}
              style={{ height, width }}
              resizeMode="stretch"
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
      onDone={()=>navigation.navigate('Home')}
      onSkip={()=>navigation.navigate('Home')}
    />
  );
};

export default OnboardingScreen;
