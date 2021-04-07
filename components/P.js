
import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

//const URI = 'https://parking-123.000webhostapp.com/avail.json';

const getData = async() => {
  try{
    let response = await fetch('https://parking-123.000webhostapp.com/avail2.O.json');
    let json = await response.json();
    return json;
  } catch(error){
    console.error(error);
  }
};


const Item = ({item}) => (
  <View style={styles.item}>
  <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
    <Text style={styles.title}>Address </Text>
    <Text style={styles.title}>Status </Text>
    </View>
    <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
    <Text style={styles.title}>{item.block} </Text>
    <Text style={styles.title}>{item.Status} </Text>
    </View>
  </View>
  );




const P = () => {
  const [items,setItems] = useState([]);
  getData().then(items => setItems(items));
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem = {renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#1c242c',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:20
  },
  title: {
    fontSize: 12,
    color:'white',
    paddingVertical:10
  },
});

export default P;