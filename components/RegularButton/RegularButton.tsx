import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import colors from '@/constants/Colors';

type RegularButtonProps = {
  text: string;
  secondaryText: string;
  onPress?: () => void;
};

const RegularButton: React.FC<RegularButtonProps> = ({ text, secondaryText, onPress }) => {

  const [ backgroundColor, setBackgroundColor ] = useState(colors.primary);
  const [ buttenText, setButtonText ] = useState(text);

  const onPressHandler = () => {
    setBackgroundColor(colors.button);
    setButtonText(secondaryText);

    if(onPress) {
      onPress();
    };
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight style={[styles.button, { backgroundColor }]} onPress={onPressHandler} >
        <Text style={styles.text}>{buttenText}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 168,
    height: 48,
    borderRadius: 100,
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  text: {
    color: '#FFFFFF', 
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegularButton;
