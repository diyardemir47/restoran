import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.backgroundStyle}>
    <AntDesign style={styles.IconStyle} name="search1" size={24} color="black" />
    <TextInput placeholder='Ara' autoCorrect={false } autoCapitalize='none' style={styles.InputStyle}/>
    </View>
  )
}

const styles = StyleSheet.create({

    backgroundStyle:{
backgroundColor:'lightgray',
flexDirection:'row',
margin:10,
height:50,
alignItems:'center',
borderRadius:15,

    },
    IconStyle:{

        marginHorizontal:15,
        fontSize:30,

    },
    InputStyle:{
flex:1,
fontSize:18,
    }
})