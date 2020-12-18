import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const InputBox = () => {

  const [message, setMessage] = useState('');

  const onMicrophonePress = () => {
    console.log('MicroPhone');
  };
  const onSendPress = () => {
    console.log('Sending');
  };

  const onPress = () => {
    if( !message ) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  }
  return (
    <View  style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color={'grey'} />

        <TextInput
          style={styles.textInputStyle}
          multiline
          placeholder="Type a Message"
          value={message}
          onChangeText={setMessage}
        />

        <Entypo name="attachment" size={24} color={'grey'} style={styles.iconStyle} />
        
        {!message && <Fontisto name="camera" size={24} color={'grey'} style={styles.iconStyle} /> }

      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          {!message ? 
          (
            <MaterialCommunityIcons name="microphone" size={28} color={'white'} />
          )
          :
          (
            <MaterialIcons name="send" size={28} color={'white'} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
