import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDo from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
        <ToDo initialTasks={["Task1", "Task2", "Walk the dog!"]} />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
