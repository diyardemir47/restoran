import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ResultDetails from './ResultDetails';

export default function ResultsList({ title, results }) {
  console.log(results);
  return (
    <View>
      <Text>{title}</Text>
      <FlatList
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

const styles = StyleSheet.create({});
