import React, { useState } from 'react'
import styles from "./SearchBarCom.styles"
import SearchBar from 'react-native-search-bar';
import { View } from 'react-native'


const SearchBarCom = ({ setSearch }) => {
    
  return (
    <View>
        <SearchBar
        placeholder="Search..."
        onChangeText={setSearch}
        onCancel={() => console.log('Arama iptal edildi')}
        onSearchButtonPress={() => console.log('Arama başlatıldı')}
        style={styles.searchBar}
        searchBarStyle=''
        />
    </View>

  )
}

export default SearchBarCom