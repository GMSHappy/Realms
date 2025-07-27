import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RealmSelectionScreen({ navigation, selectRealm }) {
  const realms = ['Fitness', 'Focus', 'Finance'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Realm</Text>
      {realms.map(realm => (
        <TouchableOpacity
          key={realm}
          style={styles.button}
          onPress={() => {
            selectRealm(realm);
            navigation.navigate('Quests');
          }}
        >
          <Text style={styles.buttonText}>{realm}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
