import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const data = [{name: "Kojo Baiden", number: "0283392933", picture:"https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
                {name: "Akos Simtim", number: "0392884040", picture:"https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
                {name: "Ben Akosah" , number: "4094843080", picture:"https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
                {name: "Kuuku Yamson", number: "9842802820", picture:"https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
                {name: "Jerry Minka", number: "8284200299", picture:"https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
                {name: "Flo Dinhhg", number: "8938464637", picture:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
                {name: "Kofi Sijma", number: "7298279229", picture:"https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
                {name: "Akosua Bentum", number:"7238002020", picture:"https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}]
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} keyExtractor={(item, index) =>{return index}} 
      renderItem={({item}) => (
        <View style={styles.details}>
          <Image style={styles.imageCont} source={{uri: item.picture}} />
          <View style={styles.contact}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.NumbText}>{item.number}</Text>
          </View>
          <Feather name="phone" size={24} color="black" />
          <MaterialCommunityIcons name="message-processing-outline" size={24} color="black" />
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      )}>
      </FlatList>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  imageCont: {
    width: 40,
    height: 40,
    backgroundColor: "rgb(12, 80, 123)",
    borderRadius: 20,
  },
  details: {
    flex: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center'
  },
  contact: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  nameText: {
      fontSize: 20
  }
});
