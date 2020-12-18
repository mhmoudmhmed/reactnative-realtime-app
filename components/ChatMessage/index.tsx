import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import {Message} from '../../types';
import styles from './style';

export type ChatMessageProps = {
  message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;
  const isMyMessage = () => {
    return message.user.id === 'u1';
  }
  return (
    <View style={styles.container}>
      <View style={[
        styles.messageBox,
        {
          backgroundColor: isMyMessage() ? '#DCF8C5': '#fff',
          marginLeft: isMyMessage() ? 60 : 0,
          marginRight: isMyMessage() ? 0 : 60,
        }
      ]}
      >

        { !isMyMessage() && ( <Text style={styles.textStyle}>{message.user.name}</Text> ) }
        <Text>{message.content}</Text>
        <Text style={styles.time}> {moment(message.createdAt).fromNow()} </Text>
      </View>
    </View>
  );
};

export default ChatMessage;
