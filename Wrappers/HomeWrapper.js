// HomeWrapper.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenA from '../Screens/ScreenA';
import BottomTabs from '../BottomNav/BottomTabs';

const HomeWrapper = () => {
  return (
    <View style={styles.container}>
      <ScreenA />
      <BottomTabs />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeWrapper;
