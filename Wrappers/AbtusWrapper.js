// HomeWrapper.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenB from '../Screens/ScreenB';
import BottomTabs from '../BottomNav/BottomTabs';

const AbtusWrapper = () => {
  return (
    <View style={styles.container}>
      <ScreenB />
      <BottomTabs />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AbtusWrapper;
