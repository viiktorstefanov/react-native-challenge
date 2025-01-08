import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

type RegularButtonProps = {
    text: string,
    onPress: () => {},
}

const RegularButton: React.FC<RegularButtonProps> = ({ text, onPress }) => {
  return (
    <View>
      <TouchableHighlight >{text}</TouchableHighlight >
    </View>
  )
}

export default RegularButton;