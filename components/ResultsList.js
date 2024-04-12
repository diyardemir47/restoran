import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the restaurant icon
import ResultDetails from './ResultDetails';
export default function ResultsList({ title, results }) {
  console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
        <Ionicons name="restaurant" size={24} color="black" style={styles.icon} /> {/* Add the restaurant icon next to the title */}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          horizontal
          data={results}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                {/* Render the ResultDetails component */}
                <ResultDetails result={item} />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
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
    marginLeft: 90, // Adjusted for rotation
    textAlign: 'center',
    width: 300, // Adjusted for rotation
  },
  icon: {
    marginRight: 10,
    textAlign: 'left', // Separating the restaurant icon from the title
  },
});
