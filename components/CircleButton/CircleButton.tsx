import { View, TouchableHighlight, StyleSheet } from "react-native";
import React from "react";


type CircleButtonProps = {
  onPress?: () => void;
  children?: React.ReactNode;
};

const CircleButton: React.FC<CircleButtonProps> = ({
  onPress,
  children,
}) => {
  
  const onPressHandler = async () => {
    if(onPress) {
      onPress();
    }
  };
  
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={onPressHandler}
      >
        <View style={styles.content}>
          {children} 
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#EAECF4",
    borderWidth: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    marginLeft: 4, 
  },
});

export default CircleButton;