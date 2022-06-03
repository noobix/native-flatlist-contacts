import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Feather, MaterialCommunityIcons, Entypo   } from '@expo/vector-icons'; 
import AddressBook from './AddressBook'
import Login from './Login';

export default function App() {
    return (
    <View style={styles.container}>
      <AddressBook />
      {/* <Login /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
