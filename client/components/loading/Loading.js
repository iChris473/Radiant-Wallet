import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <View style={styles.loading}>
         <ActivityIndicator size="large" color="#6843A1" />
    </View>
  )
}

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    height, 
    width,
    backgroundColor: 'rgba(255,255,255,.8)',
    flex: 1,
    justifyContent: 'center'
  }
})