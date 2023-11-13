import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Category = ({ iconName, title }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name={iconName} size={32} color="#333" />
      </View>
      <Text style={styles.categoryTitle}>{title}</Text>
    </View>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    backgroundColor: '#98CA79',
    borderRadius: 100,
    padding: 16,
  },
  icon: {
    color: 'white',
  },
  categoryTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Category;
