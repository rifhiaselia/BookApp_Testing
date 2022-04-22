import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" color="#00ff00" />

    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})