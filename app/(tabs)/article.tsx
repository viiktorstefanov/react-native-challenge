import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Article = () => {
  return (
    <View style={styles.container}>
      <Text>Article</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})

export default Article;