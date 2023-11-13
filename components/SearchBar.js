import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cari"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <TouchableOpacity style={styles.icon} onPress={handleSearch}>
        <Icon name="search" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
    backgroundColor: '#98CA79',
    borderRadius: 50,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default SearchBar;
