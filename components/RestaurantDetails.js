import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons,MaterialIcons } from '@expo/vector-icons'; // İkonları eklemek için

export default function RestaurantDetails({ route }) {
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.name}>{restaurant.name}</Text>
      {restaurant.is_closed ? (
        <MaterialIcons name="closecircleo" size={24} color="red" />
      ) : (
        <MaterialIcons name="delivery-dining" size={24} color="green" />
      )}
      <View style={styles.phoneContainer}>
      
        <Text style={styles.phone}>{restaurant.phone}   <Ionicons name="call" size={24} color="black" /> {/* Telefon ikonu */}</Text>
      </View>
      <View style={styles.addressContainer}>
        {restaurant.location.display_address.map((addressLine, index) => (
          <Text key={index} style={styles.address}>{addressLine}</Text>
        ))}
      </View>
      <Text style={styles.price}>{restaurant.price}</Text>

      <FlatList 
        data={restaurant.photos} 
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.photo} />
        )}
      />

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sipariş Ver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  phoneContainer: {
    flexDirection: 'row', // İkon ve telefon numarasını yatayda hizalamak için
    alignItems: 'center', // Dikeyde ortalamak için
    marginBottom: 10,
  },
  phone: {
    fontSize: 18,
    marginLeft: 5, // İkon ile telefon numarası arasında boşluk bırakmak için
  },
  addressContainer: {
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  photo: {
    backgroundColor:'red',
    width: 100,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
