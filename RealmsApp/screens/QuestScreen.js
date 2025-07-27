import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const questData = {
  Fitness: [
    'Do 20 push-ups',
    'Run for 10 minutes',
    'Stretch for 5 minutes',
  ],
  Focus: [
    'Meditate for 5 minutes',
    'Write a to-do list',
    'Read 10 pages',
  ],
  Finance: [
    "Track today's expenses",
    'Review budget',
    'Save $5',
  ],
};

export default function QuestScreen({ realm, xp, onCompleteQuest }) {
  const [completed, setCompleted] = useState({});

  const quests = questData[realm] || [];

  const handleComplete = index => {
    if (completed[index]) return;
    setCompleted({ ...completed, [index]: true });
    onCompleteQuest();
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.questItem}>
      <Text style={styles.questText}>{item}</Text>
      <TouchableOpacity
        style={[styles.completeButton, completed[index] && styles.completedButton]}
        onPress={() => handleComplete(index)}
        disabled={completed[index]}
      >
        <Text style={styles.buttonText}>
          {completed[index] ? 'Done' : 'Complete'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{realm} Quests</Text>
      <Text style={styles.xp}>XP: {xp}</Text>
      <FlatList
        data={quests}
        renderItem={renderItem}
        keyExtractor={(item, idx) => idx.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
  },
  xp: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  questItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 8,
  },
  questText: {
    color: '#fff',
    flex: 1,
    marginRight: 10,
  },
  completeButton: {
    backgroundColor: '#444',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  completedButton: {
    backgroundColor: '#666',
  },
  buttonText: {
    color: '#fff',
  },
});
