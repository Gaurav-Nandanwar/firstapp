// HomeWrapper.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomTabs from '../BottomNav/BottomTabs';
import ScreenE from '../Screens/ScreenE';

const ContactUsWrapper = () => {
  return (
    <View style={styles.container}>
      <ScreenE />
      <BottomTabs />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactUsWrapper;
