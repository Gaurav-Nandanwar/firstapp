// HomeWrapper.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomTabs from '../BottomNav/BottomTabs';
import ScreenD from '../Screens/ScreenD';

const StudyMWrapper = () => {
  return (
    <View style={styles.container}>
      <ScreenD />
      <BottomTabs />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StudyMWrapper;
