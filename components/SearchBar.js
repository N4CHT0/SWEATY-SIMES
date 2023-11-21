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
      <TouchableOpacity>
        <Icon name="search" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 35,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default SearchBar;
