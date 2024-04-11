import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ResultDetails({ result }) {
  const navigation = useNavigation();
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handlePress = () => {
    setSelectedRestaurant(result);
    navigation.navigate('RestaurantDetails', { restaurant: result });
  };

  return (
    <TouchableOpacity style={styles.resultContainer} onPress={handlePress}>
      <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : null} />
      <Text style={styles.name}>{result.name}</Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={20} color="#FFD700" />
        <Text style={styles.rating}>{result.rating}</Text>
        <Text style={styles.reviewCount}>({result.review_count} Değerlendirme)</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    marginRight: 15,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewCount: {
    marginLeft: 5,
    fontSize: 14,
    color: '#888',
  },
});
