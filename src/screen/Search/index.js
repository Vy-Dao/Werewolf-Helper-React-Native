import React, {useState} from 'react';
import {View, FlatList, Text, TextInput, Image} from 'react-native';
import styles from './styles';
import searchData from '../../../assets/data/feed';
const SearchRoleScreen = (props) => {
  const [inputText, setInputText] = useState('');
  const rolList = searchData;

  return (
    <View style={styles.container}>
      {/*Search bar*/}
      <TextInput
        style={styles.textInput}
        placeholder="What role do you want to learn?"
        value={inputText}
        onChangeText={setInputText}
      />
      {/*List of role*/}
      <FlatList
        data={rolList}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Image style={styles.smallIcon} source={{uri: item.image}} />
            <Text style={styles.roleText}>{item.role}</Text>
          </View>
        )}
        keyExtractor={(item) => item.role}
      />
    </View>
  );
};
export default SearchRoleScreen;
