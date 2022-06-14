import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Clear Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
