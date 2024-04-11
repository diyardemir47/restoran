import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ResultDetails({result}) {
  return (
    <View>
        <Image style={{width:250 ,height:150}} source={ result.Image_url ? {uri:result.image_url}:null}/>
      <Text>{result.name}</Text>
      <Text>{result.rating} Yıldızlı Restorant,{result.review_count} Değerlendirme</Text>
    </View>
  )
}

const styles = StyleSheet.create({})