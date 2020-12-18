import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, FlatList } from 'react-native';
import Users from '../data/Users';
import NewMessageButton from '../components/NewMessageButton/index';
import ContactListItem from '../components/ContactListItem';

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={Users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
