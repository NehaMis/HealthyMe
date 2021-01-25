import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text>Login Screen</Text>
      {/* <Button
        title="Click"
        onPress={() => naviagtion.naviagte('Login')}></Button> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
