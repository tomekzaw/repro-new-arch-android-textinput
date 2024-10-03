import {StyleSheet, View, TextInput} from 'react-native';

import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput multiline style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    marginTop: 100,
    padding: 0,
  },
});
