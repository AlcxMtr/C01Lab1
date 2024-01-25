import 'react-native-get-random-values';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDo = ({ initialTasks }) => {
    const [tasks, setTasks] = useState(initialTasks.map((name) => ({ id: uuidv4(), title: name })));

    const addToDo = (initialNames) => {
      const newTask = { id: uuidv4(), title: initialNames };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const removeToDo = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      };
  
    return (
      <View style={styles.todoListContainer}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.todoItem}>
            <Text> {task.title} </Text>
            <View>
              <Button title="Remove" onPress={() => removeToDo(task.id)} />
            </View>
          </View>
        ))}
        <AddTask onAddTask={addToDo} />
      </View>
    );
  };

  ToDo.defaultProps = {
    initialNames: [],
  };

  const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});
  
export default ToDo;