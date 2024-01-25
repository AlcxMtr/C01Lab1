import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
  const [initialName, setInitialName] = useState('');

  const handleAddTask = () => {
    if (initialName.trim() !== '') {
      onAddTask(String(initialName));
      setInitialName('');
    }
  };

  return (
    <View style={styles.addTodoForm}>
      <TextInput
        style={styles.input}
        placeholder="Enter new task name"
        value={initialName}
        onChangeText={(text) => setInitialName(text)}
        returnKeyType="done"
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;