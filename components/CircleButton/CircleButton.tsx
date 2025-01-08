import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

type CircleButtonProps = {
    text: string,
    onHoverColor: string,
    icon: string
    onPress: () => {},
}


const CircleButton: React.FC<CircleButtonProps> = ({ text, onHoverColor, icon, onPress}) => {
  return (
    <View>
      <TouchableHighlight>{text}</TouchableHighlight>
    </View>
  )
}

export default CircleButton