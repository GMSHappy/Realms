import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RealmSelectionScreen from './screens/RealmSelectionScreen';
import QuestScreen from './screens/QuestScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [selectedRealm, setSelectedRealm] = useState(null);
  const [xp, setXp] = useState(0);

  const handleQuestComplete = () => {
    setXp(xp + 10);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#222' },
          headerTintColor: '#fff',
          contentStyle: { backgroundColor: '#111' },
        }}
      >
        <Stack.Screen name="Realms">
          {props => (
            <RealmSelectionScreen
              {...props}
              selectRealm={realm => setSelectedRealm(realm)}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Quests">
          {props => (
            <QuestScreen
              {...props}
              realm={selectedRealm}
              xp={xp}
              onCompleteQuest={handleQuestComplete}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
