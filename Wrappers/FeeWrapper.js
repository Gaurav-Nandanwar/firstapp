// HomeWrapper.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomTabs from '../BottomNav/BottomTabs';
import ScreenC from '../Screens/ScreenC';

const FeeWrapper = () => {
  return (
    <View style={styles.container}>
      <ScreenC />
      <BottomTabs />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeeWrapper;
