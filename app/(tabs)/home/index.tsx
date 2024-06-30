import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const HomePage = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
      <Link href="/home/settings">Push Settings</Link>
    </View>
  )
}

export default HomePage