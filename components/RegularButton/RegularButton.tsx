import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import React from 'react';
import colors from '@/constants/Colors';

type RegularButtonProps = {
  text: string;
  onPress: () => void;
};

const RegularButton: React.FC<RegularButtonProps> = ({ text, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={onPress} >
        <Text style={styles.text}>{text}</Text>
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
    backgroundColor: colors.primary,
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
