import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text style={tw``}>I am the HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})