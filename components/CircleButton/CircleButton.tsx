import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import React from "react";

type CircleButtonProps = {
  onHoverColor: string;
  onPress: () => void;
  children?: React.ReactNode;
};

const CircleButton: React.FC<CircleButtonProps> = ({
  onHoverColor,
  onPress,
  children,
}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={onPress}
        underlayColor={onHoverColor}
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

{/* <CircleButton onHoverColor="red" onPress={() => {}}>
<Ionicons name="star-outline" size={24} color={colors.primary} />
</CircleButton>
<CircleButton onHoverColor="red" onPress={() => {}}>
<Feather name="share" size={24} color={colors.primary} />
</CircleButton> */}
// import Ionicons from "@expo/vector-icons/Ionicons";
// import Feather from "@expo/vector-icons/Feather";
// import colors from "@/constants/Colors";