import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Restoran ikonu için Ionicons'u içe aktarın
import React from 'react';
import ResultDetails from './ResultDetails';

export default function ResultsList({ title, results }) {
  console.log(results);
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>{title}  <Ionicons name="restaurant" size={24} color="black" style={styles.icon} /> {/* Restoran ikonunu başlığın yanına ekleyin */}</Text>
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      renderItem={({item})=>{
        return (
          <TouchableOpacity>

            <ResultDetails result={item}/>
          </TouchableOpacity>
        )
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 90, // Döndürme nedeniyle yer ayarı
textAlign:'center',
    width: 300, // Döndürme nedeniyle genişlik ayarı
  },
  icon: {
    marginRight: 10,
    textAlign:'left' // Restoran ikonunu başlıktan ayırmak için
  },
});
